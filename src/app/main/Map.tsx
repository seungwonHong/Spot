"use client";
import React, { useEffect, useRef, useState } from "react";
import { useGeolocation } from "react-use";

declare global {
  interface Window {
    kakao: any;
  }
}

const Map = () => {
  const mapRef = useRef<HTMLDivElement>(null);
  const mapInstance = useRef<any>(null);
  const [isKakaoLoaded, setIsKakaoLoaded] = useState(false);
  const myLocationMarkerRef = useRef<any>(null);
  const directionLineRef = useRef<any>(null);

  const location = useGeolocation();

  useEffect(() => {
    const checkKakaoLoaded = () => {
      if (window.kakao && window.kakao.maps) {
        setIsKakaoLoaded(true);
      } else {
        setTimeout(checkKakaoLoaded, 100);
      }
    };

    checkKakaoLoaded();
  }, []);

  useEffect(() => {
    if (isKakaoLoaded && mapRef.current && !mapInstance.current) {
      let initialCenter;

      if (location.latitude && location.longitude) {
        // GPS 위치가 있으면 GPS 위치 사용
        initialCenter = new window.kakao.maps.LatLng(
          location.latitude,
          location.longitude
        );
        console.log(
          "GPS 위치로 초기화:",
          location.latitude,
          location.longitude
        );
      } else {
        // GPS 위치가 없으면 서울시청으로 기본 설정
        initialCenter = new window.kakao.maps.LatLng(37.5665, 126.978);
        console.log("기본 위치(서울시청)로 초기화");
      }

      const options = {
        center: initialCenter,
        level: 3,
      };

      mapInstance.current = new window.kakao.maps.Map(mapRef.current, options);

      const currentLocationButton = document.createElement("button");
      currentLocationButton.innerHTML = "📍";
      currentLocationButton.style.cssText = `
        position: absolute;
        top: 20px;
        left: 20px;
        width: 50px;
        height: 50px;
        background: white;
        border: 2px solid #ccc;
        border-radius: 50%;
        cursor: pointer;
        font-size: 20px;
        z-index: 1000;
        box-shadow: 0 2px 6px rgba(0,0,0,0.3);
      `;

      // 버튼 클릭 시 현재 위치로 이동
      currentLocationButton.addEventListener("click", () => {
        if (!navigator.geolocation) {
          alert("위치를 파악하지 못했습니다.");
          return;
        }

        navigator.geolocation.getCurrentPosition(
          (pos) => {
            const { latitude, longitude } = pos.coords;
            const kakao = window.kakao;
            const currentLoc = new kakao.maps.LatLng(latitude, longitude);
            mapInstance.current?.panTo(currentLoc);
          },
          (err) => {
            console.error("GPS 에러:", err);
            alert("위치 정보를 가져올 수 없습니다. 권한/환경을 확인해주세요.");
          },
          { enableHighAccuracy: true, timeout: 10000, maximumAge: 5000 }
        );
      });

      mapRef.current.appendChild(currentLocationButton);
    }
  }, [isKakaoLoaded]);

  // 좌표가 비동기로 도착하면 현재 위치로 부드럽게 이동
  useEffect(() => {
    if (!mapInstance.current) return; // 지도 아직 없음
    if (!location.latitude || !location.longitude) return; // 좌표 아직 없음

    const kakao = window.kakao;
    const cur = new kakao.maps.LatLng(location.latitude, location.longitude);
    mapInstance.current.panTo(cur);

    if (!myLocationMarkerRef.current) {
      const markerTracker = document.createElement("div");
      markerTracker.style.cssText = `
          width: 15px;
          height: 15px;
          background-color: #73A7FF;
          border-radius: 50%;
          border: 2px solid rgba(255, 255, 255, 0.7);
          opacity: 1;
          transform: translate(-50%, -50%);
        `;

      myLocationMarkerRef.current = new kakao.maps.CustomOverlay({
        position: cur,
        content: markerTracker,
        xAnchor: 0.5,
        yAnchor: 0.5,
      });
      myLocationMarkerRef.current.setMap(mapInstance.current);
    } else {
      myLocationMarkerRef.current.setPosition(cur);
    }

    if (location.heading !== null && location.heading !== undefined) {
      const headingRad = (location.heading * Math.PI) / 180;
      const size = 10 / 6378137;
      const endLat = cur.getLat() + size * Math.cos(headingRad);
      const endLng =
        cur.getLng() +
        (size * Math.sin(headingRad)) /
          Math.cos((cur.getLat() * Math.PI) / 180);
      const end = new kakao.maps.LatLng(endLat, endLng);

      if (!directionLineRef.current) {
        directionLineRef.current = new kakao.maps.Polyline({
          path: [cur, end],
          strokeWeight: 2,
          strokeColor: "#73A7FF",
          strokeOpacity: 0.7,
          strokeStyle: "solid",
        });
        directionLineRef.current.setMap(mapInstance.current);
      } else {
        directionLineRef.current.setPath([cur, end]);
      }
    } else {
      if (directionLineRef.current) {
        directionLineRef.current.setMap(null);
        directionLineRef.current = null;
      }
    }
  }, [location.latitude, location.longitude, location.heading]);

  return (
    <div className="w-full h-screen relative">
      <div ref={mapRef} className="w-full h-full min-h-[100vh]" />
    </div>
  );
};

export default Map;

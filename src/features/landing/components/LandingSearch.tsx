"use client";
import SearchInput from "@/shared/components/SearchInput";
import "../styles/text.css";
import React, { useEffect, useRef, useState } from "react";
import { FaArrowDown } from "react-icons/fa6";

type Props = {};

const LandingSearch = (props: Props) => {
const ref = useRef<HTMLHeadingElement>(null);
const borderRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  const [borderVisible, setBorderVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect(); // 한 번만 실행 원하면 disconnect
        }
      },
      { threshold: 0.3 } // 30% 이상 보여야 실행
    );
    const borderObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setBorderVisible(true);
          borderObserver.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    if (borderRef.current) borderObserver.observe(borderRef.current);
    return () => {
      observer.disconnect();
      borderObserver.disconnect();
    };
  }, []);

  return (
    <div className="flex flex-col items-center justify-center lg:mt-[24rem] md:mt-[15rem] mt-[10rem]">
      <h1 className="lg:text-[4.8rem] md:text-[3.2rem] text-[2.4rem] font-normal">
        Beyond the map,
      </h1>
      <h1
        ref={ref}
        className={`lg:text-[4.8rem] md:text-[3.2rem] text-[2.4rem] font-normal ${
          visible ? "animated-shimmer" : ""
        }`}
      >
        a new experience
      </h1>
      <h2 className="text-[#808080] lg:text-[2.4rem] md:text-[2rem] text-[1.4rem] font-light lg:mt-[3rem] md:mt-[2.4rem] mt-[1.2rem]">
        Search to begin your journey
      </h2>
      <FaArrowDown
        color="#808080"
        className="lg:w-[2.4rem] lg:h-[2.4rem] md:w-[2rem] md:h-[2rem] w-[1,6rem] h-[1.6rem] lg:mt-[2.4rem] md:mt-[1.8rem] mt-[1.6rem]"
      />
      <div className="lg:mt-[4rem] md:mt-[3rem] mt-[2.4rem] mb-[4rem]">
        <SearchInput borderRef={borderRef} borderVisible={borderVisible} />
      </div>
    </div>
  );
};

export default LandingSearch;

import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";

const roboto = Roboto({
  weight: ["100", "300", "400", "500", "700", "900"],
  subsets: ["latin"],
  variable: "--font-roboto",
});

export const metadata: Metadata = {
  title: "Spot",
  description:
    "Spot은 AI와 자연어로 대화하며 장소를 탐색할 수 있는 대화형 스마트 지도 서비스입니다. 원하는 공간을 질문으로 찾고, 새로운 명소를 발견하며, AI 추천으로 특별한 경험을 즐겨보세요.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const kakaoApiKey = process.env.NEXT_PUBLIC_KAKAO_JS_KEY;

  return (
    <html lang="ko">
      <head>
        {kakaoApiKey && (
          <script
            type="text/javascript"
            src={`//dapi.kakao.com/v2/maps/sdk.js?appkey=${kakaoApiKey}&libraries=services,clusterer`}
          />
        )}
      </head>
      <body className={`${roboto.variable} antialiased`}>{children}</body>
    </html>
  );
}

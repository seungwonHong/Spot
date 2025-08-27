"use client";
import React from "react";
import Image from "next/image";
import { ReactTyped } from "react-typed";

type Props = {};

const InputAnimation = (props: Props) => {
  return (
    <div className="relative flex items-center justify-center 2xl:mb-[13.6rem] md:mb-[12rem] mb-[10rem] w-[264px] h-[42px] md:w-[440px] md:h-[72px]">
      <Image
        src="/images/landingInput.png"
        alt="Input"
        width={441}
        height={72}
        className="w-[264px] h-[42px] md:w-[440px] md:h-[72px]"
      />
      <div className="pointer-events-none absolute left-[28px] md:left-[56px] md:top-[32px] -translate-y-1/2 top-[19px] -translate-y-1/2md:left-[56px] text-[#000] lg:text-[1.6rem] md:text-[1.4rem]">
        <ReactTyped
          strings={[
            "AI 검색으로 시작하기",
            "냉면 맛집 알려줘",
            "홍대 근처 조용한 카페",
            "데이트하기 좋은 곳 추천",
          ]}
          typeSpeed={80}
          backSpeed={40}
          backDelay={1200}
          loop
          smartBackspace
          showCursor
        />
      </div>
    </div>
  );
};

export default InputAnimation;

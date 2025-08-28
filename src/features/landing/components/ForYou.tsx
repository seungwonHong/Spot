import Image from "next/image";
import React from "react";

type Props = {};

const ForYou = (props: Props) => {
  return (
    <div className="flex md:flex-row flex-col items-center justify-center lg:mt-[24rem] md:mt-[15rem] mt-[10rem] lg:gap-[6.4rem] md:gap-[3.5rem] gap-[4.8rem]">
      <Image
        src="/images/ForYou.png"
        alt="ForYou"
        width={342}
        height={762}
        className="md:w-[342px] md:h-[762px] md:flex hidden"
      />
      <div className="flex flex-col md:items-start items-center">
        <h2 className="lg:text-[4rem] md:text-[3.2rem] text-[2rem] font-normal">
          사용자 맞춤형 추천 위젯
        </h2>
        <h3 className="lg:text-[2.4rem] md:text-[1.6rem] text-[1.2rem] font-light text-[#808080]">
          AI 기반으로 사용자의 취향에 맞는 최적의 콘텐츠를 제공합니다
        </h3>
      </div>
      <Image
        src="/images/ForYouPhone.png"
        alt="ForYou"
        width={342}
        height={762}
        className="md:w-[342px] md:h-[762px] md:hidden"
      />
    </div>
  );
};

export default ForYou;

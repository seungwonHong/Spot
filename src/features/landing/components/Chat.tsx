"use client";
import Image from "next/image";
import React from "react";
import { ReactTyped } from "react-typed";

type Props = {};

const Chat = (props: Props) => {
  return (
    <div className="lg:mt-[24rem] md:mt-[15rem] mt-[10rem] flex md:flex-row flex-col items-center justify-center lg:gap-[6.4rem] md:gap-[4.8rem]">
      <div className="flex flex-col md:items-end items-center">
        <ReactTyped
          className="lg:text-[4rem] md:text-[3.2rem] text-[2rem] font-medium"
          strings={['"냉면 맛집 찾아줘"']}
          typeSpeed={100}
          backSpeed={50}
          backDelay={1200}
          loop
          smartBackspace
          showCursor
        />
        <h3 className="lg:text-[2.4rem] md:text-[1.6rem] text-[1.2rem] text-[#808080] font-light">
          완벽하게 통합된 AI, 자연어로 검색하고 위젯에서 만나보세요.
        </h3>
      </div>
      <Image
        src="/images/Chat.png"
        alt="chat"
        width={342}
        height={1000}
        className="md:w-[342px] md:h-[1000px] w-[241px] h-[124px] md:flex hidden"
      />
      <Image
        src="/images/ChatPhone.png"
        alt="chat"
        width={310}
        height={633}
        className="md:hidden mt-[4.8rem]"
      />
    </div>
  );
};

export default Chat;

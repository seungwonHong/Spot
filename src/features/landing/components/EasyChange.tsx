"use client";
import Image from "next/image";
import React, { useState } from "react";
import { motion } from "framer-motion";

type Props = {};

const EasyChange = (props: Props) => {
  const [select, setSelected] = useState("장소");

  return (
    <div className="flex flex-col items-center justify-center lg:mt-[24rem] md:mt-[15rem] mt-[10rem]">
      <h2 className="lg:text-[4rem] md:text-[3.2rem] text-[2rem] font-normal">
        손쉬운 추천 장르 변경
      </h2>

      <div className="flex flex-row items-center justify-center lg:gap-[2.4rem] md:gap-[1.6rem] gap-[1.4rem] lg:mt-[3rem] md:mt-[2.4rem] mt-[1.6rem]">
        <div
          className={`flex flex-row md:px-[2.4rem] md:py-[0.4rem] px-[1.2rem] py-[0.2rem] ${
            select === "맛집" ? "bg-[#60A5FAb3]" : "bg-[#5C5757b3]"
          } lg:text-[2.4rem] md:text-[2rem] text-[1.2rem] rounded-[6.4rem] text-[#fff] cursor-pointer`}
          onClick={() => setSelected("맛집")}
        >
          맛집
        </div>
        <div
          className={`flex flex-row md:px-[2.4rem] md:py-[0.4rem] px-[1.2rem] py-[0.2rem] ${
            select === "장소" ? "bg-[#60A5FAb3]" : "bg-[#5C5757b3]"
          } lg:text-[2.4rem] md:text-[2rem] text-[1.2rem] rounded-[6.4rem] text-[#fff] cursor-pointer`}
          onClick={() => setSelected("장소")}
        >
          장소
        </div>
        <div
          className={`flex flex-row md:px-[2.4rem] md:py-[0.4rem] px-[1.2rem] py-[0.2rem] ${
            select === "활동" ? "bg-[#60A5FAb3]" : "bg-[#5C5757b3]"
          } lg:text-[2.4rem] md:text-[2rem] text-[1.2rem] rounded-[6.4rem] text-[#fff] cursor-pointer`}
          onClick={() => setSelected("활동")}
        >
          활동
        </div>
      </div>

      {select === "맛집" && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-row items-center justify-center lg:mt-[4.5rem] md:mt-[3rem] mt-[2.4rem] md:gap-[1.2rem] gap-[1rem]"
        >
          <Image
            src="/images/Component 129.png"
            alt="lotte tower"
            width={311}
            height={146}
            className="lg:w-[311px] lg:h-[146px] w-[241px] h-[124px] md:flex hidden"
          />
          <Image
            src="/images/Component 130.png"
            alt="palace"
            width={311}
            height={146}
            className="lg:w-[311px] lg:h-[146px] w-[241px] h-[124px]"
          />
          <Image
            src="/images/Component 131.png"
            alt="hanok village"
            width={311}
            height={146}
            className="lg:w-[311px] lg:h-[146px] w-[241px] h-[124px] md:flex hidden"
          />
        </motion.div>
      )}

      {select === "장소" && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-row items-center justify-center lg:mt-[4.5rem] md:mt-[3rem] mt-[2.4rem] md:gap-[1.2rem] gap-[1rem]"
        >
          <Image
            src="/images/Component 126.png"
            alt="lotte tower"
            width={311}
            height={146}
            className="lg:w-[311px] lg:h-[146px] w-[241px] h-[124px] md:flex hidden"
          />
          <Image
            src="/images/Component 127.png"
            alt="palace"
            width={311}
            height={146}
            className="lg:w-[311px] lg:h-[146px] w-[241px] h-[124px]"
          />
          <Image
            src="/images/Component 128.png"
            alt="hanok village"
            width={311}
            height={146}
            className="lg:w-[311px] lg:h-[146px] w-[241px] h-[124px] md:flex hidden"
          />
        </motion.div>
      )}

      {select === "활동" && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-row items-center justify-center lg:mt-[4.5rem] md:mt-[3rem] mt-[2.4rem] md:gap-[1.2rem] gap-[1rem]"
        >
          <Image
            src="/images/Component 132.png"
            alt="lotte tower"
            width={311}
            height={146}
            className="lg:w-[311px] lg:h-[146px] w-[241px] h-[124px] md:flex hidden"
          />
          <Image
            src="/images/Component 133.png"
            alt="palace"
            width={311}
            height={146}
            className="lg:w-[311px] lg:h-[146px] w-[241px] h-[124px]"
          />
          <Image
            src="/images/Component 134.png"
            alt="hanok village"
            width={311}
            height={146}
            className="lg:w-[311px] lg:h-[146px] w-[241px] h-[124px] md:flex hidden"
          />
        </motion.div>
      )}
    </div>
  );
};

export default EasyChange;

"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import "../styles/text.css";

type Props = {};

const ForYou = (props: Props) => {
  const ref = useRef<HTMLHeadingElement>(null);
  const [visible, setVisible] = useState(false);

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
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

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
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
          className="lg:text-[4rem] md:text-[3.2rem] text-[2rem] font-normal"
        >
          사용자 맞춤형 추천 위젯
        </motion.h2>
        <motion.h3
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          viewport={{ once: true }}
          className="lg:text-[2.4rem] md:text-[1.6rem] text-[1.2rem] font-light text-[#808080]"
        >
          <span className={` ${visible ? "animated-shimmer-sub" : ""}`}>AI</span>{" "}
          기반으로 사용자의 취향에 맞는 최적의 콘텐츠를 제공합니다
        </motion.h3>
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

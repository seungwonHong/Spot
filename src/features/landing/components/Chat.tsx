"use client";
import Image from "next/image";
import { ReactTyped } from "react-typed";
import { motion } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";

type Props = {};

const Chat = (props: Props) => {
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
        <motion.h3
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          viewport={{ once: true }}
          className="lg:text-[2.4rem] md:text-[1.6rem] text-[1.2rem] text-[#808080] font-light"
        >
          완벽하게 통합된{" "}
          <span className={`${visible ? "animated-shimmer-sub" : ""}`}>AI</span>,
          자연어로 검색하고 위젯에서 만나보세요.
        </motion.h3>
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

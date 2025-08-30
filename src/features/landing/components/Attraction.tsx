"use client";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";

type Props = {};

const Attraction = (props: Props) => {
  const [active, setActive] = useState(0);
  const [direction, SetDirection] = useState(1);
  const ref = useRef<HTMLHeadingElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const id = setTimeout(() => {
      SetDirection(1);
      setActive((prev) => (prev + 1) % 2);
    }, 5000);
    return () => clearTimeout(id);
  }, [active]);

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
    <div className="flex flex-col items-center justify-center lg:mt-[24rem] md:mt-[15rem] mt-[10rem] ">
      <div className="flex flex-col items-center justify-center">
        <h2
          ref={ref}
          className="lg:text-[4rem] md:text-[3.2rem] text-[2rem] font-normal"
        >
          <span className={`${visible ? "animated-shimmer" : ""}`}>지도</span>로
          만나는 명소
        </h2>
        <h3 className="lg:text-[2.4rem] md:text-[1.6rem] text-[1.2rem] font-light text-[#808080]">
          지도를 통해 정보를 직관적으로 확인하세요.
        </h3>
      </div>

      <div className="flex flex-row items-center justify-center lg:mt-[2.8rem] md:mt-[2.4rem] mt-[2rem]">
        <div
          className="group rounded-full bg-[#F5F1F1] md:w-[3.2rem] md:h-[3.2rem] w-[24px] h-[24px] flex flex-row items-center justify-center lg:mr-[3rem] mr-[1.4rem] cursor-pointer hover:bg-[#D9D9D9] transition-colors duration-300 ease-in-out"
          onClick={() => {
            SetDirection(-1);
            setActive((prev) => (prev + 1) % 2);
          }}
        >
          <IoIosArrowBack className="md:w-[2rem] md:h-[4rem] w-[12px] h-[24px] text-[#A39F9F] group-hover:text-[#6C6A6A] transition-colors duration-300 ease-in-out" />
        </div>

        <div className="flex flex-row items-center justify-center gap-[10px]">
          {[0, 1].map((i) => (
            <div
              key={i}
              className={`relative rounded-full bg-[#F5F1F1] lg:h-[8px] h-[6px] ${
                active === i ? "lg:w-[40px] w-[32px]" : "lg:w-[8px] w-[6px]"
              } transition-[width] duration-500 ease-in-out will-change-[width]`}
            >
              {active === i && (
                <motion.div
                  key={`progress-${i}-${active}`}
                  initial={{ width: 0 }}
                  animate={{ width: "100%" }}
                  transition={{ duration: 5, ease: "linear" }}
                  className="absolute inset-y-0 left-0 bg-black rounded-full"
                />
              )}
            </div>
          ))}
        </div>

        <div
          className="group rounded-full bg-[#F5F1F1] md:w-[3.2rem] md:h-[3.2rem] w-[24px] h-[24px] flex flex-row items-center justify-center lg:ml-[3rem] ml-[1.4rem] cursor-pointer hover:bg-[#D9D9D9] transition-colors duration-300 ease-in-out"
          onClick={() => {
            SetDirection(1);
            setActive((prev) => (prev + 1) % 2);
          }}
        >
          <IoIosArrowForward className="md:w-[2rem] md:h-[4rem]  w-[12px] h-[24px] text-[#A39F9F] group-hover:text-[#6C6A6A] transition-colors duration-300 ease-in-out" />
        </div>
      </div>

      {active === 0 ? (
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            custom={direction}
            initial={{ x: direction === 1 ? 100 : -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: direction === 1 ? -100 : 100, opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="flex flex-col items-center justify-center lg:mt-[6.4rem] md:mt-[4.8rem] mt-[3.6rem] lg:gap-[3.2rem] md:gap-[2.4rem] gap-[1.6rem]"
          >
            <h4 className="lg:text-[2.4rem] md:text-[1.6rem] text-[1.2rem] text-[#808080] font-light">
              간단한 위젯으로 만나보는 장소들
            </h4>
            <Image
              src="/images/Attraction1.png"
              alt="attraction1"
              width={1058}
              height={627}
              className="lg:w-[105.8rem] lg:h-[62.7rem] md:w-[77rem] md:h-[43.6rem] w-[37rem] h-[24.3rem]"
            />
          </motion.div>
        </AnimatePresence>
      ) : (
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            custom={direction}
            initial={{ x: direction === 1 ? 100 : -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: direction === 1 ? -100 : 100, opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="flex flex-row items-center justify-center lg:gap-[2.3rem] md:gap-[1.6rem]"
          >
            <Image
              src="/images/Attraction2.png"
              alt="attraction2"
              width={247}
              height={152}
              className="lg:w-[24.7rem] lg:h-[15.2rem] md:w-[18rem] md:h-[10.6rem] md:flex hidden"
            />
            <div className="flex flex-col md:items-start items-center justify-center lg:mt-[6.4rem] md:mt-[4.8rem] mt-[3.6rem] lg:gap-[3.2rem] md:gap-[2.4rem] gap-[1.6rem]">
              <h4 className="lg:text-[2.4rem] md:text-[1.6rem] text-[1.2rem] text-[#808080] font-light">
                클릭 한 번으로, 깊이 있는 탐색까지
              </h4>
              <Image
                src="/images/Attraction3.png"
                alt="attraction3"
                width={788}
                height={472}
                className="lg:w-[78.8rem] lg:h-[47.2rem] md:w-[57.3rem] md:h-[34.8rem] w-[37rem] h-[24.3rem]"
              />
            </div>
          </motion.div>
        </AnimatePresence>
      )}
    </div>
  );
};

export default Attraction;

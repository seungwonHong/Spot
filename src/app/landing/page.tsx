import React from "react";
import "./styles.css";
import StartButton from "@/features/landing/components/StartButton";
import Link from "next/link";
import { IoIosArrowForward } from "react-icons/io";
import InputAnimation from "@/features/landing/components/InputAnimation";

type Props = {};

const LandingPage = (props: Props) => {
  return (
    <>
      <div className="landing-container justify-between items-center">
        <div className="flex flex-col items-center justify-center 2xl:mt-[28rem] lg:mt-[20rem] md:mt-[20rem] mt-[20rem]">
          <h1 className="lg:text-[6.4rem] md:text-[4.8rem] text-[3.2rem] font-normal">
            The new Era of Map
          </h1>
          <p className="lg:text-[2.4rem] md:text-[2rem] text-[1.4rem] text-[#808080] font-light 2xl:mt-[2rem] lg:mt-[1rem]">
            The map, redefined and empowered by AI.
          </p>

          <div className="flex flex-row lg:gap-[3.2rem] md:gap-[2.8rem] gap-[2.4rem] items-center justify-center lg:mt-[4.8rem] md:mt-[3.6rem] mt-[3.2rem]">
            <Link
              href="#"
              className="flex flex-row items-center lg:text-[1.6rem] md:text-[1.4rem] text-[1.2rem] font-normal"
            >
              Login
              <IoIosArrowForward />
            </Link>
            <StartButton />
          </div>
        </div>

        <InputAnimation />
      </div>

      <div className="2xl:px-[16rem] lg:px-[12rem] md:px-[3.2rem] px-[1.6rem]"></div>
    </>
  );
};

export default LandingPage;

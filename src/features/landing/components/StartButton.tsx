import Link from "next/link";
import React from "react";

type Props = {};

const StartButton = (props: Props) => {
  return (
    <Link
      href="/main"
      className="bg-[#000] text-[#fff] lg:px-[3.6rem] lg:py-[1.4rem] md:px-[3.2rem] md:py-[1.2rem] px-[3rem] py-[1rem] lg:rounded-[1.6rem] rounded-[1.2rem] lg:text-[1.6rem] md:text-[1.4rem] text-[1.2rem] font-normal hover:bg-[#333] transition-colors duration-300 ease-in-out"
    >
      Get Started
    </Link>
  );
};

export default StartButton;

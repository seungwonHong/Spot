import Link from "next/link";
import React from "react";

type Props = {};

const Footer = (props: Props) => {
  return (
    <div className="lg:mt-[18rem] md:mt-[14rem] mt-[8rem] flex flex-col 2xl:px-[16rem] lg:px-[12rem] md:px-[3.2rem] px-[1.6rem]">
      <div className="flex flex-row items-start lg:gap-[10rem] md:gap-[6.8rem] gap-[4.8rem]">
        <div className="flex flex-col">
          <span className="md:text-[1.8rem] text-[1.4rem] font-normal">
            Info
          </span>
          <div className="flex flex-col">
            <Link
              href=""
              className="md:text-[1.8rem] text-[1.4rem] text-[#808080] font-light hover:text-[#000] transition-colors duration-300 ease-in-out"
            >
              Updates
            </Link>
            <Link
              href=""
              className="md:text-[1.8rem] text-[1.4rem] text-[#808080] font-light hover:text-[#000] transition-colors duration-300 ease-in-out"
            >
              Upcomming
            </Link>
            <Link
              href=""
              className="md:text-[1.8rem] text-[1.4rem] text-[#808080] font-light hover:text-[#000] transition-colors duration-300 ease-in-out"
            >
              News
            </Link>
          </div>
        </div>
        <div className="flex flex-col">
          <span className="md:text-[1.8rem] text-[1.4rem] font-normal">
            Resources
          </span>
          <div className="flex flex-col">
            <Link
              href=""
              className="md:text-[1.8rem] text-[1.4rem] text-[#808080] font-light hover:text-[#000] transition-colors duration-300 ease-in-out"
            >
              Q&A
            </Link>
            <Link
              href=""
              className="md:text-[1.8rem] text-[1.4rem] text-[#808080] font-light hover:text-[#000] transition-colors duration-300 ease-in-out"
            >
              Help
            </Link>
          </div>
        </div>
        <div className="flex flex-col">
          <span className="md:text-[1.8rem] text-[1.4rem] font-normal">
            Connect
          </span>
          <div className="flex flex-col">
            <Link
              href=""
              className="md:text-[1.8rem] text-[1.4rem] text-[#808080] font-light hover:text-[#000] transition-colors duration-300 ease-in-out"
            >
              X
            </Link>
            <Link
              href=""
              className="md:text-[1.8rem] text-[1.4rem] text-[#808080] font-light hover:text-[#000] transition-colors duration-300 ease-in-out"
            >
              Instagram
            </Link>
            <Link
              href=""
              className="md:text-[1.8rem] text-[1.4rem] text-[#808080] font-light hover:text-[#000] transition-colors duration-300 ease-in-out"
            >
              LinkedIn
            </Link>
          </div>
        </div>
      </div>

      <div className="bg-[#B0ACAC] h-[1px] lg:mt-[4.6rem] md:mt-[3.6rem] mt-[3rem]"></div>

      <div className="w-full grid md:grid-cols-3 grid-cols-1 items-center md:mt-[2.4rem] mt-[1.8rem] mb-[10rem]">
        <span className="md:flex hidden md:text-[1.8rem] text-[1.4rem] font-extralight">
          Current Status: Building
        </span>
        <div className="flex flex-col items-center justify-center md:text-[1.8rem] text-[1.4rem] font-normal">
          <span>Designed and Built by</span> <span>'Seungwon.Hong'</span>{" "}
        </div>
      </div>
    </div>
  );
};

export default Footer;

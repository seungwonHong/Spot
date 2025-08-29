"use client";
import React, { useEffect, useRef, useState } from "react";
import { IoSearch } from "react-icons/io5";
import "../styles/inputStyles.css";

interface Props {
  borderRef?: React.RefObject<HTMLDivElement | null>;
  borderVisible?: boolean;
}

const SearchInput = ({ borderRef, borderVisible = false }: Props) => {
  return (
    <div ref={borderRef} className="relative inline-block">
      <input
        type="text"
        className={`md:w-[44rem] md:h-[7rem] rounded-[6.4rem] w-[26.4rem] h-[4.2rem] shadow-lg md:pr-[2rem] md:pl-[4.8rem] md:py-[2.6rem] pr-[1.2rem] pl-[3.6rem] py-[1.6rem] md:text-[1.6rem] text-[1rem] ${
          borderVisible ? "animated-border" : ""
        } focus:outline-none`}
      />
      <IoSearch
        className="absolute md:left-[2rem] left-[1.2rem] top-1/2 -translate-y-1/2 md:w-[2.4rem] md:h-[2.4rem] w-[1.8rem] h-[1.8rem]"
        color="#000"
      />
    </div>
  );
};

export default SearchInput;

import React from "react";
import Image from "next/image";

type Props = {};

const Header = (props: Props) => {
  return (
    <header className="flex flex-row items-center gap-[10px] fixed lg:top-[2.4rem] lg:left-[3.8rem] md:top-[1.8rem] md:left-[3.2rem] top-[1.6rem] left-[1.6rem]">
      <Image
        src="/images/Logo.png"
        alt="Input"
        width={18}
        height={22}
        // className="w-[18px] h-[22px]"
      />
      <h1 className="text-[2.4rem] font-medium">Spot</h1>
    </header>
  );
};

export default Header;

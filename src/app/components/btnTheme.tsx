'use client'
import React from "react";
import Image from "next/image";

export default function BtnTheme({theming} : {theming: () => void}) {
  return (
    <button onClick={theming} className=" btn border-none w-12 h-12 md:w-20 md:h-20 rounded-full p-0">
      <div className=' w-12 h-12 md:w-20 md:h-20 flex flex-col justify-center items-center'>
        <img src="/themeImg.svg" className=" w-1/2" alt='Button icon'/>
      </div>
    </button>
  );
}

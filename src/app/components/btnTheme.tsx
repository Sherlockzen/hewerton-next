import React from 'react'
import Image from 'next/image';

export default function BtnTheme() {
  return (
    <div className=" bg-[#171F26] w-20 h-20 flex flex-col justify-center items-center rounded-full">
      <Image src="/themeImg.svg" alt='icon button' width={40} height={40}/>
    </div>
  );
}

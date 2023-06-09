'use client'
import React, { useState } from 'react'
import PortifolioContent from "@/app/components/portifolioContent";
import HabilidadesContent from "@/app/components/habilidadesContent";

export default function TabsBtn() {
  const [active, setActive] = useState(true)  
  console.log(active);
  
  return (
  <>
    <div className=" join w-full md:max-w-3xl bg-slate-300">
      <button
        onClick={() => setActive(true)}
        className={` btn  ${+ active ? 'btn-active' : ''} join-item normal-case w-1/2 `}
      >
        Portfolio
      </button>
      <button
        onClick={() => setActive(false)}
        className={` btn  ${+ !active ? 'btn-active' : ''} join-item normal-case w-1/2 `}
      >
        Habilidades
      </button>
    </div>
    <div>
      {
        active && <PortifolioContent/>
      }
      {
        !active && <HabilidadesContent/>
      }
    </div>
  </>
  );
}

'use client'
import React, { useState } from 'react'

export default function TabsBtn() {
  const [active, setActive] = useState(true)  
  console.log(active);
  
  return (
    <div className=" join w-full">
      <button
        onClick={() => setActive(true)}
        className={` btn btn-neutral ${+ active ? 'btn-active' : ''} join-item normal-case w-1/2 `}
      >
        Portfolio
      </button>
      <button
        onClick={() => setActive(false)}
        className={` btn btn-neutral ${+ !active ? 'btn-active' : ''} join-item normal-case w-1/2 `}
      >
        Habilidades
      </button>
    </div>
  );
}

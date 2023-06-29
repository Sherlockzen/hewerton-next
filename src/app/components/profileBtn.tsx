import React from "react";

export default function ProfileBtn() {
  return (
    <div className=" flex gap-3">
      <a
        href="/HewertonResume.pdf"
        download
        className=" btn btn-primary w-40 md:w-72 normal-case"
      >
        <div className=" flex items-baseline gap-2">
          Currículo
          <img className="" src="/downloadImg.svg" />
        </div>
      </a>
      <button className=" btn btn-outline w-40 md:w-72 normal-case">
        Contate-me
      </button>
    </div>
  );
}

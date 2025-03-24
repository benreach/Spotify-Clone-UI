import React from "react";
import MusicBox from "./rightSide/MusicBox";
import SignleCredit from "./rightSide/SignleCredit";
import Credits from "./rightSide/Credits";
import { Link } from "react-router";
import Card from "./rightSide/Card";
import AboutArtist from "./rightSide/AboutArtist";

function RightSidebar() {
  return (
    <div className="flex flex-col w-[28%] bg-blackColor rounded-lg h-[calc(100vh-128px)] overflow-y-auto">
      <div className="flex items-center justify-between gap-4 sticky top-0 bg-blackColor px-4 py-5 z-20 ">
        <h1 className="font-bold text-sm">Liked Songs</h1>
        <div className="flex gap-4">
          <img src="/three-dots.svg" alt="" width={20} />
          <img src="/close.svg" alt="" width={20} />
        </div>
      </div>
      <div className="flex flex-col px-4 gap-4">
        <div className="w-full m-auto pb-4">
          <MusicBox />
        </div>
        <div className="pb-4 bg-lightBlack rounded-b-lg">
          <AboutArtist />
        </div>
        <div className="bg-lightBlack rounded-lg">
          <div className="flex flex-col gap-4 px-4 py-4">
            <div className="flex items-center justify-between">
              <span className="font-bold text-[1rem] text-white">Credits</span>
              <Link className=" text-white hover:underline">Show all</Link>
            </div>
            <Credits />
          </div>
        </div>
        <div className="">
          <Card />
        </div>
      </div>
    </div>
  );
}

export default RightSidebar;

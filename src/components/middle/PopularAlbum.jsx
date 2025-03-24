import React from "react";
import { Link } from "react-router";

function PopularAlbum({ title, artist }) {
  return (
    <div className="flex flex-col px-8 gap-3 relative">
      <div className="flex gap-1 items-center">
        <div className={`${title ? "" : "hidden"}`}>
          <svg
            data-encore-id="icon"
            role="img"
            aria-hidden="true"
            class="e-9640-icon"
            viewBox="0 0 16 16"
            fill="white"
            width={15}
          >
            <path d="M8 1.5a6.5 6.5 0 1 0 0 13 6.5 6.5 0 0 0 0-13zM0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8z"></path>
            <path d="M8 6.5a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zM5 8a3 3 0 1 1 6 0 3 3 0 0 1-6 0z"></path>
          </svg>
        </div>
        <span>{title ? title : ""}</span>
      </div>
      <img
        src="/profile.svg"
        alt=""
        className="object-cover w-[400px] h-[500px] rounded-lg"
      />
      <div
        className={`flex items-center gap-2 absolute ${
          title ? "top-12 left-12" : "top-8 left-12"
        }`}
      >
        <img src="/spotify.svg" alt="" width={50} className="cursor-pointer" />
        <div className="flex flex-col">
          <h2 className="font-bold text-2xl hover:underline cursor-pointer">
            Soulmate
          </h2>
          <p>
            <Link>Album</Link>∙
            <span>
              <Link className="hover:underline">Olica</Link>
            </span>
          </p>
        </div>
      </div>

      <div className=" w-[70%] absolute bottom-6 left-16 ">
        <p className="pb-20 text-sm">This is {artist}. The essential tracks, all in one playlist.</p>
        <div className="flex justify-between items-center">
          <button className="flex items-center justify-center gap-1 rounded-full px-2 bg-lightBlack bg-opacity-90">
            <img src="/mute.svg" alt="" width={28}/>
            <span>Preview</span>
          </button>
          <div className="flex gap-4">
            <img src="/three-dots.svg" alt="" width={24}/>
            <svg
                data-encore-id="icon"
                role="img"
                aria-hidden="true"
                class="e-9640-icon gPxvvwdrTY6FbTx3mvl1"
                viewBox="0 0 16 16"
                fill="white"
                width={12}
              >
                <path d="M15.25 8a.75.75 0 0 1-.75.75H8.75v5.75a.75.75 0 0 1-1.5 0V8.75H1.5a.75.75 0 0 1 0-1.5h5.75V1.5a.75.75 0 0 1 1.5 0v5.75h5.75a.75.75 0 0 1 .75.75z"></path>
              </svg>
              <div className="bg-lightGray rounded-full p-2">
              <img src="/play.svg" alt="play" width={24} className=""/>
              </div>
            <img src="/stop.svg" alt="" width={24} className="hidden"/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PopularAlbum;

import React from "react";
import Collections from "../components/leftSide/Collections";

function CollectionPage() {
  return (
    <div className="">
      <div className="flex gap-2 items-center h-[60px] px-4 sticky top-0 z-20 bg-gradient-to-b from-lightBlack to-blackColor">
        <div className="bg-greenColor rounded-full px-2 py-2">
          <svg
            data-encore-id="icon"
            role="img"
            aria-hidden="true"
            viewBox="0 0 24 24"
            fill="black"
            width={24}
          >
            <path d="m7.05 3.606 13.49 7.788a.7.7 0 0 1 0 1.212L7.05 20.394A.7.7 0 0 1 6 19.788V4.212a.7.7 0 0 1 1.05-.606z"></path>
          </svg>
        </div>
        <h1 className="font-bold text-2xl text-white">Liked Songs</h1>
      </div>
      <div className="flex items-end gap-4 px-4 py-4 z-0 bg-gradient-to-b from-blue-300 to-lightBlack">
        <div className="relative">
          <img
            src="/profile.svg"
            alt=""
            width={300}
            className="object-cover rounded-lg"
          />
          <img
            src="/spotify.svg"
            alt=""
            width={24}
            className="absolute top-4 left-4"
          />
          <span className="absolute bottom-8 left-8 text-[1rem] w-[100px]">
            Discover Weekly
          </span>
        </div>
        <div className="flex flex-col gap-4">
          <span>Playlist</span>
          <h1 className="font-bold text-6xl">Liked Songs</h1>
          <span className="hidden">
            Your weekly mixtape of fresh music. Enjoy new music and deep cuts
            picked for you. Updates every Monday.
          </span>
          <div className="flex items-center gap-1">
            <img src="/spotify.svg" alt="" width={24} />
            <span>Spotify</span>
            <span>30 songs</span>
            <span>,about 2hr</span>
          </div>
        </div>
      </div>
      <div className="px-2">
        <div className="flex flex-col gap-4 pb-8">
          <div className="flex items-center justify-between px-4 pt-8">
            <div className="flex items-center gap-8">
              <div className="bg-greenColor rounded-full px-2 py-2">
                <svg
                  data-encore-id="icon"
                  role="img"
                  aria-hidden="true"
                  viewBox="0 0 24 24"
                  fill="black"
                  width={32}
                >
                  <path d="m7.05 3.606 13.49 7.788a.7.7 0 0 1 0 1.212L7.05 20.394A.7.7 0 0 1 6 19.788V4.212a.7.7 0 0 1 1.05-.606z"></path>
                </svg>
              </div>
              <div className="">
                <svg
                  data-encore-id="icon"
                  role="img"
                  aria-hidden="true"
                  viewBox="0 0 24 24"
                  width={24}
                  fill="white"
                >
                  <path d="M11.999 3a9 9 0 1 0 0 18 9 9 0 0 0 0-18zm-11 9c0-6.075 4.925-11 11-11s11 4.925 11 11-4.925 11-11 11-11-4.925-11-11z"></path>
                  <path d="M17.999 12a1 1 0 0 1-1 1h-4v4a1 1 0 1 1-2 0v-4h-4a1 1 0 1 1 0-2h4V7a1 1 0 1 1 2 0v4h4a1 1 0 0 1 1 1z"></path>
                </svg>
              </div>
              <img src="/three-dots.svg" alt="" width={24} />
            </div>
            <div className="flex items-center gap-2">
              <span>List</span>
              <div>
                <svg
                  data-encore-id="icon"
                  role="img"
                  aria-hidden="true"
                  viewBox="0 0 16 16"
                  fill="white "
                  width={20}
                >
                  <path d="M15 14.5H5V13h10v1.5zm0-5.75H5v-1.5h10v1.5zM15 3H5V1.5h10V3zM3 3H1V1.5h2V3zm0 11.5H1V13h2v1.5zm0-5.75H1v-1.5h2v1.5z"></path>
                </svg>
              </div>
            </div>
          </div>
          <div className="flex justify-between items-center px-4 border-b-[2px] border-b-lightBlack pb-1">
            <div className="flex-1 flex gap-2 items-center">
              <span>#</span>
              <span>Title</span>
            </div>
            <span className="flex-1">Album</span>
            <span className="flex-1 ">Date added</span>
            <div className="flex-1 flex justify-end">
              <svg
                data-encore-id="icon"
                role="img"
                aria-hidden="true"
                viewBox="0 0 16 16"
                fill="white"
                width={15}
              >
                <path d="M8 1.5a6.5 6.5 0 1 0 0 13 6.5 6.5 0 0 0 0-13zM0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8z"></path>
                <path d="M8 3.25a.75.75 0 0 1 .75.75v3.25H11a.75.75 0 0 1 0 1.5H7.25V4A.75.75 0 0 1 8 3.25z"></path>
              </svg>
            </div>
          </div>
        </div>
        <Collections />
      </div>
    </div>
  );
}

export default CollectionPage;

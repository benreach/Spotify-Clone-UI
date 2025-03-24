import React from "react";
import { Link } from "react-router";

function TopLeftSidebarMenu() {
  return (
    <div className="sticky top-0 bg-blackColor">
      {/* HEADER */}
      <div className="flex justify-between items-center pl-3 pr-4 py-2">
        <div className="flex items-center gap-4">
          <div>
            <svg
              data-encore-id="icon"
              role="img"
              aria-hidden="true"
              className="cursor-pointer"
              viewBox="0 0 24 24"
              fill="white"
              height={24}
            >
              <path d="M14.5 2.134a1 1 0 0 1 1 0l6 3.464a1 1 0 0 1 .5.866V21a1 1 0 0 1-1 1h-6a1 1 0 0 1-1-1V3a1 1 0 0 1 .5-.866zM16 4.732V20h4V7.041l-4-2.309zM3 22a1 1 0 0 1-1-1V3a1 1 0 0 1 2 0v18a1 1 0 0 1-1 1zm6 0a1 1 0 0 1-1-1V3a1 1 0 0 1 2 0v18a1 1 0 0 1-1 1z"></path>
            </svg>
          </div>
          <h1 className="text-[.9rem]  font-bold">Your Library</h1>
        </div>
        <div className="flex gap-4 items-center">
          <div className="flex gap-2 items-center bg-lightBlack px-3 py-2 rounded-full cursor-pointer">
            <div>
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
            </div>
            <span className="text-[0.7rem] font-bold">Create</span>
          </div>
          <div>
            <svg
              data-encore-id="icon"
              role="img"
              aria-hidden="true"
              className="cursor-pointer"
              viewBox="0 0 16 16"
              fill="white"
              width={15}
            >
              <path d="M7.19 1A.749.749 0 0 1 8.47.47L16 7.99l-7.53 7.521a.75.75 0 0 1-1.234-.815.75.75 0 0 1 .174-.243l5.72-5.714H.75a.75.75 0 1 1 0-1.498h12.38L7.41 1.529a.749.749 0 0 1-.22-.53z"></path>
            </svg>
          </div>
          <div className="hidden">
            <svg
              data-encore-id="icon"
              role="img"
              aria-hidden="true"
              className="cursor-pointer"
              viewBox="0 0 16 16"
              width={15}
              fill="white"
            >
              <path d="M8.81 1A.749.749 0 0 0 7.53.47L0 7.99l7.53 7.521a.75.75 0 0 0 1.234-.815.75.75 0 0 0-.174-.243L2.87 8.74h12.38a.75.75 0 1 0 0-1.498H2.87l5.72-5.713c.14-.14.22-.331.22-.53z"></path>
            </svg>
          </div>
        </div>
      </div>
      {/* PLAYLISTS */}
      <div className="flex justify-between items-center gap-4 pl-3 pr-4 pt-2">
        <div className="flex items-center gap-4">
          <Link className="rounded-full py-2 px-3 bg-lightBlack  text-[0.7rem] font-semibold ">
            Playlists
          </Link>
          <Link className="rounded-full py-2 px-3 bg-lightBlack  text-[0.7rem] font-semibold">
            Artists
          </Link>
          <Link className="rounded-full py-2 px-3 bg-lightBlack  text-[0.7rem] font-semibold">
            Albums
          </Link>
        </div>
        <div className="flex items-center gap-4">
          <img src="/search.svg" alt="" width={24} className="cursor-pointer" />
          <div className="flex items-center gap-2 cursor-pointer">
            <span className="text-[.7rem] font-light">Recents</span>
            <div>
              <svg
                data-encore-id="icon"
                role="img"
                aria-hidden="true"
                class="e-9640-icon e-9640-icon--auto-mirror"
                viewBox="0 0 16 16"
                fill="white"
                width={15}
              >
                <path d="M15 14.5H5V13h10v1.5zm0-5.75H5v-1.5h10v1.5zM15 3H5V1.5h10V3zM3 3H1V1.5h2V3zm0 11.5H1V13h2v1.5zm0-5.75H1v-1.5h2v1.5z"></path>
              </svg>
            </div>
          </div>
        </div>
      </div>
      {/* TITLE */}
      <div className="flex justify-between items-center text-[0.6rem] pl-3 pr-4 font-semibold pt-4 pb-1 border-b-[1px] border-lightBlack">
        <span className="flex-1">Title</span>
        <div className="flex-1 flex items-center justify-between gap-4">
          <span className="ml-2">Date Added</span>
          <span>Played</span>
        </div>
      </div>
    </div>
  );
}

export default TopLeftSidebarMenu;

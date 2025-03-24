import React, { useState } from "react";

function MusicBox() {
  const [moreArtists, setMoreArtists] = useState(true);
  return (
    <div className="w-full m-auto flex flex-col gap-4">
      <img
        src="/profile.svg"
        alt=""
        height={400}
        className="object-contain w-full rounded-lg m-auto"
      />
      <div className="flex items-center justify-between">
        <div className="flex flex-col leading-[15px]">
          <span className="text-xl font-bold text-white">Song title</span>
          <div className="flex font-semibold">
            <span>Artist name, </span>
            <span className={`${moreArtists ? "" : "hidden"}`}>
              Artist name
            </span>
          </div>
        </div>
        <div className="flex gap-4">
          <div>
            <svg
              data-encore-id="icon"
              role="img"
              aria-hidden="true"
              viewBox="0 0 16 16"
              fill="white"
              height={16}
            >
              <path d="M1 5.75A.75.75 0 0 1 1.75 5H4v1.5H2.5v8h11v-8H12V5h2.25a.75.75 0 0 1 .75.75v9.5a.75.75 0 0 1-.75.75H1.75a.75.75 0 0 1-.75-.75v-9.5z"></path>
              <path d="M8 9.576a.75.75 0 0 0 .75-.75V2.903l1.454 1.454a.75.75 0 0 0 1.06-1.06L8 .03 4.735 3.296a.75.75 0 0 0 1.06 1.061L7.25 2.903v5.923c0 .414.336.75.75.75z"></path>
            </svg>
          </div>
          <div className="ring-white ring-2 rounded-full">
            <svg
              data-encore-id="icon"
              role="img"
              aria-hidden="true"
              class="e-9640-icon gPxvvwdrTY6FbTx3mvl1"
              viewBox="0 0 16 16"
              fill="white"
              width={15}
            >
              <path d="M15.25 8a.75.75 0 0 1-.75.75H8.75v5.75a.75.75 0 0 1-1.5 0V8.75H1.5a.75.75 0 0 1 0-1.5h5.75V1.5a.75.75 0 0 1 1.5 0v5.75h5.75a.75.75 0 0 1 .75.75z"></path>
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MusicBox;

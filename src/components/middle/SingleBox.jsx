import React, { useState } from "react";
import { Link } from "react-router";

function SingleBox({ songTitle, artistName, categery, playlistTitle }) {
  return (
    <Link className="flex items-center bg-lightBlack bg-opacity-70 rounded-r-sm gap-2 hover:bg-gradient-to-r from-grayColor to-lightBlack cursor-pointer">
      <img
        src={`/${categery === "artist" ? "profile.svg" : "spotify-logo.svg"}`}
        alt=""
        width={40}
        className="rounded-l-md"
      />
      <span className="font-bold">{`${
        categery === "artist"
          ? artistName
          : categery === "playlist"
          ? playlistTitle
          : songTitle
      }`}</span>
    </Link>
  );
}

export default SingleBox;

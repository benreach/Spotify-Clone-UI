import React, { useState } from "react";
import { Link } from "react-router";

function SingleBox({ songTitle, artistName, categery, playlistTitle}) {
  return (
    <Link to={`${categery === 'artist'? "/artist/:id": categery === 'playlist'? "/playlist/:id":"/album/:id"}`} className="flex items-center bg-lightBlack bg-opacity-70 gap-2 hover:bg-gradient-to-r from-grayColor to-lightBlack cursor-pointer rounded-r-md">
      <img
        src={`/${categery === "artist" ? "profile.svg" : "profile.svg"}`}
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

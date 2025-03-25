import React, { useState } from "react";
import { Link } from "react-router";

function SingleCollection({ category, title }) {
  const [numberOfSong, setNumberOfSong] = useState(28);
  const [categoryTitle, setCategoryTitle] = useState("artist");
  const [profileImg, setProfileImg] = useState("artist");

  return (
    <Link to="/" className="h-[48px] flex items-center justify-between cursor-pointer py-8 hover:bg-lightBlack rounded-md">
      <div className="flex items-center gap-3 pl-3">
        <img
          src={`/${
            categoryTitle === "artist" ? "profile.svg" : "spotify-logo.svg"
          }`}
          alt=""
          width={48}
          className={`${category === 'artist'? "rounded-full":"rounded-lg"}`}
        />
        <div className="flex flex-col ">
          <span className="text-[0.8rem] capitalize">{category}</span>
          <span className="capitalize">{`${
            categoryTitle === "playlist" ? "Playlist" : category
          }∙${numberOfSong} ${numberOfSong > 1 ? "songs" : "song"}`}</span>
        </div>
      </div>
      <p className="pl-3">4 weeks ago</p>
      <p className="pr-3">1 hours ago</p>
    </Link>
  );
}

export default SingleCollection;

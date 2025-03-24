import React from "react";
import { Link } from "react-router";

function SingleCard({ category }) {

  return (
    <Link to="/album/12" className="min-w-[160px] cursor-pointer hover:bg-lightBlack rounded-lg p-2">
      <div>
      <div className="w-full relative">
        <img src="/profile.svg" alt="" width={160} className="z-0 rounded-lg"/>
        <img src="/spotify.svg" alt="" width={15} className="absolute top-2 left-2 z-1"/>
        <span className="text-[0.9rem] font-bold absolute bottom-2 left-6 w-1/4">Discover Weekly</span>
      </div>
      <p className="py-1">Your weekly mixtape of fresh music.Enjoy!</p>
      </div>
    </Link>
  );
}

export default SingleCard;

import React from "react";
import { Link } from "react-router";

function AboutArtist() {
  return (
    <Link to={"/artist/:id"} className="">
      <div className="flex flex-col gap-4">
        <div className="relative">
          <img
            src="/profile.svg"
            alt=""
            className="w-full object-cover rounded-t-lg"
          />
          <span className="absolute top-4 left-4">About the artist</span>
        </div>
        <div className="px-4 flex flex-col gap-4">
          <div className="flex flex-col gap-4">
            <span className="font-bold text-[1rem]">J.Tajor</span>
            <div className="flex justify-between items-center">
              <span>1,506,096 monthly listeners</span>
              <button className="ring-1 ring-grayColor text-white text-[0.8rem] px-3 py-1  rounded-full">
                Follow
              </button>
            </div>
          </div>
          <p className="">
            Melbourne Filipino R&B artist J Tajor is no stranger to the music
            scene. Launching his debut single in 2020, he has since earned fans
            across the globe from his catchy melody’s and relatable stories
            about love. In early 2024 his hit single “Like I Do” reached #1
            across South East Asia, and ranked as TikTok’s #1 viral dance trend
            in Taiwan, Hong Kong, Philippines & Vietnam.
          </p>
        </div>
      </div>
    </Link>
  );
}

export default AboutArtist;

import React, { useEffect, useRef } from "react";
import SingleBox from "../components/middle/SingleBox";
import Cards from "../components/middle/Cards";
import PopularAlbum from "../components/middle/PopularAlbum";

function Homepage() {

  const topRef = useRef(0);

  const handleClick = () => {
    if(topRef.current){
      topRef.current.scrollTop = 0;
    }
    alert("clicked")
  }


  return (
    <div className="flex flex-col" >
      <div className="flex items-center gap-4 sticky top-0 z-1 px-8 py-3 bg-violet-800 z-20 " onDoubleClick={handleClick}>
        <span className="rounded-full py-2 px-4 text-[0.7rem] font-semibold  bg-white text-black cursor-pointer">
          All
        </span>
        <span className="rounded-full py-2 px-4 text-[0.7rem] font-semibold bg-lightBlack cursor-pointer">
          Music
        </span>
        <span className="rounded-full py-2 px-4 text-[0.7rem] font-semibold bg-lightBlack cursor-pointer">
          Podcasts
        </span>
      </div>
      <div className="bg-gradient-to-b from-violet-800 hover:to-lightBlack">
        <div className="flex flex-col gap-4 px-8 py-4 ">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
            <SingleBox
              categery={"artist"}
              songTitle={"For You"}
              artistName={"REACH"}
            />
            <SingleBox
              categery={"playlist"}
              songTitle={"For You"}
              playlistTitle={"Liked songs"}
            />
            <SingleBox
              categery={"artist"}
              songTitle={"For You"}
              artistName={"REACH"}
            />
            <SingleBox
              categery={"playlist"}
              songTitle={"For You"}
              playlistTitle={"Test your love"}
            />
            <SingleBox
              categery={"artist"}
              songTitle={"For You"}
              artistName={"REACH"}
            />
            <SingleBox
              categery={"album"}
              songTitle={"For You"}
              
            />
          </div>
        </div>
      </div>
      <div className="overflow-x-scroll">
        <Cards title={"Made for you"} />
        <Cards title={"Jump back in"} />
        <Cards title={"Made for you"} />
        <Cards title={"Made for you"} />
        <Cards title={"Made for you"} />
        <Cards title={"Made for you"} />
        <Cards title={"Made for you"} />
        <Cards title={"Made for you"} />
        <Cards title={"Made for you"} />
        <Cards title={"Made for you"} />
        <Cards title={"Made for you"} />
        <Cards title={"Made for you"} />
        <Cards title={"Made for you"} />
        <Cards title={"Made for you"} />
        <Cards title={"Made for you"} />
        <Cards title={"Made for you"} />
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 m-aut0">
        <PopularAlbum title={"Popular album"}/>
        <PopularAlbum title={"For fans of Sinn Sisamuth"}/>
        <PopularAlbum title={"Popular album"}/>
        <PopularAlbum title={"For fans of Sinn Sisamuth"}/>
        <PopularAlbum title={"Popular album"}/>
        <PopularAlbum />
        <PopularAlbum title={"Popular album"}/>
        <PopularAlbum title={"For fans of Sinn Sisamuth"}/>
        <PopularAlbum title={"Popular album"}/>
        <PopularAlbum />
      </div>
    </div>
  );
}

export default Homepage;

import React from "react";
import Popular from "../components/middle/Popular";
import { Link } from "react-router";
import Cards from "../components/middle/Cards";
import CardForArtistPage from "../components/middle/CardForArtistPage";
import ArtistCards from "../components/middle/ArtistCards";

function ArtistPage() {
  return (
    <div className="w-full flex flex-col gap-4">
      <div>
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
          <h1 className="font-bold text-2xl text-white">REACH</h1>
        </div>
        <div className="h-full w-full relative bg-gradient-to-b from-lightBlack to-blackColor bg-opacity-35">
          <img
            src="/cover.png"
            alt=""
            className="w-full h-[300px] object-cover opacity-30"
          />
          <div className="flex flex-col gap-4 absolute bottom-4 left-4">
            <div className="flex items-center gap-2">
              <img src="/verify.svg" alt="" width={20} />
              <span className="text-lg">Verified Artist</span>
            </div>
            <h1 className="text-6xl font-bold">REACH</h1>
            <span>1,000,000 monthly listeners</span>
          </div>
        </div>
        <div className="px-4 py-8 flex flex-col gap-4 ">
          <div className="flex items-center gap-6">
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
            <button className="px-4 py-1 rounded-full ring-1 ring-grayColor hover:ring-white">Follow</button>
            <img src="/three-dots.svg" alt="" width={24} />
          </div>
          <h1 className="font-bold text-2xl">Popular</h1>
          <Popular />
          <Popular />
          <Popular />
          <Popular />
          <Popular />
          <Popular />
          <Popular />
          <Popular />
          <Link className="font-bold px-2 hover:underline ">See more</Link>
        </div>
      </div>
      <div className="px-4 flex flex-col gap-4">
        <div className="flex flex-col gap-4 px-2">
          <div className="flex justify-between items-center">
            <h1 className="font-bold text-2xl">Discography</h1>
            <Link className="hover:underline font-semibold">Show all</Link>
          </div>
          <div className="flex items-center gap-2">
            <button className=" hover:ring-white py-2 px-4 rounded-full bg-lightBlack">Popular releases</button>
            <button className=" hover:ring-white py-2 px-4 rounded-full bg-lightBlack">Singles and EPs</button>
          </div>
        </div>
        <CardForArtistPage />
      </div>
      <div className="px-6 mt-12">
        <h1 className="font-bold text-2xl px-2">Featuring REACH</h1>
        <CardForArtistPage />
      </div>
      <div className="px-6 mt-12 flex flex-col gap-4">
        <h1 className="font-bold text-2xl px-2">Fans also like</h1>
        <ArtistCards />
      </div>
      <div className="px-6 mt-12">
        <h1 className="font-bold text-2xl px-2">Discovered on</h1>
        <CardForArtistPage />
      </div>
      <Link to="/artist/about" className="px-6 mt-12">
        <h1 className="font-bold text-2xl px-2">About</h1>
        <div className="relative bg-gradient-to-b from-grayColor to-blackColor">
          <img src="/cover.png" alt="" className="opacity-80"/>
          <span className="absolute bottom-8 left-8 text-sm">73737339 monthly listeners</span>
        </div>
      </Link>
    </div>
  );
}

export default ArtistPage;

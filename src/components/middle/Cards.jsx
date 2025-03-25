import React from "react";
import SingleCard from "./SingleCard";

function Cards({ title }) {
  
  return (
    <div className="mt-4 flex flex-col gap-4 pl-6 pt-4">
      <div className="flex justify-between items-center px-2">
        <h1 className="text-xl font-bold sticky top-0">{title}</h1>
        <button className="font-bold hover:underline">Show all</button>
      </div>
      <div className="min-w-screen flex gap-4 overflow-x-hidden relative ">
        <SingleCard />
        <SingleCard />
        <SingleCard />
        <SingleCard />
        <SingleCard />
        <SingleCard />
        <SingleCard />
        <SingleCard />
        <SingleCard />
        <SingleCard />
        <SingleCard />
        <SingleCard />
        <SingleCard />
        <SingleCard />
        <SingleCard />
        <SingleCard />
        <SingleCard />
        <SingleCard />
        <SingleCard />
        <SingleCard />
        <SingleCard />
        <SingleCard />
        <SingleCard />
        <SingleCard />
        <SingleCard />
        <SingleCard />
        <SingleCard />
        <SingleCard />
        <SingleCard />
        <SingleCard />
        <SingleCard />
        <SingleCard />
        <SingleCard />
        <SingleCard />
        <SingleCard />
        <SingleCard />
        <SingleCard />
        <SingleCard />
        <SingleCard />
        <SingleCard />
        <SingleCard />
        <SingleCard />
        <SingleCard />
        <SingleCard />
        <SingleCard />
        <SingleCard />
        <SingleCard />
        <SingleCard />
        <SingleCard />
        <SingleCard />
        <SingleCard />
        <SingleCard />
        <SingleCard />
        <SingleCard />
        <SingleCard />
        <SingleCard />
        <SingleCard />
        <SingleCard />
        <SingleCard />
        <SingleCard />
        <SingleCard />
        <SingleCard />
        <SingleCard />
        <SingleCard />
        <SingleCard />
        <SingleCard />
        <SingleCard />
        <SingleCard />
        <SingleCard />
        <img src="/left.svg" alt="" width={30} className="hidden absolute top-[40%] left-0 bg-lightGray rounded-full"/>
        <img src="/right.svg" alt="" width={30} className="absolute top-[40%] right-0 transform -translate-x-1/2 bg-lightGray rounded-full"/>
      </div>
    </div>
  );
}

export default Cards;

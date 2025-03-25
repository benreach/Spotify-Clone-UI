import React from "react";
import { Link } from "react-router";
import TopLeftSidebarMenu from "./TopLeftSidebarMenu";
import Collections from "./leftSide/Collections"

function Sidebar() {
  return (
    <div className="hidden 2xl:block min-w-[25%] bg-blackColor rounded-lg h-[calc(100vh-128px)] pt-2 sticky top-0 z-10 ml-2">
      <TopLeftSidebarMenu />
      <Collections />
    </div>
  );
}

export default Sidebar;

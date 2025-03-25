import React from "react";
import { Outlet } from "react-router";
import Playerbar from "../components/Playerbar";
import Homepage from "../routes/Homepage";
import Navbar from "../components/Navbar";
import HomeLayout from "./HomeLayout";

function Layout() {

  const doubleClick = () => {
    alert("Double Click me");
    window.scrollTo(0,0);
  }
  return (
    <div className="">
      <div onDoubleClick={doubleClick}>
        <Navbar />
      </div>
      <HomeLayout />
      <Playerbar />
    </div>
  );
}

export default Layout;

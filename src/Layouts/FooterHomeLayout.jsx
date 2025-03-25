import React from "react";
import Footer from "../components/Footer";
import { Outlet } from "react-router";

function FooterHomeLayout() {
  return (
    <div className="flex-1 min-w-[35%] bg-blackColor rounded-md h-[calc(100vh-128px)] overflow-y-auto">
      <Outlet />
      <Footer />
    </div>
  );
}

export default FooterHomeLayout;

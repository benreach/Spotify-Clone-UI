import React, { useEffect, useState } from "react";
import LeftSidebar from "../components/LeftSidebar";
import RightSidebar from "../components/RightSidebar";
import FooterHomeLayout from "./FooterHomeLayout";

function HomeLayout() {
  const [isDragging, setIsDragging] = useState(false);
  const [leftPanel, setLeftPanel] = useState(null);
  const [rightPanel, setRightPanel] = useState(null);
  const [splitterX, setSplitterX] = useState(0);
  const [leftPanelWidth, setLeftPanelWidth] = useState(0);
  const [rightPanelWidth, setRightPanelWidth] = useState(0);

  const onMouseDown = (event) => {
    setIsDragging(true);

    document.body.style.userSelect = "none";

    let pEle = event.target.previousElementSibling;
    let nEle = event.target.nextElementSibling;

    setLeftPanel(pEle);
    setRightPanel(nEle);
    setLeftPanelWidth(pEle.offsetWidth);
    setRightPanelWidth(nEle.offsetWidth);

    setSplitterX(event.pageX);
  };

  const onMouseMove = (event) => {
    if (!isDragging) return;

    let mx = event.pageX - splitterX;
    let newLeftWidth = leftPanelWidth + mx;
    let newRightWidth = rightPanelWidth - mx;

    if (newLeftWidth > 100 && newRightWidth > 100) {
      // Prevent panels from collapsing
      leftPanel.style.width = newLeftWidth + "px";
      rightPanel.style.width = newRightWidth + "px";
    }
  };

  const onMouseUp = () => {
    setIsDragging(false);
  };

  useEffect(() => {
    if (isDragging) {
      document.addEventListener("mousemove", onMouseMove);
      document.addEventListener("mouseup", onMouseUp);
    } else {
      document.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mouseup", onMouseUp);
    }
    return () => {
      document.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mouseup", onMouseUp);
    };
  }, [isDragging]);

  return (
    <div className="flex justify-center items-center">
      <LeftSidebar />
      <div
        className="h-[calc(100vh-150px)] cursor-grab w-2 hover:bg-lightGray rounded-full hover:transition-all duration-500 ease-in-out"
        onMouseDown={onMouseDown}
      ></div>
      <FooterHomeLayout />
      <div
        className="h-[calc(100vh-150px)] cursor-grab w-2 hover:bg-lightGray rounded-full hover:transition-all duration-500 ease-in-out"
        onMouseDown={onMouseDown}
      ></div>

      <RightSidebar />
    </div>
  );
}

export default HomeLayout;

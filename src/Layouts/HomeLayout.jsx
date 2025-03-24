import React from 'react'
import LeftSidebar from "../components/LeftSidebar"
import RightSidebar from "../components/RightSidebar"
import FooterHomeLayout from "./FooterHomeLayout"

function HomeLayout() {
  return (
    <div className='flex justify-between items-start'>
        <LeftSidebar />
        <div className='min-h-[calc(100vh-48px)] w-2 cursor-grab'></div>
        <FooterHomeLayout />
        <div className='min-h-[calc(100vh-48px)] w-2 cursor-grab'></div>
        <RightSidebar />
    </div>
  )
}

export default HomeLayout
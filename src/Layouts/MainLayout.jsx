import React from 'react'
import { Outlet } from 'react-router'
import Playerbar from '../components/Playerbar'
import Homepage from '../routes/Homepage'
import Navbar from "../components/Navbar"
import HomeLayout from './HomeLayout'

function Layout() {
  return (
    <div className=''>
      <Navbar />
      <HomeLayout />
      <Playerbar />
    </div>
  )
}

export default Layout
import React from 'react'
import Navbar from '../componants/Navbar'
import { Outlet } from 'react-router'
import Footer from '../componants/Footer'

const Mainlayout = () => {
  return (
    <div>
      <Navbar/>
      <Outlet/>
      <Footer/>
    </div>
  )
}

export default Mainlayout
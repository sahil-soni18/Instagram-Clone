import React from 'react'
import Sidenav from "./src/nevigation/Sidenav"
import {Outlet} from "react-router-dom"


const Layout = () => {
  return (
    <>
    <Sidenav />
    <Outlet />
    </>

  )
}

export default Layout

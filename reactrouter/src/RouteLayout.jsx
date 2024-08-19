import React from 'react'
import Home from './Components/Home/Home'
import Header from './components/Navbar/Header'
import Footer from './components/Footer/Footer'
import { Outlet } from 'react-router-dom'

function RouteLayout() {
  return (
    <div>
      <Header/>
      <Outlet/>
      <Footer/>
    </div>
  )
}

export default RouteLayout

// by using outlet we have fixed the header and footer
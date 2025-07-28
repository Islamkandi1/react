import React from 'react'
import Navbar from './../navbar/Navbar';
import Footer from './../footer/Footer'; 
import { Outlet, ScrollRestoration } from 'react-router-dom';

const Layout = () => {
  return (
    <>
    <ScrollRestoration/>
      <Navbar/>
      <Outlet/>
      <Footer/>
    </>
  )
}

export default Layout

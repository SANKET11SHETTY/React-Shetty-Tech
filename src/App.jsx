import { useState } from 'react'
import './App.css'
import './Responsive.css'
import Navbar2 from './components/Navbar2'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'
import Services from './components/Services'
import ContactUs from './components/ContactUs'
import Footer from './components/Footer'


function App() {
 const router = createBrowserRouter([
  {
    path: "/",
      
      element: <><Navbar2/><Home/></>
  },
  {
    path: "/service",
    element: <><Navbar2/><Services/></>
  },
  {
    path: "/about",
    element: <><Navbar2/><About/></>
  },

  {
    path: "/contactus",
    element: <><Navbar2/><ContactUs/></>
  },
 ])

  return (
    <>
      <RouterProvider router={router}/>
      <Footer/>
    </>
  )
}

export default App

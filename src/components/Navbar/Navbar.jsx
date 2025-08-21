import React from 'react'
import { Link } from 'react-router'
import "./Navbar.css"

const Navbar = () => {
  return (
   <nav className='flex flex-col md:flex-row text-gray-900 3xl:text-2xl 4xl:text-3xl 3xl:gap-[10rem] 4xl:gap--[10rem] gap-9 items-center justify-center font-[lato] font-bold text-[24px]'>
      <Link to="/product" className='hover:text-shadow-xs'>Product</Link>
      <Link to="/contact-us" className='hover:text-shadow-xs'>Contact Us</Link>
      <Link to="/about-us" className='hover:text-shadow-xs'>About Us</Link>
    </nav>
  )
}

export default Navbar
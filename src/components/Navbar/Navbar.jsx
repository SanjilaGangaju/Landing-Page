import React from 'react'
import { Link } from 'react-router'
import "./Navbar.css"

const Navbar = () => {
  return (
   <nav className='flex flex-col md:flex-row title gap-8 items-center justify-center font-[lato] font-normal text-[20px]'>
      <Link to="/product" className='hover:text-shadow-xs'>Product</Link>
      <Link to="/contact-us" className='hover:text-shadow-xs'>Contact Us</Link>
      <Link to="/about-us" className='hover:text-shadow-xs'>About Us</Link>
    </nav>
  )
}

export default Navbar
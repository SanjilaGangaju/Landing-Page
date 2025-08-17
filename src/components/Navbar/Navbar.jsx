import React from 'react'
import { Link } from 'react-router'
import "./Navbar.css"
const Navbar = () => {
  return (
   <nav className='flex gap-[80px] font-[lato] font-normal text-[17px]'>
      <Link to="/product">Product</Link>
      <Link to="/contact-us">Contact Us</Link>
      <Link to="/about-us">About Us</Link>
    </nav>
  )
}

export default Navbar
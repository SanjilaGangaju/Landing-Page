import React from 'react'
import { Link } from 'react-router'
import "./Navbar.css"

const Navbar = () => {
  return (
   <nav className='flex flex-col gap-8 items-center justify-center font-[lato] font-normal text-[20px]'>
      <Link to="/product">Product</Link>
      <Link to="/contact-us">Contact Us</Link>
      <Link to="/about-us">About Us</Link>
    </nav>
  )
}

export default Navbar
import React from 'react'
import "./Header.css"
import Navbar from "../Navbar/Navbar"
const Header = () => {
  return (
    <header >
        <div className='wrapper flex justify-between items-center pt-5 '>
            <div className='font-[roboto] text-[36px] font-bold text-[#42A7C3]'>
                Travling!
            </div>
            <Navbar></Navbar>
            <div className='flex items-center  justify-center'>
                <button className='rounded-md px-3 py-2 bg-[#FA8443] text-gray-50 cursor-pointer hover:bg-orange-400 font-[lato] font-bold text-[16px]'>Sign Up</button>
            </div>
        </div>

    </header>
  )
}

export default Header
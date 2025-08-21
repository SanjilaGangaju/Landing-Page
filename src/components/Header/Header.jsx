import React, { useState } from 'react'
import "./Header.css"
import Navbar from "../Navbar/Navbar"
import { RxHamburgerMenu } from "react-icons/rx";
import { IoMdClose } from "react-icons/io";

const Header = () => {
  const [ishamOn, sethamOn] = useState(false);
  return (
    <header>
         {/* desktop header */}
        <div className='wrapper  relative flex justify-between items-center pt-5 '>
            <div className='font-[roboto] text-[36px] font-bold text-[#42A7C3]'>
                Travling!
            </div>
            <div className='hidden md:flex flex-1 justify-center'>
              <Navbar></Navbar>
            </div>
            
        
            <div className='hidden md:flex  items-center'>
                          
              <button className='bg-orange-400  hover:bg-orange-500 cursor-pointer rounded px-2 py-1 text-[16px] text-white'>Sign Up</button>

            </div>
           
           
            <button onClick={()=>sethamOn(!ishamOn)} className='md:hidden lg:hidden'>

             <RxHamburgerMenu ></RxHamburgerMenu>

            </button>
             {ishamOn&&( 
                 <div className='absolute w-full right-0   h-50 flex flex-col gap-2 items-center justify-center bg-[#c4e8f1] top-16 '>
                  <IoMdClose onClick={()=>sethamOn(!ishamOn)} className='ml-[50%]'></IoMdClose>
            <Navbar ishamOn={ishamOn}></Navbar>
          </div>
             )}
       
        </div>

    </header>
  )
}

export default Header
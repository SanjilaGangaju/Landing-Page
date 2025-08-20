import React, { useState } from 'react'
import "./Header.css"
import Navbar from "../Navbar/Navbar"
import { RxHamburgerMenu } from "react-icons/rx";
import { IoMdClose } from "react-icons/io";

const Header = () => {
  const [ishamOn, sethamOn] = useState(false);
  return (
    <header>
     
        <div className='wrapper relative flex justify-between items-center pt-5 '>
            <div className='font-[roboto] text-[36px] font-bold text-[#42A7C3]'>
                Travling!
            </div>
           
           
            <button onClick={()=>sethamOn(!ishamOn)} className='md:hidden lg:hidden'>

             <RxHamburgerMenu >dgdg</RxHamburgerMenu>

            </button>
             {ishamOn&&( 
                 <div className='absolute w-1/2 right-0  h-50 flex flex-col gap-2 items-center justify-center bg-blue-100 top-20 '>
                  <IoMdClose onClick={()=>sethamOn(!ishamOn)} className='ml-[50%]'></IoMdClose>
            <Navbar></Navbar>
          </div>
             )}
       
        </div>

    </header>
  )
}

export default Header
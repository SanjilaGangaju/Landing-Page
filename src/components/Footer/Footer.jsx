import React from 'react'
import { Link } from 'react-router'
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";

const Footer = () => {
  
  return (
    <footer className='-mt-20'>
        <div className='bg-blue-400 rounded-t-xl relative  max-h-86 overflow-hidden'>
            <div className='-translate-x-40  translate-y-10 '>
                <img className='opacity-[0.43]' src="/images/bg.png"></img>
                <div className='absolute left-50 top-0 w-[90%]  flex flex-col gap-10'>
                     <div className=' bg-white/20 px-6 py-7 border border-gray-50 gap-8 backdrop-blur-xs rounded-md flex items-center justify-between'>
                   <div >
                     <p className='text-white text-[0.8rem]'>Prepare yourself to be part of exploration of</p>
                    <p className='text-white text-2xl font-bold font-[lato]'>The Beauty of Indonesia</p>
                   </div>
                   <div className='flex flex-col items-center justify-between gap-2'>
                    <button className='bg-blue-500 w-30 rounded h-7 text-[16px] text-white hover:text-black hover:bg-gray-50'>Sign In</button>
                    <button className='bg-blue-500 w-30 rounded h-7 text-[16px] text-white hover:text-black hover:bg-gray-50' >Sign Up</button>
                   </div>
                   
                </div>
                <div className='bottom-5 left-1/2 z-[20] w-full'>
                   <div className='flex justify-between border-b pb-4 text-white'>
                    <div className='flex flex-col gap-2'>
                        <span className='font-bold text-xl'>Travling!</span>
                        <div className='flex gap-6  text-[0.7rem]'>
                            <Link className='text-gray-100' to="">Product</Link>
                            <Link className='text-gray-100' to="">Contact us</Link>
                            <Link className='text-gray-100' to="">Privacy Policy</Link>
                            <Link className='text-gray-100' to="">About Us</Link>
                        </div>
                    </div>
                    <div className='flex flex-col text-white text-s  gap-2 '>
                        <p className='text-[15px]'>Get the App</p>
                         <div className='flex gap-6'>
            <div className='bg-[#1d1d1d] max-h-9 cursor-pointer flex items-center justify-center gap-2 p-1 px-2 hover:bg-[black] rounded'>
              <div>
                 <img className="w-full" src="/images/playstoreicon.png"></img>
              </div>
             
              <div className='flex flex-col'>
                <span className='text-gray-50 text-[10px] font-bold'>GET IT ON</span>
              <span className='text-gray-50 text-[16px] font-bold'>Google Play</span>
              </div>
              </div>
              
            <div className='bg-[#1d1d1d] cursor-pointer flex items-center max-h-9 justify-center hover:bg-[black] p-1 px-2 gap-2 rounded'>
              <div>
                 <img className="w-full" src="/images/applelogo.png"></img>
              </div>
             
              <div className='flex flex-col'>
                <span className='text-gray-50 text-[10px] font-bold'>DOWNLOAD ON THE</span>
              <span className='text-gray-50 text-[16px] font-bold'>App Store</span>
              </div>
              </div>
              
            </div>
                    </div>
                   </div>
                   <div className='flex justify-between py-5 text-white'>
                    <span className='text-[16px]'>
                        @2025 Travling.com
                    </span>
                    <div className='flex gap-4 items-center justify-center'>
                        <FaInstagram className='border rounded-full p-1 text-[1.5rem]'></FaInstagram>
                        <FaFacebook className='border rounded-full p-1 text-[1.5rem]'> </FaFacebook>

                    </div>
                   </div>
        

                </div>
                </div>
               

            </div>
        </div>

     
    </footer>
    
  )
}

export default Footer

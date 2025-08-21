import React from 'react'
import Cards from '../Card/Cards'
const Hero = () => {
  return (
    <main>
        <div className='wrapper grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2   justify-between gap-20 py-[2rem] lg:py-[5rem] px-2 lg:px-12 items-center '>
             <div className='flex flex-col gap-[32px] w-full sm:order-2 md:order-1 lg:order-1 order-2'>
            <h1 className='font-[poppins] text-[#333333] font-bold text-[36px]   md:text-[56px] lg:text-[5rem] 3xl:text-4xl 4xl:text-4xl'>Start your journey by one click, explore beautiful world!</h1>
            <p className='font-[poppins] text-[#333333]  text-[16px] 3xl:text-2xl 4xl:text-2xl'>Plan and book your perfect trip with expert advice, travel tips, destination informatin and inspiration from us!</p>
            <div className='flex gap-7 lg:gap-10'>
            <div className='bg-[#1d1d1d] lg:w-1/3  max-h-11 3xl:max-h-20 cursor-pointer flex items-center justify-center gap-2 py-2 px-2 hover:bg-[black] rounded'>
              <div className='w-1/5'>
                 <img className="w-full" src="/images/playstoreicon.png"></img>
              </div>
             
              <div className='flex flex-col w-full '>
                <span className='text-gray-50 text-[13px] 4xl:text-[25px] font-bold'>GET IT ON</span>
              <span className='text-gray-50 text-[17px] 4xl:text-[35px] font-bold'>Google Play</span>
              </div>
              </div>
              
            <div className='bg-[#1d1d1d] lg:w-1/3  cursor-pointer flex items-center max-h-11 lg:max-h-20 justify-center hover:bg-[black]  py-2 px-2 gap-2 rounded'>
              <div className='w-1/5'>
                 <img className="w-full" src="/images/applelogo.png"></img>
              </div>
             
              <div className='flex flex-col w-full'>
                <span className='text-gray-50 text-[13px] 4xl:text-[25px] font-bold'>DOWNLOAD ON </span>
              <span className='text-gray-50 text-[17px] 4xl:text-[35px]  font-bold'>App Store</span>
              </div>
              </div>
              
            </div>
        </div>
        <div className='order-1 md:order-2 lg:order-2 sm:order-1 '>
            
            <div className='relative w-full lg:flex lg:items-center lg:justify-center '>
                <img   src="/images/bg.png"></img>
                <div className='absolute w-[87%] h-[89%] overflow-hidden left-55 lg:left-119 lg:top-1/2 top-46 z-[1]  transform -translate-x-50 -translate-y-40  rounded-full ' >
                  <img className="rounded-full  w-fit md:h-full lg:h-full h-[100%] object-cover " src="/images/heroimage.png"></img>
                  
                </div>
                <div className='absolute md:top-59 lg:top-50    top-35 md:-left-7  lg:left-30 left-0  z-[2]'>
                  <Cards className='absolute z-[20]' w="large" title="Explore Labuan Pajo" img="/images/Rectangle 9.png" location="NTT, indonesia" ></Cards>

                </div>
                <div className='absolute hidden md:flex md:top-1/3 lg:top-1/3  right-0 top-25 lg:left-150 md:left-70 z-[2]'>
                          <Cards title="LePirate Hotel" w="large" img="/images/Rectangle 9.png" location="Flores, indonesia"></Cards>

                </div>
                <div className='absolute top-5 lg:left-1/3 left-1/10 '>
                  <img src="/images/Frame 11.png" ></img>
                </div>
                <div className='absolute right-1 top-10 md:top-20 lg:top-19  md:left-70 lg:left-140'>
                  <div className='flex gap-1 flex-row text-center bg-gray-50   items-center w-17 md:w-20 py-1 justify-center rounded-full'>
                    <img  className="w-4 h-4" src="/images/ic_baseline-flight.png"></img>
                     <p className='small-text text-center text-[11px] md:text-[13px] lg:text-[13px]'>Jakarta</p>
                  </div>
                </div>
                

            </div>

        </div>
        </div>

       
    </main>
  )
}

export default Hero
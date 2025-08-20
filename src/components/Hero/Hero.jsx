import React from 'react'
import Cards from '../Card/Cards'
const Hero = () => {
  return (
    <main>
        <div className='wrapper grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 justify-center  items-center gap-[26px]'>
             <div className='flex flex-col gap-[32px] w-full '>
            <h1 className='font-[poppins] text-[#333333] font-bold text-[36px] md:text-[56px] '>Start your journey by one click, explore beautiful world!</h1>
            <p className='font-[poppins] text-[#333333]  text-[16px]'>Plan and book your perfect trip with expert advice, travel tips, destination informatin and inspiration from us!</p>
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
        <div>
            
            <div className='relative w-full'>
                <img  src="/images/bg.png"></img>
                <div className='absolute w-full h-full overflow-hidden left-55 top-46 z-[1]  transform -translate-x-50 -translate-y-40  rounded-full' >
                  <img className="rounded-full  w-full h-full object-contain" src="/images/heroimage.png"></img>
                  
                </div>
                <div className='absolute top-59 -left-7   z-[2]'>
                  <Cards className='absolute z-[20]'  title="Explore Labuan Pajo" img="/images/Rectangle 9.png" location="NTT, indonesia" w="30"></Cards>

                </div>
                <div className='absolute top-1/3  left-70 z-[2]'>
                          <Cards title="LePirate Hotel" w="small" img="/images/Rectangle 9.png" location="Flores, indonesia"></Cards>

                </div>
                <div className='absolute top-5 left-1/10'>
                  <img src="/images/Frame 11.png" ></img>
                </div>
                <div className='absolute top-13 left-70'>
                  <div className='flex gap-1 bg-gray-50 px-[28px] py-[10px] rounded-full'>
                    <img src="/images/ic_baseline-flight.png"></img>
                     <span className='small-text text-[16px]'>Jakarta- Bali</span>
                  </div>
                </div>
                

            </div>

        </div>
        </div>

       
    </main>
  )
}

export default Hero
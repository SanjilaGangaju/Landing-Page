import React from 'react'
import Cards from '../Card/Cards'
const Hero = () => {
  return (
    <main>
        <div className='wrapper grid grid-cols-2 justify-center  items-center gap-[26px]'>
             <div className='flex flex-col gap-[32px] w-full '>
            <h1 className='font-[poppins] text-[#333333] font-bold text-[56px]'>Start your journey by one click, explore beautiful world!</h1>
            <p className='font-[poppins] text-[#333333] text-[16px]'>Plan and book your perfect trip with expert advice, travel tips, destination informatin and inspiration from us!</p>
            <div className='flex gap-6'><img src="/images/download.png"></img>
            <img  src="/images/download (1).png"></img>
            </div>
        </div>
        <div>
            
            <div className='relative w-full'>
                <img  src="/images/bg.png"></img>
                <div className='absolute w-90 h-90 overflow-hidden left-55 top-46 z-[1]  transform -translate-x-50 -translate-y-40  rounded-full' >
                  <img className="rounded-full  w-full h-full object-contain" src="/images/heroimage.png"></img>
                  
                </div>
                <div className='absolute top-59 -left-7   z-[2]'>
                  <Cards className='absolute z-[20]'  title="Explore Labuan Pajo" img="/images/Rectangle 9.png" location="NTT, indonesia" w="30"></Cards>

                </div>
                <div className='absolute top-1/3  left-70 z-[2]'>
                          <Cards title="Explore Labuan Pajo" w="small" img="/images/Rectangle 9.png" location="NTT, indonesia"></Cards>

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
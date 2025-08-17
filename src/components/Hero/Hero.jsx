import React from 'react'

const Hero = () => {
  return (
    <main >
        <div className='wrapper grid grid-cols-2 justify-center items-center'>
             <div className='flex flex-col gap-[32px]'>
            <h1 className='font-[poppins] text-[#333333] font-bold text-[56px]'>Start your journey by one click, explore beautiful world!</h1>
            <p className='font-[poppins] text-[#333333] text-[16px]'>Plan and book your perfect trip with expert advice, travel tips, destination informatin and inspiration from us!</p>
            <div className='flex'><img src="/images/download.png"></img>
            <img  src="/images/download (1).png"></img>
            </div>
        </div>
        <div>
            
            <div className='relative '>
                <img className='w-full' src="/images/bg.png"></img>
                <div className='absolute w-86 left-1/2 top-1/2 z-[1]  transform -translate-x-1/2 -translate-y-1/2 p-4 rounded-full' >
                  <img className="rounded-full  w-full object-contain" src="/images/heroimage.png"></img>
                </div>
            </div>

        </div>
        </div>
       
    </main>
  )
}

export default Hero
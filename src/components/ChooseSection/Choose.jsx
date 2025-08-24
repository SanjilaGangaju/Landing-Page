import React from 'react'

const Choose = () => {
  return (
    <section>
      <div className='wrapper py-[2rem] lg:py-[5rem] lg:px-12 grid grid-cols-1 px-2  md:grid-cols-2 gap-10'>
        <div className='relative w-[100%] z-[0] rounded-full    '>
          <img className="w-full  object-contain rounded-full" src='/images/world.png' alt="world hex image"></img>
          <div className='absolute w-full  bottom-0 left-1 z-[10] bg-tranparent rounded-full '>
            <img  className="h-full w-full object-contain  rounded-b-full" src='/images/man-woman.png' alt="illustration of man and woman travelling"></img>
          </div>
        </div>
        <div className='flex flex-col gap-10'>
          <div className='flex items-center justify-center flex-col gap-3'>
              <h2 className='title font-bold text-2xl font-[poppins] text-center lg:text-6xl'>Why Choose Us?</h2>
          <p className='text-md text-center lg:text-xl md:w-[25rem] lg:w-[23rem]'>Enjoy different experiences in every place you visit and discover new and affordable adventures of course.</p>
          </div>
          <div className='flex flex-col font-[lato] gap-6'>
            <div className='flex gap-4 p-2  hover:bg-white hover:shadow-xl hover:rounded-md'>
              <div>
                <img src="/images/flight.png" alt="fligt icon"></img>
              </div>
              <div className='flex flex-col gap-1'>
                <p className='title font-bold text-s lg:text-2xl'> Flight Ticket</p>
                <p className='small-text text-xs lg:text-xl'>Book flights fast, travel stress-free</p>
                </div>
            </div>
             <div className='flex gap-4 p-2  hover:bg-white hover:shadow-xl hover:rounded-md'>
              <div>
                <img src="/images/flight (1).png"></img>
              </div>
              <div className='flex flex-col gap-1'>
                <p className='title font-bold text-s lg:text-2xl'>Accomodation</p>
                <p className='small-text text-xs lg:text-xl'>Book cozy stays, create lasting memories</p>
                </div>
            </div>
            <div className='flex  gap-4 p-2   hover:bg-white hover:shadow-xl hover:rounded-md'>
              <div>
                <img src="/images/flight (2).png"></img>
              </div>
              <div className='flex flex-col gap-1'>
                <p className='title font-bold text-s lg:text-2xl'> Packaged Tour</p>
                <p className='small-text text-xs lg:text-xl'>Explore more with curated travel deals</p>
                </div>
                
            </div>
             <div className='hover:rounded-full font-bold title lg:text-2xl flex gap-2 items-center p-2 w-fit hover:bg-gray-50 '>
            <span>Another Product</span> 
            <img className="text-black font-bold h-3 "src="/images/arrow_forward.png"></img>
            </div>
             
          </div>
         
        
        </div>
       
      </div>
    
    </section>
  )
}

export default Choose

import React from 'react'
import DragCard from '../DragCard/DragCard'

const Vacation = () => {
  return (
    <section>
    <div className='wrapper flex items-center flex-col  py-[2rem] lg:py-[5rem] lg:px-12 px-2'>
        <div className='flex flex-col items-center gap-3'>
             <h2 className='title text-3xl lg:text-5xl font-bold font-[poppins] text-center'>Plan Your Vacation!</h2>
        <p className='small-text text-[18px]  lg:text-2xl w-[80%] text-center'>For many people organizing a trip is a headache. Register to be able to jointly determine vacation destinations and dates</p>

        </div>
       
        <div className='h-full relative w-full flex items-center justify-center'>
            <img className="md:w-[90%] lg:w-[70%] w-[100%] -mt-10 md:-mt-20 md:-mb-22 opacity-[0.9] md:opacity-[0.5] lg:opacity-[0.5] h-1/1 object-cover" src="/images/hexagonworld.png"></img>
            <div className='absolute md:left-[8%] md:flex lg:flex lg:left-[20%] hidden md:top-[10%] lg:top-[20%]'>
              <DragCard  src="/images/Rectangle 9 (1).png" title="De Pavijoen Bandung" category="Hotel" span1="1 Kamar" span2="2 Orang" span3="Check-in 13:00"></DragCard>

            </div>

<div className='absolute md:left-[50%] md:flex lg:flex lg:left-[70%] hidden md:top-[50%] lg:top-[30%]'>
  <DragCard  
    src="/images/Rectangle 9.png" 
    title="City Tour Bandung" 
    category="Tour" 
    span1="Durasi 1 Hari" 
    span2="5 Orang" 
    span3="Start 08:00"
  />
</div>

<div className='absolute md:left-[20%] md:flex lg:flex lg:left-[20%] hidden md:top-[60%] lg:top-[50%]'>
  <DragCard  
    src="/images/Rectangle 9 (2).png" 
    title="Garuda Indonesia - Jakarta" 
    category="Pesawat" 
    span1="GA 412" 
    span2="2 Penumpang" 
    span3="Take-off 10:30"
  />
</div>

<div className='absolute md:left-[60%] md:flex lg:flex lg:left-[70%] hidden md:top-[20%] lg:top-[60%]'>
  <DragCard  
    src="/images/Rectangle 9 (3).png" 
    title="Rental Mobil Bandung" 
    category="Transport" 
    span1="Avanza" 
    span2="6 Jam" 
    span3="Start 09:00"
  />
</div>
     </div>
    </div>
    </section>
  )
}

export default Vacation

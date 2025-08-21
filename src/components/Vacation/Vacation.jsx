import React from 'react'
import DragCard from '../DragCard/DragCard'

const Vacation = () => {
  return (
    <section>
    <div className='wrapper flex items-center flex-col pt-[1rem] px-2'>
        <div className='flex flex-col items-center'>
             <h2 className='title text-2xl font-bold font-[poppins]'>Plan Your Vacation!</h2>
        <p className='small-text text-[16px]  w-[90%] text-center'>For many people organizing a trip is a headache. Register to be able to jointly determine vacation destinations and dates</p>

        </div>
       
        <div className='h-full relative w-full flex items-center justify-center'>
            <img className="md:w-[90%] lg:w-[90%] w-[100%] opacity-[0.9] md:opacity-[0.5] lg:opacity-[0.5] h-1/1 object-cover" src="/images/hexagonworld.png"></img>
            <div className='absolute left-50 hidden md:flex top-30'>
              <DragCard  src="" title="De Pavijoen Bandung" category="Hotel" span1="1 Kamar" span2="2 Orang" span3="Check-in 13:00"></DragCard>

            </div>
           <div className='absolute left-50 hidden lg:flex md:flex top-30'>
  <DragCard  
    src="/images/Rectangle 9 (1).png" 
    title="De Pavijoen Bandung" 
    category="Hotel" 
    span1="1 Kamar" 
    span2="2 Orang" 
    span3="Check-in 13:00"
  />
</div>

<div className='absolute right-20 top-40 hidden lg:flex md:flex'>
  <DragCard  
    src="/images/Rectangle 9.png" 
    title="City Tour Bandung" 
    category="Tour" 
    span1="Durasi 1 Hari" 
    span2="5 Orang" 
    span3="Start 08:00"
  />
</div>

<div className='absolute left-40 bottom-70 hidden lg:flex md:flex'>
  <DragCard  
    src="/images/Rectangle 9 (2).png" 
    title="Garuda Indonesia - Jakarta" 
    category="Pesawat" 
    span1="GA 412" 
    span2="2 Penumpang" 
    span3="Take-off 10:30"
  />
</div>

<div className='absolute right-20 hidden md:flex lg:flex bottom-70'>
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

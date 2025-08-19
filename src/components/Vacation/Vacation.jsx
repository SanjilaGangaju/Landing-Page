import React from 'react'
import DragCard from '../DragCard/DragCard'

const Vacation = () => {
  return (
    <section>
    <div className='wrapper flex items-center flex-col pt-[3rem]'>
        <div className='flex flex-col items-center'>
             <h2 className='title text-2xl font-bold font-[poppins]'>Plan Your Vacation!</h2>
        <p className='small-text text-[16px]  w-90 text-center'>For many people organizing a trip is a headache. Register to be able to jointly determine vacation destinations and dates</p>

        </div>
       
        <div className='h-1/2 relative w-full flex items-center justify-center'>
            <img className="w-[90%] opacity-[0.5] h-1/2 -mt-32 object-cover" src="/images/hexagonworld.png"></img>
            <div className='absolute left-50 top-30'>
              <DragCard  src="" title="De Pavijoen Bandung" category="Hotel" span1="1 Kamar" span2="2 Orang" span3="Check-in 13:00"></DragCard>

            </div>
           <div className='absolute left-50 top-30'>
  <DragCard  
    src="/images/Rectangle 9 (1).png" 
    title="De Pavijoen Bandung" 
    category="Hotel" 
    span1="1 Kamar" 
    span2="2 Orang" 
    span3="Check-in 13:00"
  />
</div>

<div className='absolute right-20 top-40'>
  <DragCard  
    src="/images/Rectangle 9.png" 
    title="City Tour Bandung" 
    category="Tour" 
    span1="Durasi 1 Hari" 
    span2="5 Orang" 
    span3="Start 08:00"
  />
</div>

<div className='absolute left-40 bottom-70'>
  <DragCard  
    src="/images/Rectangle 9 (2).png" 
    title="Garuda Indonesia - Jakarta" 
    category="Pesawat" 
    span1="GA 412" 
    span2="2 Penumpang" 
    span3="Take-off 10:30"
  />
</div>

<div className='absolute right-20 bottom-70'>
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

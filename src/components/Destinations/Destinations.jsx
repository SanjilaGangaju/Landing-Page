import React from 'react'
import Cards from '../Card/Cards'
import destinations from "./destination_detail"
const Destinations = () => {
  return (
    <section>
    <div className='wrapper lg:py-[5rem] py-[2rem] lg:px-12 px-2 flex flex-col gap-6'>
        <div className='flex flex-col items-center gap-3'>
             <h2 className='title font-bold font-[poppins] text-2xl lg:text-6xl text-center'>Popular Destinations</h2>
           <p className='small-text text-md lg:text-2xl text-center'>Vacations to make your experience enjoyable in Indonesia!</p>
        </div>
          

      <div className='grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 items-center justify-center gap-3 gap-y-5'>
              {destinations.map(item=>(<Cards key={item.title} img={item.img} w="large" location={item.location} per={item.per} duration={item.duration} price={item.price}
              title={item.title}></Cards>))}

      </div>
    </div>

      
    </section>
  )
}

export default Destinations

import React from 'react'
import Cards from '../Card/Cards'
import destinations from "./destination_detail"
const Destinations = () => {
  return (
    <section>
    <div className='wrapper pt-5 flex flex-col gap-10'>
        <div className='flex flex-col gap-2'>
             <h2 className='title font-bold font-[poppins] text-2xl'>Popular Destinations</h2>
           <p className='small-text text-md'>Vacations to make your experience enjoyable in Indonesia!</p>
        </div>
          

      <div className='grid grid-cols-4 gap-5'>
              {destinations.map(item=>(<Cards key={item.title} img={item.img} w="large" location={item.location} per={item.per} duration={item.duration} price={item.price}
              title={item.title}></Cards>))}

      </div>
    </div>
   sghaahh
      
    </section>
  )
}

export default Destinations

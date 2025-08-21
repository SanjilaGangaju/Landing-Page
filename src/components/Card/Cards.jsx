import React from 'react'

  const widthClasses={
    small:"max-w-35",
    medium:"max-w-43",
    large: "max-w-56"
  }
const Cards = ({location, img, title, w="medium", price, duration, per}) => {
  console.log(price)
  return (
    <>
     {!price?(<div   className={`bg-gray-50  ${widthClasses[w]}  py-1 px-1 rounded-xl flex flex-col justify-center`}>
    
        <img className="w-full" src={img}></img>
      
      <div className='w-full   flex flex-col px-2 py-1 gap-1'>
        <p className='title text-sm lg:text-2xl font-bold'>{title}</p>
        <p className='flex items-center gap-1'>
            <img className="w-4 h-4" src="/images/Location.png"></img>
            <span className='small-text font-[lato] lg:text-[27px] font-normal text-[10px]'>{location}</span>
        </p>
      </div>
    </div>):(
      <div   className={`bg-gray-100 border border-white  ${widthClasses[w]} shadow-xl rounded-xl flex flex-col py-1`}>
          <div className='w-full   '>
             <img className="w-full h-full object-contain" src={img}></img>
        
          </div>
          <div className='flex flex-col ml-2  gap-1 px-1 py-1'>
            <div className='flex gap-1 items-center '>
            <img className="w-3 h-3" src="/images/Location.png"></img>
            <span className='small-text  font-normal text-[11px]'>{location}</span>
            </div>
            <div className='w-full grid grid-rows-auto flex-1 gap-1 '>
               <p className='title text-base font-bold font-[lato] h-5 line-clamp-2 '>{title}</p>
               <p className='text-gray-600 text-sm font-normal'>{duration} Days</p>
            <div> 
              <span className='text-[#42a7c3]  text-[15px] font-bold font-[lato]'>Rp {price}</span>
               <span className='text-[#347f90] text-[0.7rem]'>/{per}</span>
            </div>     

            </div>
        </div>
      
    </div>)}
    
    </>
   
  )
}

export default Cards

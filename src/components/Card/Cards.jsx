import React from 'react'
  const widthClasses={
    small:"max-w-33",
    medium:"max-w-43"
  }
const Cards = ({location, img, title, w="medium"}) => {

  return (
    <div   className={`bg-gray-50 ml-3 ${widthClasses[w]} py-1 rounded-xl flex flex-col justify-center`}>
    
        <img className="w-full" src={img}></img>
      
      <div className='w-full   flex flex-col px-2 py-1 gap-1'>
        <p className='title text-sm font-bold'>{title}</p>
        <p className='flex items-center gap-2'>
            <img className="w-3 h-3" src="/images/Location.png"></img>
            <span className='small-text font-[lato] font-normal text-[10px]'>{location}</span>
        </p>
      </div>
    </div>
  )
}

export default Cards

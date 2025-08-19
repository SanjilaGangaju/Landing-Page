import React from 'react'

const DragCard = ({src, category, title, span1, span2, span3}) => {
    
  return (
    <div className='bg-white flex items-center gap-2 shadow-xl justify-center rounded py-1 px-2'>
        <div className='h-15 w-15 rounded overflow-hidden'>
            <img className='h-full w-full object-contian' src={src}></img>
        </div>
        <div className='flex flex-col items-start justify-start gap-1'>
            <span className='rounded-full bg-indigo-50 text-center  text-[11px] px-2  font-semibold text-blue-400'>{category}</span>
            <p className='title font-bold text-[17px]'>{title}</p>
            <div className='flex gap-2 text-[12px] small-text'>
                <span className='border-r px-1'>{span1}</span>
                <span className='border-r px-1'> {span2}</span>
                <span >{span3} WIB</span>
            </div>
        </div>
      
    </div>
  )
}

export default DragCard

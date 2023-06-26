import React from 'react'

const FiveDayRow = () => {
  return (
     <div className='fivedayrow'>
        <div className='w-[102px] lg:w-[113px] h-9 lg:h-11 flex items-center gap-1'>
           <img src='favicon.png' alt='icon' className='w-9 h-9 lg:w-11 lg:h-11' />
           <h2 className='text-xl lg:text-[22px]'>25&deg;</h2>
           <h2 className='text-sm lg:text-base'>25&deg;</h2>
        </div>
        <p className='flex justify-end w-[73px]'>17 Feb</p>
        <p className='flex justify-end w-[73px]'>Friday</p>
    </div>
  )
}

export default FiveDayRow
import React from 'react'

const FiveDayRow = ({icon, temp, feelslike, day, details }) => {
  return (
     <div className='fivedayrow'>
        <div className='w-[102px] lg:w-[113px] h-9 lg:h-11 flex items-center gap-1'>
           <img src={icon} alt='icon' className='w-9 h-9 lg:w-11 lg:h-11' />
           <h2 className='text-xl lg:text-[22px]'>{temp}&deg;</h2>
           <h2 className='text-sm lg:text-base'>{feelslike}&deg;</h2>
        </div>
        <p className='flex justify-end w-[73px]'>{day}</p>
        <p className='flex justify-end w-[73px] mr-4 lg:ml-2'>{details}</p>
    </div>
  )
}

export default FiveDayRow
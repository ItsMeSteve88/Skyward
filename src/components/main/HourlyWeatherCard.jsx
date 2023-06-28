import React from 'react'

const HourlyWeatherCard = () => {
  return (
     <div className='flex flex-col items-center gap-1 p-4 w-[116px] h-[148px] rounded-2xl bg-base-200 '>
        <p className='text-base 2xl:text-md'>03 PM</p>
        <img src='favicon.png' alt='icon' className='h-12 w-12 2xl:h-16 2xl:w-16' />
        <div className='flex items-center'>
           <p className='text-base 2xl:text-md'>25&deg;</p>
        </div>
     </div>
  )
}

export default HourlyWeatherCard
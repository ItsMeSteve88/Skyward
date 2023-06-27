import React from 'react'

const HourlyWeatherCard = () => {
  return (
     <div className='flex flex-col items-center gap-3 p-4 w-[116px] h-[148px] rounded-2xl bg-base-200 '>
        <p className='text-base'>03 PM</p>
        <img src='favicon.png' alt='icon' className='h-12 w-12' />
        <div className='flex items-center'>
           <p className='text-base'>25&deg;</p>
        </div>
     </div>
  )
}

export default HourlyWeatherCard
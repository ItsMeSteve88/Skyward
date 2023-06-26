import React from 'react'
import { IoCalendarClearOutline, IoLocationOutline } from 'react-icons/io5';

const Card = () => {
  return (
    <div className="card">
      <h1 className="font-semibold text-lg md:text-xl">Now</h1>
      <div className="flex py-3 items-center self-stretch">
        <div className="flex">
          <h2 className="text-[56px] md:text-[74-px] xl:text-[80px] leading-[110%]">25&deg;</h2>
          <sub className="text-[32px] md:text-[64-px] xl:text-[80px] leading-[36px]">C</sub>
        </div>
        <div className="w-[134px] h-16 flex items-center justify-center flex-1">
          <img src="/favicon.png" alt="icon" />
        </div>
        </div>
        <div>
           <h2 className=' text-base'>Overcast Clouds</h2>
        </div>
        <div className='divider self-stretch my-4'></div>
        <div className='w-[248px h-[34px] flex pb-4 items-center gap-2 self-stretch'>
           <IoCalendarClearOutline />
           <p>Thursday, 16 Feb</p>
        </div>
        <div className='w-[248px h-[34px] flex pb-4 items-center gap-2 self-stretch'>
           <IoLocationOutline />
           <p>Bristol, UK</p>
        </div>
    </div>
  );
}

export default Card
/* eslint-disable react/prop-types */
import React from 'react'
import { IoCalendarClearOutline, IoLocationOutline } from 'react-icons/io5';
import { formatToLocalTime, iconUrlFromCode } from '../../services/WeatherService';

const Card = ({weather:{temp, description, details, dt, timezone, name, country, icon}}) => {
  return (
    <div className="card -z-[20]">
      <h1 className="font-semibold text-lg md:text-xl">Now</h1>
      <div className="flex py-3 items-center self-stretch">
        <div className="flex">
              <h2 className="text-[56px] md:text-[74-px] xl:text-[80px] leading-[110%]">{temp.toFixed(0)}&deg;</h2>
              <sub className="text-[32px] md:text-[64-px] xl:text-[80px] leading-[36px]">{temp < 40 ? 'C' : 'F'}</sub>
        </div>
        <div className="w-[134px] h-16 flex items-center justify-center flex-1 ">
          <img src={iconUrlFromCode(icon)} alt="icon" />
        </div>
        </div>
        <div>
           <h2 className=' text-base'>{`${details}, ${description}`}</h2>
        </div>
        <div className='divider self-stretch my-4'></div>
        <div className='w-[248px h-[34px] flex pb-4 items-center gap-2 self-stretch'>
           <IoCalendarClearOutline />
           <p>{formatToLocalTime(dt, timezone)}</p>
        </div>
        <div className='w-[248px h-[34px] flex pb-4 items-center gap-2 self-stretch'>
           <IoLocationOutline />
           <p>{`${name}, ${country}`}</p>
        </div>
    </div>
  );
}

export default Card
import React from 'react'
import { iconUrlFromCode } from '../../services/WeatherService';

const HourlyWeatherCard = ({items}) => {
   return (
     <>
       {items?.map((item, index) => (
         <div key={index} className="flex flex-col items-center gap-1 p-4 w-[116px] h-[148px] rounded-2xl bg-base-200">
           <p className="text-base 2xl:text-md">{item.title}</p>
           <img
             src={iconUrlFromCode(item.icon)}
             alt="icon"
             className="h-12 w-12 2xl:h-16 2xl:w-16"
           />
           <div className="flex items-center">
             <p className="text-base 2xl:text-md">{item.temp.toFixed()}&deg;</p>
           </div>
         </div>
       ))}
     </>
   );
}

export default HourlyWeatherCard
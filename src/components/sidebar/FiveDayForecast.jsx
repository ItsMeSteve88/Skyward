/* eslint-disable react/prop-types */
import React from 'react'
import FiveDayRow from './FiveDayRow'
import { formatToLocalTime, iconUrlFromCode } from '../../services/WeatherService';

const FiveDayForecast = ({weather: {icon, temp, feels_like, title, daily}}) => {
  return (
    <div className="fivedayforecast">
      <h1 className="pb-3 h-[37px] text-base font-semibold">5 Day Forecast</h1>
      <div className="fivedaycard">
        <div className="fivedayrow">
          <div className="w-[102px] lg:w-[113px] h-9 lg:h-11 flex items-center gap-1">
            <img
              src={iconUrlFromCode(icon)}
              alt="icon"
              className="w-9 h-9 lg:w-11 lg:h-11"
            />
            <h2 className="text-xl lg:text-[22px]">{temp.toFixed(0)}&deg;</h2>
                 <h2 className="text-sm lg:text-base">{ feels_like.toFixed(0)}&deg;</h2>
          </div>
          <p className="flex justify-end w-[73px]">17 Feb</p>
          <p className="flex justify-end w-[73px]">{daily[0].title}</p>
        </div>
      </div>
    </div>
  );
}

export default FiveDayForecast
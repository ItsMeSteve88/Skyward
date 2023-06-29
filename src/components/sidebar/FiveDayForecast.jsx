/* eslint-disable react/prop-types */
import React from 'react'
import FiveDayRow from './FiveDayRow'
import { iconUrlFromCode } from '../../services/WeatherService';

const FiveDayForecast = ({items}) => {
  return (
    <div className="fivedayforecast">
      <h1 className="pb-3 h-[37px] text-base font-semibold">5 Day Forecast</h1>
      <div className="fivedaycard">
           {items.map((item, index) => (
              <FiveDayRow key={index}
                 items={item}
                 icon={iconUrlFromCode(item.icon)}
                 feelslike={item.feels_like.toFixed()}
                 day={item.title}
                 details={item.details}
              />
        ))}
      </div>
    </div>
  );
}

export default FiveDayForecast
import React from 'react'
import { formatToLocalTime } from '../../services/WeatherService';


// eslint-disable-next-line react/prop-types
const SasCard = ({ weather: { sunrise, sunset, timezone }, sun, moon}) => {
  return (
    <div className="flex md:flex-1 items-center gap-4 md:gap-6 lg:gap-12 self-stretch">
      <div className="flex flex-1 flex-col md:flex md:flex-row justify-center items-start md:justify-start gap-2 md:gap-4 lg:gap-6">
        {sun}
        <div className="flex flex-col justify-center items-start gap-1 lg:gap-2 self-stretch">
          <p className="text-sm md:text-lg">Sunrise</p>
          <p className="text-xl md:text-2xl lg:text-3xl">{formatToLocalTime(sunrise, timezone, 'hh:mm')} AM</p>
        </div>
      </div>
      <div className="flex flex-1 flex-col md:flex md:flex-row justify-center items-start md:justify-start gap-2 md:gap-4 lg:gap-6">
        {moon}
        <div className="flex flex-col justify-center items-start gap-1 lg:gap-2 self-stretch">
          <p className="text-sm md:text-lg">Sunset</p>
          <p className="text-xl md:text-2xl lg:text-3xl">{formatToLocalTime(sunset, timezone, 'hh:mm')} PM</p>
        </div>
      </div>
    </div>
  );
}

export default SasCard
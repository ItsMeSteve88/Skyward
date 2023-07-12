import React from 'react'
import openweather from '../../public/assets/openweather.png'

const Footer = () => {
  return (
     <div className="flex items-center justify-center w-full mt-0 gap-2">
        <p className='font-bold text-lg text-neutral-focus'>Powered by</p>
      <a
        href="https://openweathermap.org/api"
        title="Free Openweather API"
        target="_blank"
        rel="noreferrer"
        >
        <img
          src={openweather}
          className="w-[150px] h-8"
          loading="lazy"
          alt="Openweather"
        />
        </a>
    </div>
  );
}

export default Footer
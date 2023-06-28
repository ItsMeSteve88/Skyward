import React from 'react'

const Footer = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full gap-2">
      <a
        href="https://openweathermap.org/api"
        title="Free Openweather API"
        target="_blank"
        rel="noreferrer"
      >
        <img
          src="/src/assets/openweather.png"
          className="w-[150px] h-8"
          loading="lazy"
          alt="Openweather"
        />
        </a>
    </div>
  );
}

export default Footer
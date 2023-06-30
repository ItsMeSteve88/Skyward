import { useEffect, useState } from "react";

import Navbar from './components/Navbar'
import HpvfCard from './components/main/HpvfCard';
import Card from './components/sidebar/Card';
import FiveDayForecast from './components/sidebar/FiveDayForecast';

import { WiHumidity, WiWindy, WiThermometer } from 'react-icons/wi';
import { HiOutlineSun, HiOutlineMoon } from "react-icons/hi2";
import { MdOutlineVisibility } from 'react-icons/md';
import SasCard from './components/main/SasCard';
import AqiCard from './components/main/AqiCard';
import HourlyWeatherCard from './components/main/HourlyWeatherCard';
import Footer from './components/Footer';
import getFormattedWeatherData from "./services/WeatherService";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App()
{
   
   const [query, setQuery] = useState({ q: "Hereford, US" });
   const [units, setUnits] = useState('metric');
   const [weather, setWeather] = useState(null);
   
   useEffect(() =>
   { 
     const fetchWeather = async () =>
     {
       const message = query.q ? query.q : 'current location'
 
       toast.info(`Fetching weather for your ${message}`);
       await getFormattedWeatherData({ ...query, units }).then((data) =>
       {
       toast.success(`Successfully fetched weather for ${data.name}, ${data.country}`)
          setWeather(data);
          console.log(data);
     });
   }
 
   fetchWeather();
   }, [query, units]);
   

  return (
    <div className="bg-base-300">
      <Navbar setQuery={setQuery} units={units} setUnits={setUnits} />
      {weather && (
        <div className="body bodypos">
          <div className="sidebar sidebarpos">
            <Card weather={weather} />
            <FiveDayForecast items={weather.daily} />
          </div>
          <div className="main mainpos">
            <div className="todayshighlights">
              <h1 className="text-lg font-semibold">Today&apos;s Highlights</h1>
              {/* AQI */}
              <div className="todayhighlightscard">
                <div className="aqi">
                  <AqiCard />
                </div>
                <div className="sas">
                  <h1 className="text-base 2xl:text-lg font-semibold">
                    Sunrise & Sunset
                  </h1>
                  <SasCard
                    sun={
                      <HiOutlineSun className="w-8 md:w-9 lg:w-12 h-8 md:h-9 lg:h-12" />
                    }
                    moon={
                      <HiOutlineMoon className="w-8 md:w-9 lg:w-12 h-8 md:h-9 lg:h-12" />
                    }
                  />
                </div>
              </div>

              <div className="hpvf">
                <div className="hpvfcontainer">
                  <HpvfCard
                    title="Humidity"
                    value={weather.humidity}
                    percent="%"
                    icon={<WiHumidity className="w-8 h-8 lg:w-10 lg:h-10" />}
                  />
                  <HpvfCard
                    title="Pressure"
                    value={weather.pressure}
                    hPa="hPa"
                    icon={<WiWindy className="w-8 h-8 lg:w-10 lg:h-10" />}
                  />
                </div>
                <div className="hpvfcontainer">
                  <HpvfCard
                    title="Wind Speed"
                    value={weather.speed.toFixed()}
                    km="km/h"
                    icon={
                      <MdOutlineVisibility className="w-8 h-8 lg:w-10 lg:h-10" />
                    }
                  />
                  <HpvfCard
                    title="Feels Like"
                    value={weather.feels_like.toFixed()}
                    degrees="&deg;C"
                    icon={<WiThermometer className="w-8 h-8 lg:w-10 lg:h-10" />}
                  />
                </div>
              </div>
              <div className="hourlyweather">
                <div className="flex items-center self-stretch pb-3">
                  <h1 className="text-lg font-semibold flex-1">Today at</h1>
                </div>
                <div className="hourlyrow ">
                          <HourlyWeatherCard items={weather.hourly} />
                  
                </div>
                <div className="hourlyrow2">
                  <HourlyWeatherCard />
                  
                </div>
              </div>
              <div className="divider " />
              <Footer />
            </div>
          </div>
        </div>
      )}
      <ToastContainer autoClose={5000} theme="colored" newestOnTop={true} />
    </div>
  );
}

export default App

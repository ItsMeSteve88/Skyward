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

function App() {
  return (
    <div className="bg-base-300">
      <Navbar />
      <div className="body bodypos">
        <div className="sidebar sidebarpos">
          <Card />
          <FiveDayForecast />
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
                  value="35"
                  percent="%"
                  icon={<WiHumidity className="w-8 h-8 lg:w-10 lg:h-10" />}
                />
                <HpvfCard
                  title="Pressure"
                  value="1019"
                  hPa="hPa"
                  icon={<WiWindy className="w-8 h-8 lg:w-10 lg:h-10" />}
                />
              </div>
              <div className="hpvfcontainer">
                <HpvfCard
                  title="Visibility"
                  value="10"
                  km="km"
                  icon={
                    <MdOutlineVisibility className="w-8 h-8 lg:w-10 lg:h-10" />
                  }
                />
                <HpvfCard
                  title="Feels Like"
                  value="25"
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
                <HourlyWeatherCard />
                <HourlyWeatherCard />
                <HourlyWeatherCard />
                <HourlyWeatherCard />
                <HourlyWeatherCard />
                <HourlyWeatherCard />
                <HourlyWeatherCard />
                <HourlyWeatherCard />
              </div>
              <div className="hourlyrow2">
                <HourlyWeatherCard />
                <HourlyWeatherCard />
                <HourlyWeatherCard />
                <HourlyWeatherCard />
                <HourlyWeatherCard />
                <HourlyWeatherCard />
                <HourlyWeatherCard />
                <HourlyWeatherCard />
              </div>
            </div>
            <div className="divider " />
            <Footer />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App

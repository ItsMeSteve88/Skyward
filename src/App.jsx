import Navbar from "./components/Navbar"
import HpvfCard from "./components/main/HpvfCard";
import Card from "./components/sidebar/Card";
import FiveDayForecast from "./components/sidebar/FiveDayForecast";

import { WiHumidity, WiWindy, WiThermometer } from "react-icons/wi";
import { MdOutlineVisibility } from "react-icons/md";

function App() {
  return (
    <div>
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
              <div className="aqi">asdasdasdasdasd</div>
              <div className="sas bg-yellow-300 2xl:w-[518px] 2xl:h-[200px]">
                asdasdasdasdasdkmkmnglkmg
              </div>
            </div>
            <div className="hpvf">
              <div className="hpvfcontainer">
                <HpvfCard
                  title="Humidity"
                  percent="35%"
                  icon={<WiHumidity className=" w-8 h-8" />}
                />
                <HpvfCard
                  title="Pressure"
                  hPa="1019hPa"
                  icon={<WiWindy className=" w-8 h-8" />}
                />
              </div>
              <div className="hpvfcontainer">
                <HpvfCard
                  title="Visibility"
                  km="10km"
                  icon={<MdOutlineVisibility className=" w-8 h-8" />}
                />
                <HpvfCard
                  title="Feels Like"
                  degrees="25&deg;C"
                  icon={<WiThermometer className=" w-8 h-8" />}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App

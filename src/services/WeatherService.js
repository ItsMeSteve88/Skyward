import { DateTime } from "luxon";

const API_KEY = 'b151305e489f9c23e3969770fc4d4b0e'
const BASE_URL = 'https://api.openweathermap.org/data/2.5/'

const getWeatherData = (infoType, searchParams) => {
   const url = new URL(BASE_URL + "/" + infoType);
   url.search = new URLSearchParams({ ...searchParams, appid: API_KEY });
   return fetch(url).then((res) => res.json());
};

const formatCurrentWeather = (data) => {
   const {
     coord: { lat, lon },
     main: { temp, feels_like, temp_min, temp_max, humidity, pressure },
     name,
     dt,
     sys: { country, sunrise, sunset },
     weather,
     wind: { speed },
     sender_name, event, status
   } = data;
 
   const { main: details, icon, description } = weather[0];
 
   return {
       lat,
       lon,
       temp,
       feels_like,
       temp_min,
       temp_max,
       pressure,
       humidity,
       speed,
       name,
       dt,
       country,
       sunrise,
       sunset,
       details,
       icon,
     description,
     sender_name,
     event,
     status,
   };
};
 
const formatForecastWeather = (data) => {
   let { timezone, daily, hourly, alerts } = data;
   daily = daily.slice(0, 5).map((d) => {
     return {
       title: formatToLocalTime(d.dt, timezone, "ccc"),
       temp: d.temp.day,
       icon: d.weather[0].icon,
       feels_like: d.feels_like.day,
       humidity: d.humidity,
       details: d.weather[0].main,
       description: d.weather[0].description,
       speed: d.wind_speed,
       pressure: d.pressure,
       sunrise: d.sunrise,
       sunset: d.sunset,
       temp_min: d.temp.min,
       temp_max: d.temp.max,
     };
   });
 
   hourly = hourly.slice(1, 9).map((d) => {
     return {
       title: formatToLocalTime(d.dt, timezone, "hh:mm a"),
       temp: d.temp,
       icon: d.weather[0].icon,
     };
   });

   alerts = alerts?.map((d) => {
     return {
       sender_name: d.sender_name,
       event: d.event,
       description: d.description,
     };
   });
   
   return { timezone, daily, hourly, alerts  };
};
 
const getFormattedWeatherData = async (searchParams) => {
   const formattedCurrentWeather = await getWeatherData(
     "weather",
     searchParams
   ).then(formatCurrentWeather);
 
   const { lat, lon } = formattedCurrentWeather;
 
   const formattedForecastWeather = await getWeatherData("onecall", {
     lat,
     lon,
     exclude: "current,minutely",
     units: searchParams.units,
   }).then(formatForecastWeather);
 
   return { ...formattedCurrentWeather, ...formattedForecastWeather };
};
 
export const aqiText = {
   1: {
      level: 'Good',
      message: 'Air quality is considered satisfactory, and air pollution poses little or no risk.'
      },
   2: {
      level: 'Fair',
      message: 'Air quality is acceptable; hovever, for some pollutants there may be a moderate health concern for a very small number of people who are unusually sensitive to air pollution.'
      },
   3: {
      level: 'Moderate',
      message: 'Members of sensitive groups may experience health effects. The general public is not likely to be affected.'
      },
   4: {
      level: 'Poor',
      message: 'Everyone may begin to experience health effects; members of sensitive groups may experience more serious effects.'
      },
   5: {
      level: 'Very Poor',
      message: 'Health warnings of emergency conditions, everyone is likely to be affected.'
      },
   }
 
 const formatToLocalTime = (
   secs,
   zone,
    format = "cccc, dd LLL yyyy'"
   //| Local time: 'hh:mm a
 ) => DateTime.fromSeconds(secs).setZone(zone).toFormat(format);
 
 const iconUrlFromCode = (code) =>
   `http://openweathermap.org/img/wn/${code}@2x.png`;
 
 export default getFormattedWeatherData;
 
 export { formatToLocalTime, iconUrlFromCode };
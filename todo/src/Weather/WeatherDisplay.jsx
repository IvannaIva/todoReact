import React from "react";
import CurrentWeather from './CurrentWeather/CurrentWeather'
import ExtendedForecast from './ExtendedForecast/ExtendedForecast'

const WeatherDisplay = ({ weatherData }) => {
  return (
    <div>
      {weatherData ? (
        <div>
          <CurrentWeather weatherData ={ weatherData }/>
          <ExtendedForecast weatherData ={ weatherData }/>
        </div>
      ) : (
        <p>Loading weather data...</p>
      )}
    </div>
  );
};

export default WeatherDisplay;

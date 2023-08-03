import React from "react";
import CurrentWeather from "./CurrentWeather/CurrentWeather";
import ExtendedForecast from "./ExtendedForecast/ExtendedForecast";
import LoadingSpinner from "../components/LoadingSpinner/LoadingSpinner";

const WeatherDisplay = ({ weatherData, searching }) => {
  return (
    <div>
      {searching ? (
        <LoadingSpinner />
      ) : weatherData ? (
        <div>
          <CurrentWeather weatherData={weatherData} />
          <ExtendedForecast weatherData={weatherData} />
        </div>
      ) : null}
    </div>
  );
};

export default WeatherDisplay;

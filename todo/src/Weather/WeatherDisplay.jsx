import React from "react";

const WeatherDisplay = ({ weatherData }) => {
  return (
    <div>
      {weatherData ? (
        <div>
          <h2>{weatherData.location.name}</h2>
          <p>{weatherData.current.temp_c}°C</p>
          <p>{weatherData.current.condition.text}</p>
        </div>
      ) : (
        <p>Loading weather data...</p>
      )}
    </div>
  );
};

export default WeatherDisplay;

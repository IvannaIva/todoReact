import React from "react";
import styles from "./Weather.module.css";
import WeatherInput from "./WeatherInput";
import WeatherDisplay from "./WeatherDisplay";
import { useState } from "react";

function WeatherPage() {
  const [weatherData, setWeatherData] = useState(null);
  const [errorMessage, setErrorMessage] = useState("");

  const handleWeatherSearch = (city) => {
    // Виконати запит до сервера погоди з введеним містом
    const apiKey = "00f03beed3204248b9484436232007";
    const apiUrl = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}`;

    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => {
        setWeatherData(data);
        setErrorMessage("");
      })
      .catch((error) => {
        console.error("Error fetching weather data:", error);
        setErrorMessage("Error fetching weather data");
        setWeatherData(null);
      });
  };
  return (
    <div className={styles.wrapper}>
      <div className={styles.weather}>
        <h1>React Weather</h1>
        <WeatherInput onSearch={handleWeatherSearch} />
        <WeatherDisplay weatherData={weatherData} />
      </div>
    </div>
  );
}

export default WeatherPage;

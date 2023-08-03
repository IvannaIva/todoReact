import React from "react";
import styles from "./Weather.module.css";
import WeatherInput from "./WeatherInput";
import WeatherDisplay from "./WeatherDisplay";
import { useDispatch, useSelector } from "react-redux";
import {
  setWeatherData,
  setError,
  setSearchingLoading,
} from "../store/weatherSlice";
import { useState } from "react";

function WeatherPage() {
  const dispatch = useDispatch();
  const weatherData = useSelector((state) => state.weather.weatherData);
  // const errorMessage = useSelector((state) => state.weather.errorMessage);
  const searching = useSelector((state) => state.weather.searching);

  const [errorMessage, setErrorMessage] = useState("");

  const handleWeatherSearch = (city) => {
    const apiKey = "00f03beed3204248b9484436232007";
    const apiUrlCurrent = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}`;
    const apiUrlForecast = `https://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${city}&days=7`;

    dispatch(setSearchingLoading(true));

    // Fetch current weather data
    fetch(apiUrlCurrent)
      .then((response) => response.json())
      .then((data) => {
        if (data.error) {
          setErrorMessage(data.error.message);
          dispatch(setWeatherData(null));
        } else {
          // No error, we have valid data
          setErrorMessage(null);
          // dispatch(setError(null)); // Clear any previous error message
          dispatch(setWeatherData(data));
        }
      })
      .catch((error) => {
        console.error("Error fetching current weather data:", error);
        setErrorMessage("Error fetching current weather data");
        // dispatch(setError("Error fetching current weather data"));
        dispatch(setWeatherData(null));
      })
      .finally(() => {
        dispatch(setSearchingLoading(false));
      });

    //Fetch forecast data for 7 days
    fetch(apiUrlForecast)
      .then((response) => response.json())
      .then((data) => {
        dispatch(setWeatherData(data));
        setErrorMessage("");
        dispatch(setSearchingLoading(false)); // Set searching to false after data is fetched
      })
      .catch((error) => {
        console.error("Error fetching forecast data:", error);
        setErrorMessage("Error fetching forecast data");
        dispatch(setWeatherData(null));
        dispatch(setSearchingLoading(false)); // Set searching to false after data is fetched
      });
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.weather}>
        <h1>React Weather</h1>
        <WeatherInput onSearch={handleWeatherSearch} />
        {errorMessage ? (
          <p className={styles.errorMessage}>Error: {errorMessage}</p>
        ) : (
          <WeatherDisplay weatherData={weatherData} searching={searching} />
        )}
      </div>
    </div>
  );
}

export default WeatherPage;

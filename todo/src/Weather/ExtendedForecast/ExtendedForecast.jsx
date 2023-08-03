import React, { useState, useEffect } from "react";
import styles from "../ExtendedForecast/ExtendedForecast.module.css";
import WeekDay from "../ExtendedForecast/WeekDay";
import LoadingSpinner from "../../components/LoadingSpinner/LoadingSpinner";

const ExtendedForecast = ({ weatherData }) => {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // Whenever the weatherData prop changes, set loading to true
    setLoading(true);

    if (weatherData && weatherData.forecast && weatherData.forecast.forecastday) {
      // If data is available, set loading to false after a short delay to simulate loading behavior
      setTimeout(() => {
        setLoading(false);
      }, 1000);
    }
  }, [weatherData]);

  const getDayOfWeek = (dateStr) => {
    // Function to get the day of the week from a date string
    const date = new Date(dateStr);
    const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    const dayOfWeek = date.getDay();
    const dayName = daysOfWeek[dayOfWeek];
    return dayName;
  };

  return (
    <>
      <div className={styles.extended_weather_wrapper}>
        <p className={styles.title_group}> Extended Forecast</p>
        <div className={styles.extended_weat_info_week}>
          {loading ? (
            // Show the loading spinner while loading is true
            <LoadingSpinner />
          ) : weatherData && weatherData.forecast && weatherData.forecast.forecastday ? (
            // If data is available, map through the forecastday array and render WeekDay components
            weatherData.forecast.forecastday.map((day) => (
              <WeekDay
                key={day.date_epoch}
                nameDay={getDayOfWeek(day.date)}
                icon={day.day.condition.icon}
                condition={day.day.condition.text}
                temperature1={day.day.maxtemp_c}
                temperature2={day.day.mintemp_c}
              />
            ))
          ) : null}
        </div>
      </div>
    </>
  );
};

export default ExtendedForecast;
import React from "react";
import styles from "../ExtendedForecast/ExtendedForecast.module.css";
import WeekDay from "../ExtendedForecast/WeekDay";

import {
  faWind,
  faTint,
  faCompress,
  faArrowDown,
  faArrowUp,
} from "@fortawesome/free-solid-svg-icons";

const ExtendedForecast = ({ weatherData }) => {
  
  const getDayOfWeek = (dateStr) => {
    const date = new Date(dateStr);

    const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    const dayOfWeek = date.getDay();
    const dayName = daysOfWeek[dayOfWeek];

    console.log("Date String:", dateStr);

    console.log("Day of Week:", dayName);

    return dayName;
  };

  return (
    <>
      <div className={styles.extended_weather_wrapper}>
        <p className={styles.title_group}> Extended Forecast</p>
        <div className={styles.extended_weat_info_week}>
         { weatherData.forecast.forecastday.map((day) => (
                <WeekDay
                  key={day.date_epoch}
                  nameDay={getDayOfWeek(day.date)}
                  icon={day.day.condition.icon}
                  temperature={day.day.maxtemp_c}
                />
              ))
         }
        </div>
      </div>
    </>
  );
};

export default ExtendedForecast;


import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "../CurrentWeather/CurrentWeather.module.css";

const TemperatureWithArrow = ({ icon, temperature }) => {
  return (
    <div className={styles.current_weather_arrow}>
      <FontAwesomeIcon icon={icon} />
      <p>{temperature}&deg;</p>
    </div>
  );
};

export default TemperatureWithArrow;

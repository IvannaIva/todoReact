
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "../CurrentWeather/CurrentWeather.module.css";

const WeekDay = ({ nameDay, icon, temperature }) => {
  
  return (
    <div className={styles.extended_weat_info_day}>
      <h3>{nameDay}</h3>
      <img
                src={icon}
                alt="Weather Icon"
              />
      <p>{temperature}&deg;</p>
    </div>
  );
};

export default WeekDay;

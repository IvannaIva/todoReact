import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "../ExtendedForecast/ExtendedForecast.module.css";

const WeekDay = ({ nameDay, icon,condition, temperature1, temperature2 }) => {
  return (
    <div className={styles.extended_weat_info_day}>
      <h3>{nameDay}</h3>
      <img src={icon} alt="Weather Icon" />
      <p className={styles.extended_weat_condition}>{condition}</p>
      <p>
        {temperature1}&deg;/{temperature2}&deg;
      </p>
    </div>
  );
};

export default WeekDay;

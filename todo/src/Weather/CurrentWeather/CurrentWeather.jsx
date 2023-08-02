import React from "react";
import styles from "../CurrentWeather/CurrentWeather.module.css";
import TemperatureWithArrow from "./TemperatureWithArrow";
import WeatherInfoRow from "./WeatherInfoRow";
import GroupName from "../Applications/GroupName";
import {
  faWind,
  faTint,
  faCompress,
  faArrowDown,
  faArrowUp,
} from "@fortawesome/free-solid-svg-icons";

const CurrentWeather = ({ weatherData }) => {
  
  return (
    <>
      <div className={styles.current_weather_wrapper}>
        <p className={styles.title_group}> Current Weather</p>
        <div className={styles.current_weat_info}>
          <div className={styles.current_basis_info}>
            <p className={styles.location_name}>{weatherData.location.name}</p>
            <div className={styles.current_weat_temp}>
              <img
                src={weatherData.current.condition.icon}
                alt="Weather Icon"
              />
              <p>{weatherData.current.temp_c}&deg;</p>
            </div>
            <p className={styles.current_text}>
              {weatherData.current.condition.text}
            </p>
          </div>

          <div className={styles.current_more_info}>
            <p className={styles.current_feelslike}>
              {" "}
              Feels like {weatherData.current.feelslike_c}&deg;
            </p>

            <div className={styles.current_weather_arrow_row}>
              <TemperatureWithArrow
                icon={faArrowDown}
                temperature={weatherData.current.temp_c}
              />
              <TemperatureWithArrow
                icon={faArrowUp}
                temperature={weatherData.current.feelslike_c}
              />
            </div>

            <div className={styles.weather_table}>
              <table>
                <tbody>
                  <WeatherInfoRow
                    icon={faWind}
                    label="Wind"
                    value={`${weatherData.current.wind_kph} kph`}
                  />
                  <WeatherInfoRow
                    icon={faTint}
                    label="Humidity"
                    value={`${weatherData.current.humidity} %`}
                  />
                  <WeatherInfoRow
                    icon={faCompress}
                    label="Pressure"
                    value={`${weatherData.current.pressure_mb} hPa`}
                  />
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CurrentWeather;

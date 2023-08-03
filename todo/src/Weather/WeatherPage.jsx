// import React from "react";
// import styles from "./Weather.module.css";
// import WeatherInput from "./WeatherInput";
// import WeatherDisplay from "./WeatherDisplay";
// import { useState } from "react";

// function WeatherPage() {
//   const [weatherData, setWeatherData] = useState(null);
//   const [errorMessage, setErrorMessage] = useState("");
//   const [searching, setSearching] = useState(false);

//   const handleWeatherSearch = (city) => {
//     const apiKey = "00f03beed3204248b9484436232007";
//     const apiUrlCurrent = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}`;
//     const apiUrlForecast = `https://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${city}&days=7`;

//     setSearching(true);

//     // Fetch current weather data
//     fetch(apiUrlCurrent)
//       .then((response) => response.json())
//       .then((data) => {
//         setWeatherData((prevData) => ({
//           ...prevData,
//           current: data.current,
//           location: data.location,
//           error: data.error,
//         }));
//         setErrorMessage("");
//       })
//       .catch((error) => {
//         console.error("Error fetching current weather data:", error);
//         setErrorMessage("Error fetching current weather data");
//         setWeatherData(null);
//       });

//     // Fetch forecast data for 7 days
//     fetch(apiUrlForecast)
//       .then((response) => response.json())
//       .then((data) => {
//         setWeatherData((prevData) => ({
//           ...prevData,
//           forecast: data.forecast,
//           error: data.error,
//         }));
//         setErrorMessage("");
//         setSearching(false); // Set searching to false after data is fetched
//       })
//       .catch((error) => {
//         console.error("Error fetching forecast data:", error);
//         setErrorMessage("Error fetching forecast data");
//         setWeatherData(null);
//         setSearching(false); // Set searching to false after data is fetched
//       });
//   };

//   return (
//     <div className={styles.wrapper}>
//       <div className={styles.weather}>
//         <h1>React Weather</h1>
//         <WeatherInput onSearch={handleWeatherSearch} />
//         <WeatherDisplay weatherData={weatherData} />
//       </div>
//     </div>
//   );
// }

// export default WeatherPage;

import React from "react";
import { Routes, Route } from "react-router-dom";
import TodoPage from "../pages/TodoPage"

import "../components/styles/App.css";
import WeatherPage from "../Weather/WeatherPage"
import Navbar from "../components/Navbar/Navbar"

const Authorized = () => {

  return (
    <div>
    {/* Навігація між "Todo" та "Weather" */}
   <Navbar/>

    {/* Роутинг */}
    <Routes>
      <Route path="/" element={<TodoPage />} />
      <Route path="/weather" element={<WeatherPage />} />
    </Routes>
  </div>
  );
};

export default Authorized;

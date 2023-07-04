import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import { useNavigate } from "react-router-dom";
import "../components/styles/App.css";
import LoginPage from "./LoginPage";

const Authorized = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      {/* <Route  path="/login" element={<LoginPage/>} /> */}
    </Routes>
  );
};

export default Authorized;

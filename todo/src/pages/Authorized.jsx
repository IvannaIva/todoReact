import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Home";

import "../components/styles/App.css";

const Authorized = () => {

  return (
    <Routes>
   <Route path="/home" element={<Home />} />

    </Routes>
  );
};

export default Authorized;

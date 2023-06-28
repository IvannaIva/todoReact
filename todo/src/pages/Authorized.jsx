import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Home";

const Authorized = () => {
  return (
    <Routes>
      <Route exact path="/" component={Home} />
    </Routes>
  );
};

export default Authorized;

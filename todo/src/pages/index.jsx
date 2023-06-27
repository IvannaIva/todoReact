import React, { Component } from "react";
import Home from "./Home";
import Login from "./Login";
import { Route, Routes } from "react-router-dom";
import "../components/styles/App.css";
import { NavLink } from "react-router-dom";

import { Layout } from "../components/Layout";

function RoutesPages() {
  return (
    <div>
         <NavLink to="/">login</NavLink>
      <NavLink to="home">Home</NavLink>
     

      <Routes>
        {/* <Route path="/" element={<Layout />}> */}
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />{" "}
         {/* </Route>{" "} */}
      </Routes>
    </div>
  );
}

export { RoutesPages };

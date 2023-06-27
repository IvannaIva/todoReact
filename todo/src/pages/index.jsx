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
      <NavLink to="/">Home</NavLink>
      <NavLink to="login">login</NavLink>

      <Routes>
        {/* <Route path="/" element={<Layout />}> */}
        <Route index element={<Home />} />{" "}
        <Route path="login" element={<Login />} /> {/* </Route>{" "} */}
      </Routes>
    </div>
  );
}

export { RoutesPages };

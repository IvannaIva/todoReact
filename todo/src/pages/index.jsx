import React, { Component } from "react";
import Home from "./Home";
import LoginPage from "./LoginPage";
import { Route, Routes } from "react-router-dom";
import "../components/styles/App.css";
import { NavLink } from "react-router-dom";

import { Layout } from "../components/Layout";

function RoutesPages() {
  return (
    <div>
      {/* <NavLink to="/">Home</NavLink>
      <NavLink to="login">login</NavLink> */}

      <Routes>
        <Route index path="/" element={<LoginPage />} />
      </Routes>
    </div>
  );
}

export { RoutesPages };

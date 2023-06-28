import React, { Component } from "react";
import Home from "./Home";
import LoginPage from "./LoginPage";
import { Route, Routes } from "react-router-dom";
import "../components/styles/App.css";
import { NavLink } from "react-router-dom";

import { Layout } from "../components/Layout";

function NoAuthorized() {
  return (


      <Routes>
        <Route  path="/" element={<LoginPage />} />
      </Routes>
 
  );
}

export  {NoAuthorized} ;

import React, { Component } from "react";
import Home from "./Home";
import LoginPage from "./LoginPage";
import { Route, Routes } from "react-router-dom";
import "../components/styles/App.css";
import { NavLink } from "react-router-dom";
import {useNavigate} from "react-router-dom"
import { Layout } from "../components/Layout";
import SignupForm from "../components/EmailPasForm/SignupForm";

function NoAuthorized() {
  
  return (


      <Routes>
        <Route  path="/" element={<LoginPage/>} />
        <Route  path="/signup" element={<SignupForm/>} />
      </Routes>
 
  );
}

export  {NoAuthorized} ;

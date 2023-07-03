import React, { Component } from "react";
import LoginPage from "./LoginPage";
import { Route, Routes } from "react-router-dom";
import "../components/styles/App.css";
import SignupForm from "../components/EmailPasForm/SignupForm";

function NoAuthorized() {
  
  return (


      <Routes>
        <Route  path="/" element={<LoginPage/>} />
        <Route  path="/signup" element={<SignupForm/>} />
      </Routes>
 
  );
}

export  default NoAuthorized ;

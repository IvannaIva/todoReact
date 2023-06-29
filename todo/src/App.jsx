import "./components/styles/App.css";
import React, { Component } from "react";
import { useState } from "react";
import { NoAuthorized } from "./pages/NoAuthorized";
import { BrowserRouter } from "react-router-dom";
import Authorized from "./pages/Authorized";
import { loginSuccess, logout } from "./store/loginSlice";
import { useDispatch, useSelector } from "react-redux";

function App() {
  //const [isAuthenticated, setIsAuthenticated] = useState(false);
  const dispatch = useDispatch();

  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);


  return (
    <BrowserRouter>
      <div className="App">
        {isAuthenticated ? <Authorized /> : <NoAuthorized />}
      </div>
    </BrowserRouter>
  );
}

export default App;

import "./components/styles/App.css";
import React, { Component } from "react";

import { RoutesPages } from "./pages/index";
import { BrowserRouter } from "react-router-dom";
import Authorized from "./pages/Authorized";

function App() {
  const isAuthenticated = true;
  return (
    <BrowserRouter>
      <div className="App">
        {/* {isAuthenticated ? <Authorized /> : <RoutesPages />} */}
        {/* <RoutesPages /> */}
        <Authorized />
      </div>
    </BrowserRouter>
  );
}

export default App;

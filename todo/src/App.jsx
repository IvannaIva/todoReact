import "./components/styles/App.css";
import React, { Component } from "react";

import { RoutesPages } from "./pages/index";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <RoutesPages />
      </BrowserRouter>
    </div>
  );
}

export default App;

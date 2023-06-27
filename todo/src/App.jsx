import "./components/styles/App.css";
import React, { Component } from "react";

import { RoutesPages } from "./pages/index";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <RoutesPages />
      </div>
    </BrowserRouter>
  );
}

export default App;

import "./components/styles/App.css";
import React, { Component } from "react";

import { NoAuthorized } from "./pages/NoAuthorized";
import { BrowserRouter } from "react-router-dom";
import Authorized from "./pages/Authorized";

function App() {
  const isAuthenticated = true;
  return (
    <BrowserRouter>
      <div className="App">
        {isAuthenticated ? <Authorized /> : <NoAuthorized />}
      </div>
    </BrowserRouter>
  );
}

export default App;

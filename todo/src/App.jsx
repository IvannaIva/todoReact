import "./components/styles/App.css";
import React, { Component } from "react";
import NoAuthorized  from "./pages/NoAuthorized";
import { BrowserRouter } from "react-router-dom";
import Authorized from "./pages/Authorized";
import { useDispatch, useSelector } from "react-redux";
import { Amplify } from "aws-amplify";


Amplify.configure({
  Auth:{
    region: 'eu-west-1',
    userPoolId: 'eu-west-1_NtYADw6iB',
    userPoolWebClientId: '6p77ar4vnpnpvn6efvqlca6od9',
    mandatorySignIn: true,
  }
});


function App() {

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

import "./components/styles/App.css";
import React, { useEffect } from "react";
import NoAuthorized from "./pages/NoAuthorized";
import { BrowserRouter } from "react-router-dom";
import Authorized from "./pages/Authorized";
import { useDispatch, useSelector } from "react-redux";
import { Amplify } from "aws-amplify";
import { Auth } from "aws-amplify";
import { loginSuccess, logout } from "./store/loginSlice";


Amplify.configure({
  Auth: {
    region: "eu-west-1",
    userPoolId: "eu-west-1_KGw92t7wL",
    userPoolWebClientId: "p9d9fui41efv0hj0a5q0mssvf",
    mandatorySignIn: true,
  },
});


// Amplify.configure({
//   Auth: {
//     region: "eu-west-1",
//     userPoolId: "eu-west-1_NtYADw6iB",
//     userPoolWebClientId: "6p77ar4vnpnpvn6efvqlca6od9",
//     mandatorySignIn: true,
//   },
// });




function App() {
  const dispatch = useDispatch();
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

  useEffect(() => {
    checkSession();
  }, []);

  async function checkSession() {
    try {
      const session = await Auth.currentSession();
      console.log("Session is active");

      if (session.isValid()) {
        console.log("Session is valid");
        dispatch(loginSuccess());
      } else {
        console.log("Session is not valid");
        dispatch(logout());
      }
    } catch (error) {
      console.log("No active session");
      dispatch(logout());
    }
  }

  return (
    <BrowserRouter>
      <div className="App">
        {isAuthenticated ? <Authorized /> : <NoAuthorized />}
      </div>
    </BrowserRouter>
  );
}

export default App;

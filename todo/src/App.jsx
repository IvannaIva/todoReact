import "./components/styles/App.css";
import React, { Component } from "react";
import { useState } from "react";
import { NoAuthorized } from "./pages/NoAuthorized";
import { BrowserRouter } from "react-router-dom";
import Authorized from "./pages/Authorized";

export const AuthenticatedContext = React.createContext();

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();

    // Отримати значення введеної електронної пошти та пароля
    const email = e.target.elements.email.value;
    const password = e.target.elements.password.value;

    // Перевірити ідентифікаційні дані
    if (email === "admin@example.com" && password === "password") {
      // Якщо ідентифікація пройшла успішно, оновити стан isAuthenticated
      setIsAuthenticated(true);
    } else {
      // Якщо ідентифікація неуспішна, виконати певні дії, наприклад, відобразити повідомлення про помилку
      console.log("Невірні ідентифікаційні дані");
    }
  };

  return (
    <BrowserRouter>
      <div className="App">
        <AuthenticatedContext.Provider value={{ handleLogin }}>
          {isAuthenticated ? <Authorized /> : <NoAuthorized />}
        </AuthenticatedContext.Provider>
      </div>
    </BrowserRouter>
  );
}

export default App;

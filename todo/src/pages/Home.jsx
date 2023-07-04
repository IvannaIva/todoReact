import "../components/styles/App.css";
import React, { Component } from "react";

import { TodoList } from "../components/TodoList/TodoList";
import TodoForm from "../components/TodoForm/TodoForm";

import MyButton from "../components/button/MyButton";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logout } from "../store/loginSlice";

function Home() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleLoginoutButton = (e) => {
    // e.preventDefault();

    dispatch(logout());

    navigate("/login");
  };

  return (
    <div className="Home">
      <div className="loginout-button">
        <MyButton onClick={handleLoginoutButton}>loginout</MyButton>
      </div>
      <TodoForm />

      <TodoList title="Список справ !" />
    </div>
  );
}

export default Home;

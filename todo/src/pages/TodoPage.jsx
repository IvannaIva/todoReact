import "../components/styles/App.css";
import React, { Component } from "react";

import { TodoList } from "../components/TodoList/TodoList";
import TodoForm from "../components/TodoForm/TodoForm";
import UserNamePage from "../components/UserName/UserName";

import MyButton from "../components/button/MyButton";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logout } from "../store/loginSlice";
import { signOut } from "../api/auth";

function TodoPage() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleLogoutButton = async () => {
    const response = await signOut();
    if (response.isSuccess) {
      dispatch(logout());
      navigate("/");
      console.log("response.data", response.data);
    } else {
      console.log("response_error", response.error);
    }
    console.log(response);
  };

  return (
    <div className="Home">
      <div className="loginout-button">
        <MyButton onClick={handleLogoutButton}>loginout</MyButton>
      </div>
      <UserNamePage/>
      <TodoForm />

      <TodoList title="Список справ !" />
    </div>
  );
}

export default TodoPage;

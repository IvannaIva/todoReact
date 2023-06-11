import "./components/styles/App.css";
import React, { Component } from "react";
import { useState } from "react";
import { TodoList } from "./components/TodoList";
import TodoForm from "./components/TodoForm";
import { useEffect } from "react";

import useLocalStorage from "./components/useLocalStorage";

import getDatafromLS from "./components/GetDataLS";
// const getDatafromLS = () => {
//   const data = localStorage.getItem("todos");

//   if (data) {
//     return JSON.parse(data);
//   } else {
//     return [];
//   }
// };

//const dataTod = getDatafromLS()

function App() {
  const [todos, setTodos] = useLocalStorage("dataTod", []);

  console.log(todos);
  const createTodo = (newTodo) => {
    setTodos([...todos, newTodo]);
  };

  const removeTodo = (todo) => {
    setTodos((prevState) => {
      const newArr = [...prevState].filter((el) => el.id !== todo.id);
      return newArr;
    });
  };

  const editTodo = (edittodo) => {
    const editTitle = prompt("tytytry");

    console.log(edittodo);

    setTodos((prevState) => {
      const newArr = [...prevState].map((el) =>
        el.id === edittodo.id ? { ...el, title: editTitle } : el
      );
      return newArr;
    });
  };

  const addLabelToTodo = (todo) => {
    setTodos((prevState) => {
      const newArr = [...prevState].map((el) =>
        el.id === todo.id ? { ...el, labels: "" } : el
      );

      // const newArr = prevState.map((el) =>
      //   //el.id === todoId ? { ...el, labels: [...el.labels, label] } : el
      // );

      return newArr;
    });
  };

  // useEffect(() => {
  //   localStorage.setItem("todos", JSON.stringify(todos));
  // }, [todos]);

  return (
    <div className="App">
      <TodoForm create={createTodo} />

      <TodoList
        addLabel={addLabelToTodo}
        edit={editTodo}
        remove={removeTodo}
        todos={todos}
        title="Список справ !"
      />
    </div>
  );
}

export default App;

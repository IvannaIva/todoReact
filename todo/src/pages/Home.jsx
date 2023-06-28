import "../components/styles/App.css";
import React, { Component } from "react";

import { TodoList } from "../components/TodoList/TodoList";
import TodoForm from "../components/TodoForm/TodoForm";

import useLocalStorage from "../hooks/useLocalStorage";

function Home() {
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

  const editTodo = (todo, newTitle) => {
    console.log("todo", todo);
    console.log("newTitle", newTitle);
    setTodos((prevState) => {
      const newArr = [...prevState].map((el) =>
        el.id === todo.id ? { ...el, title: newTitle } : el
      );
      return newArr;
    });
  };

  const addLabelToTodo = (label, todo) => {
    setTodos((prevState) => {
      const newArr = prevState.map((el) => {
        if (el.id === todo.id) {
          // Check if the label already exists in the labels array

          const labelIndex = el.labels.indexOf(label);

          if (labelIndex !== -1) {
            const updatedLabels = [...el.labels];

            updatedLabels.splice(labelIndex, 1);
            return { ...el, labels: updatedLabels };
          } else {
            return { ...el, labels: [...el.labels, label] };
          }
        }
        return el;
      });
      return newArr;
    });
  };

  const removeLabelFromTodo = (labelToRemove, todo) => {
    setTodos((prevState) => {
      const updatedTodos = prevState.map((el) => {
        if (el.id === todo.id) {
          const updatedLabels = el.labels.filter(
            (label) => label !== labelToRemove
          );
          return { ...el, labels: updatedLabels };
        }
        return el;
      });
      return updatedTodos;
    });
  };

  return (
    <div className="Home">
      <TodoForm create={createTodo} />

      <TodoList
        removeLabelFromTodo={removeLabelFromTodo}
        addLabel={addLabelToTodo}
        editTodo={editTodo}
        remove={removeTodo}
        todos={todos}
        title="Список справ !"
      />
    </div>
  );
}

export default Home;

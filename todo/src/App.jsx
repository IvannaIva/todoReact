import "./components/styles/App.css";
import React, { Component } from "react";

import { TodoList } from "./components/TodoList";
import TodoForm from "./components/TodoForm";

import useLocalStorage from "./components/useLocalStorage";

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

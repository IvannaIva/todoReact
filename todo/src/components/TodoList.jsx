import React from "react";
import { TodoItem } from "./TodoItem";

export const TodoList = ({todos, title}) => {
  return (
    <div>
      <h1 style={{ textAlign: "center" }}> {title} </h1>
      {todos.map((todo, index) => (
        <TodoItem number={index+1} todo={todo} key={todo.id} />
      ))}
    </div>
  );
};

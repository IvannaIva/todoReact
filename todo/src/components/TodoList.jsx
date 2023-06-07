import React from "react";
import { TodoItem } from "./TodoItem";

export const TodoList = ({ todos, title, remove, edit }) => {
  if (!todos.length) {
    return <h1 style={{ textAlign: "center" }}>Список порожній !</h1>;
  }

  return (
    <div>
      <h1 style={{ textAlign: "center" }}> {title} </h1>
      {todos.map((todo, index) => (
        <TodoItem
          edit={edit}
          remove={remove}
          number={index + 1}
          todo={todo}
          key={todo.id}
        />
      ))}
    </div>
  );
};

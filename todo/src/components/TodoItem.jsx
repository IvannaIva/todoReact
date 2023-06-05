import React from "react";

export const TodoItem = (props) => {
  return (
    <div className="todo">
      <div className="todo__content">
        <div>{props.number}. {props.todo.title}</div>
      </div>
      <div className="todo__btns">
        <button>Del</button>
      </div>
    </div>
  );
};

import React from "react";
import { useState } from "react";
import MyInput from "./UI/input/MyInput";
import MyButton from "./UI/button/MyButton";

export default function TodoForm({ create }) {
  const [todo, setTodo] = useState({ title: "" });

  const addNewPost = (e) => {
    e.preventDefault();

    const newTodo = {
      ...todo,
      id: Date.now(),
    };

    create(newTodo);
   // setTodo({ title: "" });
  };

  return (
    <form>
      <MyInput
        value={todo.title}
        onChange={(e) => setTodo({ ...todo, title: e.target.value })}
        type="text"
        placeholder="Назва списку"
      />
      <MyButton onClick={addNewPost}> Add Todo </MyButton>
    </form>
  );
}

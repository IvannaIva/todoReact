import React from "react";
import { useState } from "react";
import MyInput from "./UI/input/MyInput";
import MyButton from "./UI/button/MyButton";
import { useEffect } from "react";

export default function TodoForm({ create }) {
  const [todo, setTodo] = useState({ title: "", description:""});

  

  const addNewPost = (e) => {
    e.preventDefault();

    const newTodo = {
      ...todo,
      id: Date.now(),
      labels: [],
    };

    create(newTodo);
    setTodo({ title: "", description: ""});
  };

  return (
    <form>
      <MyInput
        value={todo.title}
        onChange={(e) => setTodo({ ...todo, title: e.target.value })}
        type="text"
        placeholder="Назва списку"
      />
      <MyInput
        value={todo.description}
        onChange={(e) => setTodo({ ...todo, description: e.target.value })}
        type="text"
        placeholder="description"
      />
      <MyButton onClick={addNewPost}> Add Todo </MyButton>
    </form>
  );
}

import React, { useState } from "react";
import MyInput from "../input/MyInput";
import MyButton from "../button/MyButton";

import { useDispatch } from "react-redux";
import {addTodo} from '../../store/todoSlice'

export default function TodoForm() {
  const [todo, setTodo] = useState({ title: "", description: "" });
  
  const dispatch = useDispatch();
  const addTask = () => dispatch((addTodo({todo})))
  
  const [showAlert, setShowAlert] = useState(false);

  const alertAboutTitle = () => {
    setShowAlert(true);
    setTimeout(() => {
      setShowAlert(false);
    }, 2000);
  };

  const addNewPost = (e) => {
    e.preventDefault();
    if (todo.title.trim() === "") {
    alertAboutTitle();
      return;
    }


   addTask()
    setTodo({ title: "", description: "" });
  };

  return (
    <form>
      <MyInput
        value={todo.title}
        onChange={(e) => setTodo({ ...todo, title: e.target.value })}
        type="text"
        placeholder="Назва списку"
      />
       {showAlert && (
        <div className="alert">
          <span>Заголовок не може бути порожнім</span>
        </div>
      )}
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

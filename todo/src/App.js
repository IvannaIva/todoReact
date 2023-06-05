import "./components/styles/App.css";
import { useState } from "react";
import { TodoList } from "./components/TodoList";
import TodoForm from "./components/TodoForm";

function App() {
  const [todos, setTodos] = useState([
    { id: 1, title: "qqqqqqqqqqq" },
    { id: 2, title: "sadadasdasda" },
  ]);

  const createTodo = (newTodo) => {
    setTodos([...todos, newTodo]);
  };

  return (
    <div className="App">
      <TodoForm create={createTodo} />
      <TodoList todos={todos} title="sjaflnlasf" />
    </div>
  );
}

export default App;

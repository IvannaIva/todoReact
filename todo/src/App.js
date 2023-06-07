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

  const removeTodo = (todo) => {
    console.log(todo);
    setTodos(todos.filter((t) => t.id !== todo.id));
  };

  const editTodo = (edittodo) => {
    const editTitle = prompt("tytytry");

    console.log(edittodo);

    todos.find((t) => {
      if (t.id === edittodo.id) {
        return (t.title = editTitle);
      }
    });

    setTodos([...todos]);
  };

  return (
    <div className="App">
      <TodoForm create={createTodo} />

      <TodoList
        edit={editTodo}
        remove={removeTodo}
        todos={todos}
        title="Список справ !"
      />
    </div>
  );
}

export default App;

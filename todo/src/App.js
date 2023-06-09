import "./components/styles/App.css";
import { useState } from "react";
import { TodoList } from "./components/TodoList";
import TodoForm from "./components/TodoForm";

function App() {
  const [todos, setTodos] = useState([
    { id: 1, title: "qqqqqqqqqqq", labels: [] },
    { id: 2, title: "sadadasdasda", labels: [] },
  ]);

  
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

  const addLabelToTodo = (label, todoId) => {
    setTodos((prevState) => {
      const newArr = prevState.map((el) =>
        //el.id === todoId ? { ...el, labels: [...el.labels, label] } : el
        el.id === todoId ? { ...el, labels: '' } : el
      );
      
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

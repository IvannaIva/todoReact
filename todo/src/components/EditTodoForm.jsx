import React from "react";
import { useState } from "react";


const EditTodoForm = ({ todo, handleEdit }) => {
  const [newTitle, setNewTitle] = useState(todo.title);

  return (
    <form onSubmit={(e) => handleEdit(newTitle)}>
      <input
        type="text"
        value={newTitle}
        onChange={(e) => setNewTitle(e.target.value)}
      />
      <button type="submit">Save</button>
    </form>
  );
};

export default EditTodoForm;

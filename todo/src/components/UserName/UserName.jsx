import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { updateName } from "../../store/loginSlice";

function UserNamePage() {
  const dispatch = useDispatch();
  const name = useSelector((state) => state.auth.name);
  const [editMode, setEditMode] = useState(false);
  const [newName, setNewName] = useState("");

  const handleEditName = () => {
    setEditMode(true);
  };

  const handleSaveName = () => {
    dispatch(updateName(newName));
    setEditMode(false);
  };

  const handleChangeName = (event) => {
    setNewName(event.target.value);
  };

  return (
    <div>
      <h1>Hello, {name}</h1>

      {!editMode ? (
        <button onClick={handleEditName}>
          {name ? "Edit name" : "Add name"}
        </button>
      ) : (
        <div>
          <input type="text" value={newName} onChange={handleChangeName} />
          <button onClick={handleSaveName}>Save name</button>
        </div>
      )}
    </div>
  );
}

export default UserNamePage;

import React from "react";
import { useState } from "react";
import MyButton from "./UI/button/MyButton";
import { TbDotsVertical } from "react-icons/tb";
import MyModal from "./MyModal/MyModal";

export const TodoItem = (props) => {
  let [dotsOpen, setDotsOpen] = useState(false);
  const [modal, setModal] = useState(false);

  return (
    <div className="todo">
      <div className="todo__content">
        <div>
          {props.number}. {props.todo.title}
        </div>
      </div>
      <div className="todo__btns">
        <TbDotsVertical
          onClick={() => setDotsOpen((dotsOpen = !dotsOpen))}
          className="tree-dots-button"
        />
        {dotsOpen && (
          <div className="tree-dots">
           
              <MyButton onClick={() => props.remove(props.todo)}>Del</MyButton>
              <MyButton onClick={() => props.edit(props.todo)}>Edit</MyButton>

              <MyButton onClick={() => setModal(true)}>Attach Label</MyButton>

              <MyModal visible={modal} setVisible={setModal}>
                {" "}
              </MyModal>
           
          </div>
        )}
      </div>
    </div>
  );
};

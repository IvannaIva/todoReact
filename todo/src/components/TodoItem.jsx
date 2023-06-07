import React from "react";
import { useState } from "react";
import MyButton from "./UI/button/MyButton";
import { TbDotsVertical } from "react-icons/tb";
import MyModal from "./MyModal/MyModal";
import CustomButton from './UI/button/CustomButton';

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
           
              <CustomButton size='150px' onClick={() => props.remove(props.todo)}>Del</CustomButton>
              <div style={{ marginBottom: "10px" }}></div>
              <CustomButton size='150px' onClick={() => props.edit(props.todo)}>Edit</CustomButton>
              <div style={{ marginBottom: "10px" }}></div>
              <CustomButton  size='150px' onClick={() => setModal(true)}>Attach Label</CustomButton>

              <MyModal visible={modal} setVisible={setModal}>
                {" "}
              </MyModal>
           
          </div>
        )}
      </div>
    </div>
  );
};

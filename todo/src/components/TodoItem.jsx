import React from "react";
import { useState } from "react";
import { TbDotsVertical } from "react-icons/tb";
import MyModal from "./MyModal/MyModal";
import CustomButton from "./UI/button/CustomButton";
import LabelButtons from "./LabelButtons";
import SelectedLabel from "./SelectedLabel";

export const TodoItem = ({ ...props }) => {
  const [dotsOpen, setDotsOpen] = useState(false);
  const [modal, setModal] = useState(false);

  const handleLabelClick = (label) => {
    const arrLabels = props.todo.labels;
    console.log("arrLabels", arrLabels);

    const labelIndex = arrLabels.indexOf(label);

    if (labelIndex !== -1) {
      arrLabels.splice(labelIndex, 1);
      props.addLabel("", props.todo);
    } else {
      //  Додавання лейблу, якщо він не вибраний
      props.addLabel(label, props.todo);
    }

    setModal(false);
  };

  const closeDotsOpen = () => {
    setDotsOpen(false);
  };

  const openModal = () => {
    setModal(true);
    closeDotsOpen(); // Додано для закриття меню dots при відкритті модального вікна
  };

  return (
    <div className="todo">
      <div className="todo__content">
        <div>
          {props.number}. {props.todo.title}
        </div>
      </div>

      <div className="selected-label">
        {props.todo.labels.map((label) => (
          <SelectedLabel label={label} key={label.id} />
        ))}
      </div>

      <div className="todo__btns">
        <TbDotsVertical
          onClick={() => setDotsOpen((prevState) => !prevState)}
          className="tree-dots-button"
        />
        {dotsOpen && (
          <div className="tree-dots">
            <div className="tree-dots-content">
              <CustomButton
                size="150px"
                onClick={() => props.remove(props.todo)}
              >
                Del
              </CustomButton>

              <div style={{ marginBottom: "10px" }}></div>
              <div className="deleteItem" onClick={() => setDotsOpen(false)}>
                <CustomButton
                  size="150px"
                  onClick={() => props.edit(props.todo)}
                >
                  Edit
                </CustomButton>{" "}
              </div>
              <div style={{ marginBottom: "10px" }}></div>

              <CustomButton size="150px" onClick={openModal}>
                Attach Label
              </CustomButton>
            </div>
          </div>
        )}
      </div>
      <MyModal visible={modal} setVisible={setModal}>
        <LabelButtons handleLabelClick={handleLabelClick} />
      </MyModal>
    </div>
  );
};

import React from "react";
import { useState } from "react";
import { TbDotsVertical } from "react-icons/tb";
import MyModal from "./MyModal/MyModal";
import CustomButton from "./UI/button/CustomButton";
import LabelButtons from "./LabelButtons";
import { useEffect } from "react";
import useLocalStorage from "./useLocalStorage";

export const TodoItem = (props) => {
  const [dotsOpen, setDotsOpen] = useState(false);
  const [modal, setModal] = useState(false);

  const [selectedLabel, setSelectedLabel] = useState([]);

  const handleLabelClick = (label) => {
    if (selectedLabel.includes(label)) {
      // Видалення лейблу, якщо він вже вибраний

      const updatedLabels = selectedLabel.filter(
        (selectedLabel) => selectedLabel !== label
      );
      setSelectedLabel(updatedLabels);
    } else {
      // Додавання лейблу, якщо він не вибраний

      const updatedLabels = [...selectedLabel, label];

      setSelectedLabel(updatedLabels);
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

      {selectedLabel && <div className="selected-label">{selectedLabel}</div>}
      {/* 
 {selectedLabel && <SelectedLabel selectedLabel={selectedLabel}/>} */}

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

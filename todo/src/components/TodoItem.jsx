import React from "react";
import { useState } from "react";
import { TbDotsVertical } from "react-icons/tb";
import MyModal from "./MyModal/MyModal";
import CustomButton from "./UI/button/CustomButton";
import LabelButtons from "./LabelButtons";
import SelectedLabel from "./SelectedLabel";

import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";

export const TodoItem = ({ ...props }) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const toggle = () => setDropdownOpen((prevState) => !prevState);

  const [modal, setModal] = useState(false);

  const handleLabelClick = (label) => {
    props.addLabel(label, props.todo);
    setModal(false);
  };

  const openModal = () => {
    setModal(true);
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
        <Dropdown isOpen={dropdownOpen} toggle={toggle} {...props}>
          <DropdownToggle>
            <TbDotsVertical className="tree-dots-button" />
          </DropdownToggle>
          <DropdownMenu>
            <DropdownItem>
              <CustomButton
                size="150px"
                onClick={() => props.remove(props.todo)}
              >
                Del
              </CustomButton>
            </DropdownItem>
            <DropdownItem>
              <CustomButton size="150px" onClick={() => props.edit(props.todo)}>
                Edit
              </CustomButton>
            </DropdownItem>
            <DropdownItem>
              <CustomButton size="150px" onClick={openModal}>
                Attach Label
              </CustomButton>
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>
      </div>
      <MyModal visible={modal} setVisible={setModal}>
        <LabelButtons handleLabelClick={handleLabelClick} />
      </MyModal>
    </div>
  );
};

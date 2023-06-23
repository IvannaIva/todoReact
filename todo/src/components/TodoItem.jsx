import React from "react";
import { useState } from "react";
import { TbDotsVertical } from "react-icons/tb";
import MyModal from "./MyModal/MyModal";
import CustomButton from "./UI/button/CustomButton";
import LabelButtons from "./LabelButtons";
import SelectedLabel from "./SelectedLabel";
import EditTodoForm from "./EditTodoForm";

import {
  Accordion,
  AccordionBody,
  AccordionHeader,
  AccordionItem,
} from "reactstrap";

import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";

export const TodoItem = ({ ...props }) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [editOpen, setEditOpen] = useState(false);
  const toggle = () => setDropdownOpen((prevState) => !prevState);
  const toggleEdit = () => setEditOpen((prevState) => !prevState);

  const [modal, setModal] = useState(false);
  const [open, setOpen] = useState(false);

  const toggleOpenDes =() => {
    setOpen((prevState) => !prevState);
  }
  // const toggleOpenDes = (id) => {
  //   if (open === id) {
  //     setOpen(); 
  //   } else {
  //     setOpen(id); 
  //   }
  // };

  const handleEdit = (newTitle) => {
    props.editTodo(props.todo, newTitle);
    setEditOpen(false);
  };

  const handleLabelClick = (label) => {
    props.addLabel(label, props.todo);
    setModal(false);
  };

  const openModal = () => {
    setModal(true);
  };

  return (
    // <div className="todo">
    <div>
      <Accordion
        // open={open}
        // toggleOpenDes={toggleOpenDes}
      
      >
        <AccordionItem >
          <AccordionHeader onClick={toggleOpenDes}>
            {editOpen ? (
              <div className="todo__content">
                {" "}
                <span>{props.number}.</span>
                <EditTodoForm todo={props.todo} handleEdit={handleEdit} />
              </div>
            ) : (
              <div className="todo__content">
                {" "}
                <span>{props.number}.</span>
                {props.todo.title}
              </div>
            )}

            <div className="selected-label">
              {props.todo.labels.map((label, index) => (
                <SelectedLabel
                  removeLabelFromTodo={props.removeLabelFromTodo}
                  label={label}
                  key={index}
                  todo={props.todo}
                />
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
                    <CustomButton size="150px" onClick={toggleEdit}>
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
          </AccordionHeader>
          <AccordionBody isOpen={open}>
            <span>{props.todo.description}</span>
          </AccordionBody>
        </AccordionItem>
      </Accordion>

      <MyModal visible={modal} setVisible={setModal}>
        <LabelButtons handleLabelClick={handleLabelClick} />
      </MyModal>
    </div>
  );
};

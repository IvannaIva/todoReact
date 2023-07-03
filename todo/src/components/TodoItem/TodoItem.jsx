import React from "react";
import { useState } from "react";
import { TbDotsVertical } from "react-icons/tb";
import MyModal from "../MyModal/MyModal";
import CustomButton from "../button/CustomButton";
import LabelButtons from "../button/LabelButtons";
import SelectedLabel from "../SelectedLabel/SelectedLabel";
import EditTodoForm from "../EditTodoForm/EditTodoForm";
import { VscArrowDown } from "react-icons/vsc";
import { useDispatch } from "react-redux";
import { removeTodo, editTodo } from "../../store/todoSlice";

import { Collapse, Button, CardBody, Card } from "reactstrap";

import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";

export const TodoItem = ({
  todo,
  number,

  addLabel,
  removeLabelFromTodo,
}) => {
  const dispatch = useDispatch();
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [editOpen, setEditOpen] = useState(false);
  const toggle = () => setDropdownOpen((prevState) => !prevState);
  const toggleEdit = () => {
    setEditOpen((prevState) => !prevState);
  };

  const [modal, setModal] = useState(false);

  const [isOpen, setIsOpen] = useState(false);

  const toggleCollapse = () => setIsOpen(!isOpen);


  // const handleEdit = (newTitle) => {

  //   dispatch(editTodo(todo, newTitle));
  //   setEditOpen(false);
  // };

  const handleLabelClick = (label) => {
    addLabel(label, todo);
    setModal(false);
  };

  const openModal = () => {
    setModal(true);
  };

  return (
    <div>
      <div className="todo">
        {editOpen ? (
          <div className="todo__content">
            {" "}
            <span>{number}.</span>
            <EditTodoForm todo={todo} />
          </div>
        ) : (
          <div className="todo__content">
            {" "}
            <span>{number}.</span>
            {todo.title}
          </div>
        )}

        <div className="selected-label">
          {todo.labels.map((label, index) => (
            <SelectedLabel
              removeLabelFromTodo={removeLabelFromTodo}
              label={label}
              key={index}
              todo={todo}
            />
          ))}
        </div>

        <div className="todo__btns">
          <Dropdown isOpen={dropdownOpen} toggle={toggle}>
            <DropdownToggle>
              <TbDotsVertical className="tree-dots-button" />
            </DropdownToggle>

            <DropdownMenu>
              <DropdownItem>
                <CustomButton
                  size="150px"
                  onClick={() => dispatch(removeTodo({ todo }))}
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

        <Button color="primary" onClick={toggleCollapse}>
          <VscArrowDown />
        </Button>

        {/* <MyModal visible={modal} setVisible={setModal}>
          <LabelButtons handleLabelClick={handleLabelClick} />
        </MyModal> */}
      </div>

      {todo.description && (
        <div>
          <Collapse isOpen={isOpen} className="collapse-card">
            <Card>
              <CardBody>
                <span>{todo.description}</span>
              </CardBody>
            </Card>
          </Collapse>
        </div>
      )}
    </div>
  );
};

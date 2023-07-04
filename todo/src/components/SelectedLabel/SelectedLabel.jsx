import React from "react";
import { Badge } from "reactstrap";
import { CloseButton } from "reactstrap";
import { useDispatch } from "react-redux";
import { removeLabelFromTodo } from "../../store/todoSlice";

export const SelectedLabel = ({ label, todo }) => {
  const dispatch = useDispatch();

  const handleDelete = (label) => {
    dispatch(
      removeLabelFromTodo({
        todo: {
          id: todo.id,
          label: label,
        },
      })
    );
  };

  return (
    <div className="slabel">
      <Badge color="success" className="badgeLabel">
        <span>{label}</span>
        <CloseButton
          className="closeLabel"
          onClick={() => handleDelete(label)}
        />
      </Badge>
    </div>
  );
};

export default SelectedLabel;

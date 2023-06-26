import React from "react";
import { Badge } from "reactstrap";
import { CloseButton } from "reactstrap";

export const SelectedLabel = (props) => {
  const handleDelete = () => {
    console.log("handleDelete", props.label);
    props.removeLabelFromTodo(props.label, props.todo);
  };

  return (
    <div className="slabel">
      <Badge color="success" className="badgeLabel">
        <span>{props.label}</span>
        <CloseButton className="closeLabel" onClick={handleDelete} />
      </Badge>
    </div>
  );
};

export default SelectedLabel;

import React from "react";
import LabButton from "./UI/button/LabButton";

const LabelButtons = ({ handleLabelClick}) => {
  return (
    <div className="labelButton-content">
      <LabButton
        size="150px"
        borderRadius="10px"
        onClick={() => handleLabelClick("Chores")}
      >
        {" "}
        Chores{" "}
      </LabButton>
      <LabButton
        size="150px"
        borderRadius="10px"
        onClick={() => handleLabelClick("Shopping")}
      >
        {" "}
        Shopping{" "}
      </LabButton>
      <LabButton
        size="150px"
        borderRadius="10px"
        onClick={() => handleLabelClick("Work")}
      >
        Work{" "}
      </LabButton>
    </div>
  );
};

export default LabelButtons;

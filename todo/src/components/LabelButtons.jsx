import React from "react";
import LabButton from "./UI/button/LabButton";
import { useState } from "react";

const LabelButtons = ({ onSelectLabel, ...props }) => {
  return (
    <div className="labelButton-content">
      <LabButton
        size="150px"
        borderRadius="10px"
        onClick={() => onSelectLabel("Chores")}
      >
        {" "}
        Chores{" "}
      </LabButton>
      <LabButton
        size="150px"
        borderRadius="10px"
        onClick={() => onSelectLabel("Shopping")}
      >
        {" "}
        Shopping{" "}
      </LabButton>
      <LabButton
        size="150px"
        borderRadius="10px"
        onClick={() => onSelectLabel("Work")}
      >
        Work{" "}
      </LabButton>
    </div>
  );
};

export default LabelButtons;

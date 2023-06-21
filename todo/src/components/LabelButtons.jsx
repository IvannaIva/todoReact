import React from "react";
import LabButton from "./UI/button/LabButton";

const LabelButtons = ({ handleLabelClick, added, setAdded }) => {

  // if (added) {
  //   rootClasses.push(cl.active);
  // }


  const handleCustomLabelClick = () => {
    const customLabel = prompt("Enter custom label");

    if (customLabel) {
      handleLabelClick(customLabel);
    }
  };

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
      <LabButton
        size="150px"
        borderRadius="10px"
        onClick={handleCustomLabelClick}
      >
        {" "}
        Custom label{" "}
      </LabButton>
    </div>
  );
};

export default LabelButtons;













import React from "react";
import LabButton from "./UI/button/LabButton";
import { useState } from "react";

import { VscCheck } from "react-icons/vsc";

const LabelButtons = ({ handleLabelClick }) => {
  const [addedLabel, setAddedLabel] = useState(false);
  //const toggleaddedLabel = () => setAddedLabel((prevState) => !prevState);

  const handleCustomLabelClick = () => {
    const customLabel = prompt("Enter custom label");

    if (customLabel) {
      handleLabelClick(customLabel);
    }
  };

  const handleLabelButtonClick = (label) => {
    setAddedLabel((prevState) => !prevState);
    handleLabelClick(label);
  };

  return (
    <div className="labelButton-content">
      <LabButton
        size="150px"
        borderRadius="10px"
        onClick={() => handleLabelButtonClick("Chores")}
      >
        {addedLabel && <VscCheck />}
        <span>Chores</span>
      </LabButton>

      <LabButton
        size="150px"
        borderRadius="10px"
        onClick={() => handleLabelButtonClick("Shopping")}
      >
         {addedLabel && <VscCheck />}
        {" "}
        Shopping{" "}
      </LabButton>
      <LabButton
        size="150px"
        borderRadius="10px"
        onClick={() => handleLabelButtonClick("Work")}
      >
         {addedLabel && <VscCheck />}
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

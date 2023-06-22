import React, { useState } from "react";
import LabButton from "./UI/button/LabButton";
import { VscCheck } from "react-icons/vsc";

const LabelButtons = ({ handleLabelClick }) => {
  const [addedLabels, setAddedLabels] = useState([]);

  const handleCustomLabelClick = () => {
    const customLabel = prompt("Enter custom label");

    if (customLabel) {
      handleLabelClick(customLabel);
    }
  };

  const handleLabelButtonClick = (label) => {
    if (addedLabels.includes(label)) {
      setAddedLabels(addedLabels.filter((addedLabel) => addedLabel !== label));
    } else {
      setAddedLabels([...addedLabels, label]);
    }
    handleLabelClick(label);
  };

  return (
    <div className="labelButton-content">
      <LabButton
        size="150px"
        borderRadius="10px"
        onClick={() => handleLabelButtonClick("Chores")}
      >
        {addedLabels.includes("Chores") && <VscCheck />}
        <span>Chores</span>
      </LabButton>

      <LabButton
        size="150px"
        borderRadius="10px"
        onClick={() => handleLabelButtonClick("Shopping")}
      >
        {addedLabels.includes("Shopping") && <VscCheck />}
        Shopping
      </LabButton>

      <LabButton
        size="150px"
        borderRadius="10px"
        onClick={() => handleLabelButtonClick("Work")}
      >
        {addedLabels.includes("Work") && <VscCheck />}
        Work
      </LabButton>

      <LabButton
        size="150px"
        borderRadius="10px"
        onClick={handleCustomLabelClick}
      >
        Custom label
      </LabButton>
    </div>
  );
};

export default LabelButtons;

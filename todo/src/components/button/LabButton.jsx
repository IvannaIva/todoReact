import React from "react";
import MyButton from "./MyButton";


const LabButton = ({ size, borderRadius, ...props }) => {
  const buttonStyle = {
    width: size,
    borderRadius,
  };

  return (
    <div className="labButtonStyle">
      <MyButton style={buttonStyle} {...props}>
       
      </MyButton>
    </div>
  );
};

export default LabButton;

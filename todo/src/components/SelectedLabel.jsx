import React from "react";

export const SelectedLabel = ({ ...props }) => {
  return (
    <div className="slabel">
      <div  className="slabelStyle">
        {props.label}
       
      </div>
    </div>
  );
};

export default SelectedLabel;

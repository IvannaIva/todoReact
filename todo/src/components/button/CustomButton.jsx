import React from 'react'
import MyButton from './MyButton';

const CustomButton = ({ size, ...props }) => {

    const buttonStyle = {
        width: size,
        //height: size,
      };

    return (
      <MyButton style={buttonStyle} {...props}>
     
      </MyButton>
    );
  };
  
  export default CustomButton;
import React from "react";
import MyModal from "./MyModal/MyModal";
import { useState } from "react";
import MyButton from './UI/button/MyButton';

export default function ThreeDotsOpen() {
  const [modal, setModal] = useState(false);
  

  return (
    <div className="tree-dots">
      <MyModal visible={modal} setVisible={setModal}>
        {" "}
      </MyModal>

     
      <MyButton onClick={() => setModal(true)}>Attach Label</MyButton>
    </div>
  );
}

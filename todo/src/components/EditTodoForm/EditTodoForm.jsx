import React from "react";
import { useState } from "react";
import { Form,Row,Col,Input,Button} from "reactstrap";


const EditTodoForm = ({ todo, handleEdit }) => {
  const [newTitle, setNewTitle] = useState(todo.title);

  return (
    // <div>
    <Form className="block-edit-input" onSubmit={(e) => handleEdit(newTitle)}>
      <Row >
        <Col>
          <Input
            type="text"
            value={newTitle}
            onChange={(e) => setNewTitle(e.target.value)}
          />
        </Col>

        <Col>
          <Button  type="submit">Submit</Button>
        </Col>
      </Row>
    </Form>
    // </div>

    // <form onSubmit={(e) => handleEdit(newTitle)}>
    //   <input
    //     type="text"
    //     value={newTitle}
    //     onChange={(e) => setNewTitle(e.target.value)}
    //   />
    //   <button type="submit">Save</button>
    // </form>
  );
};

export default EditTodoForm;

import React from "react";
import { useState } from "react";
import { Form,Row,Col,Input,Button} from "reactstrap";


const EditTodoForm = ({ todo, handleEdit }) => {
  const [newTitle, setNewTitle] = useState(todo.title);

  return (
    <Form onSubmit={(e) => handleEdit(newTitle)}>
      <Row className="row-cols-lg-auto g-3 align-items-center">
        <Col>
          <Input
            type="text"
            value={newTitle}
            onChange={(e) => setNewTitle(e.target.value)}
          />
        </Col>

        <Col>
          <Button>Submit</Button>
        </Col>
      </Row>
    </Form>

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

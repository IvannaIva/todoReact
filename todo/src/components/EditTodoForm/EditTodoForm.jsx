import React from "react";
import { useState } from "react";
import { Form, Row, Col, Input, Button } from "reactstrap";


const EditTodoForm = ({ todo, onSave }) => {

  const [newTitle, setNewTitle] = useState(todo.title);

  const handleEdit = (e) => {
    e.preventDefault();
    onSave({ ...todo, title: newTitle });
  };

  return (
    // <div>
    <Form className="block-edit-input" onSubmit={handleEdit}>
      <Row>
        <Col>
          <Input
            type="text"
            value={newTitle}
            onChange={(e) => setNewTitle(e.target.value)}
          />
        </Col>

        <Col>
          <Button type="submit">Submit</Button>
        </Col>
      </Row>
    </Form>
  );
};

export default EditTodoForm;

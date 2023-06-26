import React from "react";
import { Form, FormGroup, Label, Input, Button } from "reactstrap";
import classes from "./EmailPasForm.module.css";


export default function EmailPasForm() {
  return (
    <div className={classes.email_pas_form}>
      <Form>
        <FormGroup>
          <Label for="exampleEmail" hidden>
            Email
          </Label>
          <Input
            id="exampleEmail"
            name="email"
            placeholder="Email"
            type="email"
          />
        </FormGroup>{" "}
        <FormGroup>
          <Label for="examplePassword" hidden>
            Password
          </Label>
          <Input
            id="examplePassword"
            name="password"
            placeholder="Password"
            type="password"
          />
        </FormGroup>{" "}
        <Button>Submit</Button>
      </Form>
    </div>
  );
}

import React from "react";
import { useState } from "react";
import { Form, FormGroup, Label, Input, Button } from "reactstrap";
import classes from "./EmailPasForm.module.css";
import { NavLink } from "reactstrap";
import { useNavigate } from "react-router-dom";

export default function EmailPasForm() {
  const navigate = useNavigate();
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
        <Button onClick={() => navigate("/home")}>Submit</Button>
      </Form>
    </div>
  );
}

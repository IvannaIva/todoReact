import React from "react";
import { useState } from "react";
import { Form, FormGroup, Label, Input, Button } from "reactstrap";
import classes from "./EmailPasForm.module.css";
import { NavLink } from "reactstrap";
import { useNavigate } from "react-router-dom";

export default function EmailPasForm(handleLogin) {
  const navigate = useNavigate();

  const handleFormSubmit = (e) => {
    e.preventDefault();
    handleLogin(e); // Call the handleLogin function passed from the App component

    // Redirect to the Home page if authentication is successful
    navigate("/home");
  };
  return (
    <div className={classes.email_pas_form}>
      <Form onSubmit={handleFormSubmit}>
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
        {/* <Button >Submit</Button> */}
      </Form>
    </div>
  );
}

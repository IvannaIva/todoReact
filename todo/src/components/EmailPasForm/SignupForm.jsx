import React from "react";
import { Form, FormGroup, Label, Input, Button } from "reactstrap";
import styles from "./EmailPasForm.module.css";
import { useNavigate } from "react-router-dom";
import { AuthenticatedContext } from "../../App";

export default function SignupForm() {
  const navigate = useNavigate();

  //   const { handleLogin } = React.useContext(AuthenticatedContext);

  //   const handleFormSubmit = (e) => {
  //     e.preventDefault();
  //     handleLogin(e);
  //     navigate("/home");
  //   };
  return (
    <div className={styles.email_pas_form}>
    {/* <div> */}
      <h2>Signup</h2>
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
            Create password
          </Label>
          <Input
            id="examplePassword"
            name="password"
            placeholder="Password"
            type="password"
          />
        </FormGroup>{" "}
        <FormGroup>
          <Label for="examplePassword" hidden>
            Confirm password
          </Label>
          <Input
            id="examplePassword"
            name="password"
            placeholder="Password"
            type="password"
          />
        </FormGroup>{" "}
        <Button className={styles.customButton} >Signup</Button>
        <p>
          Already have an account?{" "}
          <span onClick={() => navigate("/login")}>Login</span>
        </p>
      </Form>
    </div>
  );
}

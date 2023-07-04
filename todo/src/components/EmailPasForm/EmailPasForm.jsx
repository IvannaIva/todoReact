import React from "react";
import { Form, FormGroup, Label, Input, Button } from "reactstrap";
import styles from "./EmailPasForm.module.css";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { loginSuccess } from "../../store/loginSlice";

export default function EmailPasForm() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleFormSubmit = (e) => {
    e.preventDefault();
    const email = e.target.elements.email.value;
    const password = e.target.elements.password.value;

    // Перевірити ідентифікаційні дані
    if (email === "admin@example.com" && password === "password") {
      // Якщо ідентифікація пройшла успішно, викликати дію loginSuccess
      dispatch(loginSuccess());
      navigate("/");
    } else {
      // Якщо ідентифікація неуспішна, виконати певні дії, наприклад, відобразити повідомлення про помилку
      console.log("Невірні ідентифікаційні дані");
    }
  };
  return (
    <div className={styles.email_pas_form}>
      <h2>Login</h2>
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
        <div className={styles.forgotPas}>
          <span>Forgot Password</span>
        </div>
        <Button className={styles.customButton}>Login</Button>
      </Form>
      <p>
        Don't have an account?{" "}
        <span onClick={() => navigate("/signup")}>Signup</span>
      </p>
    </div>
  );
}

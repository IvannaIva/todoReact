import React from "react";
import { Form, FormGroup, Label, Input, Button } from "reactstrap";
import styles from "./EmailPasForm.module.css";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { loginSuccess } from "../../store/loginSlice";

export default function EmailPasForm() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [errors, setErrors] = useState({});
  const [errorInput, setFormError] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const handleFormSubmit = (e) => {
    e.preventDefault();

    console.log("setEmail", email);
    console.log("setPass", password);
    // const email = e.target.elements.email.value;
    // const password = e.target.elements.password.value;

    // Перевірити ідентифікаційні дані
    if (email === "admin@example.com" && password === "password") {
      // Якщо ідентифікація пройшла успішно, викликати дію loginSuccess
      dispatch(loginSuccess());
      navigate("/");
    } else {
      setErrors({ ...errors, password: "Wrong Password" });
      setFormError(true);
      console.log("EMAIL NOT VALID. ", password);
    }
  };

  const handleForgotPassword = () => {
    setShowPassword(!showPassword); // Toggle the showPassword state
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
            value={email}
            onChange={(e) => setEmail(e.target.value)}
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
            type={showPassword ? "text" : "password"}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className={errorInput ? styles.errorInput : ""}
          />
          <p className={styles.error_wrong}>{errors.password}</p>
        </FormGroup>{" "}
        <div className={styles.forgotPas}>
          <span onClick={handleForgotPassword}>Forgot Password</span>
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

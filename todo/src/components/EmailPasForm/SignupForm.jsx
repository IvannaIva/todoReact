import React from "react";
import { Form, FormGroup, Label, Input, Button } from "reactstrap";
import styles from "./EmailPasForm.module.css";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { AuthenticatedContext } from "../../App";
import { signUp, confirmSignUp } from "../../api/auth";
import { useState } from "react";
import { loginSuccess } from "../../store/loginSlice";
import { useForm } from "react-hook-form";

export default function SignupForm() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [errorMessage, setErrorMessage] = useState("");

  const {
    register,
    //formState: { errors },
    handleSubmit,
  } = useForm();

  const { ref: emailRef, ...registerEmail } = register("email");
  const { ref: passwordRef, ...registerPassword } = register("password");
  const { ref: confirmPasswordRef, ...registerСonfirmPassword } = register(
    "confirmPassword"
  );

  const onSubmitSignup = async (userDate) => {
    console.log("userDate", userDate);
    const signUpResponse = await signUp(userDate.email, userDate.password);
    if (signUpResponse.isSuccess) {
      console.log("Registration successful");

      // Виклик функції підтвердження
      const confirmResponse = await confirmSignUp(
        userDate.email,
        userDate.confirmationCode
      );
      if (confirmResponse.isSuccess) {
        console.log("Confirmation successful");
        dispatch(loginSuccess());
        navigate("/");
      } else {
        setErrorMessage(
          confirmResponse.error.message ||
            "An error occurred during confirmation"
        );
        console.log("Confirmation error:", confirmResponse.error);
      }
    } else {
      setErrorMessage(
        signUpResponse.error.message || "An error occurred during registration"
      );
      console.log("Registration error:", signUpResponse.error);
    }
  };

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
      <Form onSubmit={handleSubmit(onSubmitSignup)}>
        <FormGroup>
          <Label for="exampleEmail" hidden>
            Email
          </Label>
          <Input
            id="exampleEmail"
            name="email"
            placeholder="Email"
            type="email"
            innerRef={emailRef}
            {...registerEmail}
          />
        </FormGroup>{" "}
        <FormGroup>
          <Label for="password" hidden>
            Create password
          </Label>
          <Input
            id="password"
            name="password"
            placeholder="Password"
            type="password"
            innerRef={passwordRef}
            {...registerPassword}
          />
        </FormGroup>{" "}
        <FormGroup>
          <Label for="confirmPassword" hidden>
            Confirm password
          </Label>
          <Input
            id="confirmPassword"
            name="confirmPassword"
            placeholder="Confirm Password"
            type="password"
            innerRef={confirmPasswordRef}
            {...registerСonfirmPassword}
          />
        </FormGroup>{" "}
        <div className={styles.error_wrong}>
          {errorMessage && <p>{errorMessage}</p>}
        </div>
        <Button className={styles.customButton}>Signup</Button>
        <p>
          Already have an account?{" "}
          <span onClick={() => navigate("/")}>Login</span>
        </p>
      </Form>
    </div>
  );
}

import React from "react";
import { Form, FormGroup, Label, Input, Button } from "reactstrap";
import styles from "./EmailPasForm.module.css";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useForm } from "react-hook-form";
import { signIn, checkIfUserConfirmed, resendConfirmationCode } from "../../api/auth";
import { useState } from "react";
import { loginSuccess } from "../../store/loginSlice";

export default function EmailPasForm() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [errorMessage, setErrorMessage] = useState("");

  const {
    register,
    formState: { errors },
    handleSubmit,
   
  } = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
    mode: "onBlur",
  });

  const onSubmit = async (data) => {
    console.log("data", data);
    const isConfirmed = await checkIfUserConfirmed(data.email);
    if (isConfirmed) {
      // Якщо користувач підтвердив обліковий запис, виконати логін
      const response = await signIn(data.email, data.password);
      if (response.isSuccess) {
        dispatch(loginSuccess());
        navigate("/");
        console.log("Login successful");
      } else {
        setErrorMessage(response.error.message || "An error occurred during login");
        console.log("Login error:", response.error);
      }
    } else {
      // Якщо користувач не підтвердив обліковий запис, відправити код підтвердження знову
      await resendConfirmationCode(data.email);
      setErrorMessage("Please confirm your account by entering the verification code.");
    }
  };



  const { ref: emailRef, ...registerEmail } = register("email", {
    required: "Email is required",
  });
  const { ref: passwordRef, ...registerPassword } = register("password", {
    required: "Password is required",
    minLength: {
      value: 5,
      message: "Minimum 5 characters",
    },
  });

  return (
    <div className={styles.email_pas_form}>
      <h2>Login</h2>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <FormGroup>
          <Label for="exampleEmail" hidden>
            Email
          </Label>
          <Input
            type="tel" id="phone" name="phone"
            placeholder="Tel"
            innerRef={emailRef}
            {...registerEmail}
          />
          <div className={styles.error_wrong}>
            {errors.email && <p>{errors.email.message}</p>}
          </div>
        </FormGroup>{" "}
        <FormGroup>
          <Label for="examplePassword" hidden>
            Password
          </Label>
          <Input
            id="password"
            name="password"
            type="password"
            placeholder="Password"
            innerRef={passwordRef}
            {...registerPassword}
          />
          <div className={styles.error_wrong}>
            {errors.password && <p>{errors.password.message}</p>}
          </div>
        </FormGroup>{" "}
        <div className={styles.error_wrong}>
          {errorMessage && <p>{errorMessage}</p>}
        </div>
        <div className={styles.forgotPas}>
          {/* <span onClick={handleForgotPassword}>Forgot Password</span> */}
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

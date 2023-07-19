import React from "react";
import { Form, FormGroup, Label, Input, Button } from "reactstrap";
import styles from "./EmailPasForm.module.css";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useForm } from "react-hook-form";
import { signIn, resendConfirmationCode } from "../../api/auth";
import { useState } from "react";
import { loginSuccess } from "../../store/loginSlice";

export default function EmailPasForm() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [errorMessage, setErrorMessage] = useState("");
  const { email } = useParams();

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
  
    const loginResponse = await signIn(data.email, data.password);
    if (loginResponse.isSuccess) {
      dispatch(loginSuccess());
      navigate("/");
      console.log("Login successful");
    } else {
      const { error } = loginResponse;
      console.log("Login error:", error);
      if (error.code === "UserNotConfirmedException") {
        const resendResponse = await resendConfirmationCode(data.email);
        if (resendResponse.isSuccess) {
          navigate(`/confirm-signup/${data.email}`);
          setErrorMessage(
            "Please confirm your account by entering the verification code."
          );
        } else {
          const { error: resendError } = resendResponse;
          setErrorMessage(
            resendError.message || "An error occurred during login"
          );
        }
      } else if (error.code === "LimitExceededException") {
        setErrorMessage("Attempt limit exceeded, please try again later.");
      } else {
        setErrorMessage(error.message || "An error occurred during login");
      }
    }
  };
  

  

  // const onSubmit = async (data) => {
  //   console.log("data", data);
  
  //   const response = await signIn(data.email, data.password);
  //   if (response.isSuccess) {
  //     dispatch(loginSuccess());
  //     navigate("/");
  //     console.log("Login successful");
  //   } else {
  //     const { error } = response;
  //     console.log("Login error:", error);
  //     if (error.code === "LimitExceededException") {
  //       setErrorMessage("Attempt limit exceeded, please try again later.");
  //     } else if (error.code === "UserNotConfirmedException") {
  //       await resendConfirmationCode(data.email); // Відправити код підтвердження знову
  //       navigate(`/confirm-signup/${data.email}`);
  //       setErrorMessage(
  //         "Please confirm your account by entering the verification code."
  //       );
  //     } else {
  //       setErrorMessage(error.message || "An error occurred during login");
  //     }
  //   }
  // };
  
  


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
            type="email"
            id="email"
            name="email"
            placeholder="Email"
            innerRef={emailRef}
            {...registerEmail}
            // value={email}
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

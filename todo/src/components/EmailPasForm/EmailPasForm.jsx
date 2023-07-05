import React from "react";
import { Form, FormGroup, Label, Input, Button } from "reactstrap";
import styles from "./EmailPasForm.module.css";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { loginSuccess } from "../../store/loginSlice";
import { useForm } from "react-hook-form";







export default function EmailPasForm() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const {
    register,
    //formState: { errors },
    handleSubmit,
  } = useForm();

  const onSubmit = (data) => {
    alert(JSON.stringify(data));
  };



  return (
    <div className={styles.email_pas_form}>
      <h2>Login</h2>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <FormGroup>
          <Label for="exampleEmail" hidden>
            Email
          </Label>
          <Input
          {...register('email')}
            id="exampleEmail"
            name="email"
            placeholder="Email"
       
          />
        </FormGroup>{" "}
        <FormGroup>
          <Label for="examplePassword" hidden>
            Password
          </Label>
          <Input
           {...register('password')}
            id="examplePassword"
            name="password"
            placeholder="Password"
           
          />
      
        </FormGroup>{" "}
        {/* <div className={styles.forgotPas}>
          <span onClick={handleForgotPassword}>Forgot Password</span>
        </div> */}
        <Button className={styles.customButton}>Login</Button>
      </Form>
      <p>
        Don't have an account?{" "}
        <span onClick={() => navigate("/signup")}>Signup</span>
      </p>
    </div>
  );
}

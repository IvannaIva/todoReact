import React from "react";
import { Form, FormGroup, Label, Input, Button } from "reactstrap";
import styles from "./EmailPasForm.module.css";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { loginSuccess } from "../../store/loginSlice";
import { useForm } from "react-hook-form";

import { Auth } from 'aws-amplify';

const getSuccessfulResponse = (response) =>({
  isSuccess: true,
  data: response,
  error: null
})

const getErrorResponse = (error) =>({
  isSuccess: false,
  data: null,
  error: error
})

async function signIn(username, password) {
  try {
    const user = await Auth.signIn(username, password);
    return getSuccessfulResponse(user) 
  } catch (error) {
    console.log('error signing in', error);
    return getErrorResponse(error)
  }
}



export default function EmailPasForm() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const {
    register,
    formState: { errors },
    handleSubmit,
    setError
  } = useForm({
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const onSubmit = async(data) => {
    console.log(data);
    const response = await signIn(data.email, data.password)
    if(response.isSuccess){
      console.log(response.data)
    }else {
      console.log('error', response.error)
    }
    console.log(response);
  };


  const {ref:emailRef, ...registerEmail} = register('email')
  const {ref:passwordRef, ...registerPassword} = register('password')
 

  return (
    <div className={styles.email_pas_form}>
      <h2>Login</h2>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <FormGroup>
          <Label for="exampleEmail" hidden>
            Email
          </Label>
          <Input 
            id="exampleEmail"
            name="email"
            placeholder="Email"
            innerRef={emailRef}
            {...registerEmail}/>

        </FormGroup>{" "}
        <FormGroup>
          <Label for="examplePassword" hidden>
            Password
          </Label>
          <Input
          id="password"
          name="password"
          placeholder="Password"

          innerRef={passwordRef}
          {...registerPassword} />


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

import React from "react";
import { Form, FormGroup, Label, Input, Button } from "reactstrap";
import styles from "./EmailPasForm.module.css";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { AuthenticatedContext } from "../../App";
import { signUp } from "../../api/auth";
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

  const onSubmitSignup = (data) => console.log(data);




// const onSubmitSignup = async (userDate) => {
//   console.log("userDate", userDate);
//   const response = await signUp(userDate.username, userDate.password);
//   if (response.isSuccess) {
//     dispatch(loginSuccess());
//     navigate("/");
//     console.log("response.data", response.userDate);
//   } else {
//     setErrorMessage(response.error.message || "An error occurred");
//     console.log("response_error", response.error);
//   }
//   console.log(response);
// };

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
            {...register("email")}
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
            {...register("password")}
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
            {...register("confirmPassword")}
          />
        </FormGroup>{" "}
        <Button className={styles.customButton}>Signup</Button>
        <p>
          Already have an account?{" "}
          <span onClick={() => navigate("/")}>Login</span>
        </p>
      </Form>
    </div>
  );
}

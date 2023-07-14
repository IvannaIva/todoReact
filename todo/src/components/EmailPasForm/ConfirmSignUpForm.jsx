import React from "react";
import { Form, FormGroup, Label, Input, Button } from "reactstrap";
import styles from "./EmailPasForm.module.css";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { AuthenticatedContext } from "../../App";
import { signUp, confirmSignUp, resendConfirmationCode } from "../../api/auth";
import { useState } from "react";
import { loginSuccess } from "../../store/loginSlice";
import { useForm } from "react-hook-form";

export default function ConfirmSignUpForm() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [errorMessage, setErrorMessage] = useState("");
  const { email } = useParams();

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const { ref: confirmSignUpRef, ...registerConfirmSignUp } = register(
    "confirmSignUp"
  );

  const onSubmit = async (data) => {
    console.log(data);
    const response = await confirmSignUp(email, data.confirmSignUp);
    if (response.isSuccess) {
      console.log("Confirmation successful");
      dispatch(loginSuccess());
      navigate("/");
    } else {
      setErrorMessage(
        response.error.message || "An error occurred during confirmation"
      );
      console.log("Confirmation error:", response.error);
    }
  };


  const handleResendCode = () => {
    resendConfirmationCode(email);
  };

  return (
    <div className={styles.email_pas_form}>
      <h2>Ваш код підтвердження</h2>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <FormGroup>
          <Label for="exampleEmail" hidden>
            ConfirmSignUp
          </Label>
          <Input
            type="number"
            id="phone"
            name="phone"
            placeholder="code"
            innerRef={confirmSignUpRef}
            {...registerConfirmSignUp}
          />
          <div className={styles.error_wrong}>
            {errors.email && <p>{errors.email.message}</p>}
          </div>
        </FormGroup>{" "}
        <div className={styles.error_wrong}>
          {errorMessage && <p>{errorMessage}</p>}
        </div>
        <Button className={styles.customButton}>Відправити</Button>
      </Form>
     
        <span onClick={handleResendCode}>resend code</span>
      
    </div>
  );
}

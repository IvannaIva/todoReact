import React from "react";
import {
  Form,
  FormGroup,
  Label,
  Input,
  InputGroupText,
  InputGroup,
} from "reactstrap";
import styles from "./Weather.module.css";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { VscSearch } from "react-icons/vsc";

function WeatherInput({ onSearch }) {
  const [errorMessage, setErrorMessage] = useState("");

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const { ref: weatherInputCityRef, ...registerWeatherInputCity } = register(
    "weatherInputCity"
  );

  const onSubmit = (data) => {
    onSearch(data.weatherInputCity);
  };

  return (
    <div className={styles.form_input_weather}>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <FormGroup>
          <Label for="exampleEmail" hidden>
            ConfirmSignUp
          </Label>
          <InputGroup>
            <InputGroupText>
              <VscSearch className={styles.searchIcon} />
            </InputGroupText>
            <Input
              type="search"
              id="name"
              name="name"
              placeholder="city"
              innerRef={weatherInputCityRef}
              {...registerWeatherInputCity}
            />
          </InputGroup>
          <div className={styles.error_wrong}>
            {/* {errors.email && <p>{errors.email.message}</p>} */}
          </div>
        </FormGroup>{" "}
        <div className={styles.error_wrong}>
          {/* {errorMessage && <p>{errorMessage}</p>} */}
        </div>
      </Form>
    </div>
  );
}

export default WeatherInput;

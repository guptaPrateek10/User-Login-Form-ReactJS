import React from "react";
import css from "../css/CustomCss.module.css";
import { useState } from "react";
import FormInput from "../components/FormInput";

export const UsereLoginUsingEvent = () => {
  //Initial data for state object
  const initialState = {
    email: "",
    username: "",
    password: "",
    confirmPassword: "",
  };
  const [dataWithEvent, setDataWithEvent] = useState(initialState);

  const handleChange = (e) => {
    setDataWithEvent((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  console.log(dataWithEvent);
  const inputData = [
    {
      id: 1,
      label: "Email",
      type: "email",
      name: "email",
      placeholder: "Enter Your Email",
      pattern:"[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$",
      errorMessage:"Must contain @ and .com",
      required : true

    },
    {
      id: 2,
      label: "User Name",
      type: "text",
      name: "username",
      placeholder: "Enter Your Username",
    },
    {
      id: 3,
      label: "Password",
      type: "password",
      name: "password",
      placeholder: "Enter Your Password",
      pattern:"[A-Za-z]{3}",
      errorMessage:"Must contain at least one  number and one uppercase and lowercase letter, and at least 8 or more characters",
      required : true

    },
    {
      id: 4,
      label: "Confirm Password",
      type: "password",
      name: "confirmPassword",
      placeholder: "Enter Your Confirm Password",
      pattern: dataWithEvent.password,
      errorMessage: "Must match with password",
      required : true

    },
  ];
  return (
    <div className={css.container}>
      <form className={css.formContainer}>
        {inputData.map((input) => (
          <FormInput
            key={input.id}
            {...input}
            value={dataWithEvent[input.name]}
            onChange={handleChange}
          />
        ))}
        <input className={css.submitbtn} type="submit"></input>
      </form>
    </div>
  );
};

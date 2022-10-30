import React, { useDebugValue } from "react";
import css from "../css/CustomCss.module.css";
import { useState, useRef, useEffect } from "react";

export const UsereLoginUsingUseRef = () => {
  const inputRef = useRef({});
  // const passwordRef = useRef("")
  // const confirmPasswordRef = useRef("")
  const initialState = {
    email: "",
    password: "",
    confirmPassword: "",
  }
  const [dataWithEvent, setDataWithEvent] = useState(initialState);

  const handleChange = (e) => {
    console.log(inputRef.current.value);
    setDataWithEvent((prev) => ({
      ...prev,
      [e.target.name]: inputRef.current[e.target.name].value,
    }));
  };

  const handleSubmit =(e) =>{
    e.preventDefault();
    console.log("Inside Handle Submit function");
    const  {email, ...other} = dataWithEvent
    const newObj = dataWithEvent;
    console.log("Original state data",dataWithEvent);
    console.log("New Copied Data",newObj);
    console.log(other);

  }

  useEffect(() => {
    inputRef.current['email'].focus()
    inputRef.current['email'].value = dataWithEvent.email;
    inputRef.current['password'].value = dataWithEvent.password;
    inputRef.current['confirmPassword'].value = dataWithEvent.confirmPassword;
  }, []);
console.log(dataWithEvent);
  return (
    <div className={css.container}>
      <label className={css.text_label}>User Form Data Using UseRef Hook</label>
      <br />
      <br />
      <form className={css.formContainer}>
        <label className={css.text_label}>Email</label>
        <input
          className={css.sld}
          type="email"
          name="email"
          ref={el => inputRef.current['email'] = el}
          required
          pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
          onChange={handleChange}
        />
        <label className={css.text_label}>Password</label>
        <input
          className={css.sld}
          type="password"
          name="password"
          ref={el => inputRef.current['password'] = el}
          pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
          onChange={handleChange}
          title="Must contain at least one  number and one uppercase and lowercase letter, and at least 8 or more characters"
          required
        />
        <label className={css.text_label}>Confirm Password</label>
        <input
          className={css.sld}
          type="password"
          name="confirmPassword"
          ref={el => inputRef.current['confirmPassword'] = el}
          pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
          onChange={handleChange}
          title="Password do not match"
          required
        />
        <input className={css.submitbtn} onClick={handleSubmit} type="submit"></input>
      </form>
    </div>
  );
};

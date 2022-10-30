import React, { useState } from "react";
import css from "../css/CustomCss.module.css";



const FormInput = (props) => {
    const [focused , setFocused] = useState(false)
  const {id ,label , errorMessage , onChange, ...inputProps} = props;
const handleFocus = (e)=>{
    setFocused(true);
}
  return (
    <div className={css.inputContainer}>
      <label className={css.text_label}>{label}</label>
      <input
        className={css.sld}
        {...inputProps}
        onChange={onChange}
        onBlur={handleFocus}
        onFocus={()=> inputProps.name === "confirmPassword" && setFocused(true) }
        focused={focused.toString()}
      />
      <span className={css.ErrorMessage}>{errorMessage}</span>
    </div>
  );
};

export default FormInput;

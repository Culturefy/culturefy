import React from "react";
// import Styles from "./styles.module.scss";
import Styles from "../components/common/TextFieldQa/styles.module.scss";

const Input = ({
  type,
  placeholder,
  label,
  minLength,
  maxLength,
  defaultValue,
  errors,
  register,
}: any) => {
  const errorMsgClr = {
    color: "red",
  };

  return (
    <div className={Styles.TextFieldQa}>
      <input
        type={type}
        placeholder={placeholder}
        {...register(label, {
          required: true,
          minLength: minLength ? minLength : null,
          maxLength: maxLength ? maxLength : null,
        })}
        defaultValue={defaultValue ? defaultValue : null}
      />
      {errors === "required" && (
        <span style={errorMsgClr}>This Field Is Required</span>
      )}
      {errors === "maxLength" && (
        <p style={errorMsgClr}>
          {placeholder} cannot exceed {maxLength} characters
        </p>
      )}
      {errors === "minLength" && (
        <p style={errorMsgClr}>
          {placeholder} must contain atleast {minLength} characters
        </p>
      )}
    </div>
  );
};

export default Input;

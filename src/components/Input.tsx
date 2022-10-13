import React from "react";

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
    <>
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
    </>
  );
};

export default Input;

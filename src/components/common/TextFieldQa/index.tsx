import React, { FC } from "react";
import Styles from "./styles.module.scss";

const TextFieldQa = ({
  type = "text",
  placeholder = "Description Here..",
  ...props
}) => {
  return (
    <div className={Styles.TextFieldQa}>
      {props.label ? <label htmlFor="inp"> {props.label} </label> : ""}
      {props.icon ? props.icon : ""}
      <input
        type={type}
        placeholder={`${placeholder}`}
        className={` ${Styles.inpuField}`}
      />
    </div>
  );
};

export default TextFieldQa;

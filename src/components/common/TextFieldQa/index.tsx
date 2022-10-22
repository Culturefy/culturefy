import React, { FC } from "react";
import Styles from "./styles.module.scss";

const TextFieldQa = ({
  type = "text",
  placeholder = "Description Here..",
  variant = "normal",
  ...props
}) => {
  return (
    <div className={`${Styles.TextFieldQa} ${Styles[variant]} `}>
      {props.label ? <label htmlFor="inp"> {props.label} </label> : ""}
      {props.icon ? props.icon : ""}
      <div className={Styles.inpBox}>
        <input
          type={type}
          placeholder={`${placeholder}`}
          className={` ${Styles.inpuField}`}
        />
        { props.action ? <span className={Styles.actions} > {props.action} </span> : '' }
      </div>
    </div>
  );
};

export default TextFieldQa;

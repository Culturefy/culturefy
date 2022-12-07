import React from "react";
import Styles from "./styles.module.scss";

function SelectOptions({ variant = "white", type = "text", color = "gray", ...props }) {

  console.log(props.optionsData)
  const selectOptions = props.optionsData.map((ele: any, id: number) => {
    return (
      <option key={id} value={ele.value}>
        {ele.title || ele.name}
      </option>
    );
  });

  return (
    <>
      <div className={`form-floating ${Styles.formFloating}`}>
        <select {...props} className={`form-select ${Styles.formSelect}`}>
          {selectOptions}
          {/* <option value={props.option1} selected>
            {props.option1}
          </option>
          <option value={props.option2}>{props.option2}</option> */}
        </select>
        <label>{props.label}</label>
      </div>
    </>
  );
}

export default SelectOptions;

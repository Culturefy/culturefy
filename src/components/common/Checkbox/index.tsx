import React, { useRef, useState } from "react";
import Styles from './styles.module.scss'
export const Checkbox = (props: any) => {
  return (
    <div className={`${Styles.checkboxMain} ${'dflexCenter'}`}>
      <input
        type="checkbox"
        id={props.id}
        value={props.value}
      />
      <label className="f16 graphik-reg" htmlFor={props.id} > {props.label} </label>
    </div>
  ); 
};

import React, { FC, useState } from "react";
import Styles from "./styles.module.scss";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";

const FilterBtn = (props: any) => {
  return (
    <div className={Styles.filterBtn}>
      <select name="" id="">
        <option value="" selected disabled>
          {props.label}
        </option>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
      </select>
      <span className={Styles.iconCaret}>
        <FontAwesomeIcon icon={faChevronDown} />
      </span>
    </div>
  );
};

export default FilterBtn;

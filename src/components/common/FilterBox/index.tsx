import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Styles from "./styles.modules.scss";
import { BiFilterAlt } from "react-icons/bi";
import Heading from "../Heading";
import Button from "../Button";

const FilterBox = (props: any) => {
  return (
    <Container>
      <div className={Styles.filterHead}>
        <div className={Styles.start}>
          <BiFilterAlt />
          <Heading label="Filter" />
        </div>
        <div className={Styles.end}>
          <Button label="Apply Filter" />
          <Button label="Reset Filter" variant="outlined" />
        </div>
      </div>
    </Container>
  );
};

export default FilterBox;

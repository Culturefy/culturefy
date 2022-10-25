import React from "react";
import { useNavigate } from "react-router";
import Button from "../common/Button";
import Heading from "../common/Heading";
import TextFieldQa from "../common/TextFieldQa";
import global from '../../global.module.scss'

const Businessinfo1 = () => {
  const navigate = useNavigate();
  return (
    <div className={global.businessInfoMain}>
      <div className={global.formsBusiness}>
        <Heading label="Business Information:" variant="heading1" />
        <TextFieldQa label="Business Name:" placeholder="Description Here.." />
        <TextFieldQa
          label="Briefly describe what your business does:"
          placeholder="Description Here.."
        />
        <TextFieldQa
          label="Also known as(if applicable):"
          placeholder="Description Here.."
        />
        <TextFieldQa
          label="What year did your business start operating:"
          placeholder="Description Here.."
        />
        <div>
          <Button
            variant="filled"
            color="secondary"
            label="Next"
            size="medium"
            onClick={() => navigate("/auth/business-info?tab=2")}
          />
          <Button
            variant="transparent"
            color="gray"
            label="Skip for now"
            size="medium"
            onClick={() => navigate("/user/brand-culture-startegy")}
          />
        </div>
      </div>
    </div>
  );
};

export default Businessinfo1;

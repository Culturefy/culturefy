import React from "react";
import Button from "../common/Button";
import Heading from "../common/Heading";
import TextFieldQa from "../common/TextFieldQa";
import global from "../../global.module.scss";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import IconButton from "../common/IconButton";
import { useNavigate } from "react-router";

const Businessinfo2 = () => {
  const navigate = useNavigate();
  return (
    <div className={global.businessInfoMain}>
      <div className={global.formsBusiness}>
        <div className={global.prevIconform}>
          <IconButton
            icon={<FontAwesomeIcon icon={faArrowLeft} onClick={() => navigate("/auth/business-info?tab=1")}
            />}
          />
        </div>
        <Heading label="Business Information:" variant="heading1" />
        <TextFieldQa
          label="Describe a brief history of your business:"
          placeholder="Description Here.."
        />
        <TextFieldQa
          label="What level of involvement will your HR team have in this engagement? Who is your HR point person?"
          placeholder="Description Here.."
        />
        <TextFieldQa
          label="Has your business ever completed a diversity and inclusion survey? If so, can someone provide the survey results?"
          placeholder="Description Here.."
        />
        <TextFieldQa
          label="When would your company like to conduct an official kickoff session?"
          placeholder="Description Here.."
        />
        <div>
          <Button
            variant="filled"
            color="secondary"
            label="Next"
            size="medium"
            onClick={() => navigate("/auth/business-info?tab=3")}
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

export default Businessinfo2;

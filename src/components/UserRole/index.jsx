import * as React from "react";

import Button from "../common/Button";
import Heading from "../common/Heading";

import { Link } from "react-router-dom";
import Styles from "./styles.module.scss";

import buildingImg from "../../assets/authImages/icons/building.png";
import peopleImg from "../../assets/authImages/icons/people.png";

const UserRole = () => {
  console.log("user");
  return (
    <>
      <div className="align-items-center d-flex flex-column h-100 justify-content-center second-column-signup-pages">
        <div className={Styles.userRoleMain}>
          <Heading label="Sign Up" variant="heading1" />
          <div className="buttons-signup-login">
            <Link to={"/auth/business-info"}>
              <Button
                variant="outlined"
                color="black"
                label="Admin"
                size="large"
                icon={<img src={buildingImg} />}
              />
            </Link>
            <Link to={"/auth/signup"}>
              <Button
                variant="filled"
                color="secondary"
                label="User"
                size="large"
                icon={<img src={peopleImg} />}
              />
            </Link>
            <p className={Styles.alreadyHaveAcc}>
              Already have an account?
              <Link to={"/auth/login"}>Sign in</Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default UserRole;

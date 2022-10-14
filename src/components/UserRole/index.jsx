import * as React from "react";

import Button from "../common/Button";
import Heading from "../common/Heading";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import Styles from "./styles.module.scss";

import buildingImg from "../../assets/authImages/icons/building.png";
import peopleImg from "../../assets/authImages/icons/people.png";

const UserRole = () => {
  const navigate = useNavigate("");
  return (
    <>
      <div className="align-items-center d-flex flex-column h-100 justify-content-center second-column-signup-pages">
        <div className={Styles.userRoleMain}>
          <Heading label="Sign Up" variant="heading1" />
          <div>
            <div className={Styles.buttonAdmin}>
              <Button
                variant="outlined"
                color="black"
                label="Admin"
                size="large"
                icon={<img src={buildingImg} />}
                onClick={() => navigate("/auth/business-info")}
              />
              {/* <Link to={'/auth/business-info'}>
                     </Link> */}
            </div>
            <div className={Styles.buttonUser}>
              <Button
                variant="filled"
                color="secondary"
                label="User"
                size="large"
                icon={<img src={peopleImg} />}
                onClick={() => navigate("/auth/signup")}
              />
            </div>
            {/* <Link to={'/auth/signup'}>
                  </Link> */}
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

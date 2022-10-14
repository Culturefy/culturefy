import React from "react";
import Heading from "../../components/common/Heading";
import IconButton from "../../components/common/IconButton";
import Styles from "./styles.module.scss";

import { Link, useNavigate, useLocation } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF, faTwitter } from "@fortawesome/free-brands-svg-icons";

import { faEnvelope, faUser, faLock } from "@fortawesome/fontawesome-free";

import goggleImg from "../../assets/authImages/images/image-sliders/Google.png";
import TextFieldQa from "../../components/common/TextFieldQa";
import Button from "../../components/common/Button";
import { useForm } from "react-hook-form";
import Input from "../../components/Input";
import { useAuth } from "../../hooks/form/useAuth";
import { ToastContainer } from "react-toastify";

const Signup = () => {
  const {
    register,
    handleSubmit,
    formState,
    reset,
    formState: { errors, touchedFields },
  } = useForm();

  const { userRegister, store } = useAuth(null);

  const navigate = useNavigate();
  const location = useLocation();

  const onSubmit = (body) => {
    let apiData = {
      ...body,
      role_id: "3",
    };
    userRegister(apiData).then(() => {
      reset();
    });
  };

  return (
    <>
      <div className={`${Styles.signUpMain} ${Styles.dFlexRow} `}>
        <div className={Styles.w100}>
          <Heading label="Getting started" variant="heading1" />
          <p>Create account to continue!</p>
          <div className={`${Styles.socialIcons} ${Styles.dFlexRow} `}>
            <IconButton icon={<img src={goggleImg} alt="Goggle" />} />
            <IconButton icon={<FontAwesomeIcon icon={faFacebookF} />} />
            <IconButton icon={<FontAwesomeIcon icon={faTwitter} />} />
          </div>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className={Styles.signUpForm}>
              <Input
                type="email"
                placeholder="Email"
                label="email"
                register={register}
                formState={formState}
                maxLength={20}
                errors={errors?.email?.type}
                minLength={5}
              />
              <Input
                type="text"
                placeholder="User Name"
                label="full_name"
                register={register}
                formState={formState}
                maxLength={20}
                errors={errors?.full_name?.type}
                minLength={5}
              />
              <Input
                type="password"
                placeholder="Password"
                label="password"
                register={register}
                formState={formState}
                maxLength={20}
                errors={errors?.password?.type}
                minLength={5}
              />

              <p className={`${Styles.rememText} ${Styles.dFlexRow}`}>
                <span>Remember me next time</span>
                <div class="custom-checkbox">
                  <input type="checkbox" id="remember-me" name="remember-me" />
                  <label htmlFor="remember-me" class="remember-custom"></label>
                </div>
              </p>
              {store.status === "pending" ? (
                <Button
                  variant="filled"
                  color="secondary"
                  label="SIGNING UP"
                  size="large"
                  disable
                />
              ) : (
                <Button
                  variant="filled"
                  color="secondary"
                  label="SIGN UP"
                  size="large"
                />
              )}
              <p className={Styles.rememText}>Forget password</p>
              <p className={Styles.rememText}>
                Already have an account?
                <span onClick={() => navigate("/auth/login")}>
                  Sign in
                  {/* <Link to={'/auth/login'} className={Styles.cSecondary}>
                        </Link> */}
                </span>
              </p>
            </div>
          </form>
        </div>
      </div>
      <ToastContainer />
    </>
  );
};

export default Signup;

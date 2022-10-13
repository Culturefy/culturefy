import React, { FC, useEffect, useState } from "react";
import Styles from "./styles.module.scss";

import downIcon from "../../assets/images/downIcon.svg";


import { navigation } from "../../config/navigation";
import { useSurvey } from "../../hooks/form/useSurvey";
import { useAuth } from "../../hooks/form/useAuth";

// import Button from "../../../../components/common/button";

import { Link } from "react-router-dom";
// import Button from "../Button";
import { useDispatch } from "react-redux";
import Services from "../../Services/survey.service";
import fetchAllAction from "../../Layout/Aside";
import Input from "../../components/Input";
import { useForm } from "react-hook-form";
import Button from "../../components/common/Button";

const AsideMenu = () => {
  const {
    register,
    handleSubmit,
    formState,
    reset,
    formState: { errors, touchedFields },
  } = useForm();

  const [seletedItem, setSelectedItem] = useState("");

  const { getSurvey, store } = useSurvey(null);
  const { userLogin } = useAuth(null);

  useEffect(() => {
    const loadData = async () => await getSurvey(null);
    loadData();
  }, []);

  const onSubmit = () => {
    const data = {
      email: "admin@gmail.com",
      password: "12345678",
    };
    userLogin(data);
  };

  return (
    <>
      <aside className={Styles.asideRight}>
        <div>
          <div className={Styles.topBtns}>
            <select name="" id="">
              <option value="1" selected>
                Company Name
              </option>
              <option value="2">Company Name2</option>
              <option value="3">Company Name3</option>
              <option value="4">Company Name4</option>
            </select>

            <div className={Styles.topLgBtns}>
              <Button variant="filled" label="+ Create New" size="medium" />
              <Button
                variant="filled"
                label="Upload a File"
                color="secondary"
                size="medium"
              />
            </div>
          </div>
          <div className={Styles.rightNav}>
            <nav>
              <ul>
                {navigation.map((menu) => (
                  <li
                    className={`${Styles.navLinkQa} ${Styles.navLinkQaMain} ${
                      menu.id == seletedItem ? Styles.active : Styles.hide
                    }`}
                  >
                    <div key={menu.id}>
                      <div className="d-flex align-items-center gap-3">
                        <img src={menu.icon} className={Styles.iconImg} />
                        <Link to="/" className={Styles.titleLink}>
                          {menu.title}
                        </Link>
                      </div>
                      <span
                        className={Styles.caretIcon}
                        onClick={() =>
                          seletedItem == menu.id
                            ? setSelectedItem("")
                            : setSelectedItem(menu.id)
                        }
                      >
                        <img src={downIcon} alt="down" />
                      </span>
                    </div>

                    {menu?.children ? (
                      <ul className={Styles.subMenu}>
                        {menu.children.map((children) => {
                          return (
                            <li
                              className={Styles.navLinkQa}
                              onClick={(e) => {
                                e.stopPropagation();
                              }}
                            >
                              <Link to="/">{children.title}</Link>
                            </li>
                          );
                        })}
                      </ul>
                    ) : null}
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </div>
      </aside>
      <button type="submit" onClick={onSubmit}>
        Submit
      </button>
    </>
  );
};

export default AsideMenu;

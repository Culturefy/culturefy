import React, { FC, useState } from "react";
import Styles from "./styles.module.scss";

import downIcon from "../../assets/images/downIcon.svg";

import culIcon2 from "../../assets/images/cultureIcon2.png";
import educationIcon from "../../assets/images/educationIcon.svg";
import rewardIcon from "../../assets/images/rewardIcon.svg";
import communityIcon from "../../assets/images/communityIcon.svg";
import campaignIcon from "../../assets/images/compaignIcon.png";

// import Button from "../../../../components/common/button";

import { Link } from "react-router-dom";
import Button from "../Button";

const AsideMenu = () => {
  const [seletedItem, setSelectedItem] = useState("");

  const side_menu = [
    {
      id: "culturecheck",
      title: "Culture Check",
      icon: culIcon2,
      subMenu: [
        {
          id: "brandCultureStrategy",
          title: "Brand Culture Strategy",
        },
        {
          id: "Surveys",
          title: "Surveys",
        },
      ],
    },
    {
      id: "Learning",
      title: "Learning",
      icon: educationIcon,
      subMenu: [
        {
          id: "Courses",
          title: "Courses",
        },
        {
          id: "Videos",
          title: "Videos",
        },
        {
          id: "Archived",
          title: "Archived",
        },
        {
          id: "Certification",
          title: "Certification",
        },
      ],
    },
    {
      id: "Rewards",
      title: "Rewards",
      icon: rewardIcon,
      subMenu: [
        {
          id: "Redeem",
          title: "Redeem",
        },
      ],
    },
    {
      id: "Community",
      title: "Community",
      icon: communityIcon,
      subMenu: [
        {
          id: "ResourceGroups",
          title: "Resource Groups",
        },
        {
          id: "Events",
          title: "Events",
        },
        {
          id: "Mentorship",
          title: "Mentorship",
        },
        {
          id: "socialFeed",
          title: "social Feed",
        },
      ],
    },

    {
      id: "Campaign",
      title: "Campaign",
      icon: campaignIcon,
      subMenu: [
        {
          id: "Workspaces",
          title: "Workspaces",
        },
        {
          id: "Tasks",
          title: "Tasks",
        },
        {
          id: "Recruting",
          title: "Recruting",
        },
      ],
    },
  ];
  return (
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
              {side_menu.map((menu) => (
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

                  {menu?.subMenu ? (
                    <ul className={Styles.subMenu}>
                      {menu.subMenu.map((submenu) => {
                        return (
                          <li
                            className={Styles.navLinkQa}
                            onClick={(e) => {
                              e.stopPropagation();
                            }}
                          >
                            <Link to="/" key={submenu.id}>
                              {submenu.title}
                            </Link>
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
  );
};

export default AsideMenu;

import React from "react";
import "./Deshboard.css";
import Logo from "../assets/Logo.jpg";
import Home from "../assets/homeIcon.svg";
import Chessicon from "../assets/chessIcon.svg";
import Settingicon from "../assets/settingIcon.svg";
import asideBottom from "../assets/asideBottom-line.png";

const AsideLeft = () => {
  return (
    <div className="aside-left">
    <div className="logo">
      <img src={Logo} alt="logo" />
    </div>
    <div className="aside-left-nav">
      <ul>
        <li>
          <div className="list">
            <img src={Home} alt="homeicon" />
          </div>
        </li>
        <li>
          <div className="list">
            <img src={Chessicon} alt="chessicon" />
          </div>
        </li>
        <li>
          <div className="list">
            <img src={Settingicon} alt="settingicon" />
          </div>
        </li>
      </ul>
    </div>
    <div className="asidebottom">
      <img src={asideBottom}  alt="" />
    </div>
  </div>
  )
}

export default AsideLeft
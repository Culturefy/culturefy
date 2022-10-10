import React from "react";
import { Link } from "react-router-dom";
import campaignIcon from "../assets/compaignIcon.png";
import Down from "../assets/downIcon.svg";

const AsideRight = () => {
  return (
    <div className="aside-right">
      <div className="top-buttons">
        <select name="" id="" className="compnay-name">
          <option value="1">Compnay Name1</option>
          <option value="2">Compnay Name2</option>
          <option value="3">Compnay Name3</option>
          <option value="4">Compnay Name4</option>
        </select>
        <button className="createnew">+ Create New</button>
        <button className="upload">Upload a File</button>
      </div>
      <div className="right-nav">
        <ul>
          <li>
            <Link to="/campaigns">
              <div className="campaign">
                <img src={campaignIcon} alt="" />
                <p>Campaign</p>
                <img src={Down} alt="" />
              </div>
            </Link>
          </li>
        </ul>
      </div>
      <div className="task-inbox-tabs"></div>
    </div>
  );
};

export default AsideRight;

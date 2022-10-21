import React, { useState } from "react";
import { Link } from "react-router-dom";
import campaignIcon from "../assets/compaignIcon.png";
import Down from "../assets/downIcon.svg";
import EducationIcon from "../assets/educationIcon.svg"
import Culture_Check from "../assets/cultureCheck_icon.png"

const AsideRight = () => {

  const [campaign, setCampaign] = useState(false)

  const arrowClickhandle = () => {
    // setCampaign(true)
    if (campaign == false) {
      setCampaign(true)
    } else {
      setCampaign(false)
    }
    console.log("clicked")
  }

  return (
    <div className="aside-right">
      <div className="top-buttons">
        <select name="" id="" className="compnay_name">
          <option value="1">Compnay Name1</option>
          <option value="2">Compnay Name2</option>
          <option value="3">Compnay Name3</option>
          <option value="4">Compnay Name4</option>
        </select>
        <button className="createnew">+ Create New</button>
        <button className="upload">Upload a File</button>
      </div>
      <hr className="asideright_hr" />
      <div className="right-nav">
        <ul>
          <li>
            <Link to="#">
              <div className="campaigns">
                <div className="list_logo_icon">
                  <img src={Culture_Check} alt="" />
                </div>
                <div className="list_name">
                  <p >Culture Check</p>
                </div>
                <div className="down_arrow_icon">
                  <img src={Down} alt="" />
                </div>
              </div>
            </Link>
          </li>
          <li>
            <Link to="#">
              <div className="campaigns">
                <div className="list_logo_icon">
                  <img src={EducationIcon} alt="" />
                </div>
                <div className="list_name">
                  <p >Learning</p>
                </div>
                <div className="down_arrow_icon">
                  <img src={Down} alt="" />
                </div>
              </div>
            </Link>
          </li>
          <li>
            <Link to="#">
              <div className="campaigns">
                <div className="list_logo_icon">
                  <img src={campaignIcon} alt="" />
                </div>
                <div className="list_name">
                  <p >Rewards</p>
                </div>
                <div className="down_arrow_icon">
                  <img src={Down} alt="" />
                </div>
              </div>
            </Link>
          </li>
          <li>
            <Link to="#">
              <div className="campaigns">
                <div className="list_logo_icon">
                  <img src={campaignIcon} alt="" />
                </div>
                <div className="list_name">
                  <p >Community</p>
                </div>
                <div className="down_arrow_icon">
                  <img src={Down} alt="" />
                </div>
              </div>
            </Link>
          </li>
          <li>
            <div className="campaigns">
              <div className="list_logo_icon">
                <img src={campaignIcon} alt="" />
              </div>
              <div className="list_name">
                <Link to="/campaigns">
                  <p >Campaigns</p>
                </Link>
              </div>
              <div className="down_arrow_icon">
                {
                  campaign ? <i class="fa-solid fa-chevron-right" onClick={arrowClickhandle} ></i> : <img src={Down} alt="" onClick={arrowClickhandle} />
                }

              </div>
            </div>
            {
            campaign ?
              <div className="campaign_list">
                
                 <ul>
                  <li><Link to="/workspaces">Workspaces</Link></li>
                  <li><Link>Tasks</Link></li>
                  <li><Link>Recruiting</Link></li>
                 </ul>
              </div>
              : null
          }
          </li>
        </ul>
      </div>
      <hr className="asideright_hr" />
      
      <div className="task-inbox-tabs">

      </div>
    </div>

  );
};

export default AsideRight;
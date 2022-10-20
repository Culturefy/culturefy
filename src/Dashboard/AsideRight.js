import React,{useState} from "react";
import { Link } from "react-router-dom";
import campaignIcon from "../assets/compaignIcon.png";
import Down from "../assets/downIcon.svg";
import EducationIcon from "../assets/educationIcon.svg"
import Culture_Check from "../assets/cultureCheck_icon.png"

const AsideRight = () => {
  const [campaign,setCampaign] = useState(false)
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
      <div className="right-nav">
        <ul>
          <li>
            <Link to="/campaigns">
              <div className="campaigns">
              {/* <div className="campaigns"> */}
                <img src={Culture_Check} alt=""  />
                <p className="wid">Culture Check</p>
                <img src={Down} alt="" className="dn_arrow" />
              {/* </div> */}
              </div>
            </Link>
          </li>
          <li>
            <Link to="/campaigns">
              <div className="campaigns">
                <img src={EducationIcon} alt="" />
                <p className="wid">Learning</p>
                <img src={Down} alt="" className="dn_arrow"/>
              </div>
            </Link>
          </li>
          <li>
            <Link to="/campaigns">
              <div className="campaigns">
                <img src={campaignIcon} alt="" />
                <p className="wid">Rewards</p>
                <img src={Down} alt="" className="dn_arrow" />
              </div>
            </Link>
          </li>
          <li>
            <Link to="/campaigns">
              <div className="campaigns">
                <img src={campaignIcon} alt="" />
                <p className="wid">Community</p>
                <img src={Down} alt="" className="dn_arrow" />
              </div>
            </Link>
          </li>
          <li>
            {/* <Link to="/campaigns">
              <div className="campaigns">
                <img src={campaignIcon} alt="" />
                <p className="wid">Campaign</p>
                <img src={Down} alt="" className="dn_arrow" />
              </div>
            </Link> */}
              {/* <Link to="/campaigns"> */}
              <div className="campaigns">
              <div className="users"><img src={campaignIcon} alt=""/></div>
                {/* <p>Campaign</p>
                <img src={Down} alt="" /> */}
                <p>Campaigns</p>    
             <li onClick={() => setCampaign(!campaign)}>{campaign ? <i class="fa fa-chevron-down" aria-hidden="true" id="correct"></i> : <i class="fa-solid fa-chevron-right" ></i>}</li>
             
             {/* <li onClick={"getElementById('correct').style.color='red'"}>{campaign ? <i class="fa fa-chevron-down" aria-hidden="true" id="correct"></i> : <i class="fa-solid fa-chevron-right" ></i>}</li> */}
              </div>
              <ul className="lists">
              {campaign &&  <> <li>Workspaces</li>
                <li>Tasks</li>
                <li>Recruting</li>  </>}
                </ul>
            {/* </Link> */}
          </li>
        </ul>
      </div>
      <div className="task-inbox-tabs"></div>
    </div>

  );
};

export default AsideRight;
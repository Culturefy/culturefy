import React from "react";
import { Link } from "react-router-dom";
import campaignIcon from "../assets/compaignIcon.png";
import Down from "../assets/downIcon.svg";
import EducationIcon from "../assets/educationIcon.svg"
import Culture_Check from "../assets/cultureCheck_icon.png"

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
              <div className="campaigns">
                <img src={Culture_Check} alt="" />
                <p>Culture Check</p>
                <img src={Down} alt="" />
              </div>
            </Link>
          </li>
          <li>
            <Link to="/campaigns">
              <div className="campaigns">
                <img src={EducationIcon} alt="" />
                <p>Learning</p>
                <img src={Down} alt="" />
              </div>
            </Link>
          </li>
          <li>
            <Link to="/campaigns">
              <div className="campaigns">
                <img src={campaignIcon} alt="" />
                <p>Rewards</p>
                <img src={Down} alt="" />
              </div>
            </Link>
          </li>
          <li>
            <Link to="/campaigns">
              <div className="campaigns">
                <img src={campaignIcon} alt="" />
                <p>Community</p>
                <img src={Down} alt="" />
              </div>
            </Link>
          </li>
          <li>
            <Link to="/campaigns">
              <div className="campaigns">
                <img src={campaignIcon} alt="" />
                <p>Campaign</p>
                <img src={Down} alt="" />
              </div>
            </Link>
          </li>
        </ul>
      </div>
      {/* <div className="task-inbox-tabs"></div> */}
                    {/* <div class="tasktab-btns">
                        <ul class="nav nav-pills mb-1" id="pills-tab" role="tablist">
                            <li class="nav-item" role="presentation">
                                <button class="task-btn active" id="pills-home-tab" data-bs-toggle="pill"
                                    data-bs-target="#pills-home" type="button" role="tab" aria-controls="pills-home"
                                    aria-selected="true">TASKS</button>
                            </li>
                            <li class="nav-item" role="presentation">
                                <button class="task-btn" id="pills-profile-tab" data-bs-toggle="pill"
                                    data-bs-target="#pills-profile" type="button" role="tab"
                                    aria-controls="pills-profile" aria-selected="false">INBOX</button>
                            </li>
                        </ul>
                        <button class="icon-btn bars-icon"> <i class="fas fa-bars"></i> </button>
                    </div>
                     <div class="tab-content" id="pills-tabContent">
                        <div class="tab-pane fade show active" id="pills-home" role="tabpanel"
                            aria-labelledby="pills-home-tab">

                            <div class="tabcontent-qa">

                                <ul class="tasks-list">

                                    <li>
                                        <div class="task-name-date">
                                            <p>Task Name</p>
                                            <p>Due 08/01/2022</p>
                                        </div>
                                        <div class="task-rate-users">
                                            <p class="per75-above">75%</p>
                                            <ul class="users-list d-flex">
                                                <li>
                                                    <img src="./assets-qa/images/man1.png" alt=""/>
                                                </li>
                                                <li>
                                                    <img src="./assets-qa/images/man2.png" alt=""/>
                                                </li>
                                                <li>
                                                    <img src="./assets-qa/images/man3.png" alt=""/>
                                                </li>
                                            </ul>
                                        </div>
                                    </li>

                                    <li>
                                        <div class="task-name-date">
                                            <p>Task Name</p>
                                            <p>Due 08/01/2022</p>
                                        </div>
                                        <div class="task-rate-users">
                                            <p class="per25-above">25%</p>
                                            <ul class="users-list d-flex">
                                                <li>
                                                    <img src="./assets-qa/images/man1.png" alt=""/>
                                                </li>
                                                <li>
                                                    <img src="./assets-qa/images/man2.png" alt=""/>
                                                </li>
                                                <li>
                                                    <img src="./assets-qa/images/man3.png" alt=""/>
                                                </li>
                                            </ul>
                                        </div>
                                    </li>

                                    <li>
                                        <div class="task-name-date">
                                            <p>Task Name</p>
                                            <p>Due 08/01/2022</p>
                                        </div>
                                        <div class="task-rate-users">
                                            <p class="per0-above">0%</p>
                                            <ul class="users-list d-flex">
                                                <li>
                                                    <img src="./assets-qa/images/man1.png" alt=""/>
                                                </li>
                                                <li>
                                                    <img src="./assets-qa/images/man2.png" alt=""/>
                                                </li>
                                                <li>
                                                    <img src="./assets-qa/images/man3.png" alt=""/>
                                                </li>
                                            </ul>
                                        </div>
                                    </li>

                                    <li>
                                        <div class="task-name-date">
                                            <p>Task Name</p>
                                            <p>Due 08/01/2022</p>
                                        </div>
                                        <div class="task-rate-users">
                                            <p class="per0-above">0%</p>
                                            <ul class="users-list d-flex">
                                                <li>
                                                    <img src="./assets-qa/images/man1.png" alt=""/>
                                                </li>
                                                <li>
                                                    <img src="./assets-qa/images/man2.png" alt=""/>
                                                </li>
                                                <li>
                                                    <img src="./assets-qa/images/man3.png" alt=""/>
                                                </li>
                                            </ul>
                                        </div>
                                    </li>

                                    <li>
                                        <div class="task-name-date">
                                            <p>Task Name</p>
                                            <p>Due 08/01/2022</p>
                                        </div>
                                        <div class="task-rate-users">
                                            <p class="per0-above">0%</p>
                                            <ul class="users-list d-flex">
                                                <li>
                                                    <img src="./assets-qa/images/man1.png" alt=""/>
                                                </li>
                                                <li>
                                                    <img src="./assets-qa/images/man2.png" alt=""/>
                                                </li>
                                                <li>
                                                    <img src="./assets-qa/images/man3.png" alt=""/>
                                                </li>
                                            </ul>
                                        </div>
                                    </li>

                                    <li>
                                        <div class="task-name-date">
                                            <p>Task Name</p>
                                            <p>Due 08/01/2022</p>
                                        </div>
                                        <div class="task-rate-users">
                                            <p class="per0-above">0%</p>
                                            <ul class="users-list d-flex">
                                                <li>
                                                    <img src="./assets-qa/images/man1.png" alt=""/>
                                                </li>
                                                <li>
                                                    <img src="./assets-qa/images/man2.png" alt=""/>
                                                </li>
                                                <li>
                                                    <img src="./assets-qa/images/man3.png" alt=""/>
                                                </li>
                                            </ul>
                                        </div>
                                    </li>



                                </ul>
                            </div>
                        </div>
                        </div> */}
                       
                </div>
           

  
    
  );
};

export default AsideRight;

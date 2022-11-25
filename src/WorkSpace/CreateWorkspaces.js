import { TextField } from "@mui/material";
import "./CreateWorksplace.css";
import React from "react";
import Content from "../component/Content";
import CreateWorksplaceimg from "../assets/createworksplace.jpg";
import { Link } from "react-router-dom";
import { useState } from "react";
import Calender from "../assets/calendar-icon.png";
import Notification from "../assets/Notifiction.svg";
import AdminImg from "../assets/admin-img.png";

const CreateWorkspaces = () => {
  const [workspaceData, setworkspaceData] = useState({
    workspace_name: "",
    workspace_hosts: "",
    workspace_date: "",
    workspace_description: "",
    workspace_invite: "",
  });

  const handleWorkspaceData = (e) => {
    setworkspaceData({ ...workspaceData, [e.target.name]: e.target.value });
  };

  return (
    <>
      <Content />

      <div className="createWorkspaces-wepper">
        <div className="create_campaignNew_version_ch">
          {/* Users */}
          <div className="campaign_header_user_data">
            <ul>
              <li>
                <img src={Calender} />
              </li>
              <li>
                <img src={Notification} />
              </li>
              <li>
                <img src={AdminImg} />
              </li>
            </ul>
          </div>
        </div>
        <div className="createworkspaces">
          <div className="create_workspaces_Form">
            <h1 className="createworkspace_title">Create Workspaces</h1>
            <label htmlFor="">Workspaces Name</label>
            <TextField
              name="workspace_name"
              id="standard-basic"
              placeholder="Enter Name..."
              variant="standard"
              style={{ paddingBottom: "20px" }}
              onChange={handleWorkspaceData}
              value={workspaceData.workspace_name}
            />
            <label htmlFor="">Hosts</label>
            <TextField
              name="workspace_hosts"
              id="standard-basic"
              placeholder="Search Names..."
              variant="standard"
              style={{ paddingBottom: "20px" }}
              onChange={handleWorkspaceData}
              value={workspaceData.workspace_hosts}
            />
            <label htmlFor="">Date and Time</label>

            <div className="Date_n_time">
              <input type="Date" className="workspace_date" />
            </div>
            <label htmlFor="">Description</label>
            <TextField
              name="workspace_description"
              id="standard-basic"
              placeholder="Description Hear..."
              variant="standard"
              style={{ paddingBottom: "20px" }}
              onChange={handleWorkspaceData}
              value={workspaceData.workspace_description}
            />
            <label htmlFor="">Invite Team Members</label>
            <TextField
              name="workspace_invite"
              id="standard-basic"
              placeholder="Search Names..."
              variant="standard"
              style={{ paddingBottom: "20px" }}
              onChange={handleWorkspaceData}
              value={workspaceData.workspace_invite}
            />

            <div className="buttons">
              <Link to="/workspacesdata">
                <button className="Next-btn">Next</button>
              </Link>
              <Link to="/workspacesdata">
                <button className="Skip-btn">Skip For now</button>
              </Link>
            </div>
          </div>
          <div className="create-workspaces-picture">
            <img src={CreateWorksplaceimg} alt="" />
          </div>
        </div>
      </div>
    </>
  );
};

export default CreateWorkspaces;

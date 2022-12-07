import React from 'react'
import { TextField } from "@mui/material";
import "./CreateWorkspace.css";
import CreateWorksplaceimg from "../../assets/campaign/createworksplace.jpg";
import { Link } from "react-router-dom";
import { useState } from "react";

const CreateWorkspace = () => {
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
    <div className="createWorkspaces-wepper">
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
            <Link to="/workspaces/workspacefiles">
              <button className="Next-btn">Next</button>
            </Link>
            <Link to="/workspaces/workspacefiles">
              <button className="Skip-btn">Skip For now</button>
            </Link>
          </div>
        </div>
        <div className="create-workspaces-picture">
          <img src={CreateWorksplaceimg} alt="" />
        </div>
      </div>
    </div>
    
  )
}

export default CreateWorkspace

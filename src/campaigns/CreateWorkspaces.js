import { Box } from "@material-ui/core";
import { TextField } from "@mui/material";
import "./CreateWorksplace.css";
import React from "react";
import Content from "../component/Content";
import CreateWorksplaceimg from "../assets/createworksplace.jpg";

const CreateWorkspaces = () => {
  return (
    <>
      <Content />
      <div className="createWorkspaces-wepper">
        <div className="createworkspaces">
          <div className="create-workspaces-Form">
            <h1>Create Workspaces</h1>
            <label htmlFor="">Workspaces Name</label>
            <TextField
              id="standard-basic"
              placeholder="Enter Name..."
              variant="standard"
              style={{ paddingBottom: "20px" }}
            />
            <label htmlFor="">Hosts</label>
            <TextField
              id="standard-basic"
              placeholder="Search Names..."
              variant="standard"
              style={{ paddingBottom: "20px" }}
            />
            <label htmlFor="">Date and Time</label>
            <TextField
              id="standard-basic"
              placeholder="Enter Date"
              variant="standard"
              style={{ paddingBottom: "20px" }}
            />
            <label htmlFor="">Description</label>
            <TextField
              id="standard-basic"
              placeholder="Description Hear..."
              variant="standard"
              style={{ paddingBottom: "20px" }}
            />
            <label htmlFor="">Invite Team Members</label>
            <TextField
              id="standard-basic"
              placeholder="Search Names..."
              variant="standard"
              style={{ paddingBottom: "20px" }}
            />

            <div className="buttons">
              <button className="Next-btn">Next</button>
              <button className="Skip-btn">Skip For now</button>
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

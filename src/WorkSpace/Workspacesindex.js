import React from "react";
import { Link } from "react-router-dom";
import Content from "../component/Content";
import "./Workspacesindex.css";
import { FormControl, MenuItem, Select } from "@mui/material";


const Worksplaceindex = () => {
  return (
    <>
      <Content />
      <div className="wrapper-workpaces">
        <div className="create-new-Workspace">
          <Link to="/createworkspaces">
            <button>
              + <span> Create New Workspace</span>
            </button>
          </Link>
        </div>
        <div className="workspaces-tabs">
          <ul>
            <li>All</li>
            <li>Upcoming</li>
            <li>Archives</li>
          </ul>
          <div className="delete">
            <i class="fa-solid fa-trash-can"></i>
          </div>
        </div>
        <hr className="hr-tag" />
        <div className="workpaces-content">
          <div className="wrkspc_nm">
            <div className="wrkspc_nm_ch">
            {/* ========================= */}
            <div className="workpaces-card">
              <div className="workpaces-details">
                <h1>Workpace Name</h1>
                <p>Short description here,perspic unde omnis iste natus</p>
              </div>
              <div className="workpaces-date">
                <p>Aug 5,2020</p>
                <p>12:00 PM EST</p>
              </div>
            </div>
              {/* ========================= */}
            <div className="workpaces-card">
              <div className="workpaces-details">
                <h1>Workpace Name</h1>
                <p>Short description here,perspic unde omnis iste natus</p>
              </div>
              <div className="workpaces-date">
                <p>Aug 5,2020</p>
                <p>12:00 PM EST</p>
              </div>
            </div>
            {/* ========================= */}
            <div className="workpaces-card">
              <div className="workpaces-details">
                <h1>Workpace Name</h1>
                <p>Short description here,perspic unde omnis iste natus</p>
              </div>
              <div className="workpaces-date">
                <p>Aug 5,2020</p>
                <p>12:00 PM EST</p>
              </div>
            </div>
            {/* ========================= */}
            <div className="workpaces-card">
              <div className="workpaces-details">
                <h1>Workpace Name</h1>
                <p>Short description here,perspic unde omnis iste natus</p>
              </div>
              <div className="workpaces-date">
                <p>Aug 5,2020</p>
                <p>12:00 PM EST</p>
              </div>
            </div>
            {/* ========================= */}
            <div className="workpaces-card">
              <div className="workpaces-details">
                <h1>Workpace Name</h1>
                <p>Short description here,perspic unde omnis iste natus</p>
              </div>
              <div className="workpaces-date">
                <p>Aug 5,2020</p>
                <p>12:00 PM EST</p>
              </div>
            </div>
            {/* ========================= */}
            <div className="workpaces-card">
              <div className="workpaces-details">
                <h1>Workpace Name</h1>
                <p>Short description here,perspic unde omnis iste natus</p>
              </div>
              <div className="workpaces-date">
                <p>Aug 5,2020</p>
                <p>12:00 PM EST</p>
              </div>
            </div>
            {/* ========================= */}
        
            
          </div>
          </div>

          <div className="filter">
            <h2>Filter</h2>
            <hr />
            <p>categories</p>
            <ul>
              <li>
                <input type="checkbox" name="startegy" />
                <label for="vehicle1"> Startegy</label>
              </li>
              <li>
                <input type="checkbox" name="tax" />
                <label for="vehicle1"> Tax</label>
              </li>
              <li>
                <input type="checkbox" name="startegy" />
                <label for="vehicle1"> Marketing</label>
              </li>
              <li>
                <input type="checkbox" name="startegy" />
                <label for="vehicle1"> Title here</label>
              </li>
              <li>
                <input type="checkbox" name="startegy" />
                <label for="vehicle1"> Another Title here</label>
              </li>
            </ul>
            <hr style={{ marginTop: "0.625rem", marginBottom: "0.625rem" }} />
            <input type="date" name="date" />
            <span> to </span>
            <input type="date" name="date" />
            <hr style={{ marginTop: "0.625rem", marginBottom: "0.625rem" }} />
            <div className="dropdown">
            <FormControl fullWidth  className="abc" >
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                size="small"
                label="Age"
                // onChange={handleChange}
                placeholder="Title here"
              >
                <MenuItem value={1}>Title here</MenuItem>
                
              </Select>
            </FormControl>
            </div>
            <div className="dropdown">
            <FormControl fullWidth  className="abc" >
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                size="small"
                label="Age"
                // onChange={handleChange}
              >
                <MenuItem value={1}>Title here</MenuItem>
                
              </Select>
            </FormControl>
            </div>

          </div>
        </div>
        </div>

    </>
  );
};

export default Worksplaceindex;

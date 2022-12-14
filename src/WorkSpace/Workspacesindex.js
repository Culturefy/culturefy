import React from "react";
import { Link } from "react-router-dom";
import Content from "../component/Content";
import "./Workspacesindex.css";
import { FormControl, MenuItem, Paper, Select } from "@mui/material";
import InputBase from '@mui/material/InputBase';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';


const Worksplaceindex = () => {
  return (
    <>
      <Content />
      <div className="content">
        <div className="main-top-nav">
          <ul class="bts-profile align-items-center justify-content-end">
            <li>
              {/* <img src={Calender} /> */}
            </li>
            <li>
              {/* <img src={Notification} /> */}
            </li>
            <li>
              {/* <img src={AdminImg} /> */}
            </li>
          </ul>

          <div className='heading_search_container'>
            <h1 className='heading_main_container'>Workspaces</h1>
            <Paper
              component="form"
              sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: 400 }}
            >
              <InputBase
                sx={{ ml: 1, flex: 1 }}
                placeholder="Search"
                inputProps={{ 'aria-label': 'Search' }}
              />
              <IconButton type="button" sx={{ p: '10px' }} aria-label="search">
                <SearchIcon />
              </IconButton>
              <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />

            </Paper>
          </div>
        </div>
      </div>
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
              <div className="workspace_container">
                <Link to="/workspacesdata">
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
                </Link>
              </div>

              {/* ========================= */}
              <div className="workspace_container">
                <Link to="/workspacesdata">
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
                </Link>
              </div>
              {/* ========================= */}
              <div className="workspace_container">
                <Link to="/workspacesdata">
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
                </Link>
              </div>
              {/* ========================= */}
              <div className="workspace_container">
                <Link to="/workspacesdata">
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
                </Link>
              </div>
              {/* ========================= */}
              <div className="workspace_container">
                <Link to="/workspacesdata">
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
                </Link>
              </div>
              {/* ========================= */}
              <div className="workspace_container">
                <Link to="/workspacesdata">
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
                </Link>
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
            <div className="filter_date1">
            <input type="month" name="date" className="filter_date" />
            <span style={{ margin: "0 0.2rem" }}> to </span>
            <input type="month" name="date" className="filter_date" />
            </div>
            <hr style={{ marginTop: "0.625rem", marginBottom: "0.625rem" }} />
            <div className="dropdown">

              <select className="filter_dropdown"  >
                <option value="title">Title hear</option>
                <option value="title">Title hear</option>
                <option value="title">Title hear</option>
                <option value="title">Title hear</option>
              </select>
            </div>
            <div className="dropdown" >
              <select className="filter_dropdown" >
                <option value="title">Title hear</option>
                <option value="title">Title hear</option>
                <option value="title">Title hear</option>
                <option value="title">Title hear</option>
              </select>
            </div>

          </div>
        </div>
      </div>

    </>
  );
};

export default Worksplaceindex;

//@ts-nocheck
import React from "react";
import { Link } from "react-router-dom";
import "./WorkspaceList.css";
import Avatar from "@mui/material/Avatar";
import AvatarGroup from "@mui/material/AvatarGroup";
import { useState } from "react";

const index = () => {
  const [change, setChange] = useState(true);
  const [upcoming, setUpcoming] = useState(false);
  const [archive, setArchive] = useState(false);
  const changeHandler = () => {
    if (change === false) {
      setChange(true);
      setUpcoming(false)
      setArchive(false);
    } else {
      setChange(false);
    }
  };
  const upcomingHandler = () => {
    if (upcoming === false) {
      setUpcoming(true);
      setChange(false);
      setArchive(false);
    } else {
      setUpcoming(false);
    }
  };
  const archivehandler = () => {
    if (upcoming === false) {
      setArchive(true);
      setChange(false);
      setUpcoming(false);
    } else {
      setUpcoming(false);
    }
  };


  return (
    <div className="wrapper-workpaces">
      <div className="create-new-Workspace">
        <Link to="/workspaces/createworkspaces">
          <button>
            + <span> Create New Workspace</span>
          </button>
        </Link>
      </div>
      <div className="workspaces-tabs">
        <ul>
          {change ? (
            <li onClick={changeHandler} className="li_clr">
              All
            </li>
          ) : (
            <li onClick={changeHandler}>All</li>
          )}

          {upcoming ? (
            <li onClick={upcomingHandler} className="li_clr">
              Upcoming
            </li>
          ) : (
            <li onClick={upcomingHandler}>Upcoming</li>
          )}
          {archive ? (
            <li onClick={archivehandler} className="li_clr">
              Archives
            </li>
          ) : (
            <li onClick={archivehandler}>Archives</li>
          )}

     
        </ul>
        <div className="delete">
          <i class="fa-solid fa-trash-can"></i>
        </div>
      </div>

      <div className="workpaces-content">
        <div className="wrkspc_nm">
          <div className="wrkspc_nm_ch">
            {/* ========================= */}
            <div className="workspace_container">
              <Link to="/workspacesfile/workspacefiles">
                <div className="workpaces-card">
                  <div className="workpaces-details">
                    <h1>MLB Recruiting</h1>
                    {/* <p>Short description here,perspic unde omnis iste natus</p> */}
                    <div className="workpaces-date">
                      <p>Aug 5,2020</p>
                      <p>12:00 PM EST</p>
                    </div>
                  </div>
                  <div className="list_para">
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. .
                    </p>
                  </div>
                </div>
              </Link>
              <div className="avtar_containt">
                <AvatarGroup max={4}>
                  <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
                  <Avatar
                    alt="Travis Howard"
                    src="/static/images/avatar/2.jpg"
                  />
                  <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
                  <Avatar
                    alt="Agnes Walker"
                    src="/static/images/avatar/4.jpg"
                  />
                  <Avatar
                    alt="Trevor Henderson"
                    src="/static/images/avatar/5.jpg"
                  />
                </AvatarGroup>
              </div>
            </div>
            <div className="workspace_container">
              <Link to="/workspacesfile/workspacefiles">
                <div className="workpaces-card">
                  <div className="workpaces-details">
                    <h1>MLB Recruiting</h1>
                    {/* <p>Short description here,perspic unde omnis iste natus</p> */}
                    <div className="workpaces-date">
                      <p>Aug 5,2020</p>
                      <p>12:00 PM EST</p>
                    </div>
                  </div>
                  <div className="list_para">
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. .
                    </p>
                  </div>
                </div>
              </Link>
              <div className="avtar_containt">
                <AvatarGroup max={4}>
                  <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
                  <Avatar
                    alt="Travis Howard"
                    src="/static/images/avatar/2.jpg"
                  />
                  <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
                  <Avatar
                    alt="Agnes Walker"
                    src="/static/images/avatar/4.jpg"
                  />
                  <Avatar
                    alt="Trevor Henderson"
                    src="/static/images/avatar/5.jpg"
                  />
                </AvatarGroup>
              </div>
            </div>
            <div className="workspace_container">
              <Link to="/workspacesfile/workspacefiles">
                <div className="workpaces-card">
                  <div className="workpaces-details">
                    <h1>MLB Recruiting</h1>
                    {/* <p>Short description here,perspic unde omnis iste natus</p> */}
                    <div className="workpaces-date">
                      <p>Aug 5,2020</p>
                      <p>12:00 PM EST</p>
                    </div>
                  </div>
                  <div className="list_para">
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. .
                    </p>
                  </div>
                </div>
              </Link>
              <div className="avtar_containt">
                <AvatarGroup max={4}>
                  <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
                  <Avatar
                    alt="Travis Howard"
                    src="/static/images/avatar/2.jpg"
                  />
                  <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
                  <Avatar
                    alt="Agnes Walker"
                    src="/static/images/avatar/4.jpg"
                  />
                  <Avatar
                    alt="Trevor Henderson"
                    src="/static/images/avatar/5.jpg"
                  />
                </AvatarGroup>
              </div>
            </div>
            <div className="workspace_container">
              <Link to="/workspacesfile/workspacefiles">
                <div className="workpaces-card">
                  <div className="workpaces-details">
                    <h1>MLB Recruiting</h1>
                    {/* <p>Short description here,perspic unde omnis iste natus</p> */}
                    <div className="workpaces-date">
                      <p>Aug 5,2020</p>
                      <p>12:00 PM EST</p>
                    </div>
                  </div>
                  <div className="list_para">
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. .
                    </p>
                  </div>
                </div>
              </Link>
              <div className="avtar_containt">
                <AvatarGroup max={4}>
                  <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
                  <Avatar
                    alt="Travis Howard"
                    src="/static/images/avatar/2.jpg"
                  />
                  <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
                  <Avatar
                    alt="Agnes Walker"
                    src="/static/images/avatar/4.jpg"
                  />
                  <Avatar
                    alt="Trevor Henderson"
                    src="/static/images/avatar/5.jpg"
                  />
                </AvatarGroup>
              </div>
            </div>
            <div className="workspace_container">
              <Link to="/workspacesfile/workspacefiles">
                <div className="workpaces-card">
                  <div className="workpaces-details">
                    <h1>MLB Recruiting</h1>
                    {/* <p>Short description here,perspic unde omnis iste natus</p> */}
                    <div className="workpaces-date">
                      <p>Aug 5,2020</p>
                      <p>12:00 PM EST</p>
                    </div>
                  </div>
                  <div className="list_para">
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. .
                    </p>
                  </div>
                </div>
              </Link>
              <div className="avtar_containt">
                <AvatarGroup max={4}>
                  <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
                  <Avatar
                    alt="Travis Howard"
                    src="/static/images/avatar/2.jpg"
                  />
                  <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
                  <Avatar
                    alt="Agnes Walker"
                    src="/static/images/avatar/4.jpg"
                  />
                  <Avatar
                    alt="Trevor Henderson"
                    src="/static/images/avatar/5.jpg"
                  />
                </AvatarGroup>
              </div>
            </div>
            <div className="workspace_container">
              <Link to="/workspacesfile/workspacefiles">
                <div className="workpaces-card">
                  <div className="workpaces-details">
                    <h1>MLB Recruiting</h1>
                    {/* <p>Short description here,perspic unde omnis iste natus</p> */}
                    <div className="workpaces-date">
                      <p>Aug 5,2020</p>
                      <p>12:00 PM EST</p>
                    </div>
                  </div>
                  <div className="list_para">
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. .
                    </p>
                  </div>
                </div>
              </Link>
              <div className="avtar_containt">
                <AvatarGroup max={4}>
                  <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
                  <Avatar
                    alt="Travis Howard"
                    src="/static/images/avatar/2.jpg"
                  />
                  <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
                  <Avatar
                    alt="Agnes Walker"
                    src="/static/images/avatar/4.jpg"
                  />
                  <Avatar
                    alt="Trevor Henderson"
                    src="/static/images/avatar/5.jpg"
                  />
                </AvatarGroup>
              </div>
            </div>
          </div>
        </div>

        <div className="filter">
          <h3>Filter</h3>
          <hr className="workspace_filter_hr" />
          <p>categories</p>
          <ul className="workspace_filter_ul">
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
            <select className="filter_dropdown">
              <option value="title">Title Here</option>
              <option value="title">Title Here</option>
              <option value="title">Title Here</option>
              <option value="title">Title Here</option>
            </select>
          </div>
          <div className="dropdown">
            <select className="filter_dropdown">
              <option value="title">Title Here</option>
              <option value="title">Title Here</option>
              <option value="title">Title Here</option>
              <option value="title">Title Here</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
};

export default index;

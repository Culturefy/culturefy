import React from "react";
import { Link } from "react-router-dom";
import Content from "../component/Content";
import "./Workspacesindex.css";

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
        <hr/>
        <div className="workpaces-content">
        <div className="workpaces-name">
          <div className="workpaces-card">
            
          </div>
        </div>
        <div className="filter">
          
        </div>
        </div>
      </div>
    </>
  );
};

export default Worksplaceindex;

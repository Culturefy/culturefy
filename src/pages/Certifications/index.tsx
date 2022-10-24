import React from "react";
import CreatedModulesAll from "../CreatedModulesAll";
import CreatedModulesArchived from "../CreatedModulesArchived";
import CreatedModulesCourses from "../CreatedModulesCourses";
import CreatedModulesVideos from "../CreatedModulesVideos";
import Styles from "./styles.module.scss";
const Certifications = () => {
  return (
    <>
      <div className={Styles.tabsMain}>
        <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
          <li className="nav-item" role="presentation">
            <button
              className="nav-link active"
              id="pills-all-tab"
              data-bs-toggle="pill"
              data-bs-target="#pills-all"
              type="button"
              role="tab"
              aria-controls="pills-all"
              aria-selected="true"
            >
              all
            </button>
          </li>
          <li className="nav-item" role="presentation">
            <button
              className="nav-link"
              id="pills-courses-tab"
              data-bs-toggle="pill"
              data-bs-target="#pills-courses"
              type="button"
              role="tab"
              aria-controls="pills-courses"
              aria-selected="false"
            >
              Active
            </button>
          </li>
          <li className="nav-item" role="presentation">
            <button
              className="nav-link"
              id="pills-videos-tab"
              data-bs-toggle="pill"
              data-bs-target="#pills-videos"
              type="button"
              role="tab"
              aria-controls="pills-videos"
              aria-selected="false"
            >
              Complete
            </button>
          </li>
        </ul>
        <div className="tab-content" id="pills-tabContent">
          <div
            className="tab-pane fade show active"
            id="pills-all"
            role="tabpanel"
            aria-labelledby="pills-all-tab"
          >
            <CreatedModulesAll />
          </div>
          <div
            className="tab-pane fade"
            id="pills-courses"
            role="tabpanel"
            aria-labelledby="pills-courses-tab"
          >
            <CreatedModulesCourses />
          </div>
          <div
            className="tab-pane fade"
            id="pills-videos"
            role="tabpanel"
            aria-labelledby="pills-videos-tab"
          >
            <CreatedModulesVideos />
          </div>
        </div>
      </div>
    </>
  );
};

export default Certifications;

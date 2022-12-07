// import Filter from '../../component/Filter'
import React from "react";
// import Content from '../../component/Content'
// import WorkspaceHeader from '../WorkspaceHeader'
import "./WorkpacesUpload.css";
import { Link } from "react-router-dom";
import Filter from "../../components/Filter";
import { UploadButton } from "react-uploader";
import { UploadDropzone } from "react-uploader";
import { Uploader } from "uploader";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";
import FileUploadOutlinedIcon from "@mui/icons-material/FileUploadOutlined";
const index = () => {
  const uploader = Uploader({
    apiKey: "free",
  });

  return (
    <div className="workspaceupload_main_header">
      <div className="workspacesdata_upload">
        <div className="Upload_wepper">
          <div className="workpace_upload_header">
            <div className="upload_inner_header">
              <Link to="/workspacesdata">
                <button>Back</button>
              </Link>
              <h2>Add Files to Folder</h2>
            </div>
          </div>
          <div className="upload_files_Section">
            <UploadButton
              uploader={uploader}
              options={{ multi: true }}
              onComplete={(files) => console.log(files)}
            >
              {({ onClick }) => (
                <button onClick={onClick} className="upload_btn">
                  Upload a file
                  <FileUploadOutlinedIcon style={{ margin: "0 10px" }} />
                </button>
              )}
            </UploadButton>
            <p>or drag and drop</p>
          </div>
          <div className="filter_component">
            <Filter />
          </div>
          <div className="uoload_search">
            <input type="search" placeholder="Search assets" />
            <div className="upload_search_button">
              <i className="fa-solid fa-magnifying-glass"></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default index;

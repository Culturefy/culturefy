import React from "react";
import { useState } from "react";
// fileUploder
import { UploadButton } from "react-uploader";
import { UploadDropzone } from "react-uploader";
import { Uploader } from "uploader";
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';
// Images
import position from "../../assets/go-circle.svg";
import upload from "../../assets/file_upload.png";
// Mui tabs
import Box from "@mui/material/Box";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import CheckIcon from "@mui/icons-material/Check";

const PositionOnClick = () => {
  const uploader = Uploader({
    apiKey: "free",
  });

  const [form, setForm] = useState({
    jobtitle: "",
    description: "",
    location: "",
    employrtype: "",
    jobfuntion: "",
    joblevel: "",
    company: "",
    addskills: "",
  });
  
  const [data,setData] = useState(false);
  const inputHandler = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    const value = e.target.value
    if(value.length >=1){
        setData(true)
    }else{
        setData(false)
    }
  };
  const [value, setValue] = React.useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <div className="crt_cmpgn_plan__" style={{ backgroundColor: "rgba(211, 211, 211, 0.5)",borderRadius:"25px",}}>
      <div className="_header_title_plan_pr">
        <div className="_header_title_plan">
          <div className="_header_title_plan_ch">
            <img src={position} alt="" className="campaign_goal_check_pr_img" />
          </div>
        </div>
        <div className="position_h3_pr">
          <h2>Position</h2>
        </div>
      </div>
      {/* ==================CampaignGoal=========================== */}
      <div className="Position_crt_cmgn">
        <div className="campaign_goal_check_pr">
          <div className="campaign_goal_check_possess_ch">
          { data ? (
              <div className="campaign_goal_check_alter">
                <CheckIcon className="cmpgn_check_icon_alter" />
              </div>

            ) : (
              <div className="campaign_goal_check">
                <CheckIcon className="cmpgn_check_icon" />
              </div>
           
            )}
          </div>
        </div>

        
        <div className="position_h3_pr">
          <div className="cmgn_h3">
            <h4>Design campaign</h4>
          </div>
          <div className="position_tabs">
            <Box sx={{ width: "100%" }}>
              <Tabs
                value={value}
                onChange={handleChange}
                className="cmpg_position_tabs_header"
              >
                {value === 0 ? (
                  <Tab
                    label="INFO"
                    style={{
                      color: "black",
                      fontSize: "20px",
                      fontWeight: "700",
                    }}
                  />
                ) : (
                  <Tab
                    label="INFO "
                    style={{
                      color: "lightgrey",
                      fontSize: "20px",
                      fontWeight: "700",
                    }}
                  />
                )}
                {value === 1 ? (
                  <Tab
                    label="NATIVE"
                    style={{
                      color: "black",
                      fontSize: "20px",
                      fontWeight: "700",
                    }}
                  />
                ) : (
                  <Tab
                    label="NATIVE "
                    style={{
                      color: "lightgrey",
                      fontSize: "20px",
                      fontWeight: "700",
                    }}
                  />
                )}
                {value === 2 ? (
                  <Tab
                    label="DISPLAY"
                    style={{
                      color: "black",
                      fontSize: "20px",
                      fontWeight: "700",
                    }}
                  />
                ) : (
                  <Tab
                    label="DISPLAY "
                    style={{
                      color: "lightgrey",
                      fontSize: "20px",
                      fontWeight: "700",
                    }}
                  />
                )}

                {value === 3 ? (
                  <Tab
                    label="VIDEO"
                    style={{
                      color: "black",
                      fontSize: "20px",
                      fontWeight: "700",
                    }}
                  />
                ) : (
                  <Tab
                    label="VIDEO "
                    style={{
                      color: "lightgrey",
                      fontSize: "20px",
                      fontWeight: "700",
                    }}
                  />
                )}
                {value === 4 ? (
                  <Tab
                    label="AUDIO"
                    style={{
                      color: "black",
                      fontSize: "20px",
                      fontWeight: "700",
                    }}
                  />
                ) : (
                  <Tab
                    label="AUDIO "
                    style={{
                      color: "lightgrey",
                      fontSize: "20px",
                      fontWeight: "700",
                    }}
                  />
                )}
              </Tabs>
            </Box>
          </div>
        </div>
      </div>

      {value === 0 ? (
        <div className="position_tabs_info">
          <div className="position_tabs_title">
            <input type="text" placeholder="Job 
            Title" 
            name="jobtitle"
            value={form.jobtitle}
            onChange={inputHandler}
            />
          </div>
          <div className="position_tabs_fields">
            <input
              type="text"
              placeholder="Job Description"
              name="description"
              value={form.description}
              onChange={inputHandler}
            />
          </div>
          <div className="position_tabs_fields">
            <input
              type="text"
              placeholder="Job Location"
              name="location"
              value={form.location}
              onChange={inputHandler}
            />
          </div>
          {/* == */}
          <div className="position_tabs_drpdn">
            <div className="position_tabs_drpdn_tr">
              <div className="position_tabs_drpdn_td">
                <input
                  type="text"
                  placeholder="Employee Type"
                  name="employrtype"
                  value={form.employrtype}
                  onChange={inputHandler}
                />
              </div>
              <div className="position_tabs_drpdn_td">
                <input
                  type="text"
                  placeholder="Job Function (add upto 3)"
                  name="jobfuntion"
                  value={form.jobfuntion}
                  onChange={inputHandler}
                />
              </div>
            </div>
          </div>
          {/* ==== */}
          <div className="position_tabs_drpdn">
            <div className="position_tabs_drpdn_tr">
              <div className="position_tabs_drpdn_td">
                <input
                  type="text"
                  name="joblevel"
                  placeholder="Job Level"
                  value={form.joblevel}
                  onChange={inputHandler}
                />
              </div>
              <div className="position_tabs_drpdn_td">
                <input
                  type="text"
                  placeholder="Company Industry (add upto 3)"
                  name="company"
                  value={form.company}
                  onChange={inputHandler}
                />
              </div>
            </div>
          </div>
          {/* == */}
          <div className="position_tabs_fields">
            <input
              type="text"
              placeholder="Add Required Skills+"
              name="addskills"
              value={form.addskills}
              onChange={inputHandler}
            />
          </div>
        </div>
      ) : null}

      {value === 1 ? (
        <div className="position_native">
          {/* == */}
          <div className="position_native_asideleft">
            <div className="position_native_inputs">
              <input type="text" placeholder="Add Title" />
            </div>
            <div className="position_native_inputs">
              <input type="text" placeholder="Ad Description" />
            </div>
            <div className="position_native_inputs">
              <input type="text" placeholder="URL" />
            </div>

            <div className="position_native_button">
              <button>uploads Files</button>
            </div>
          </div>
          {/* == */}
          <div className="position_native_asideright">
            <div className="position_native_asideright_fileupload">
              <UploadButton
                uploader={uploader}
                options={{ multi: true }}
                onComplete={(files) => console.log(files)}
              >
                {({ onClick }) => (
                  <button onClick={onClick} className="uploadwer_btn">
                    Upload a file...
                  </button>
                )}
              </UploadButton>
              <img src={upload} alt="file" className="native_file_uploader" />
            </div>
          </div>
        </div>
      ) : null}

      {value === 2 ? (
        <div className="position_native">
          {/* == */}
          <div className="position_display_asideleft">
            <div className="position_display_inputs">
              <input type="text" placeholder="Add Title" />
            </div>
            <div className="position_display_inputs">
              <input type="text" placeholder="Ad Description" />
            </div>
            <div className="position_display_inputs">
              <input type="text" placeholder="URL" />
            </div>

            <div className="position_native_button">
              <button>uploads Files</button>
            </div>
          </div>
          {/* == */}
          <div className="position_display_asideright">
            <div className="position_display_asideright_fileupload">
              <UploadButton
                uploader={uploader}
                options={{ multi: true }}
                onComplete={(files) => console.log(files)}
              >
                {({ onClick }) => (
                  <button onClick={onClick} className="uploadwer_btn">
                    Upload a file...
                  </button>
                )}
              </UploadButton>
              <img src={upload} alt="file" className="native_file_uploader" />
            </div>
          </div>
        </div>
      ) : null}

      {value === 3 ? (
        <div className="position_native">
          {/* == */}
          <div className="position_display_asideleft">
            <div className="position_display_inputs">
              <input type="text" placeholder="Video Title" />
            </div>
            <div className="position_display_inputs">
              <input type="text" placeholder="Video Description" />
            </div>
            <div className="position_display_inputs">
              <input type="text" placeholder="URL" />
            </div>

            <div className="position_native_button">
              <button>uploads Files</button>
            </div>
          </div>
          {/* == */}
          <div className="position_display_asideright">
            <div className="position_video_asideright_fileupload">
              <UploadButton
                uploader={uploader}
                options={{ multi: true }}
                onComplete={(files) => console.log(files)}
              >
                {({ onClick }) => (
                  <button onClick={onClick} className="uploadwer_btn">
                    Upload a file...
                  </button>
                )}
              </UploadButton>
              <img src={upload} alt="file" className="native_file_uploader" />
            </div>
          </div>
        </div>
      ) : null}

      {value === 4 ? (
        <div className="position_native">
          {/* == */}
          <div className="position_audio_asideleft">
            <div className="position_display_inputs">
              <input type="text" placeholder="Video Title" />
            </div>
            <div className="position_display_inputs">
              <input type="text" placeholder="Video Description" />
            </div>
            <div className="position_display_inputs">
              <input type="text" placeholder="URL" />
            </div>

            <div className="position_native_button">
              <button>uploads Files</button>
            </div>
          </div>
          {/* == */}
          <div className="position_display_asideright">
            <div className="position_video_asideright_fileupload">
              <UploadButton
                uploader={uploader}
                options={{ multi: true }}
                onComplete={(files) => console.log(files)}
              >
                {({ onClick }) => (
                  <button onClick={onClick} className="uploadwer_btn">
                    Upload a file...
                  </button>
                )}
              </UploadButton>
              <img src={upload} alt="file" className="native_file_uploader" />
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default PositionOnClick;

import React from "react";
import { useState, useCallback } from "react";
// Mui Check Icon
import CheckIcon from "@mui/icons-material/Check";
// Mui DropDown
import FormControl from "@mui/material/FormControl";
import NativeSelect from "@mui/material/NativeSelect";
// Mui calendar
import { SelectDatepicker } from "react-select-datepicker"; //Date Picker
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
// images
import planImage from "../../assets/plan-circle.svg";

// checkbox
const label = { inputProps: { "aria-label": "Checkbox demo" } };
const PlanOnClick = () => {
  const [checkbox, setCheckBox] = useState(false); //Audience Targeting Check Box
  const [abc, setabc] = useState(); // Date Picker

  // CheckBox For Complete Data Filling
  const [test, setTest] = useState(false); //Campaign Goal
  const [audience, setAudience] = useState(false); //Audience Targeting
  const[dateChange,setDateChange] = useState(false)

  const checkboxhandler = () => {
    if (checkbox === false) {
      setCheckBox(true);
    } else {
      setCheckBox(false);
    }
  };
  const onDateChange = useCallback((date) => {
    let abc = date;
    if (!abc) {
    } else {
      const abc = date.toLocaleDateString("en-us", {
        year: "numeric",
        month: "short",
        day: "numeric",
      }); // "Jul 2021 Friday"
      setabc(abc);
    }
  }, []);
  const [endDate, setEndDate] = useState(); // Date Picker


  const onEndDateChange = useCallback((date) => {
    let abc = date;
    if (!abc) {
    } else {
      const abc = date.toLocaleDateString("en-us", {
        year: "numeric",
        month: "short",
        day: "numeric",
      }); // "Jul 2021 Friday"
      setEndDate(abc);
    }
  }, []);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const CheckProgress = (e) => {
    const value = e.target.value;
    if (value !== " ") {
      setTest(true);
    }
    if (test === true && value === "") {
      setTest(false);
    }
  };

  const audienceChanger = (e) => {
    if(audience===false){
      setAudience(true)
    }else{
      setAudience(false)
    }
  };
  const dateChangeHandler=()=>{
    setDateChange(true)
  }
  return (
    <div className="crt_cmpgn_plan__" style={{ backgroundColor: "rgba(211, 211, 211, 0.5)",borderRadius:"25px"}}>
      <div className="_header_title_plan_pr">
        <div className="campaign_goal_check_pr">
          <img src={planImage} alt="" className="campaign_goal_check_pr_img" />
        </div>
        {/* Line Div */}
        <div className="line_div_cmpgn"></div>
        <div className="position_h3_pr">
          <h2>Plan</h2>
        </div>
      </div>
      <div className="Position_crt_cmgn">
        <div className="campaign_goal_check_pr">
          <div className="campaign_goal_check_possess_ch">
            {test === true ? (
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
          <div className="position_h3_des">
            <h3>Campaign Goal</h3>
          </div>
          <div className="position_tabs">
            <FormControl className="crt_cmpgn_inpt">
              <NativeSelect
                defaultValue={30}
                inputProps={{
                  name: "age",
                  id: "uncontrolled-native",
                }}
                onChange={CheckProgress}
              >
                <option value="">select</option>
                <option value={"Recruit More Employee"}>
                  Recruit More Employee
                </option>
                <option value={"Attract more Customer"}>
                  Attract more Customer
                </option>
              </NativeSelect>
            </FormControl>
          </div>
        </div>
      </div>
      {/* ==================Audience Targeting=========================== */}
      <div className="Audience_targeting">
        <div className="campaign_goal_check_pr">
          <div className="campaign_goal_check_possess_ch">
            {audience === true ? (
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
            <h3>Audience targeting</h3>
          </div>
          <div className="creat_cmpgn_check_box">
            <input
              type="checkbox"
              onChange={audienceChanger}
              value={audience}
            />
            <span className="auience_targeting_para">
              Use AI Audience targeting
            </span>
            <br />
            <input type="checkbox" 
            onClick={checkboxhandler} 
            onChange={audienceChanger}
            value={audience}
            />
            <span className="auience_targeting_para"> Use Custom Audience</span>
            <br />
            {/* Gender */}

            <div className="crt_cmpgn_aud_drpdn">
              {checkbox ? (
                <div className="crt_cmpgn_aud_drpdn">
                  <FormControl style={{ width: "40%" }}>
                    <NativeSelect
                      defaultValue={30}
                      inputProps={{
                        name: "age",
                        id: "uncontrolled-native",
                      }}
                    >
                      <option value={"Recruit More Employee"}>
                        All Gender
                      </option>
                      {/* <option value={"Attract more Customer"}>Attract more Customer</option> */}
                    </NativeSelect>
                  </FormControl>
                  {/* Age Group */}
                  <FormControl style={{ width: "40%" }}>
                    <NativeSelect
                      defaultValue={30}
                      inputProps={{
                        name: "age",
                        id: "uncontrolled-native",
                      }}
                    >
                      <option value={"Recruit More Employee"}>All Ages</option>
                      {/* <option value={"Attract more Customer"}>Attract more Customer</option> */}
                    </NativeSelect>
                  </FormControl>
                </div>
              ) : null}
            </div>
          </div>
        </div>
      </div>
      {/* =========================Schedule============================== */}
      <div className="Audience_targeting">
        <div className="campaign_goal_check_pr">


        {dateChange === true ? (
              <div className="campaign_goal_check_alter">
                <CheckIcon className="cmpgn_check_icon_alter" />
              </div>
            ) : (
              <div className="campaign_goal_check">
                <CheckIcon className="cmpgn_check_icon" />
              </div>
            )}


        </div>
        <div className="position_h3_pr">
          <div className="cmgn_h3">
            <h3>Schedule</h3>
          </div>
          <div className="date_comp">
            <div>
              <Button
                id="basic-button"
                aria-controls={open ? "basic-menu" : undefined}
                aria-haspopup="true"
                aria-expanded={open ? "true" : undefined}
                onClick={handleClick}
              >
                <div className="date_input_fields_campign_schedule">
                  <input
                    type="text"
                    placeholder="Start Date"
                    className="date_input_crt_cmpgn_start"
                    value={abc}
                    name="abc"
                  />
                  <input
                    type="text"
                    className="date_input_crt_cmpgn_end"
                    placeholder="End Date "
                    value={endDate}
                  />
                </div>
              </Button>

              <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                  "aria-labelledby": "basic-button",
                }}
                className="date_filter_main_menu"
                value={dateChange}
                onClick={dateChangeHandler}
              >
                <MenuItem>
                  <div className="datpick">
                    <h5 className="start_end_date">Start Date</h5>
                    <SelectDatepicker
                      // selectedDate={value}
                      onDateChange={onDateChange}
                    />
                    <h5 className="start_end_date">End Date</h5>
                    <SelectDatepicker
                      // selectedDate={endDate}
                      onDateChange={onEndDateChange}
                    />
                  </div>
                </MenuItem>
              </Menu>
            </div>
          </div>
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default PlanOnClick;

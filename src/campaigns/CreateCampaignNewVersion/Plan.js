import React from 'react'
import { useState, useCallback } from 'react';

// Mui Check Icon
import CheckIcon from '@mui/icons-material/Check';
// Mui DropDown
import FormControl from '@mui/material/FormControl';
import NativeSelect from '@mui/material/NativeSelect';
// Mui calendar
import { SelectDatepicker } from 'react-select-datepicker';//Date Picker
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
// images
import planImage from '../../assets/plan-circle.svg'



// checkbox
const label = { inputProps: { 'aria-label': 'Checkbox demo' } };
const Plan = () => {

  const [checkbox, setCheckBox] = useState(false) //Audience Targeting Check Box
  const [abc, setabc] = useState() // Date Picker  
  const checkboxhandler = () => {
    if (checkbox === false) {
      setCheckBox(true)
    } else {
      setCheckBox(false)
    }
  }
  const onDateChange = useCallback((date) => {
    let abc = date;
    if (!abc) {
    } else {
      const abc = date.toLocaleDateString('en-us', { year: 'numeric', month: 'short', day: 'numeric' }) // "Jul 2021 Friday"
      setabc(abc)
    }
  }, []);
  const [endDate, setEndDate] = useState() // Date Picker  
  const onEndDateChange = useCallback((date) => {
    let abc = date;
    if (!abc) {
    } else {
      const abc = date.toLocaleDateString('en-us', { year: 'numeric', month: 'short', day: 'numeric' }) // "Jul 2021 Friday"
      setEndDate(abc)
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
  return (

    <div className='crt_cmpgn_plan__'>
      <div className='_header_title_plan_pr'>
        <div className='_header_title_plan'>
          <img src={planImage} alt="" />
        </div>
        <div className='_header_title_plan_h1'>
          <h1>Plan</h1>
        </div>
      </div>
      {/* ==================CampaignGoal=========================== */}
      <div className='campaign_goal'>
        
        <div className='campaign_goal_check'>
          <CheckIcon className='cmpgn_check_icon' />
        </div>
        <div>
          <div className='cmgn_h3'>
            <h3>Campaign Goal</h3>
          </div>
          {/* <div className='crt_cmpgn_inpt' > */}
          <FormControl className='crt_cmpgn_inpt'>

            <NativeSelect
              defaultValue={30}
              inputProps={{
                name: 'age',
                id: 'uncontrolled-native',
              }}
            >
              <option value={"Recruit More Employee"}>Recruit More Employee</option>
              <option value={"Attract more Customer"}>Attract more Customer</option>
            </NativeSelect>
          </FormControl>
          {/* </Box> */}
        </div>
      </div>
      {/* ==================Audience Targeting=========================== */}
      <div className='Audience_targeting'>
        <div className='campaign_goal_check'>
          <CheckIcon className='cmpgn_check_icon' />
        </div>
        <div>
          <div className='cmgn_h3'>
            <h3>Audience targeting</h3>
          </div>
          <div className='creat_cmpgn_check_box'>
            <input type="checkbox" />
            <span className='auience_targeting_para'> Use AI Audience targeting </span><br />
            <input type="checkbox" onClick={checkboxhandler} />
            <span className='auience_targeting_para'> Use Custom Audience</span>
            <br />
            {/* Gender */}

            <div className='crt_cmpgn_aud_drpdn'>
              {checkbox ?
                <div className='crt_cmpgn_aud_drpdn'>
                  <FormControl style={{ width: "40%" }}>
                    <NativeSelect
                      defaultValue={30}
                      inputProps={{
                        name: 'age',
                        id: 'uncontrolled-native',
                      }}
                    >
                      <option value={"Recruit More Employee"}>All Gender</option>
                      {/* <option value={"Attract more Customer"}>Attract more Customer</option> */}
                    </NativeSelect>
                  </FormControl>
                  {/* Age Group */}
                  <FormControl style={{ width: "40%" }} >

                    <NativeSelect
                      defaultValue={30}
                      inputProps={{
                        name: 'age',
                        id: 'uncontrolled-native',
                      }}
                    >
                      <option value={"Recruit More Employee"}>All Ages</option>
                      {/* <option value={"Attract more Customer"}>Attract more Customer</option> */}
                    </NativeSelect>
                  </FormControl>
                </div> : null
              }
            </div>
          </div>
        </div>
      </div>
      {/* =========================Schedule============================== */}
      <div className='Audience_targeting'>
        <div className='campaign_goal_check'>
          <CheckIcon className='cmpgn_check_icon' />
        </div>
        <div>
          <div className='cmgn_h3'>
            <h3>Schedule</h3>
          </div>
          <div className='date_comp'>

            <div>
              <Button
                id="basic-button"
                aria-controls={open ? 'basic-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                onClick={handleClick}
              >
                <div className='date_input_fields_campign_schedule'>
                  <input
                    type="text"
                    placeholder='Start Date'
                    className='date_input_crt_cmpgn_start'
                    value={abc}
                    name="abc"
                  />
                  <input
                    type="text"
                    className='date_input_crt_cmpgn_end'
                    placeholder='End Date '
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
                  'aria-labelledby': 'basic-button',
                }}
                className='date_filter_main_menu'
              >
                <MenuItem >
                  <div className='datpick'>
                    <h5 className='start_end_date'>
                      Start Date
                    </h5>
                    <SelectDatepicker
                      // selectedDate={value}
                      onDateChange={onDateChange}
                    />
                    <h5 className='start_end_date'>
                      End Date
                    </h5>
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
        <div>
        </div>
      </div>
    </div>
  )
}

export default Plan

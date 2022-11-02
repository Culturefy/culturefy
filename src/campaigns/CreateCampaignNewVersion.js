import React from 'react'
import { useState } from 'react';
import Content from '../component/Content'
import './CreateCampaignNewVersion.css'
// Mui Search Bar
// Search bar Mui
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
// Images
import Calender from '../assets/calendar-icon.png'
import Notification from '../assets/Notifiction.svg'
import AdminImg from '../assets/admin-img.png'
// Mui Aerrow
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

const CreateCampaignNewVersion = () => {
  const [plan, setPlan] = useState(true)
  const [position, setPosition] = useState(true)
  const [possess, setPossess] = useState(true)

  const planHandler = () => {
    if (plan === true) {
      setPlan(false)
      setPosition(true)
      setPossess(true)
    } else {
      setPlan(true)
    }
  }
  const positionHandling = () => {
    if (position === true) {
      setPosition(false)
      setPlan(true)
      setPossess(true)
    } else {
      setPosition(true)
    }
  }
  const possessHandler = () => {
    if (possess === true) {
      setPossess(false)
      setPlan(true)
      setPosition(true)
    } else {
      setPossess(true)
    }
  }
  return (
    <>
      <Content />
      <div className='create_campaignNew_version'>
        <div className='create_campaignNew_version_ch'>

          {/* Users */}
          <div className='campaign_header_user_data'>
            <ul>
              <li>
                <img src={Calender} />
              </li>
              <li>
                <img src={Notification} />
              </li>
              <li>
                <img src={AdminImg} />
              </li>
            </ul>
          </div>

          <div className='heading_search_container'>
            <h1 className='heading_main_container'>Compaigns</h1>
            <Paper
              component="form"
              sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: 400 }}
            >
              <InputBase
                sx={{ ml: 1, flex: 1 }}
                placeholder="Search a Campaigns"
                inputProps={{ 'aria-label': 'Search a Campaigns' }}
              />
              <IconButton type="button" sx={{ p: '10px' }} aria-label="search">
                <SearchIcon />
              </IconButton>
              <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
            </Paper>
          </div>
        </div>
        {/* Main Content */}
        <div className='crt_cmpgn_main_pr'>
          <div className='crt_cmpgn_aside_left'>
            <div className='crt_cmgn_drp_dn_pr'>
              <div className='crt_cmgn_drp_dn_ch'>
                <div className='crt_cmgn_drp_plan' onClick={planHandler}>
                  {
                    plan ?
                      <>
                        <h4 style={{ color: "grey" }}>Plan</h4>
                        <NavigateNextIcon style={{ color: "black" }} />
                      </> :
                      <>
                        <h4>Plan</h4>
                        <KeyboardArrowDownIcon style={{ color: "black" }} />
                      </>
                  }
                </div>
                <div className='crt_cmgn_drp_position' onClick={positionHandling}>
                  {
                    position ?
                      <>
                        <h4 style={{ color: "grey" }}>Position</h4>
                        <NavigateNextIcon style={{ color: "black" }} />
                      </> :
                      <>
                        <h4>Position</h4>
                        <KeyboardArrowDownIcon style={{ color: "black" }} />
                      </>
                  }
                </div>
                <div className='crt_cmgn_drp_possess' onClick={possessHandler}>
                  {
                    possess ?
                      <>
                        <h4 style={{ color: "grey" }}>Possess</h4>
                        <NavigateNextIcon style={{ color: "black" }} />
                      </> :
                      <>
                        <h4>Possess</h4>
                        <KeyboardArrowDownIcon style={{ color: "black" }} />
                      </>
                  }
                </div>

              </div>
              {plan ? null : <div className='Drop_Dwn_cnten_plan'>
                <p>
                  <i> Campaign Goal |Audience targeting | Schedule </i></p>
              </div>
              }
              {
                position ? null
                  :
                  <div className='Drop_Dwn_cnten_position'>
                    <p> <i> Design Campaign </i></p>
                  </div>
              }
              {
                possess ? null : <div className='Drop_Dwn_cnten_possess'>
                  <p> <i> Review Campaign</i></p>
                </div>
              }
            </div>
 
          <div classaName="dfg">


          </div>
          </div>
      
          <div className='crt_cmpgn_aside_right'>

          </div>
        </div>

      </div>
    </>
  )
}

export default CreateCampaignNewVersion

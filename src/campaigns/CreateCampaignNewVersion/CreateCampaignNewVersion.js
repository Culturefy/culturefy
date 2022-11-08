import React from 'react'
import { useState, useCallback } from 'react';
import Content from '../../component/Content'
import './CreateCampaignNewVersion.css'
// Mui Search Bar
// Search bar Mui
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
// Images
import Calender from '../../assets/calendar-icon.png'
import Notification from '../../assets/Notifiction.svg'
import AdminImg from '../../assets/admin-img.png'
// Mui Aerrow
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import Plan from './Plan';
import Position from './Position';
// Mui Card
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Possess from './Possess';
import './MediaQueryCreateCampaignNewVersion.css'



// checkbox
const label = { inputProps: { 'aria-label': 'Checkbox demo' } };
const CreateCampaignNewVersion = () => {

  const [plan, setPlan] = useState(true) // Cmapign Header
  const [position, setPosition] = useState(true) // Cmapign Header
  const [possess, setPossess] = useState(true)// Cmapign Header
  const [checkbox, setCheckBox] = useState(false) //Audience Targeting Check Box
  const [abc, setabc] = useState() // Date Picker  
  const [age, setAge] = React.useState('');

  const handleChange = (event) => {
    setAge(event.target.value);
  };
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
            <h1 className='heading_main_container'> Create Campaigns</h1>
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
                <div className='crt_cmgn_drp_plan' onClick=
                  {planHandler}>

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
              <div className='_ppp_header'>


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
            </div>
            <Plan />
            <Position />
            <Possess/>
          </div>

          {/* ======================================Aside Right */}
          <div className='crt_cmpgn_aside_right'>
            <div className='crt_cmpgn_aside_right_ch'>
              <div className='crt_cmpgn_aside_recommandation'>
                <h3>Recommandations</h3>

                <div className='__recomandation_input_pr'>

                  {/* == */}
                  <div className='__recomandation_input'>
                    <select name="cars" id="cars">
                      <option value="volvo">Filter</option>
                    </select>
                  </div>
                  {/* == */}
                  <div className='__recomandation_input'>
                    <select name="cars" id="cars">
                      <option value="volvo">Sort</option>
                    </select>
                  </div>
                  {/* == */}

                </div>
              </div>
            
                <Card className='recommandation_cards'>
                  <CardContent>
                  <p className='recommandation_cards_p'>CAMPAIGN</p>
                  <h4>Sexism</h4>
                  <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eaque eligendi ipsum et doloribus blanditiis nostrum, rem voluptatibus aut nihil consequuntur.</p>
                  <div className='recommandation_cards_button'>
                    <button>Create Task</button>
                  </div>
                  </CardContent>
                </Card>

                <Card className='recommandation_cards'>
                  <CardContent>
                  <p className='recommandation_cards_p' >CAMPAIGN</p>
                  <h4>Racism and Tokenism</h4>
                  <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eaque eligendi ipsum et doloribus blanditiis nostrum, rem voluptatibus aut nihil consequuntur.</p>
                  <div className='recommandation_cards_button'>
                    <button>Create Task</button>
                  </div>
                  </CardContent>
                </Card>

                <Card className='recommandation_cards'>
                  <CardContent>
                  <p className='recommandation_cards_p'>CAMPAIGN</p>
                  <h4>Ableism</h4>
                  <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eaque eligendi ipsum et doloribus blanditiis nostrum, rem voluptatibus aut nihil consequuntur.</p>
                  <div className='recommandation_cards_button'>
                    <button>Create Task</button>
                  </div>
                  </CardContent>
                </Card>
                <Card className='recommandation_cards'>
                  <CardContent>
                  <p className='recommandation_cards_p'>CAMPAIGN</p>
                  <h4>Ableism</h4>
                  <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eaque eligendi ipsum et doloribus blanditiis nostrum, rem voluptatibus aut nihil consequuntur.</p>
                  <div className='recommandation_cards_button'>
                    <button>Create Task</button>
                  </div>
                  </CardContent>
                </Card>
                <Card className='recommandation_cards'>
                  <CardContent>
                  <p className='recommandation_cards_p'>CAMPAIGN</p>
                  <h4>Ableism</h4>
                  <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eaque eligendi ipsum et doloribus blanditiis nostrum, rem voluptatibus aut nihil consequuntur.</p>
                  <div className='recommandation_cards_button'>
                    <button>Create Task</button>
                  </div>
                  </CardContent>
                </Card>
                <Card className='recommandation_cards'>
                  <CardContent>
                  <p className='recommandation_cards_p'>CAMPAIGN</p>
                  <h4>Ableism</h4>
                  <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eaque eligendi ipsum et doloribus blanditiis nostrum, rem voluptatibus aut nihil consequuntur.</p>
                  <div className='recommandation_cards_button'>
                    <button>Create Task</button>
                  </div>
                  </CardContent>
                </Card>
           
              <div>

              </div>



            </div>
          </div>
        </div>

      </div>
    </>
  )
}

export default CreateCampaignNewVersion
import React from "react";
import "./Content.css";
import Campaigns from "../campaigns/Index.js";
import "../App.css";
import AdminImg from "../assets/admin-img.png"
import Calender from "../assets/Calender.svg"
import Notification from "../assets/Notifiction.svg"
import Create from "../campaigns/Create"
import AsideLeft from "../Dashboard/AsideLeft";
import AsideRight from "../Dashboard/AsideRight";

// Search bar Mui
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';

const Content = () => {
  return (
    <>
    <div className='d-flex main_container'>
      <AsideLeft />
      <AsideRight />
    </div>
    {/* <div className="content"> */}
        {/* <div className="main-top-nav">
          <ul class="bts-profile align-items-center justify-content-end">
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

          <div className="search">
            <h1 className='heading_main_container'>Campaigns</h1>
            <input type="text" placeholder="Type in to search..." />
            <div className="search-button">
              <i class="fa-solid fa-magnifying-glass"></i>
            </div>
          </div> */}
          {/* <div className='heading_search_container'>
            <h1 className='heading_main_container'>Compaigns</h1>
            <Paper
              component="form"
              sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: 400 }}
            >
              <InputBase
                sx={{ ml: 1, flex: 1 }}
                placeholder="Search Google Maps"
                inputProps={{ 'aria-label': 'search google maps' }}
              />
              <IconButton type="button" sx={{ p: '10px' }} aria-label="search">
                <SearchIcon />
              </IconButton>
              <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />

            </Paper>
          </div> */}
        {/* </div> */}
      {/* </div> */}
    </>
  );
};


export default Content;

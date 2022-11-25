import React from 'react'
import '../Jobs/Jobs.css'
import './Interviews.css'
import "react-big-calendar/lib/css/react-big-calendar.css";
import Schedulera from './Schedulera';
import { Link } from 'react-router-dom';
// Calendar




const Interviews = () => {
  
  return (

    <div className="jobs_main_wrapper">
      <div className="addjob_button">

        <Link to="/recruiting/scheduleinterview">
        <button>Schedule interview</button>
        </Link>
        
      </div>
      <div className="jobs_header">
        <h2>Calendar</h2>
      </div>
      <div className="calendar_view">
        {/* <Calander/> */}
        <Schedulera/>
      </div>


    </div>

  )
}

export default Interviews

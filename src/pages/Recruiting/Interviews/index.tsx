import React from 'react'
// import '../Jobs/Jobs.css'
import './Interviews.css'
import "react-big-calendar/lib/css/react-big-calendar.css";
import Scheduler from './Schedulera';
import { Link } from 'react-router-dom';

const index = () => {
  return (
    <div className="jobs_main_wrapper">
      <div className="addjob_button">
        <Link to="/recruiting/schedulerinterview">
          <button>Schedule interview</button>
        </Link>

      </div>
      <div className="jobs_header">
        <h2>Calendar</h2>
      </div>
      <div className="calendar_view">
        <Scheduler />
      </div>
    </div>
  )
}

export default index

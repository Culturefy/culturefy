import React from 'react'
import '../Jobs/Jobs.css'
import './Interviews.css'
import "react-big-calendar/lib/css/react-big-calendar.css";
import Calander from './Calander';

// Calendar




const Interviews = () => {
  
  return (

    <div className="jobs_main_wrapper">


      <div className="addjob_button">
        <button>Schedule interview</button>
      </div>
      <div className="jobs_header">
        <h2>Calendar</h2>
      </div>
      <div className="calendar_view">
        <Calander/>
      </div>


    </div>

  )
}

export default Interviews

import React from 'react'
import '../Jobs/Jobs.css'
// Calendar
import  {ReactNode, SyntheticEvent} from 'react';
import ApiCalendar from 'react-google-calendar-api';

const config = {
  "clientId": "<CLIENT_ID>",
  "apiKey": "<API_KEY>",
  "scope": "https://www.googleapis.com/auth/calendar",
  "discoveryDocs": [
    "https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest"
  ]
}

const apiCalendar = new ApiCalendar(config)
const Interviews = () => {
  return (

    <div className="jobs_main_wrapper">
      
        <>
          <div className="addjob_button">
            <button>Schedule interview</button>
          </div>
          <div className="jobs_header">
            <h2>Calendar</h2>
            {/* Calendar */}
            <div>

            </div>
          </div>

        </>
    </div>

  )
}

export default Interviews

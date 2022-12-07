import { Link } from "react-router-dom";
import React from "react";
import { useState } from "react";import './Jobs.css'

const index = () => {
    const [Addjob, setAddjob] = useState(true);

    // const value = props.value;
    // console.log(value)
  
    const jobs_data = [
      {
        job_title: "Software Devloper",
        start_date: "08-08-2022",
        job_types: "Full-Time",
        Status: (
          <select name="" className="jobs_dropdown">
            <option value="open">Open</option>
            <option value="closed">Closed</option>
          </select>
        ),
        applicants: "2 Applicants",
      },
      {
        job_title: "QA Tester",
        start_date: "08-08-2022",
        job_types: "Full-Time",
        Status: (
          <select name="" className="jobs_dropdown">
            <option value="open">Open</option>
            <option value="closed">Closed</option>
          </select>
        ),
        applicants: "2 Applicants",
      },
      {
        job_title: "UI/UX Designer",
        start_date: "08-08-2022",
        job_types: "Full-Time",
        Status: (
          <select name="" className="jobs_dropdown">
            <option value="open">Open</option>
            <option value="closed">Closed</option>
          </select>
        ),
        applicants: "2 Applicants",
      },
      {
        job_title: "Graphic Designer",
        start_date: "08-08-2022",
        job_types: "Full-Time",
        Status: (
          <select name="" className="jobs_dropdown">
            <option value="open">Open</option>
            <option value="closed">Closed</option>
          </select>
        ),
        applicants: "2 Applicants",
      },
    ];
  

  return (
    <div className="jobs_main_wrapper">
    <>
      <div className="addjob_button">
        <Link to="/recruiting/addjobs">
          
          <button>Add a Job +</button>
        </Link>
      </div>
      <div className="jobs_header">
        <h2>Open Jobs</h2>
      </div>
      <div className="jobs_table">
        <table>
          <tr>
            <th>Job Title</th>
            <th>Start Date</th>
            <th>Job Type</th>
            <th>Status</th>
            <th>Applicants</th>
          </tr>
          {jobs_data.map((e) => {
            return (
              <>
                <tr>
                  <td className="job_title">
                    <Link to="/recruiting/employeedetailsjobs">
                      {e.job_title}
                    </Link>
                  </td>
                  <td className="job_other">{e.start_date}</td>
                  <td className="job_other">{e.job_types}</td>
                  <td>{e.Status}</td>
                  <td className="job_other">{e.applicants}</td>
                </tr>
              </>
            );
          })}
        </table>
      </div>
    </>
  </div>
  )
}

export default index

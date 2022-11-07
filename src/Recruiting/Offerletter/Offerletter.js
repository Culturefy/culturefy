import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import '../Jobs/Jobs.css'
const Offerletter = () => {
    const [Addjob, setAddjob] = useState(true)

    const jobs_data = [
        {
            job_title: "Software Devloper",
            applicant: "Annabel Summers",
            job_types: "Full-Time",
        },
        {
            job_title: "Software Devloper",
            applicant: "Annabel Summers",
            job_types: "Full-Time",
        },
        {
            job_title: "Software Devloper",
            applicant: "Annabel Summers",
            job_types: "Full-Time",
        },
        {
            job_title: "Software Devloper",
            applicant: "Annabel Summers",
            job_types: "Full-Time",
        },
        {
            job_title: "Software Devloper",
            applicant: "Annabel Summers",
            job_types: "Full-Time",
        },

    ]

    const handleAddjob = () => {
        setAddjob(false)

    }
    return (
        <div className="jobs_main_wrapper">
           
                     <div className="addjob_button">
                     <Link to="/recruiting/newofferletter">
                        <button onClick={handleAddjob}>Add a Job +</button>
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

                            </tr>
                            {
                                jobs_data.map((e) => {
                                    return (
                                        <>
                                            <tr>
                                                <td className='job_title'>{e.job_title}</td>
                                                <td className='job_other'>{e.applicant}</td>
                                                <td className='job_other'>{e.job_types}</td>
                                            </tr>
                                        </>
                                    )
                                })

                            }

                        </table>
                    </div>
            
                
             
               
         
                



        </div>
    )
}

export default Offerletter

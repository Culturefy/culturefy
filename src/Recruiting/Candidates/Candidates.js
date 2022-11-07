import React from 'react'
import '../../Recruiting/Applications/Application.css'
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import user from '../../assets/user2.jpg'

const Candidates = () => {
    const Application_data = [
        { sort_name: "AS", name: "Annable Summers", job_title: "Software Devloper", date_submited: "08-08-2022", Status: "Interviewed" },
        { sort_name: "AS", name: "Annable Summers", job_title: "Software Devloper", date_submited: "08-08-2022", Status: "Interviewed" },
        { sort_name: "AS", name: "Annable Summers", job_title: "Software Devloper", date_submited: "08-08-2022", Status: "Interviewed" },
        { sort_name: "AS", name: "Annable Summers", job_title: "Software Devloper", date_submited: "08-08-2022", Status: "Interviewed" },
        { sort_name: "AS", name: "Annable Summers", job_title: "Software Devloper", date_submited: "08-08-2022", Status: "Applied" },
        { sort_name: "AS", name: "Annable Summers", job_title: "Software Devloper", date_submited: "08-08-2022", Status: "Applied" },
        { sort_name: "AS", name: "Annable Summers", job_title: "Software Devloper", date_submited: "08-08-2022", Status: "Hired" },
        { sort_name: "AS", name: "Annable Summers", job_title: "Software Devloper", date_submited: "08-08-2022", Status: "Rejected" },
    ]

    const Devloper_data = [
        { fild: "softwere devloper", image: "../../assets/user2.jpg", name: "Steve Harris" },
        { fild: "softwere devloper", image: "../../assets/user2.jpg", name: "Steve Harris" },
        { fild: "softwere devloper", image: "../../assets/user2.jpg", name: "Steve Harris" },
        { fild: "softwere devloper", image: "../../assets/user2.jpg", name: "Steve Harris" },
        { fild: "softwere devloper", image: "../../assets/user2.jpg", name: "Steve Harris" },
    ]
    return (
        <div className="application_main_wrapper">
            <div className="application_inner_wrapper">
                <div className="job_Applications">

                    <div className="application_header">
                        <h2>Job Candidates</h2>
                    </div>
                    <div className="add_application_btn">
                        <select>
                            <option value="All jobs" id='option'>All Jobs</option>
                            <option value="saab">Software Devloper</option>
                            <option value="mercedes">QA Tester</option>
                            <option value="audi">UI/UX Designer</option>
                            <option value="audi">Graphic Designer</option>
                        </select>
                    </div>
                    {/* ===================================Jobs_table css include in jobs.css============================================================================= */}
                    <div className="jobs_table">
                        <table>
                            <tr>
                                <th></th>
                                <th>Name</th>
                                <th>Job Title</th>
                                <th>Date Submitted</th>
                                <th>Status</th>
                            </tr>

                            {
                                Application_data.map((e) => {
                                    return (
                                        <>
                                            <tr>
                                                <td><div className="Application_div">{e.sort_name}</div></td>
                                                <td className='job_title'>{e.name}</td>
                                                <td>{e.job_title}</td>
                                                <td>{e.date_submited}</td>
                                                {e.Status == "Interviewed" ?
                                                    <td className='application_status'><div className="app_status_div" style={{ backgroundColor: "#f5a41d" }}></div>{e.Status}</td>
                                                    : null}
                                                {e.Status == "Applied" ?
                                                    <td className='application_status'><div className="app_status_div" style={{ backgroundColor: "black" }}></div>{e.Status}</td>
                                                    : null}
                                                {e.Status == "Hired" ?
                                                    <td className='application_status'><div className="app_status_div" style={{ backgroundColor: "#2394ae" }}></div>{e.Status}</td>
                                                    : null}
                                                {e.Status == "Rejected" ?
                                                    <td className='application_status'><div className="app_status_div" style={{ backgroundColor: "#c01922" }}></div>{e.Status}</td>
                                                    : null}
                                            </tr>
                                        </>
                                    )
                                })

                            }

                        </table>
                    </div>
                </div>
                <div className="recommended_candidates">
                    <div className="recommended_inner_wrapper">
                        <div className="recommended_header">
                            <div className='recommrnded_search'>
                                <Paper
                                    component="form"
                                    sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: "100%", height: "40px" }}
                                >
                                    <InputBase
                                        sx={{ ml: 1, flex: 1 }}
                                        placeholder="Search current employees"
                                        inputProps={{ 'aria-label': 'Search a Campaigns' }}
                                    />
                                    <IconButton type="button" sx={{ p: '8px' }} aria-label="search">
                                        <SearchIcon />
                                    </IconButton>
                                    <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
                                </Paper>
                            </div>
                            <div className="recommended_title">
                                <h4>Recommended Candidates</h4>
                            </div>
                            <div className="filter_sort">
                                <select>
                                    <option value="">Filter</option>
                                </select>
                                <select>
                                    <option value="">Sort</option>
                                </select>
                            </div>
                        </div>

                        <div className="recommended_card_container">
                            {
                                Devloper_data.map((e) => {
                                    return (
                                        <div className="recommended_card">
                                            <div className="r_card_header">
                                                <p>{e.fild}</p>
                                            </div>
                                            <div className="recommended_user">
                                                <div className="devloper_image">
                                                    <img src={user} alt="" />
                                                </div>
                                                <div className="devloper_name">
                                                    <h4>{e.name}</h4>
                                                    <span>View Profile</span>
                                                </div>
                                                <div className="devloper_apply">
                                                    <button>Invite to Apply</button>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                })
                            }

                        </div>


                    </div>

                </div>

            </div>

        </div>
    )
}

export default Candidates

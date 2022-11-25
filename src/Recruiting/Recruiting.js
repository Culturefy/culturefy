import React, { useState } from 'react'
import './Recruiting.css'
import calander from '../assets/Calender.svg'
import notification from '../assets/Notifiction.svg'
import admin from '../assets/admin-img.png'
import Content from '../component/Content';
import { Link, Outlet } from 'react-router-dom';
import RecruitingDashboard from './Dashboard/RecruitingDashboard'
const RecruitingHeader = (props) => {

    const tabs = {
        RecruitingDashboard: {
            value: 1
        },
        Jobs: {
            value: 2
        },
        Applications: {
            value: 3
        },
        Skills: {
            value: 4
        },
        Candidates: {
            value: 5
        },
        OfferLetters: {
            value: 6
        },
        Interviews: {
            value: 7
        },
    }
    const [value, setValue] = React.useState(tabs.RecruitingDashboard.value);
    const [jobs, setjobs] = useState()
    console.log(value)

    const handleClick = (e) => {
        console.log(e)
        if (e === 1) {
            setValue(tabs.RecruitingDashboard.value)
        } else if (e === 2) {
            setValue(tabs.Jobs.value)
        }
        else if (e === 3) {
            setValue(tabs.Applications.value)
        }
        else if (e === 4) {
            setValue(tabs.Skills.value)
        }
        else if (e === 5) {
            setValue(tabs.Candidates.value)
        }
        else if (e === 6) {
            setValue(tabs.OfferLetters.value)
        }
        else if (e === 7) {
            setValue(tabs.Interviews.value)
        }
    }

    return (
        <>
            <Content />
            <div className="recruitingdashboard_main_wrapper">
                <div className="recruiting_header">
                    <div className="recruiting_header_top">
                        <div className="recruiting_header_inner">
                            <ul>
                                <li><img src={calander} alt="" /></li>
                                <li><img src={notification} alt="" /></li>
                                <li><img src={admin} alt="" /></li>
                            </ul>
                        </div>
                    </div>
                    <div className="recruiting_header_title">
                        {value === 1 ? <h1>Recruiting Dashboard</h1> : null}
                        {value === 2 ? <h1>Jobs</h1> : null}
                        {value === 3 ? <h1>Applications</h1> : null}
                        {value === 4 ? <h1>Skills</h1> : null}
                        {value === 5 ? <h1>Candidates</h1> : null}
                        {value === 6 ? <h1>Offer Letters</h1> : null}
                        {value === 7 ? <h1>Interviews</h1> : null}
                    </div>
                    <div className="recruiting_header_tabs">
                        <ul>
                            {
                                value === 1 ? <Link to="/recruiting">
                                    <li onClick={() => handleClick(1)} style={{ color: "black" }}> Recruiting Dashboard</li>
                                </Link>
                                    :
                                    <Link to="/recruiting">
                                        <li onClick={() => handleClick(1)} >Recruiting Dashboard </li>
                                    </Link>
                            }
                            {
                                value === 2 ? <Link to="/recruiting/jobs">
                                    <li onClick={() => handleClick(2)} style={{ color: "black" }}> Jobs </li>
                                </Link> :
                                    <Link to="/recruiting/jobs">
                                        <li onClick={() => handleClick(2)}>Jobs</li>
                                    </Link>
                            }
                            {
                                value === 3 ? <Link to="/recruiting/application"><li onClick={() => handleClick(3)} style={{ color: "black" }}>Application </li></Link> : <Link to="/recruiting/application"> <li onClick={() => handleClick(3)}>Application </li></Link>
                            }
                            {
                                value === 4 ? <Link to="/recruiting/skill"><li onClick={() => handleClick(4)} style={{ color: "black" }}>Skills </li></Link> : <Link to="/recruiting/skill"><li onClick={() => handleClick(4)}>Skills</li> </Link>
                            }
                            {
                                value === 5 ? <Link to="/recruiting/candidates"><li onClick={() => handleClick(5)} style={{ color: "black" }}>Candidates </li></Link> : <Link to="/recruiting/candidates"><li onClick={() => handleClick(5)}>Candidates</li>
                                </Link>
                            }
                            {
                                value === 6 ? <Link to="/recruiting/offerletter"><li onClick={() => handleClick(6)} style={{ color: "black" }}>Offer Letters </li></Link> : <Link to="/recruiting/offerletter"> <li onClick={() => handleClick(6)}>Offer Letters</li></Link>
                            }
                            {
                                value === 7 ? <Link to="/recruiting/interviews"><li onClick={() => handleClick(7)} style={{ color: "black" }}>Interviews</li></Link> : <Link to="/recruiting/interviews"> <li onClick={() => handleClick(7)}>Interviews</li></Link>
                            }
                        </ul>
                    </div>
                </div >

                {
                    value !== 1 ? <Outlet /> : <RecruitingDashboard />
                }


            </div>
        </>
    )
}

export default RecruitingHeader

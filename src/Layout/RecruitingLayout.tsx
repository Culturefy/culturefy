import React, { useState } from "react";
import './WorkspaceFilelayout.css'
import './RecruitingLayout.css'
import AsideMenu from "./Aside";
import MainSidebar from "./MainSidebar";
import Header from "../components/Header";
// import { Outlet } from "react-router-dom";
import { Link, Outlet } from 'react-router-dom';

const RecruitingLayout = () => {
    const [showDropDown, setShowDropDown] = useState(false);

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
        <div className="mainWrapper">
            <div className="sidebar">
                <MainSidebar />
                <AsideMenu />
            </div>
            <div className="recruiting_main_container">
                <div className="Recruitingmain">
                    <div className="wcmainheader">
                        <Header onClick={() => setShowDropDown(!showDropDown)} />
                    </div>
                    <div className="recruitingdashboard_main_wrapper">
                        <div className="recruiting_header">

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
                                        value === 1 ?

                                            <li onClick={() => handleClick(1)} ><Link to="/recruiting/dashboard" style={{ color: "black" }}> Recruiting Dashboard</Link></li>

                                            :

                                            <li onClick={() => handleClick(1)} ><Link to="/recruiting/dashboard">Recruiting Dashboard </Link></li>

                                    }
                                    {
                                        value === 2 ?

                                            <li onClick={() => handleClick(2)} ><Link to="/recruiting/jobs" style={{ color: "black" }}> Jobs </Link></li>

                                            :

                                            <li onClick={() => handleClick(2)}><Link to="/recruiting/jobs">Jobs</Link></li>

                                    }
                                    {
                                        value === 3 ? <li onClick={() => handleClick(3)} ><Link to="/recruiting/application" style={{ color: "black" }}>Application</Link></li> : <li onClick={() => handleClick(3)}><Link to="/recruiting/application">Application </Link></li>
                                    }
                                    {
                                        value === 4 ? <li onClick={() => handleClick(4)} ><Link to="/recruiting/skills" style={{ color: "black" }}>Skills </Link></li> : <li onClick={() => handleClick(4)}><Link to="/recruiting/skills">Skills</Link></li>
                                    }
                                    {
                                        value === 5 ? <li onClick={() => handleClick(5)} ><Link to="/recruiting/candidates" style={{ color: "black" }}>Candidates </Link></li> : <li onClick={() => handleClick(5)}><Link to="/recruiting/candidates">Candidates</Link></li>

                                    }
                                    {
                                        value === 6 ? <li onClick={() => handleClick(6)} ><Link to="/recruiting/offerletter" style={{ color: "black" }}>Offer Letters </Link></li> : <li onClick={() => handleClick(6)}><Link to="/recruiting/offerletter">Offer Letters</Link></li>
                                    }
                                    {
                                        value === 7 ? <li onClick={() => handleClick(7)} ><Link to="/recruiting/interview" style={{ color: "black" }}>Interviews</Link></li> : <li onClick={() => handleClick(7)}><Link to="/recruiting/interview">Interviews</Link></li>
                                    }
                                </ul>
                            </div>
                        </div >
                        <div className="recruiting_inner">
                            <Outlet />
                        </div>
                    </div>
                </div>
            </div>


        </div>
    )
}

export default RecruitingLayout

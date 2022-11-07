import React from 'react'
import { Link } from 'react-router-dom'
import './Skills.css'

const Skills = () => {

    return (
        <>
            <div className="skills_main_wrapper">
                    <div className="skills_inner_wrapper">
                        <div className="add_skills_button">
                            <Link to="/recruiting/addskill"><button>Add Skills +</button></Link>
                        </div>
                        <div className="skills_header">
                            <h2>Job Skills</h2>
                        </div>
                        <div className="job_skills">
                            <div className="job_skills_chackbox">
                                <input type="checkbox" name="" />
                                <label htmlFor="">Java</label>

                            </div>
                            <div className="job_Skills_edit">
                                <span>Edit</span>
                            </div>
                            <div className="job_Skills_delete">
                                <span>Delete</span>
                            </div>
                        </div>
                        <div className="job_skills">
                            <div className="job_skills_chackbox">
                                <input type="checkbox" name="" />
                                <label htmlFor="">Javascript</label>

                            </div>
                            <div className="job_Skills_edit">
                                <span>Edit</span>
                            </div>
                            <div className="job_Skills_delete">
                                <span>Delete</span>
                            </div>
                        </div>
                        <div className="job_skills">
                            <div className="job_skills_chackbox">
                                <input type="checkbox" name="" />
                                <label htmlFor="">HTML</label>

                            </div>
                            <div className="job_Skills_edit">
                                <span>Edit</span>
                            </div>
                            <div className="job_Skills_delete">
                                <span>Delete</span>
                            </div>
                        </div>
                        <div className="job_skills">
                            <div className="job_skills_chackbox">
                                <input type="checkbox" name="" />
                                <label htmlFor="">CSS</label>

                            </div>
                            <div className="job_Skills_edit">
                                <span>Edit</span>
                            </div>
                            <div className="job_Skills_delete">
                                <span>Delete</span>
                            </div>
                        </div>

                    </div> 

            </div>
        </>
    )
}

export default Skills

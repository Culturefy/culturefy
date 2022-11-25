import React from 'react';
import './ScheduleInterview.css'

const ScheduleInterview = () => {
  return (
    <div className="scheduleinterview_main_wrapper">
        <div className="addjobs_hader">
                <h2>Schedule Interview</h2>
            </div>
            <form>

                <div className="jobs_input_container">
                    {/* 1st */}
                    <div className="inner_input_container">
                        <label htmlFor="">Job</label>
                        <div className="select_plus">
                            <select name="">
                                <option value="Annual" id='option'>--</option>
                            </select>
                            <button>+</button>

                        </div>
                    </div>
                    {/* 2nd */}
                    <div className="inner_input_container">
                        <label htmlFor="">Jobs Applicant</label>
                        <div className="select_plus">
                            <select name="">
                                <option value="Annual" id='option'>--</option>
                            </select>
                            <button>+</button>

                        </div>
                    </div>
                    {/* 3rd */}
                    <div className="inner_input_container">
                        <label htmlFor="">Interview Date</label>
                        <input type="datetime-local" name="" id="" />
                    </div>

                    
                </div>
                <div className="jobs_input_container">
                    {/* 4th */}
                    <div className="inner_input_container">
                        <label htmlFor="">Interview Start</label>
                        <input type="time" name="" id="" />
                    </div>
                    
                </div>
            </form>

            <div className='scheduleinterview_buttons'>
                <button className='job_cancle'>Cancle</button>
                <button className='_ofr_job_save'>Save</button>
            </div>
    </div>
  )
}

export default ScheduleInterview

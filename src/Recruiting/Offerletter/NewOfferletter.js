import React from 'react'
import '../Jobs/Jobs.css'
const NewOfferletter = () => {
    return (
        <div className='addjobs_hader_pr'>
            <div className="addjobs_hader">
                <h2>New Offer Letter</h2>
            </div>
            <form>

                <div className="jobs_input_container">
                    {/* 1st */}
                    <div className="inner_input_container">
                        <label htmlFor="">Jobs</label>
                        <div className="select_plus">
                            <select name="">
                                <option value="Annual" id='option'>----</option>
                            </select>
                            <button>+</button>

                        </div>
                    </div>
                    {/* 2nd */}
                    <div className="inner_input_container">
                        <label htmlFor="">Jobs Application</label>
                        <div className="select_plus">
                            <select name="">
                                <option value="Annual" id='option'>----</option>
                            </select>
                            <button>+</button>

                        </div>
                    </div>
                    {/* 3rd */}
                    <div className="inner_input_container">
                        <label htmlFor="">Offer Expires</label>
                        <input type="date" name="" id="" />
                    </div>

                    {/* 5th */}
                </div>
                <div className="jobs_input_container">
                    {/* 4th */}
                    <div className="inner_input_container">
                        <label htmlFor="">Start Date</label>
                        <input type="date" name="" id="" />
                    </div>
                    {/* 5th */}
                    <div className="inner_input_container">
                        <label htmlFor="">Salary</label>
                        <input type="text" placeholder='32,000' />
                    </div>
                    {/* 6th */}
                    <div className="inner_input_container">
                        <label htmlFor="">Salary Rate</label>
                        <div className="select_plus">
                            <select name="" >
                                <option value="Annual" id='option'>Annual</option>
                            </select>
                            <button>+</button>
                        </div>
                    </div>
                </div>
            </form>

            <div className='ofr_ltr_btn'>
                <button>
                    Upload Document
                </button>
            </div>

            <div className='ofr_ltr_sv_cncl'>
                <button className='job_cancle'>Cancle</button>
                <button className='_ofr_job_save'>Save</button>
            </div>
        </div>
    )
}

export default NewOfferletter

import React from 'react'

const Addapplication = () => {
    return (
        <div className='addapplication_wrapper'>
            <div className="addjobs_hader">
                <h2>New Application</h2>
            </div>
            <form>
                <div className="jobs_input_container">
                    <div className="inner_input_container">
                        <label htmlFor="">Applicant Name</label>
                        <input type="text" placeholder='Name' />
                    </div>
                    <div className="inner_input_container">
                        <label htmlFor="">Job</label>
                        <div className="select_plus">
                            <select name="">

                            </select>
                            <button>+</button>

                        </div>
                    </div>
                    <div className="inner_input_container">
                        <label htmlFor="">Email</label>
                        <input type="text" placeholder='-' />
                    </div>
                </div>


                <div className="jobs_input_container">
                    <div className="inner_input_container">
                        <label htmlFor="">Location</label>
                        <input type="text" placeholder='Surat' />
                    </div>
                    <div className="inner_input_container">
                        <label htmlFor="">Application Source</label>
                        <div className="select_plus">
                            <select name="">

                            </select>
                            <button>+</button>

                        </div>
                    </div>
                    <div className="inner_input_container">
                        <label htmlFor="">Phone Number</label>
                        <input type="Number" placeholder='-' />
                    </div>
                </div>
            </form>
            <div className="jobs_description">

                <div className="jobs_description_title">
                    <button className='Application_Upload_btn'>Upload Document</button>
                    <span>Job Description</span>
                </div>
                <div className="job_description_pad">
                    <div className="description_pad_header">
                        <div className="pad_buttons1">
                            <i className="fa-solid fa-bold"></i>
                            <i className="fa-solid fa-italic"></i>
                            <i className="fa-solid fa-underline"></i>
                            <i className="fa-solid fa-text-slash"></i>
                        </div>
                        <div className="pad_buttons2">
                            <i className="fa-solid fa-list list_btn"></i>
                            <i className="fa-solid fa-list-ol list_btn"></i>
                        </div>
                        <div className="pad_buttons3">
                            <i className="fa-solid fa-align-left font_left list_btn"></i>
                            <i className="fa-solid fa-align-center font_center list_btn"></i>
                            <i className="fa-solid fa-align-right font_right list_btn"></i>
                            <i className="fa-solid fa-align-justify justify list_btn"></i>
                        </div>

                    </div>


                </div>
                <div className="jobs_submit_buttons">
                    <button className='job_cancle'>Cancle</button>
                    <button className='Application_save'>Save</button>
                </div>

            </div>
        </div>
    )
}

export default Addapplication

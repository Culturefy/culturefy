import React from 'react'
import './Jobs.css'
const index = () => {
  return (
    <>
    <div className="addjob_wrapper">
        <div className="addjobs_hader">
            <h2>Add a Job</h2>
        </div>
        <form>
            <div className="jobs_input_container">
                <div className="inner_input_container">
                    <label htmlFor="">Job Title</label>
                    <input type="text" placeholder='Job Title' />
                </div>
                <div className="inner_input_container">
                    <label htmlFor="">Department</label>
                    <div className="select_plus">
                        <select name="" className='sect_select'>
                        </select>
                        <button>+</button>
                    </div>
                </div>
                <div className="inner_input_container">
                    <label htmlFor="">Skills</label>
                    <div className="select_plus">
                        <select name=" " className='sect_select'>
                        </select>
                        <button>+</button>
                    </div>
                </div>
            </div>

            <div className="jobs_input_container">
                <div className="inner_input_container">
                    <label htmlFor="">Location</label>
                    <input type="text" placeholder='Surat' />
                </div>
                <div className="inner_input_container">
                    <label htmlFor="">Start Date</label>
                    <input type="date" name="" id="" />
                </div>
                <div className="inner_input_container">
                    <label htmlFor="">Job Type</label>
                    <div className="select_plus">
                        <select name="" className='sect_select'>

                        </select>
                        <button>+</button>

                    </div>
                </div>

            </div>

            <div className="jobs_input_container">
                <div className="inner_input_container">
                    <label htmlFor="">Salary</label>
                    <input type="text" placeholder='32,000' />
                </div>
                <div className="inner_input_container">
                    <label htmlFor="">Salary Rate</label>
                    <div className="select_plus">
                        <select name="" className='sect_select'>

                        </select>
                        <button>+</button>

                    </div>
                </div>
                <div className="inner_input_container">
                    <label htmlFor="">Openings</label>
                    <input type="text" placeholder='1' />

                </div>
            </div>
        </form>

        <div className="jobs_description">
            <div className="jobs_description_title">
                <span>Job Description</span>
            </div>
            <div className="job_description_pad">
        <div className="job_icons">
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
        <div className="job_textarea">
            <textarea name="" id="" cols="160" rows="10" resize="none" style={{ resize: "none",outline:"none",border:"none"}}></textarea>
        </div>
      </div>

        </div>

        <div className="job_interview_question">
            <div className="job_interview_header">
                <span>Interview Questions</span>
            </div>

            <div className="interview_question1">
                <div className="que_no">
                    <span>Question 1</span>
                </div>
                <div className="que">
                    <input type="text" name="" id="" placeholder='Can you tell us about yourself?' />
                </div>
                <div className="que_cancle">
                    <i className="fa-solid fa-xmark cross que_cancle_btn"></i>
                </div>
            </div>

            <div className="interview_question1">
                <div className="que_no">
                    <span>Question 2</span>
                </div>
                <div className="que">
                    <input type="text" name="" id="" placeholder='-' />
                </div>
                <div className="que_cancle">
                    <i className="fa-solid fa-xmark cross que_cancle_btn"></i>
                </div>
            </div>

            <div className="add_question">
                <p>Add Question +</p>
            </div>

            <div className="jobs_submit_buttons">
                <button className='job_cancle'>Cancle</button>
                <button className='job_save'>Save</button>
            </div>

        </div>
        </div>



    </>
  )
}

export default index

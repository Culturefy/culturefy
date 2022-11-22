import React, { useState } from 'react'
import './InterviewspaceProfile.css'
import user_screen from '../../assets/meet user.png'
import { Link, Outlet } from 'react-router-dom'
import Profile from "./Profile"


const InterviewspaceProfile = () => {

  const{value,setvalue} = useState(1)

  const handleclick = (e) =>{
     setvalue(e)
  }
  return (
    <div className='interviewspace_main_wrapper'>
      <div className="interviewer_question_section">
        <div className="interview_header">
          <div className="interview_name">
            <h2>Software Devloper Interview</h2>
          </div>
          <div className="interviewer">
            <div className="interviewer1"></div>
            <div className="interviewer1"></div>
            <div className="interviewer1"></div>
          </div>
          <div className="interview_end_btn">
            <button>End Interview</button>
          </div>
        </div>
        <div className="interview_question">
          <span>Question 1.</span>
          <span>Can you tell us about yourself?</span>
        </div>
        <div className="interview_screen">
          <img src={user_screen} alt="" />
        </div>
        <div className="interview_footer">
          <div className="notes">
            <div className="notes_header">
              <h3>Notes</h3>
            </div>
            <div className="notes_input">
              <textarea name="" id="" cols="30" rows="5" placeholder='Enter Notes here'></textarea>
            </div>
          </div>
          <div className="candidate_rating">
            <div className="candidate_header">
              <h3>Candidate Rating</h3>
            </div>
            <div className="canidate_star">
            <i class="fa-regular fa-star candidate_stars"></i>
            <i class="fa-regular fa-star candidate_stars"></i>
            <i class="fa-regular fa-star candidate_stars"></i>
            <i class="fa-regular fa-star candidate_stars"></i>
            <i class="fa-regular fa-star candidate_stars"></i>
            </div>
          </div>
        </div>
      </div>
      <div className="interviewer_profile_section">
         <div className="inner_interview">
          <div className="profile_header">
            <div className="profile_user_image">
                <div className="user_image_div">AS</div>
            </div>
            <div className="profile_user">
              <h3>Annabel Summers</h3>
              <span>google@gmail.com</span>
            </div>
          </div>
          <div className="profile_tabs">
              <ul>
                <li><Link onClick={()=>handleclick(1)}>Profile</Link></li>
                <li><Link to="/recruiting/interviewspaceprofile/resume" onClick={()=>handleclick(2)} >Resume</Link></li>
                <li><Link to="/recruiting/interviewspaceprofile/interviewquestion" onClick={()=>handleclick(3)}>Interview Questions</Link></li>
              </ul>
            </div>
          <div className="profile_containt">
            {
              value !== 1 ? <Profile /> : <Outlet/>
            }
           
          </div>


         </div>
      </div>
    </div>
  )
}

export default InterviewspaceProfile

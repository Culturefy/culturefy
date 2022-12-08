//@ts-nocheck
import React, { useState } from 'react'
import './InterviewSpace.css'
import user_screen from '../../../assets/campaign/meet user.png'
import { Link, Outlet } from 'react-router-dom'
import Avatar from '@mui/material/Avatar';


const index = () => {
  const [value, setvalue] = useState(1)
  console.log(value)

  const handleclick = (e) => {
    setvalue(e)
    console.log(e)
  }
  function stringToColor(string) {
    let hash = 0;
    let i;

    /* eslint-disable no-bitwise */
    for (i = 0; i < string.length; i += 1) {
      hash = string.charCodeAt(i) + ((hash << 5) - hash);
    }

    let color = '#';

    for (i = 0; i < 3; i += 1) {
      const value = (hash >> (i * 8)) & 0xff;
      color += `00${value.toString(16)}`.slice(-2);
    }
    /* eslint-enable no-bitwise */

    return color;
  }
  function stringAvatar(name: string) {
    return {
      sx: {
        bgcolor: stringToColor(name),
      },
      children: `${name.split(' ')[0][0]}${name.split(' ')[1][0]}`,
    };
  }
  return (
    <div className='interviewspace_main_wrapper'>
      <div className="interviewer_question_section">
        <div className="interview_header">
          <div className="interview_name">
            <h2>Software Devloper Interview</h2>
          </div>
          <div className="interviewer">
            <div className="interviewer1">
              <Avatar {...stringAvatar('Annabel Summers')} />
            </div>
            <div className="interviewer1">
              <Avatar {...stringAvatar('Jhon Smith')} />
            </div>
            <div className="interviewer2">
              <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="white" className="bi bi-person-plus-fill " viewBox="0 0 16 16"   
               >
                <path d="M1 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
                <path fill-rule="evenodd" d="M13.5 5a.5.5 0 0 1 .5.5V7h1.5a.5.5 0 0 1 0 1H14v1.5a.5.5 0 0 1-1 0V8h-1.5a.5.5 0 0 1 0-1H13V5.5a.5.5 0 0 1 .5-.5z" />
              </svg>
            </div>
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
              <i className="fa-regular fa-star candidate_stars"></i>
              <i className="fa-regular fa-star candidate_stars"></i>
              <i className="fa-regular fa-star candidate_stars"></i>
              <i className="fa-regular fa-star candidate_stars"></i>
              <i className="fa-regular fa-star candidate_stars"></i>
            </div>
          </div>
        </div>
      </div>
      <div className="interviewer_profile_section">
        <div className="inner_interview">
          <div className="profile_header">
            <div className="profile_user_image">
              <Avatar {...stringAvatar('Annabel Summers')} />
            </div>
            <div className="profile_user">
              <h3>Annabel Summers</h3>
              <span>google@gmail.com</span>
            </div>
          </div>
          <div className="profile_tabs">
            <ul>
              <li onClick={() => handleclick(1)}><Link to="/recruiting/interviewspace/profile">Profile</Link></li>
              <li onClick={() => handleclick(2)}><Link to="/recruiting/interviewspace/resume">Resume</Link></li>
              <li onClick={() => handleclick(3)}><Link to="/recruiting/interviewspace/interviewquestion">Interview Questions</Link></li>
            </ul>
          </div>
          <div className="profile_containt">
            <Outlet />
          </div>


        </div>
      </div>
    </div>
  )
}

export default index

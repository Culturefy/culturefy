import React from 'react'
import possess from '../../assets/posses-icon.svg'
import CheckIcon from '@mui/icons-material/Check';
import './CreateCampaignNewVersion.css'
import './MediaQueryCreateCampaignNewVersion.css'
const Possess = () => {
  return (
    <div className='__Crt_cmpgn_possess__'>
      <div className='crt_cmpgn_plan__'>

      <div className='_header_title_plan_pr'>
        <div className='_header_title_plan'>
          <img src={possess} alt=""  />
        </div>
        <div className='position_h3_pr'>
          <h1>Possess</h1>
        </div>
      </div>


{/* 
        <div className='_header_title_plan_pr'>
          <div className='_header_title_plan'>
            <img src={possess} alt="" />
          </div>
          <div>
            <h1>Possess</h1>
          </div>
        </div> */}
        {/* ==================CampaignGoal=========================== */}
        <div className='Position_crt_cmgn'>
        <div className='campaign_goal_check_pr'>
          <div className='campaign_goal_check_possess_ch'>
            <div className='campaign_goal_check_possess'>
              <CheckIcon className='cmpgn_check_icon_possess' />
            </div>
          </div>
        </div>
          <div className="position_h3_pr">
            <div className='position_h3'>
              <h3>Review Campaign</h3>
            </div>
            <div className='Position_crt_cmgn_review'>
              <div>
                <h4>Camapign Goal</h4>
                <p>Lorem ipsum dolor sit amet.</p>
              </div>
              <div>
                <h4>
                  Audience targeting
                </h4>
                <p>Custom Audience</p>
                <p>All Gender</p>
                <p>All Ages</p>
              </div>
              <div>
                <h4>Schedule</h4>
                <p>Starts Aug 9,2022</p>
                <p>Starts March 1,2023</p>
              </div>
            </div>

            <div className='_posses_title'>
              <div className='_posses_title_ch'>
                <h3>Job Title</h3>
                <p>Job Title</p>
              </div>
            </div>

            <div className='_posses_title'>
              <div className='_posses_title_ch'>
                <h3>Job Description</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo explicabo ea officiis, non magni culpa odit quae numquam veritatis, similique neque nostrum ipsa eius impedit?Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim tempore numquam molestias accusamus sit eligendi?</p>
              </div>
            </div>

            <div className='_posses_title'>
              <div className='_posses_title_ch'>
                <h3>Job Location</h3>
                <p>Acworth,GA</p>
              </div>
            </div>

            <div className='_posses_title_trs'>
              <div className='_posses_title_ch'>
                <h3>Job Location</h3>
                <p>Acworth,GA</p>
              </div>
              <div className='_posses_title_ch'>
                <h3>Job Location</h3>
                <p>Acworth,GA</p>
              </div>
            </div>

            <div className='_posses_title_trs'>
              <div className='_posses_title_ch'>
                <h3>Job Location</h3>
                <p>Acworth,GA</p>
              </div>
              <div className='_posses_title_ch'>
                <h3>Job Location</h3>
                <p>Acworth,GA</p>
              </div>
            </div>


            <div className='_posses_title'>
              <div className='_posses_title_ch'>
                <h3>Required Skills</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi ullam esse deserunt? Quibusdam, facere dolore.</p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Possess

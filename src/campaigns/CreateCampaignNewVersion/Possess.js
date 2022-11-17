import React from 'react'
import possess from '../../assets/posses-icon.svg'
import CheckIcon from '@mui/icons-material/Check';
import './CreateCampaignNewVersion.css'
import './MediaQueryCreateCampaignNewVersion.css'
import Carousel from 'react-bootstrap/Carousel';

import { useState } from 'react';
const Possess = () => {
  const [preview, setpreview] = useState(false)

  const handleGeneratepreview = () => {
    if (preview === false) {

      setpreview(true)
    } else if (preview === true) {
      setpreview(false)
    }


  }

  return (
    <div className='__Crt_cmpgn_possess__'>
      <div className='crt_cmpgn_plan__'>

        <div className='_header_title_plan_pr'>
          <div className='_header_title_plan'>
            <img src={possess} alt="" className="campaign_goal_check_pr_img" />
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
              <h3 >Review Campaign</h3>
            </div>

            <button onClick={handleGeneratepreview} className='preview_btn'>Generate Preview</button>

            {
              preview ?
                <>
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
                  <div className='campaign_img_slider'>
                    <Carousel fade>
                      <Carousel.Item>
                        <div>
                          <div className='image_fir'>
                            <img
                              className="d-block  first_img"
                              src="https://thumbs.dreamstime.com/b/tesla-app-original-smartphone-screen-79913857.jpg"
                            />
                            <img
                              className="d-block  second_img"
                              src="https://th.bing.com/th/id/OIP.3aFASHXxV0nXaFQpxFZCVgHaFj?pid=ImgDet&rs=1"
                              alt="Second slide"
                            />
                          </div>
                          <div className='image_sec_'>
                            <img
                              className="d-block"
                              src="https://th.bing.com/th/id/OIP.Ty_ZHLnAx9Trb9Pu8KV1-wHaEM?pid=ImgDet&rs=1"
                              alt="Third slide"
                            />
                          </div>
                        </div>
                      </Carousel.Item>
                      <Carousel.Item>
                        <div>
                          <div className='image_fir'>
                            <img
                              className="d-block  first_img"
                              src="https://th.bing.com/th/id/R.6d637a728541e1b3181e6d30674a7496?rik=O3NU837gcW%2fR2A&riu=http%3a%2f%2frlv.zcache.com%2ftesla_letterhead_template-r8126680d62b2432eacb20e7b977db20c_vg63g_8byvr_324.jpg&ehk=9liFi8MnjoLYeFX2FDvl9qVONj4PbYqFgPXucOzRQ4Y%3d&risl=&pid=ImgRaw&r=0"
                            />
                            <img
                              className="d-block  second_img"
                              src="https://th.bing.com/th/id/OIP.oW18zIOaJnQbfmA_16Y3ygHaD5?pid=ImgDet&rs=1"
                              alt="Second slide"
                            />
                          </div>
                          <div className='image_sec_'>
                            <img
                              className="d-block "
                              src="https://cdn.dribbble.com/users/2349068/screenshots/4697741/dribbble.png"
                              alt="Third slide"
                            />
                          </div>
                        </div>
                      </Carousel.Item>
                    </Carousel>
                  </div>

                  <button className='cam_view_workspace'>View in Workspace</button>
                  <button className='cam_publish'>Publish</button>

                </> : null
            }
          </div>

        </div>

      </div>
    </div>
  )
}

export default Possess

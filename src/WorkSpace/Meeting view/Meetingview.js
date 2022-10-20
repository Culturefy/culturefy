import React from 'react'
import { Link } from 'react-router-dom'
import Content from '../../component/Content'
import './Meetingview.css'
import host from '../../assets/meet user.png'
import Card from '@mui/material/Card'; // mui card
import CardContent from '@mui/material/CardContent';
import google from '../../assets/google.png'

const Meetingview = () => {

    return (
        <>
            <Content />
            <div className='bbc'></div>
            <div className='meeting_view_pr'>
                <div className='meeting_view_ch'>
                    {/* aside left */}
                    <div className='meet_as_lef'>
                        <div className='mting_iframe'>
                        
                            <Link to='/workspace/meetingshareview'>
                            <img src={google} className='view_frame' alt="" />
                            </Link>
                        </div>
                        <div className='mting_host'>
                            <img src={host} alt="" />
                        </div>
                    </div>
                    {/* aside right */}
                    <div className='meet_as_rig'>

                        <Card className="__meet_card">
                            <CardContent>
                                <div className='meet_user_cont'>
                                    <img src="https://www.logolynx.com/images/logolynx/s_e1/e100b3fc2a67a1e91b72f50277746b97.jpeg" alt="" className='meet_user_img'/>
                                </div>
                            </CardContent>
                        </Card>
                        <Card className="__meet_card1">
                            <CardContent>
                                <div className='meet_user_cont'>
                                    <img src="https://www.logolynx.com/images/logolynx/s_e1/e100b3fc2a67a1e91b72f50277746b97.jpeg" alt="" className='meet_user_img1'/>
                                </div>
                            </CardContent>
                        </Card>
                        <Card className="__meet_card">
                            <CardContent>
                                <div className='meet_user_cont'>
                                    <img src="https://www.logolynx.com/images/logolynx/s_e1/e100b3fc2a67a1e91b72f50277746b97.jpeg" alt="" className='meet_user_img'/>
                                </div>
                            </CardContent>
                        </Card>
                        <Card className="__meet_card">
                            <CardContent>
                                <div className='meet_user_cont'>
                                    <img src="https://www.logolynx.com/images/logolynx/s_e1/e100b3fc2a67a1e91b72f50277746b97.jpeg" alt="" className='meet_user_img'/>
                                </div>
                            </CardContent>
                        </Card>
                        <Card className="__meet_card">
                            <CardContent>
                                <div className='meet_user_cont'>
                                    <img src="https://www.logolynx.com/images/logolynx/s_e1/e100b3fc2a67a1e91b72f50277746b97.jpeg" alt="" className='meet_user_img'/>
                                </div>
                            </CardContent>
                        </Card>
                        <Card className="__meet_card">
                            <CardContent>
                                <div className='meet_user_cont'>
                                    <img src="https://www.logolynx.com/images/logolynx/s_e1/e100b3fc2a67a1e91b72f50277746b97.jpeg" alt="" className='meet_user_img'/>
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                </div>

            </div>
        </>
    )
}

export default Meetingview

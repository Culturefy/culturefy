import React from 'react'
import { Link } from 'react-router-dom'
import Content from '../../component/Content'
import './Meetingview.css'
import host from '../../assets/meet user.png'
import Card from '@mui/material/Card'; // mui card
import CardContent from '@mui/material/CardContent';
import google from '../../assets/google.png'
import WorkspaceHeader from '../WorkspaceHeader'
import WorkspaceSidebar from '../../component/WorkspaceSidebar'
import Comment from '../../component/Comment'
import Chat from '../../component/Chat'
import { useEffect, useState } from 'react';
import { VideoRoom } from './VideoCalll/VideoRoom'
import LiveVideoStreaming from './VideoCalll/App'

const Meetingview = () => {
    const [image, setImage] = useState()
    const [joined, setJoined] = useState(false);


    const googleScreen = () => {
        console.log("clicked")
    }


    useEffect(() => {
        googleScreen();
    }, [])
    return (
        <>
            <Content />
            <div className="gapanalysis">
                <div className="gapanalysis_main_wrepper">
                    <div className="gapanalysis_header">
                        <WorkspaceHeader />
                    </div>
                    <div className="gapanalysis_inner_wrepper">
                        <div className='meeting_view_pr'>
                            <div className='meeting_view_ch'>
                                {/* aside left */}
                                <div className='meet_as_lef'>
                                    <div className='mting_iframe'>
                                        {/* 
                                        <Link to='/workspace/meetingshareview'>
                                            <img src={google} className='view_frame' alt="" />
                                        </Link> */}

                                        <Link to='/workspace/meetingshareview'>
                                            <div className='scrn_shr_viw_ch'>
                                                <iframe src="https://www.google.com/webhp?igu=1" className="view_frame" ></iframe>
                                            </div>
                                        </Link>
                                    </div>


                                    {/* <div className='mting_host'>
                                        <img src={host} alt="" />
                                    </div> */}
                                    <div className='mting_host'>
                                        <div className="mting_host_ch">

                                            {/* {!joined && (
                                                <>
                                                 <h5> Create Video Call </h5>
                                                <button onClick={() => setJoined(true)}>
                                                    Make a Video Call
                                                </button>
                                                </>
                                            )}
                                            {joined && <VideoRoom />} */}

                                            <LiveVideoStreaming />
                                        </div>
                                    </div>





                                </div>
                                {/* aside right */}
                                <div className='meet_as_rig'>

                                    <Card className="__meet_card">
                                        <CardContent>
                                            <div className='meet_user_cont'>
                                                <img src="https://www.logolynx.com/images/logolynx/s_e1/e100b3fc2a67a1e91b72f50277746b97.jpeg" alt="" className='meet_user_img' />
                                            </div>
                                        </CardContent>
                                    </Card>
                                    <Card className="__meet_card1">
                                        <CardContent>
                                            <div className='meet_user_cont'>
                                                <img src="https://www.logolynx.com/images/logolynx/s_e1/e100b3fc2a67a1e91b72f50277746b97.jpeg" alt="" className='meet_user_img1' />
                                            </div>
                                        </CardContent>
                                    </Card>
                                    <Card className="__meet_card">
                                        <CardContent>
                                            <div className='meet_user_cont'>
                                                <img src="https://www.logolynx.com/images/logolynx/s_e1/e100b3fc2a67a1e91b72f50277746b97.jpeg" alt="" className='meet_user_img' />
                                            </div>
                                        </CardContent>
                                    </Card>
                                    <Card className="__meet_card">
                                        <CardContent>
                                            <div className='meet_user_cont'>
                                                <img src="https://www.logolynx.com/images/logolynx/s_e1/e100b3fc2a67a1e91b72f50277746b97.jpeg" alt="" className='meet_user_img' />
                                            </div>
                                        </CardContent>
                                    </Card>
                                    <Card className="__meet_card">
                                        <CardContent>
                                            <div className='meet_user_cont'>
                                                <img src="https://www.logolynx.com/images/logolynx/s_e1/e100b3fc2a67a1e91b72f50277746b97.jpeg" alt="" className='meet_user_img' />
                                            </div>
                                        </CardContent>
                                    </Card>
                                    <Card className="__meet_card">
                                        <CardContent>
                                            <div className='meet_user_cont'>
                                                <img src="https://www.logolynx.com/images/logolynx/s_e1/e100b3fc2a67a1e91b72f50277746b97.jpeg" alt="" className='meet_user_img' />
                                            </div>
                                        </CardContent>
                                    </Card>
                                </div>
                            </div>

                        </div>
                        {/* <div className="gapanalysis_comment">
                            <Comment />
                            <Chat />
                        </div> */}
                    </div>
                </div>
                <WorkspaceSidebar />
            </div>

        </>
    )
}

export default Meetingview

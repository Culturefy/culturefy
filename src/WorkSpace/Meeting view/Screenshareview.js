import React from 'react'
import Content from '../../component/Content'
import Card from '@mui/material/Card'; // mui card
import CardContent from '@mui/material/CardContent';
import host from '../../assets/meet user.png'

const Screenshareview = () => {
    return (
        <>
            <Content />
            <div className='scrn_shr_viw_pr'>
                <div className='scrn_shr_viw_ch'>
                    <iframe src="https://www.google.com/webhp?igu=1" className="scrn_frame"></iframe>
                </div>
                
                <div className='screen_shr_users'>
                    <div className='scrn_crd_host'>
                    <Card className="scrn_crd">
                        <CardContent>
                            <div className='meet_user_cont'>
                                <img src={host} alt="" className='meet_user_img_host' />
                            </div>
                        </CardContent>
                    </Card>
                    </div>
                    <Card className="scrn_crd">
                        <CardContent>
                            <div className='meet_user_cont'>
                                <img src="https://www.logolynx.com/images/logolynx/s_e1/e100b3fc2a67a1e91b72f50277746b97.jpeg" alt="" className='meet_user_img' />
                            </div>
                        </CardContent>
                    </Card>
                    <Card className="scrn_crd">
                        <CardContent>
                            <div className='meet_user_cont'>
                                <img src="https://www.logolynx.com/images/logolynx/s_e1/e100b3fc2a67a1e91b72f50277746b97.jpeg" alt="" className='meet_user_img' />
                            </div>
                        </CardContent>
                    </Card>
                    <Card className="scrn_crd">
                        <CardContent>
                            <div className='meet_user_cont'>
                                <img src="https://www.logolynx.com/images/logolynx/s_e1/e100b3fc2a67a1e91b72f50277746b97.jpeg" alt="" className='meet_user_img' />
                            </div>
                        </CardContent>
                    </Card>
                    <Card className="scrn_crd">
                        <CardContent>
                            <div className='meet_user_cont'>
                                <img src="https://www.logolynx.com/images/logolynx/s_e1/e100b3fc2a67a1e91b72f50277746b97.jpeg" alt="" className='meet_user_img' />
                            </div>
                        </CardContent>
                    </Card>
                    <Card className="scrn_crd">
                        <CardContent>
                            <div className='meet_user_cont'>
                                <img src="https://www.logolynx.com/images/logolynx/s_e1/e100b3fc2a67a1e91b72f50277746b97.jpeg" alt="" className='meet_user_img' />
                            </div>
                        </CardContent>
                    </Card>
                    <Card className="scrn_crd">
                        <CardContent>
                            <div className='meet_user_cont'>
                                <img src="https://www.logolynx.com/images/logolynx/s_e1/e100b3fc2a67a1e91b72f50277746b97.jpeg" alt="" className='meet_user_img' />
                            </div>
                        </CardContent>
                    </Card>
     
                                    
                </div>
            </div>
        </>
    )
}

export default Screenshareview

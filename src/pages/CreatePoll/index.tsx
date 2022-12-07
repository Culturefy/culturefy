import React from 'react'
import './WorkspacePoll.css'
import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';

const index = () => {
    const [show, setShow] = useState(false)
    const handleShow = () => {
        if (show === false) {
            setShow(true)
        } else {
            setShow(false)
        }
    }
    const handleClose = () => {
        setShow(false)
    }

  return (
    <>
    <div className="workspace_poll_main">

        <div className='workspace_poll'>
            {/* <div className="workspace_poll_header">
                <Workspace />
            </div> */}
            <div className="workspace_poll_inner">
                <div className='wrkspc_pl_ch'>
                    <div className='poll_btn_pr'>
                        <Link to='/workspacesfile/createpoll'>
                            <button className='poll_button'>Create Poll</button>
                        </Link>
                        <div>
                        {
                            show ? <p onClick={handleClose} style={{fontFamily:"Graphik_Regular"}} >View all polls</p> : null
                        }
                        </div>
                    </div>
                    <h2 style={{fontFamily:"Graphik_Bold"}}>Polls</h2>
                    <div className='poll_que'>
                        <h4>Lorem ipsum dolor, sit amet consectetur adipisicing , distinctio?</h4>
                        {/* ============================== */}
                        {/* <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                > */}
                        <p className='poll_vote_p' onClick={handleShow}>you haven't voted</p>
                        {/* </AccordionSummary>
                <AccordionDetails>
                    <Typography> */}
                        {
                            show ? <div>
                                <div className='poll_pr'>
                                    <div className='poll_option'>
                                        <p>Option 1</p>
                                    </div>
                                    <div className="poll_bar">
                                        <div className="fr_pollbar_clr" style={{ width: "25%",fontFamily:"Graphik_Regular" }}>4 votes</div>
                                    </div>
                                </div>
                                {/* </Typography>
                    <Typography> */}
                                <div className='poll_pr'>
                                    <div className='poll_option'>
                                        <p>Option 2</p>
                                    </div>
                                    <div className="poll_bar">
                                        <div className="sec_pollbar_clr" style={{ width: "50%",fontFamily:"Graphik_Regular" }}>3 votes</div>
                                    </div>
                                </div>
                                {/* </Typography>
                    <Typography> */}
                                <div className='poll_pr'>
                                    <div className='poll_option'>
                                        <p>Option 3</p>
                                    </div>
                                    <div className="poll_bar">
                                        <div className="thi_pollbar_clr" style={{ width: "75%",fontFamily:"Graphik_Regular" }}> 5 votes</div>
                                    </div>
                                </div>
                                {/* </Typography> */}
                                <button className='vote_btn' onClick={handleClose} style={{fontFamily:"Graphik_Regular" }}>Vote</button>
                            </div> : ""
                        }
                        {/* </AccordionDetails>
             </Accordion> */}
                    </div>
                    <div className='poll_que'>
                        <h4>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Modi, distinctio?</h4>
                        <p className='voted'>you voted</p>
                    </div>
                    <div className='poll_que'>
                        <h4>Lorem adipisicing elit. Modi, distinctio?</h4>
                        <p className='voted'>you voted</p>
                    </div>
                </div>
                {/* --------------Chat Box------------ */}
                {/* <div className='pollo_chat_box'>
                    <Comment/>
                    <Chat/>
                </div> */}
            </div>
        </div>
        {/* <WorkspaceSidebar /> */}
    </div>
    </>
  )
}

export default index

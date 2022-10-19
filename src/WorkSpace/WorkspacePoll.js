import React from 'react'
import './WorkspacePoll.css'
import { useState } from 'react';
// Accordion Mui
// import Accordion from '@mui/material/Accordion';
// import AccordionSummary from '@mui/material/AccordionSummary';
// import AccordionDetails from '@mui/material/AccordionDetails';
// import Typography from '@mui/material/Typography';
// import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import 'bootstrap/dist/css/bootstrap.min.css';
import Content from '../component/Content'
const WorkspacePoll = () => {
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
            <Content />
            {/* -----------Extra Div for Header---------- */}
            <div className='bbc'></div>
            <div className='workspace_poll'>
                <div className='wrkspc_pl_ch'>
                    <div className='poll_btn_pr'>
                        <button>Create Poll</button>
                        {
                            show ? <p onClick={handleClose} >View all polls</p> : ""
                        }

                    </div>
                    <h2>Polls</h2>
                    <div className='poll_que'>
                        <h4>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Modi, distinctio?</h4>
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
                                        <div className="fr_pollbar_clr" style={{ width: "25%" }}>4 votes</div>
                                    </div>
                                </div>
                                {/* </Typography>
                            <Typography> */}
                                <div className='poll_pr'>
                                    <div className='poll_option'>
                                        <p>Option 2</p>
                                    </div>
                                    <div className="poll_bar">
                                        <div className="sec_pollbar_clr" style={{ width: "50%" }}>3 votes</div>
                                    </div>
                                </div>
                                {/* </Typography>
                            <Typography> */}
                                <div className='poll_pr'>
                                    <div className='poll_option'>
                                        <p>Option 3</p>
                                    </div>
                                    <div className="poll_bar">
                                        <div className="thi_pollbar_clr" style={{ width: "75%" }}> 5 votes</div>
                                    </div>
                                </div>
                                {/* </Typography> */}
                                <button className='vote_btn' onClick={handleClose}>Vote</button>
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
                        <h4>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Modi, distinctio?</h4>
                        <p className='voted'>you voted</p>
                    </div>
                </div>
                {/* --------------Chat Box------------ */}
                <div className='pollo_chat_box'>
                    
                </div>
            </div>
        </>
    )
}

export default WorkspacePoll

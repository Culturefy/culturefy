//@ts-nocheck
import React, { useState, useEffect } from 'react'
import './WorkspacefileMp4.css'
import { Link } from 'react-router-dom'
import Comment from '../../components/Comment'
import Chat from '../../components/Chat'
import add_person from '../../assets/campaign/person-add.svg'
import user from '../../assets/campaign/meet user.png'
import user2 from '../../assets/campaign/user2.jpg'
import video from '../../assets/campaign/video1.mp4'
import Draggable from 'react-draggable';
import Avatar from '@mui/material/Avatar';
import AvatarGroup from '@mui/material/AvatarGroup';

const index = () => {
    const [globalMousePos, setGlobalMousePos] = useState({});
    const [localMousePos, setLocalMousePos] = useState({});
    const [show, setshow] = useState(false)
    const [notch, setnotch] = useState(false)
    const [data, setdata] = useState('')
    const [time, settime] = useState('')
    const [description, setdescription] = useState([])



    const handleMouseMove = (event) => {
        // 👇 Get mouse position relative to element
        const localX = event.clientX - event.target.offsetLeft;
        const localY = event.clientY - event.target.offsetTop;
        setLocalMousePos({ x: localX, y: localY });

        //    setLocalMousePos({ x: localX, y: localY });
    };

    useEffect(() => {
        const handleMouseMove = (event) => {
            setGlobalMousePos({
                x: event.clientX,
                y: event.clientY,
            });
        };

        window.addEventListener('mousemove', handleMouseMove);

        return () => {
            window.removeEventListener(
                'mousemove',
                handleMouseMove
            );
        };
    }, []);



    if ((localMousePos.x < 10 && localMousePos.x > 0) || localMousePos.x === 0) {
        setLocalMousePos({ x: null, y: null });
    } else if ((localMousePos.y < 10 && localMousePos.y > 0) || localMousePos.y === 0) {
        setLocalMousePos({ x: null, y: null });
    } else if (localMousePos.x > 945) {
        setLocalMousePos({ x: null, y: null });
    } else if (localMousePos.y > 460) {
        setLocalMousePos({ x: null, y: null });
    }
    const handleClick = () => {
        // console.log("click", localMousePos.x, localMousePos.y)
        var vid = document.getElementById("myVideo");
        const milisecond = vid.currentTime
        const second = ((milisecond / 1000) * 10).toFixed(2);
        settime(second)

        if (show === false) {
            setshow(true)
        } else if (show === true) {
            setshow(false)
        }

    }

    const handledblClick = () => {
        setshow(false)
    }

    const inputNotedataChange = (e) => {
        setdata(e.target.value)
    }

    const inputNotedata = () => {

        setnotch(true)
        setshow(false)
        const notedata = {
            time: time,
            des: data,
        }
        setdescription([...description, notedata])
    }
    return (
        <div className="workspace_file_main_wrapper">


            <div className="inner_wepper">
                <div className="workspacesfilepng_section">
                    <div className="workspacesfilepng_header">
                        <p>File.mp4</p>
                        <p>Click video to comment</p>
                    </div>
                    <div className="workspacesfilepng_image">
                        <video className='Workspace_video' controls style={{ height: "100%", width: "100%", position: "relative" }} onMouseMove={handleMouseMove} onClick={handleClick} id="myVideo">
                            <source src={video} type="video/mp4" />

                        </video>
                        {/* {
                            notch ? <div className="drag_circle"></div> : null
                        }
                        {
                            show ?
                                <Draggable>
                                    <div className="note" >
                                        <div className="note_description">
                                            <div className="note_user">
                                                <div className="note_user_name">
                                                    D
                                                </div>
                                            </div>
                                            <div className="note_desc">
                                                <div className="a">
                                                    <p>{time} -</p>
                                                    <input type="text" onChange={inputNotedataChange} />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="note_add">
                                            <button onClick={inputNotedata}>Add</button>
                                        </div>
                                    </div>
                                </Draggable>

                                :

                                localMousePos.x === null && localMousePos.y === null ? <div className="drag_div" style={{ visibility: "hidden" }}>
                                </div> :
                                    <div className="drag_div" style={{ top: localMousePos.y, left: localMousePos.x }}>
                                        <span>Click to add a Note</span>
                                    </div>


                        } */}




                    </div>
                    <div className="workspacesfilepng_footer">
                        <div className="workspacesfilepng_viewer">
                            <AvatarGroup max={4}>
                                <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
                                <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />
                                <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
                                <Avatar alt="Agnes Walker" src="/static/images/avatar/4.jpg" />
                                <Avatar alt="Trevor Henderson" src="/static/images/avatar/5.jpg" />
                            </AvatarGroup>
                        </div>
                        <div className="add_contribution">
                            <img src={add_person} alt="" />
                            <p>Add Contributors</p>
                        </div>
                        <div className="workspacesfilepng_like">
                            <i className="fa-solid fa-star workspacesfilepng_likeStar"></i>
                        </div>
                    </div>
                </div>
                <div className="comment_section">
                    <Comment />
                    <Link to='/workspace/meetingview'>
                            <div className="calling_Section">
                                <div className="call_img1">
                                    <img src={user2} alt="" />
                                </div>
                                <div className="call_img2">
                                    <img src={user} alt="" />
                                </div>
                            </div>
                        </Link>
                        <div className="chat_Section">
                            <Chat />
                        </div>
                </div>
            </div>


        </div>
    )
}

export default index

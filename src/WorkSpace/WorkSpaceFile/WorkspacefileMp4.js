import React from 'react'
import './WorkspacefileMp4.css'
import Content from '../../component/Content'
import Comment from '../../component/Comment'
import user1 from '../../assets/user_img.jpg'
import user2 from '../../assets/user2.jpg'
import add_person from '../../assets/person-add.svg'
import video from '../../assets/video1.mp4'
import Workspaces from '../WorkspaceHeader'
import WorkspaceSidebar from '../../component/WorkspaceSidebar'
import Chat from '../../component/Chat'
import Draggable from 'react-draggable';
import { useState, useEffect } from 'react'


const WorkspacefileMp4 = () => {
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
        // const localA = event.clientY - event.target.offsetRight;
        // const localB = event.clientY - event.target.offsetBottom;

        setLocalMousePos({ x: localX, y: localY });
        // const localX = event.clientX - event.relatedTarget.offsetLeft;
        // const localY = event.clienty - event.relatedTarget.offsetTop;
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
// console.log(localMousePos.x, localMousePos.y)
    return (
        <>
            <Content />
            <div className="workspace_file_main_wrapper">
                <div className="workspacesfile_wapper">
                    <div className="workspace_file_header">
                        <Workspaces />
                    </div>

                    <div className="inner_wepper">
                        <div className="workspacesfilepng_section">
                            <div className="workspacesfilepng_header">
                                <p>Click video to comment</p>
                            </div>
                            <div className="workspacesfilepng_image">
                                <video className='Workspace_video' controls style={{ height: "100%", width: "100%", position: "relative" }} onMouseMove={handleMouseMove} onClick={handleClick} id="myVideo">
                                    <source src={video} type="video/mp4" />

                                </video>
                                {
                                    notch ?<div className="drag_circle"></div>: null
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


                                }
                                



                            </div>
                            <div className="workspacesfilepng_footer">
                                <div className="workspacesfilepng_viewer">
                                    <div className="viewer1"></div>
                                    <div className="viewer2">
                                        <img src={user1} alt="" />
                                    </div>
                                    <div className="viewer3">
                                        <img src={user2} alt="" />
                                    </div>
                                    <div className="viewer4">
                                        <img src={user1} alt="" />
                                    </div>
                                    <div className="viewer5">
                                        <p>+8</p>
                                    </div>
                                </div>
                                <div className="add_contribution">
                                    <img src={add_person} alt="" />
                                    <p>Add Contributors</p>
                                </div>
                                <div className="workspacesfilepng_like">
                                    <i class="fa-solid fa-star workspacesfilepng_likeStar"></i>
                                </div>
                            </div>
                        </div>
                        <div className="comment_section">
                            <Comment />
                            <Chat />
                        </div>
                    </div>
                </div>
                <div className="workspacefile_footer">
                    <WorkspaceSidebar />
                </div>
            </div>
        </>
    )
}

export default WorkspacefileMp4

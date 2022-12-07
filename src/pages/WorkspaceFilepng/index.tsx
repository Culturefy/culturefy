//@ts-nocheck
import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Comment from '../../components/Comment'
import Chat from '../../components/Chat'
import './WorkspaceFilepng.css'
import Avatar from '@mui/material/Avatar';
import AvatarGroup from '@mui/material/AvatarGroup';
import add_person from '../../assets/campaign/person-add.svg'
import { Tooltip } from '@mui/material'
import { tooltipClasses } from '@mui/material/Tooltip';
import { styled } from '@mui/material/styles';
import filepng from '../../assets/campaign/fav_img1.jpg'
import user from '../../assets/campaign/meet user.png'
import user2 from '../../assets/campaign/user2.jpg'


const index = () => {
    const [localMousePos, setLocalMousePos] = useState({});
    const [globalMousePos, setGlobalMousePos] = useState({});
    const [show, setshow] = useState(false)
    const [anootation, setanootation] = useState('')
    const [data, setdata] = useState([]);
    const [top, settop] = useState()
    const [left, setleft] = useState()
    console.log(data)
    const handleMouseMove = (event) => {
        // 👇 Get mouse position relative to element
        const localX = event.clientX - event.target.offsetLeft;
        const localY = event.clientY - event.target.offsetTop;
        setLocalMousePos({ x: localX, y: localY });
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

    const handleClick = () => {
        // console.log("click", localMousePos.x, localMousePos.y)


        if (show === false) {
            setshow(true)
        } else if (show === true) {
            setshow(false)
        }
        const topy = globalMousePos.y
        const leftx = globalMousePos.x

        settop(topy)
        setleft(leftx)

    }
    const annotationHandle = (e) => {
        setanootation(e.target.value)
    }
    const handleSubmit = () => {
        const submitdata = [
            top,
            left,
            anootation
        ]

        setdata([...data, submitdata])

        setshow(false)
    }




    const LightTooltip = styled(({ className, ...props }) => (
        <Tooltip {...props} classes={{ popper: className }} />
    ))(({ theme }) => ({
        [`& .${tooltipClasses.tooltip}`]: {
            maxWidth: 500,
            backgroundColor: theme.palette.common.white,
            color: 'gray',
            boxShadow: theme.shadows[1],
            fontSize: 11,

        },
    }));
    return (
        <div className="workspace_file_main_wrapper">
            <div className="workspacesfile_wapper">
                <div className="inner_wepper">
                    <div className="workspacesfilepng_section">
                        <div className="workspacesfilepng_header">
                            <p>File.png</p>
                            <p>Click image to comment</p>
                        </div>
                        <div className="workspacesfilepng_image" >
                            <img src={filepng} alt="" style={{ height: "100%", width: "100%", position: "relative" }}
                                onMouseMove={handleMouseMove} onClick={handleClick}
                            />

                            {
                                show ?
                                    <form onSubmit={handleSubmit} style={{ position: "absolute", top: top, left: left }}>
                                        <input type="text" name="" id="" onChange={annotationHandle} />
                                    </form>
                                    : null
                            }
                            {

                                data.map((e) => {
                                    return (

                                        <LightTooltip title={e[2]}><div className="annotation_tooltip" style={{ position: "absolute", top: e[0], left: e[1] }}></div></LightTooltip >
                                    )
                                })

                            }



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
                                <i class="fa-solid fa-star workspacesfilepng_likeStar"></i>
                            </div>
                        </div>
                    </div>
                    <div className="comment_section">
                        {/* <Team /> */}
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

        </div>
    )
}

export default index

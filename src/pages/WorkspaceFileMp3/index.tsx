
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import './WorkspaceFileMp3.css'
import Comment from '../../components/Comment'
import Chat from '../../components/Chat'
import AudioList from "../../components/AudioList";
import add_person from '../../assets/campaign/person-add.svg'
import Avatar from '@mui/material/Avatar';
import AvatarGroup from '@mui/material/AvatarGroup';
import user from "../../assets/campaign/meet user.png";
import user2 from "../../assets/campaign/meet user2.png";

import Draggable from 'react-draggable';

const index = () => {
    return (
        <div className="workspace_file_main_wrapper">
            <div className="workspacesfile_wapper">
                <div className="inner_wepper">
                    <div className="workspacesfilepng_section">
                        <div className="workspacesfilepng_header">
                            <p>File.Mp3</p>
                            <p>Click image to comment</p>
                        </div>
                        <div className="workspacesfilepng_image" >
                            <AudioList />
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
        </div>
    )
}

export default index


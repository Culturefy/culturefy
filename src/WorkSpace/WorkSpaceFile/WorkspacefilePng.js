import React from 'react'
import Content from '../../component/Content'
import Comment from '../../component/Comment'
import './WorkspacefilePng.css'
import filepng from '../../assets/fav_img1.jpg'
import user1 from '../../assets/user_img.jpg'
import user2 from '../../assets/user2.jpg'
import add_person from '../../assets/person-add.svg'
import Chat from '../../component/Chat'
import WorkspaceSidebar from '../../component/WorkspaceSidebar'
import Workspaces from '../../WorkSpace/WorkspaceHeader'
const WorkspacefilePng = () => {
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
                                <p>Click image to comment</p>
                            </div>
                            <div className="workspacesfilepng_image">
                                <img src={filepng} alt="" />
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
                            <div className="chat_Section">
                                <Chat />
                            </div>
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

export default WorkspacefilePng

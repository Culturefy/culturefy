import React from 'react'
import Content from '../../component/Content'
import Comment from '../../component/Comment'
import user1 from '../../assets/user_img.jpg'
import user2 from '../../assets/user2.jpg'
import add_person from '../../assets/person-add.svg'
import video from '../../assets/video1.mp4'



const WorkspacefileMp4 = () => {
    return (
    <>
            <Content />
            <div className="workspacesfile_wapper">
                <div className="inner_wepper">
                    <div className="workspacesfilepng_section">
                        <div className="workspacesfilepng_header">
                            <p>Click video to comment</p>
                        </div>
                        <div className="workspacesfilepng_image">
                                <video style={{width:"100%",height:"100%"}} controls>
                                   <source src={video} type="video/mp4"/>
                                    {/* <source src="movie.ogg" type="video/ogg"/>    */}
                                </video>
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
                            <Comment/>
                        </div>
                    </div>

                </div>
            </>
            )
}

            export default WorkspacefileMp4

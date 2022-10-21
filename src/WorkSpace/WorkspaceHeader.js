import React from "react"
import p1 from "../assets/p1.png";
import P1 from "../assets/p-1.png";
import P2 from "../assets/p-2.png";
import P3 from "../assets/p-3.png";
import P5 from "../assets/p5.png";
import Content from "../component/Content";
import "./WorkspaceHeader.css"
import teslalogo from '../assets/teslalogo.jpg'


const Workspace = () => {
    return (
        <>
            <div className="workspace_header_container">
                <div className="workspace_title">
                    <div className="header_logo">
                        <img src={teslalogo} alt="" />
                    </div>
                    <div className="header_title">
                        <h1>Workspace</h1>
                    </div>
                </div>
                <div className="workspace_users">
                    <div className="user1">
                        <div className="inneruser1">
                          <img src={p1} alt="" />
                        </div>
                        <p>john</p>
                    </div>
                    <div className="user1">
                        <div className="inneruser1">
                        <img src={P2} alt="" />
                        </div>
                        <p>john</p>
                    </div>
                    <div className="user1">
                        <div className="inneruser1">
                        <img src={P3} alt="" />
                        </div>
                        <p>john</p>
                    </div>
                    <div className="user1">
                        <div className="inneruser1">
                        <img src={P5} alt="" />
                        </div>
                        <p>john</p>
                    </div>
                    <div className="user1">
                        <div className="inneruser1">
                        <img src={p1} alt="" />
                        </div>
                        <p>john</p>
                    </div>
                    <div className="user1">
                        <div className="inneruser5">
                            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-person-plus-fill" viewBox="0 0 16 16">
                                <path d="M1 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
                                <path fill-rule="evenodd" d="M13.5 5a.5.5 0 0 1 .5.5V7h1.5a.5.5 0 0 1 0 1H14v1.5a.5.5 0 0 1-1 0V8h-1.5a.5.5 0 0 1 0-1H13V5.5a.5.5 0 0 1 .5-.5z" />
                            </svg>
                        </div>
                        <p>john</p>
                    </div>

                </div>
                <div className="workspace_user_buttons">
                     <button className="leave_call">Leave Call</button>
                     <button className="send_review_link">Send Review Link</button>
                </div>

            </div>
        </>
    )
}
export default Workspace
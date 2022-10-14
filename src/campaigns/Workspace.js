import React from "react"
import p1 from "../assets/p1.png";
import P1 from "../assets/p-1.png";
import P2 from "../assets/p-2.png";
import P3 from "../assets/p-3.png";
import P5 from "../assets/p5.png";
import Content from "../component/Content";
import "./Workspace.css"


const Workspace = () => {
    return (
        <div>
             <Content />
             <div class="bio-box d-flexs align-items-center" style={{paddingLeft:"20%"}}>
                    <div class="ws-header">
                        <a href="#">
                            <img src="./assets-qa/images/wp-logo.png" alt="Profile Image"/>
                            <p class="username">Workspaces</p>
                        </a>
                        <div class="ws-img1">
                            <div class="ws-img-txt">
                                <img src={p1} alt="Profile Image"/>
                                <span>John</span>
                            </div>
                            <div class="ws-img-txt mic-div">
                                <img src={P1} alt="Profile Image"/>
                                <span class="mic"> <i class="fa fa-microphone" aria-hidden="true"></i></span>
                                <span>Banjamin</span>
                            </div>
                            <div class="d-flexs pl-30">
                                <div class="ws-img-txt">
                                    <img src={P3} alt="Profile Image"/>
                                    <span>Ballan</span>
                                </div>
                                <div class="ws-img-txt">
                                    <img src={P2} alt="Profile Image"/>
                                    <span>ju</span>
                                </div>
                                <div class="ws-img-txt">
                                    <img src="./assets-qa/images/p5.png" alt="Profile Image"/>
                                    <span>Nud</span>
                                </div>
                            </div>
                            <div class="d-flexs pl-30">
                                <div class="ws-img-txt">
                                    <a data-bs-toggle="modal" data-bs-target="#invite-friends">
                                        <img src="./assets-qa/images/add-icon.png" alt="Profile Image"/></a>
                                </div>
                            </div>
                            <div class="d-flexs pl-30 btn-div">
                                <a href="#" class="btn-qa btn-red sm-btn"> Leave Call</a>
                                <a href="#" class="btn-qa btn-black sm-btn"> Send Review Link</a>
                            </div>
                        </div>
                    </div>
                    <div class="rightTxt">
                    <a href="#"> <i class="fa fa-chevron-left" aria-hidden="true"></i> Team </a>
                </div>
                </div>
         </div>
    )
}
export default Workspace
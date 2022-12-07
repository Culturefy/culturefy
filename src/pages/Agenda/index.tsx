import React from 'react'
import { Link } from 'react-router-dom'
import './WorkspaceAgendas.css'
import user from "../../assets/campaign/meet user.png";
import user2 from "../../assets/campaign/meet user2.png";
const index = () => {
    return (
        <>
            <div className="workspace_agenda_main_workspace_agendas_wrepper">
                <div className="workspace_agendas_wrepper">
                    <h3>Agendas</h3>
                    <div className="agendas">
                        <Link to="/workspaceagendasview">
                        {/* <Link to="/linepage"> */}
                        </Link>
                        <Link to="/workspacesfile/createnewtemplate">
                            <div className="new_agendas">
                                <i className="fa-solid fa-plus agendas_plus"></i>
                            </div>
                        </Link>
                    </div>
                </div>
                <div className="agendacall_section">
              <div className="agendacall_section_cmnt"></div>
              <div className="agendacall_section_vc">
                <Link to="/workspace/meetingview">
                  <div className="calling_Section">
                    <div className="call_img1">
                      <img src={user2} alt="" />
                    </div>
                    <div className="call_img2">
                      <img src={user} alt="" />
                    </div>
                  </div>
                </Link>
              </div>
              <div className="agendacall_section_chat"></div>
            </div>
         
            
            </div>
      
        </>
    )
}

export default index;

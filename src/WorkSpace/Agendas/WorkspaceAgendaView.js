import React from 'react'
import './WorkspaceAgendaView.css'
import Content from '../../component/Content';
import WorkspaceHeader from '../WorkspaceHeader'
import { Link } from 'react-router-dom';
import WorkspaceSidebar from '../../component/WorkspaceSidebar';
import Comment from '../../component/Comment'
import Chat from '../../component/Chat'
import Editors from './Editors'
import Team from '../../component/Team'
import user from '../../assets/meet user.png'
import user2 from '../../assets/meet user2.png'
import AdminImg from '../../assets/admin-img.png'
import Calender from '../../assets/calendar-icon.png'
import Notification from '../../assets/Notifiction.svg'

const WorkspaceAgendaView = () => {
    return (
        <>
            <Content />
            <div className="workspace_agenda_main_workspace_agendas_wrepper">
                <div className="workspace_agendasviews_wrepper">
                    <div className='campaign_header_user_data'>
                        <ul>
                            <li>
                                <img src={Calender} />
                            </li>
                            <li>
                                <img src={Notification} />
                            </li>
                            <li>
                                <img src={AdminImg} />
                            </li>
                        </ul>
                    </div>

                    <div className="workspace_agenda_header">
                        <WorkspaceHeader />
                    </div>

                    <div className="agendaview_inner_wrepper">
                        <div className="agendaview_section">
                            <div className="agendaview_header">
                                <div className="agenda_button">
                                    <button>Save As Template</button>
                                </div>
                                <Link to='/workspaceagendas'>
                                    <i class="fa-solid fa-xmark cross"></i>
                                </Link>
                            </div>
                            <div className="agenda_wordpad">
                                <Editors />
                            </div>
                        </div>

                        <div className="agenda_commentsection">
                            <div className="agend_team">

                                <Team />
                            </div>
                            <div className="agenda_comment">

                                <Comment />
                            </div>
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
                            <div className="agenda_chat">
                                <Chat />
                            </div>

                            {/* <Chat/> */}
                        </div>
                    </div>
                </div>
                <WorkspaceSidebar />
            </div>
        </>

    )
}

export default WorkspaceAgendaView

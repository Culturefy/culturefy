import React from 'react'
import './WorkspaceAgendaView.css'
import Content from '../../component/Content';
import WorkspaceHeader from '../WorkspaceHeader'
import { Link } from 'react-router-dom';
import WorkspaceSidebar from '../../component/WorkspaceSidebar';
import Comment from '../../component/Comment'
import Chat from '../../component/Chat'

const WorkspaceAgendaView = () => {
    return (
        <>
            <Content />

            <div className="workspace_agenda_main_workspace_agendas_wrepper">
                <div className="workspace_agendasviews_wrepper">

                    <div className="workspace_agenda_header">
                        <WorkspaceHeader />
                    </div>
                    {/* <DocumentEditorContainerComponent id="container" height={'590px'} serviceUrl="https://ej2services.syncfusion.com/production/web-services/api/documenteditor/" enableToolbar={true} />; */}
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
                                <div className="wordpad_view_header">
                                    <div className="buttons_1">
                                        <div className="innerbutton_1">
                                            <button><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-return-left" viewBox="0 0 16 16">
                                                <path fill-rule="evenodd" d="M14.5 1.5a.5.5 0 0 1 .5.5v4.8a2.5 2.5 0 0 1-2.5 2.5H2.707l3.347 3.346a.5.5 0 0 1-.708.708l-4.2-4.2a.5.5 0 0 1 0-.708l4-4a.5.5 0 1 1 .708.708L2.707 8.3H12.5A1.5 1.5 0 0 0 14 6.8V2a.5.5 0 0 1 .5-.5z" />
                                            </svg></button>
                                            <button><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-return-right" viewBox="0 0 16 16">
                                                <path fill-rule="evenodd" d="M1.5 1.5A.5.5 0 0 0 1 2v4.8a2.5 2.5 0 0 0 2.5 2.5h9.793l-3.347 3.346a.5.5 0 0 0 .708.708l4.2-4.2a.5.5 0 0 0 0-.708l-4-4a.5.5 0 0 0-.708.708L13.293 8.3H3.5A1.5 1.5 0 0 1 2 6.8V2a.5.5 0 0 0-.5-.5z" />
                                            </svg></button>
                                        </div>
                                        <div className="innerbutton_2">
                                            <button>Paragraph</button>
                                        </div>
                                        <div className="innerbutton_3">
                                            <button><i class="fa-solid fa-bold bold"></i></button>
                                            <button><i class="fa-solid fa-italic italic"></i></button>
                                            <button><i class="fa-solid fa-underline underline"></i></button>
                                            <button><i class="fa-solid fa-strikethrough strike"></i></button>
                                            <button><i class="fa-solid fa-superscript superscript"></i></button>
                                            <button><i class="fa-solid fa-subscript subscript"></i></button>
                                        </div>
                                    </div>
                                    <div className="buttons_2">
                                        <div className="innerbutton_4">
                                            <button><i class="fa-solid fa-text-height text_hight"></i></button>
                                            <button className='wordpad_text'>T</button>
                                            <button className='wordpad_upercase'>Aa</button>
                                        </div>
                                        <div className="innerbutton_5">
                                            <button><i class="fa-solid fa-align-left font_left"></i></button>
                                            <button><i class="fa-solid fa-align-center font_center"></i></button>
                                            <button><i class="fa-solid fa-align-right font_right"></i></button>
                                            <button><i class="fa-solid fa-align-justify justify"></i></button>
                                        </div>
                                        <div className="innerbutton_6">
                                            <button><i class="fa-solid fa-list font_list"></i></button>
                                            <button><i class="fa-solid fa-bold bold"></i></button>
                                        </div>
                                        <div className="innerbutton_7">
                                            <button><i class="fa-solid fa-ellipsis wordpad_dots"></i></button>
                                        </div>
                                    </div>
                                </div>
                                <div className="wordpad_container">

                                    <h1>Agenda</h1>
                                    <div className="agendaview_date_time">
                                        <span style={{fontFamily: "Graphik_Regular"}}><span style={{ fontFamily: "Graphik_Bold" }}>Date: </span> July 6,2022</span>
                                        <span style={{fontFamily: "Graphik_Regular"}}><span style={{ fontFamily: "Graphik_Bold"}}>Time: </span> 1:00 PM EST</span>
                                    </div>
                                    <div className="agendaview_items">

                                        <ol type='1' style={{ fontFamily: "Graphik_Bold" }}>
                                            <li>
                                                <p style={{ color: "white" }}>abc</p>
                                                <ol type='I' style={{fontFamily: "Graphik_Regular"}} > 
                                                    <li><span> Talking Point Number one</span></li>
                                                    <li><span> Second Talking Point</span></li>
                                                    <li><span> Next Topic of discussion</span></li>
                                                </ol>
                                            </li>
                                            <li>
                                                <p style={{ color: "white" }}>abc</p>
                                                <ol type='I' style={{fontFamily: "Graphik_Regular"}}>
                                                    <li><span> Talking Point Number one</span></li>
                                                    <li><span> Second Talking Point</span></li>
                                                    <li><span> Next Topic of discussion</span></li>
                                                </ol>
                                            </li>
                                            <li>
                                                <p style={{ color: "white" }}>abc</p>
                                                <ol type='I' style={{fontFamily: "Graphik_Regular"}}>
                                                    <li><span> Talking Point Number one</span></li>
                                                    <li><span> Second Talking Point</span></li>
                                                    <li><span> Next Topic of discussion</span></li>
                                                </ol>
                                            </li>
                                        </ol>
                                    </div>

                                </div>
                            </div>
                        </div>

                        <div className="agenda_commentsection">
                             <Comment/>
                             <Chat/>
                        </div>
                    </div>
                </div>
                <WorkspaceSidebar />
            </div>
        </>

    )
}

export default WorkspaceAgendaView

import React from 'react'
import './WorkspaceAgendaTemplates.css'
import Content from '../../component/Content'
import WorkspaceHeader from '../WorkspaceHeader'
import { Link } from 'react-router-dom'

const WorkspaceAgendasTemplates = () => {
    return (
        <>
            <Content />
            <WorkspaceHeader />
            <div className="workspace_agendastemplates_wrepper">
                <div className="agendatemplate_section">
                    <div className="agendatemplate_header">
                        <h4>Choose Agenda Template</h4>
                        <Link to='/workspaceagendas'>
                        <i class="fa-solid fa-xmark cross"></i>
                        </Link>
                    </div>
                    <div className="Agenda_buttons">
                        <button className='create_template'>Create New Template +</button>
                    </div>
                    <div className="agenda_view_section">
                        {/* ===========================================1========================================================= */}

                        <div className="agendas_view">

                        </div>
                        {/* ============================================2======================================================== */}

                        <div className="agendas_view">
                            <h6>Agenda</h6>
                            <div className="agenda_date_time">
                                <span>[Location]</span>
                                <span>[Date]</span>
                                <span>[Time]</span>
                            </div>
                            <div className="agenda_items">
                                <p>Agenda Items</p>
                                <ol type='I'>
                                    <li>
                                        <p style={{ color: "white" }}>abc</p>
                                        <ol type='a'>
                                            <li></li>
                                            <li></li>
                                            <li></li>
                                        </ol>
                                    </li>
                                    <li>
                                        <p style={{ color: "white" }}>abc</p>
                                        <ol type='a'>
                                            <li></li>
                                            <li></li>
                                            <li></li>
                                        </ol>
                                    </li>
                                    <li>
                                        <p style={{ color: "white" }}>abc</p>
                                        <ol type='a'>
                                            <li></li>
                                            <li></li>
                                            <li></li>
                                        </ol>
                                    </li>
                                </ol>
                            </div>
                        </div>


                        {/* =============================================3=================================================================== */}
                        <div className="agendas_view_style3">
                            <div className="agenda_style3">
                                <h6>Agenda</h6>
                                <div className="agenda_list">
                                    <ul>
                                        <li>Location</li>
                                        <li>Date</li>
                                        <li>Time</li>
                                    </ul>
                                    <ul style={{ marginLeft: "10px" }}>
                                        <li>[Location]</li>
                                        <li>[Meeting Date]</li>
                                        <li>[Meeting Time]</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="agenda_items" style={{padding:"0 10px"}}>
                                <p>Agenda Items</p>
                                <ol type='I'>
                                    <li>
                                        <p style={{ color: "white" }}>abc</p>
                                        <ol type='a'>
                                            <li></li>
                                            <li></li>
                                            <li></li>
                                        </ol>
                                    </li>
                                    <li>
                                        <p style={{ color: "white" }}>abc</p>
                                        <ol type='a'>
                                            <li></li>
                                            <li></li>
                                            <li></li>
                                        </ol>
                                    </li>
                                    <li>
                                        <p style={{ color: "white" }}>abc</p>
                                        <ol type='a'>
                                            <li></li>
                                            <li></li>
                                            <li></li>
                                        </ol>
                                    </li>
                                </ol>
                            </div>
                        </div>


                        {/* =============================================4======================================================= */}


                        <div className="agendas_view">
                            <h6>Agenda</h6>
                            <div className="agenda_date_time">
                                <span>July 6,2022</span>
                                <span>1:00 PM EST</span>
                            </div>
                            <div className="agenda_items">
                                <p>Agenda Items</p>
                                <ol type='I'>
                                    <li>
                                        <p style={{ color: "white" }}>abc</p>
                                        <ol type='I'>
                                            <li><span> Talking Point Number one</span></li>
                                            <li><span> Second Talking Point</span></li>
                                            <li><span> Next Topic of discussion</span></li>
                                        </ol>
                                    </li>
                                    <li>
                                        <p style={{ color: "white" }}>abc</p>
                                        <ol type='I'>
                                            <li><span> Talking Point Number one</span></li>
                                            <li><span> Second Talking Point</span></li>
                                            <li><span> Next Topic of discussion</span></li>
                                        </ol>
                                    </li>
                                    <li>
                                        <p style={{ color: "white" }}>abc</p>
                                        <ol type='I'>
                                            <li><span> Talking Point Number one</span></li>
                                            <li><span> Second Talking Point</span></li>
                                            <li><span> Next Topic of discussion</span></li>
                                        </ol>
                                    </li>
                                </ol>
                            </div>
                        </div>
                        {/* ==============================================5====================================================== */}

                        <div className="agendas_view">
                            <h6>Agenda</h6>
                            <div className="agenda_date_time">
                                <span>[Location]</span>
                                <span>[Date]</span>
                                <span>[Time]</span>
                            </div>
                            <div className="agenda_items">
                                <p>Agenda Items</p>
                                <ol type='I'>
                                    <li>
                                        <p style={{ color: "white" }}>abc</p>
                                        <ol type='a'>
                                            <li></li>
                                            <li></li>
                                            <li></li>
                                        </ol>
                                    </li>
                                    <li>
                                        <p style={{ color: "white" }}>abc</p>
                                        <ol type='a'>
                                            <li></li>
                                            <li></li>
                                            <li></li>
                                        </ol>
                                    </li>
                                    <li>
                                        <p style={{ color: "white" }}>abc</p>
                                        <ol type='a'>
                                            <li></li>
                                            <li></li>
                                            <li></li>
                                        </ol>
                                    </li>
                                </ol>
                            </div>
                        </div>

                        {/* ===================================================6================================================= */}

                        <div className="agendas_view_style3">
                            <div className="agenda_style6">
                                <h6 style={{color:"#bf161f"}}>Agenda</h6>
                                <div className="agenda_list">
                                    <ul>
                                        <li>Location</li>
                                        <li>Date</li>
                                        <li>Time</li>
                                    </ul>
                                    <ul style={{ marginLeft: "10px" }}>
                                        <li>[Location]</li>
                                        <li>[Meeting Date]</li>
                                        <li>[Meeting Time]</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="agenda_items" style={{padding:"0 10px"}}>
                                <p style={{color:"#bf161f"}}>Agenda Items</p>
                                <ol type='I'>
                                    <li>
                                        <p style={{ color: "white" }}>abc</p>
                                        <ol type='a'>
                                            <li></li>
                                            <li></li>
                                            <li></li>
                                        </ol>
                                    </li>
                                    <li>
                                        <p style={{ color: "white" }}>abc</p>
                                        <ol type='a'>
                                            <li></li>
                                            <li></li>
                                            <li></li>
                                        </ol>
                                    </li>
                                    <li>
                                        <p style={{ color: "white" }}>abc</p>
                                        <ol type='a'>
                                            <li></li>
                                            <li></li>
                                            <li></li>
                                        </ol>
                                    </li>
                                </ol>
                            </div>
                        </div>


                    </div>
                </div>
                <div className="agendacall_section">

                </div>
            </div>
        </>
    )
}

export default WorkspaceAgendasTemplates

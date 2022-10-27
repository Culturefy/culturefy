import React from 'react'
import { Link } from 'react-router-dom'
import Content from '../../component/Content'
import WorkspaceHeader from '../WorkspaceHeader'
import './WorkspaceAgendas.css'

const WorkspaceAgendas = () => {
    return (
        <>
            <Content />
            <WorkspaceHeader />
            <div className="workspace_agendas_wrepper">
                <h3>Agendas</h3>
                <div className="agendas">
                    <Link to="/workspaceagendasview">
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
                    </Link>
                    <Link to="/workspaceagendatemplates">
                        <div className="new_agendas">
                            <i class="fa-solid fa-plus agendas_plus"></i>
                        </div>
                    </Link>
                </div>
            </div>
        </>
    )
}

export default WorkspaceAgendas

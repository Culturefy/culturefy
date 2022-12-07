import React from 'react'
import { Link } from 'react-router-dom'
import './WorkspaceAgendas.css'
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
            
            </div>
        </>
    )
}

export default index;

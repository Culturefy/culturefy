import Chat from './Chat'
import Tooltip from '@mui/material/Tooltip';
import React from 'react'
import { Link } from 'react-router-dom'
import './WorkspaceSidebar.css'

const WorkspaceSidebar = () => {
    
    return (
        <div className='workspace_sidebar_container'>
            <Tooltip title="Files" placement="left">
                <Link to='/workspacesdata'>
                    <i class="fa-regular fa-file sidebar_icon"></i>
                </Link>
            </Tooltip>

            <Tooltip title="Agenda" placement="left">
                <Link to='/workspaceagendas'>
                    <i class="fa-regular fa-pen-to-square sidebar_icon"></i>
                </Link>
            </Tooltip>

            <Tooltip title="Team" placement="left">
                <Link>
                    <i class="fa-regular fa-user sidebar_icon"></i>
                </Link>
            </Tooltip>

            <Tooltip title="Tasks" placement="left">
                <Link>
                    <i class="fa-solid fa-list-check sidebar_icon"></i>
                </Link>
            </Tooltip>

            <Tooltip title="Recent Files" placement="left">
                <Link>
                    <i class="fa-regular fa-clock sidebar_icon"></i>
                </Link>
            </Tooltip>

            <Tooltip title="Brand Assets" placement="left">
                <Link>
                    <i class="fa-regular fa-brush sidebar_icon"></i>
                </Link>
            </Tooltip>

            <Tooltip title="Chat" placement="left">
                <Link to=''>
                    <i class="fa-brands fa-stack-exchange sidebar_icon"></i>
                </Link>
            </Tooltip>

            <Tooltip title="Polls" placement="left">
                <Link to="/workspacepoll">
                    <i class="fa-solid fa-square-poll-vertical sidebar_icon"></i>
                </Link>
            </Tooltip>

            <Tooltip title="New Polls" placement="left">
                <Link to="/createpoll">
                    <i class="fa-solid fa-square-poll-vertical sidebar_icon"></i>
                </Link>
            </Tooltip>

            <Tooltip title="Pen" placement="left">
                <Link>
                    <i class="fa-solid fa-pen sidebar_icon"></i>
                </Link>
            </Tooltip>

            <Tooltip title="Eraser" placement="left">
                <Link>
                    <i class="fa-solid fa-eraser sidebar_icon"></i>
                </Link>
            </Tooltip>

            <Tooltip title="Meeting" placement="left">
                <Link to="/workspace/meetingview">
                    <i class="fa-solid fa-laptop sidebar_icon"></i>
                </Link>
            </Tooltip>
              
        </div >
    )
}

export default WorkspaceSidebar

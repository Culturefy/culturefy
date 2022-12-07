import React from 'react'
// import Chat from './Chat'
import Tooltip from '@mui/material/Tooltip';
import { Link } from 'react-router-dom'
import './WorkspaceSidebar.css'
const index = () => {
  return (
    <div className='workspace_sidebar_container'>
    <Tooltip title="Files" placement="left">
        <Link to='/workspacesdata'>
            <i className="fa-regular fa-file sidebar_icon"></i>
        </Link>
    </Tooltip>

    <Tooltip title="Agenda" placement="left">
        <Link to='/workspacesfile/workspaceagendas'>
            <i className="fa-regular fa-pen-to-square sidebar_icon"></i>
        </Link>
    </Tooltip>

    <Tooltip title="Team" placement="left">
        <Link>
            <i className="fa-regular fa-user sidebar_icon"></i>
        </Link>
    </Tooltip>

    <Tooltip title="Tasks" placement="left">
        <Link>
            <i className="fa-solid fa-list-check sidebar_icon"></i>
        </Link>
    </Tooltip>

    <Tooltip title="Recent Files" placement="left">
        <Link>
            <i class="fa-regular fa-clock sidebar_icon"></i>
        </Link>
    </Tooltip>

    <Tooltip title="Brand Assets" placement="left">
        <Link>
            <i className="fa-regular fa-brush sidebar_icon"></i>
        </Link>
    </Tooltip>

    <Tooltip title="Chat" placement="left">
        <Link to=''>
            <i className="fa-brands fa-stack-exchange sidebar_icon"></i>
        </Link>
    </Tooltip>

    <Tooltip title="Polls" placement="left">
        <Link to="/workspacesfile/workspacepoll">
            <i className="fa-solid fa-square-poll-vertical sidebar_icon"></i>
        </Link>
    </Tooltip>

    <Tooltip title="New Polls" placement="left">
        <Link to="/workspacesfile/createpoll">
            <i className="fa-solid fa-square-poll-vertical sidebar_icon"></i>
        </Link>
    </Tooltip>

    <Tooltip title="Pen" placement="left">
        <Link>
            <i className="fa-solid fa-pen sidebar_icon"></i>
        </Link>
    </Tooltip>

    <Tooltip title="Eraser" placement="left">
        <Link>
            <i className="fa-solid fa-eraser sidebar_icon"></i>
        </Link>
    </Tooltip>

    <Tooltip title="Meeting" placement="left">
        <Link to="/workspace/meetingview">
            <i className="fa-solid fa-laptop sidebar_icon"></i>
        </Link>
    </Tooltip>
</div >
  )
}

export default index

import Filter from '../../component/Filter'
import React from 'react'
import Content from '../../component/Content'
import WorkspaceHeader from '../WorkspaceHeader'
import './WorkpacesUpload.css'
import { Link } from 'react-router-dom'
import WorkspaceSidebar from '../../component/WorkspaceSidebar'

const WorkpacesUpload = () => {
    return (
        <div className='workspaceupload_main_header'>
                <Content />
            <div className="workspacesdata_upload">
                <div className="workspaceuplod_header">

                    <WorkspaceHeader />
                </div>
                <div className="Upload_wepper">
                    <div className="workpace_upload_header">
                        <Link to="/workspacesdata"><button >Back</button></Link>
                        <h2>Add Files to Folder</h2>
                    </div>
                    <div className="upload_files_Section">
                        <button className='upload_btn'>Upload Files &nbsp;<span><i class="fa-solid fa-upload"></i></span></button>
                        <p>or drag and drop</p>
                    </div>
                    <div className="filter_component">
                        <Filter />
                    </div>
                    <div className="uoload_search">
                        <input
                            type="search"
                            placeholder="Search assets"
                        />
                        <div className="upload_search_button">
                            <i class="fa-solid fa-magnifying-glass"></i>
                        </div>
                    </div>
                </div>

            </div>
            <WorkspaceSidebar/>

        </div>
    )
}

export default WorkpacesUpload

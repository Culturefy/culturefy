import Filter from '../../component/Filter'
import React from 'react'
import Content from '../../component/Content'
import './WorkpacesUpload.css'

const WorkpacesUpload = () => {
    return (
        <>
            <div className="workspacesdata">
                <Content />
                {/* <div className="workpacesdata-wepper"> */}
                <div className="Upload_wepper">
                    <div className="workpace_upload_header">
                        <button >Back</button>
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
                {/* </div> */}
            </div>

        </>
    )
}

export default WorkpacesUpload

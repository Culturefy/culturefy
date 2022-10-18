import React from 'react'
import Content from '../component/Content'
import './WorkpacesData.css'

const WorkspacesData = () => {
  return (
    <>
      <div className="workspacesdata">
        <Content />
        <div className="workpacesdata-wepper">
          <div className="WorkpacesData_hadder">
            <button className='workspaces_upload'>Upload Files</button>
            <button className='create_folder'>Create Folder +</button>
            {/* <div className="Workspace_search">
              <input
                type="search"
                // value={search}
                placeholder="Search a brand / company name"

              />
              <div className="search-button">
                <i class="fa-solid fa-magnifying-glass"></i>
              </div>
            </div> */}
           
          </div>
        </div>
      </div>
    </>
  )
}

export default WorkspacesData

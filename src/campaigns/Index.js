import React from 'react'
import { Link } from 'react-router-dom'
import './Campaigns.css'


const index = () => {
  return (
    <>
      <div className="create-new-campaigns">
        <button>+ <span> Create New Campaigns</span></button>
      </div>
      <div className="nav-campaign-tabs">
        <ul>
          <li><Link>All</Link></li>
          <li><Link>Pending</Link></li>
          <li><Link>Active</Link></li>
          <li><Link>Complete</Link></li>    
        </ul>
      </div>
    </>
  )
}

export default index
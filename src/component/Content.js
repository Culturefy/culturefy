import React from 'react'
import './Content.css'
import Campaigns from '../campaigns/Index.js'

const Content = () => {
  return (
    <div className='content'>
        <div className="main-top-nav">
            <div className="list-user">
                <ul>
                    <li><div className="calander"></div></li>
                    <li><div className="notification"></div></li>
                    <li><div className="user"></div></li>
                </ul>
            </div>
            <div className="bio-box">
                <h1>Campaigns</h1>
                <div className="search">
                    <input type="text" placeholder='Type in to search...' />
                    <div className="search-button">
                    <i class="fa-solid fa-magnifying-glass"></i>
                    </div>
                </div>
            </div>
        </div>
       <Campaigns/>
    </div>
  )
}

export default Content
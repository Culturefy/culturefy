import React from "react"

const Header =()=>{
    <div className="main-top-nav">
    <ul class="bts-profile align-items-center justify-content-end">
      <li>
        <img src={Calender} />
      </li>
      <li>
        <img src={Notification} />
      </li>
      <li>
        <img src={AdminImg} />
      </li>
    </ul>

    <div className="search">
      <h1 className='heading_main_container'>Campaigns</h1>
      <input type="text" placeholder="Type in to search..." />
      <div className="search-button">
        <i class="fa-solid fa-magnifying-glass"></i>
      </div>
    </div>
    </div>
}
export default Header
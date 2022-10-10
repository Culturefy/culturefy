import React from "react";
import "./Content.css";
import Campaigns from "../campaigns/Index.js";
import "../App.css";
import AsideRight from "../Dashboard/AsideRight";
import AdminImg from "../assets/admin-img.png"
import Calender from "../assets/Calender.svg"
import Notification from "../assets/Notifiction.svg"

const Content = () => {
  return (
    <div className="content">
      <div className="main-top-nav">
     
          <ul class="bts-profile d-flex align-items-center justify-content-end">
            <li>
                <img src={Calender}/>
            </li>
            <li>
             
            <img src={Notification}/>
            </li>
            <li>
               <img src={AdminImg}/>           
            </li>
          </ul>
        
        <div className="search">
          <h1>Campaigns</h1>
            <input type="text" placeholder="Type in to search..." />
            <div className="search-button">
              <i class="fa-solid fa-magnifying-glass"></i>
            </div>
        </div>
      </div>
      <Campaigns />
    </div>
   
   
  );
};


export default Content;

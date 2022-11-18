import React from 'react'
import Content from '../component/Content'
import './WorkspacesData.css'
import fav_img1 from '../assets/fav_img1.jpg'
import { useState } from 'react'
import Filter from '../component/Filter'
import Comment from '../component/Comment'
import WorkspaceHeader from './WorkspaceHeader'
import { Link } from 'react-router-dom'
import user from '../assets/meet user.png'
import user2 from '../assets/meet user2.png'
import AdminImg from '../assets/admin-img.png'
import Calender from '../assets/calendar-icon.png'
import Notification from '../assets/Notifiction.svg'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import WorkspaceSidebar from '../component/WorkspaceSidebar'
import Team from '../component/Team'
import Task from '../component/Task'
import Chat from '../component/Chat'



const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
};

const WorkspacesData = () => {
  const [filterClicked, setfilterclicked] = useState(false)
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);



  const handleFilterClick = () => {

    if (filterClicked == false) {
      setfilterclicked(true)
    } else {
      setfilterclicked(false)
    }
  }






  return (
    <>


      <Content />


      <div className="workspacesdata">
        <div className="inner_workspacedata_wrapper">
          <div className='campaign_header_user_data'>
            <ul>
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
          </div>
          <div className="workspace_data_header">
            <WorkspaceHeader />
          </div>
          <div className="workpacesdata-wepper">

            <div className="workpacesdata_Section">
              <div className="workpacesdata_hader">

                <Link to="/workspacesupload"><button className='workpaces_upload_btn' >Upload Files &nbsp;<span><i className="fa-solid fa-upload"></i></span></button></Link>

                <button className='workpaces_createfolder_btn'>Create Folder +</button>
                <div className="search_workspacedata">
                  <input
                    type="search"
                    // value={search}
                    placeholder="Search assets"

                  />
                  <div className="search-button">
                    <i class="fa-solid fa-magnifying-glass" ></i>
                  </div>
                </div>

              </div>
              <div className="workspaces_filter">
                <p onClick={handleFilterClick}>Filter</p>
                <p>Sort</p>
              </div>
              {filterClicked ?
                <div className="filter_section">
                  <Filter />
                </div> : null
              }
              {/* ==================================== Favorites section ====================================================== */}
              <div className="scorll">
                <div className="workpaces_favorits">
                  <div className="favorits_header">
                    <i className="fa-regular fa-star wor_data_fav_star"></i>
                    <h2 style={{ fontFamily: "Graphik_Semibold" }}>Favorites</h2>
                  </div>

                  <Carousel responsive={responsive}>
                    <div className="favorits_card">

                      <Link to='/workspacesfilepng'>
                        <div className="favorits_card_img">
                          <img src={fav_img1} alt="" />
                        </div>
                        <div className="favorits_discription">
                          <div className="favorits_name">
                            <p className='favorits_file_name'>file.png</p>
                            <p className='favorits_comments'>1 comment</p>
                          </div>
                          <div className="favorits_icon">
                            <i className="fa-solid fa-ellipsis"></i>
                            <i className="fa-solid fa-star fill_star"></i>
                          </div>
                        </div>
                      </Link>

                    </div>

                    <div className="favorits_card">
                      <div className="favorits_card_img">
                        <img src={fav_img1} alt="" />
                      </div>
                      <div className="favorits_discription">
                        <div className="favorits_name">
                          <p className='favorits_file_name'>file.png</p>
                          <p className='favorits_comments'>1 comment</p>
                        </div>
                        <div className="favorits_icon">
                          <i className="fa-solid fa-ellipsis"></i>
                          <i className="fa-solid fa-star fill_star"></i>
                        </div>
                      </div>

                    </div>

                    <div className="favorits_card">
                      <div className="favorits_card_img">
                        <img src={fav_img1} alt="" />
                      </div>
                      <div className="favorits_discription">
                        <div className="favorits_name">
                          <p className='favorits_file_name'>file.png</p>
                          <p className='favorits_comments'>1 comment</p>
                        </div>
                        <div className="favorits_icon">
                          <i className="fa-solid fa-ellipsis"></i>
                          <i className="fa-solid fa-star fill_star"></i>
                        </div>
                      </div>
                    </div>

                    <div className="favorits_card">
                      <div className="favorits_card_img">
                        <img src={fav_img1} alt="" />
                      </div>
                      <div className="favorits_discription">
                        <div className="favorits_name">
                          <p className='favorits_file_name'>file.png</p>
                          <p className='favorits_comments'>1 comment</p>
                        </div>
                        <div className="favorits_icon">
                          <i className="fa-solid fa-ellipsis"></i>
                          <i className="fa-solid fa-star fill_star"></i>
                        </div>
                      </div>
                    </div>


                    <div className="favorits_card">
                      <div className="favorits_card_img">
                        <img src={fav_img1} alt="" />
                      </div>
                      <div className="favorits_discription">
                        <div className="favorits_name">
                          <p className='favorits_file_name'>file.png</p>
                          <p className='favorits_comments'>1 comment</p>
                        </div>
                        <div className="favorits_icon">
                          <i className="fa-solid fa-ellipsis"></i>
                          <i className="fa-solid fa-star fill_star"></i>
                        </div>
                      </div>
                    </div>
                    <div className="uplode_section" >
                      <Link to="/workspacesupload">
                        <i className="fa-solid fa-plus plus"></i>
                      </Link>
                    </div>
                  </Carousel>
                </div>
                {/* ==================================== Advertisements section ====================================================== */}

                <div className="workpaces_favorits">
                  <div className="favorits_header">
                    <h2 style={{ fontFamily: "Graphik_Semibold" }}>Advertisements</h2>
                  </div>
                  <Carousel responsive={responsive}>
                    {/* <div className="card_wapper"> */}
                    <div className="favorits_card">
                      <div className="favorits_card_img">
                        <img src={fav_img1} alt="" />
                      </div>
                      <div className="favorits_discription">
                        <div className="favorits_name">
                          <p className='favorits_file_name'>file.png</p>
                          <p className='favorits_comments'>1 comment</p>
                        </div>
                        <div className="favorits_icon">
                          <i className="fa-solid fa-ellipsis"></i>
                          <i className="fa-solid fa-star fill_star"></i>
                        </div>
                      </div>
                    </div>
                    <div className="favorits_card">
                      <div className="favorits_card_img">
                        <img src={fav_img1} alt="" />
                      </div>
                      <div className="favorits_discription">
                        <div className="favorits_name">
                          <p className='favorits_file_name'>file.png</p>
                          <p className='favorits_comments'>1 comment</p>
                        </div>
                        <div className="favorits_icon">
                          <i className="fa-solid fa-ellipsis"></i>
                          <i className="fa-solid fa-star fill_star"></i>
                        </div>
                      </div>
                    </div>
                    <div className="uplode_section" >
                      <Link to="/workspacesupload">
                        <i className="fa-solid fa-plus plus"></i>
                      </Link>
                    </div>
                    {/* </div> */}
                  </Carousel>
                </div>
                {/* ==================================== Audio section ====================================================== */}
                <div className="workpaces_favorits">
                  <div className="favorits_header">
                    <h2 style={{ fontFamily: "Graphik_Semibold" }}>Audio</h2>
                  </div>
                  {/* <div className="card_wapper"> */}
                  <Carousel responsive={responsive}>

                    <div className="favorits_card">
                      <div className="favorits_card_img">
                        <img src={fav_img1} alt="" />
                      </div>
                      <div className="favorits_discription">
                        <div className="favorits_name">
                          <p className='favorits_file_name'>file.png</p>
                          <p className='favorits_comments'>1 comment</p>
                        </div>
                        <div className="favorits_icon">
                          <i className="fa-solid fa-ellipsis"></i>
                          <i className="fa-solid fa-star fill_star"></i>
                        </div>
                      </div>
                    </div>
                    <div className="favorits_card">
                      <div className="favorits_card_img">
                        <img src={fav_img1} alt="" />
                      </div>
                      <div className="favorits_discription">
                        <div className="favorits_name">
                          <p className='favorits_file_name'>file.png</p>
                          <p className='favorits_comments'>1 comment</p>
                        </div>
                        <div className="favorits_icon">
                          <i className="fa-solid fa-ellipsis"></i>
                          <i className="fa-solid fa-star fill_star"></i>
                        </div>
                      </div>
                    </div>
                    <div className="uplode_section" >
                      <i className="fa-solid fa-plus plus"></i>
                    </div>
                  </Carousel>
                  {/* </div> */}

                </div>
                {/* ==================================== Banners section ====================================================== */}


                <div className="workpaces_favorits">
                  <div className="favorits_header">
                    <h2 style={{ fontFamily: "Graphik_Semibold" }}>Banners</h2>
                  </div>
                  {/* <div className="card_wapper"> */}
                  <Carousel responsive={responsive}>
                    <div className="favorits_card">
                      <div className="favorits_card_img">
                        <img src={fav_img1} alt="" />
                      </div>
                      <div className="favorits_discription">
                        <div className="favorits_name">
                          <p className='favorits_file_name'>file.png</p>
                          <p className='favorits_comments'>1 comment</p>
                        </div>
                        <div className="favorits_icon">
                          <i className="fa-solid fa-ellipsis"></i>
                          <i className="fa-solid fa-star fill_star"></i>
                        </div>
                      </div>
                    </div>
                    <div className="uplode_section" >
                      <i className="fa-solid fa-plus plus"></i>
                    </div>
                  </Carousel>
                  {/* </div> */}
                </div>
                <div className="workpaces_favorits">
                  <div className="favorits_header">
                    <h2 style={{ fontWeight: "bold" }}>Documents</h2>
                  </div>
                  {/* <div className="card_wapper"> */}
                  <Carousel responsive={responsive}>
                    <div className="favorits_card">
                      <div className="favorits_card_img">
                        <img src={fav_img1} alt="" />
                      </div>
                      <div className="favorits_discription">
                        <div className="favorits_name">
                          <p className='favorits_file_name'>file.png</p>
                          <p className='favorits_comments'>1 comment</p>
                        </div>
                        <div className="favorits_icon">
                          <i className="fa-solid fa-ellipsis"></i>
                          <i className="fa-solid fa-star fill_star"></i>
                        </div>
                      </div>
                    </div>
                    <div className="uplode_section" >
                      <i className="fa-solid fa-plus plus"></i>
                    </div>
                  </Carousel>
                  {/* </div> */}
                </div>
                {/* ==================================== Hashtags section ====================================================== */}

                <div className="workpaces_favorits">
                  <div className="favorits_header">
                    <h2 style={{ fontFamily: "Graphik_Semibold" }}>Hashtags</h2>
                  </div>
                  {/* <div className="card_wapper"> */}
                  <Carousel responsive={responsive}>
                    <div className="favorits_card">
                      <div className="favorits_card_img">
                        <img src={fav_img1} alt="" />
                      </div>
                      <div className="favorits_discription">
                        <div className="favorits_name">
                          <p className='favorits_file_name'>file.png</p>
                          <p className='favorits_comments'>1 comment</p>
                        </div>
                        <div className="favorits_icon">
                          <i className="fa-solid fa-ellipsis"></i>
                          <i className="fa-solid fa-star fill_star"></i>
                        </div>
                      </div>
                    </div>
                    <div className="uplode_section" >
                      <i className="fa-solid fa-plus plus"></i>
                    </div>
                  </Carousel>
                  {/* </div> */}
                </div>

                {/* ==================================== Photos section ====================================================== */}

                <div className="workpaces_favorits">
                  <div className="favorits_header">
                    <h2 style={{ fontFamily: "Graphik_Semibold" }}>Photos</h2>
                  </div>
                  {/* <div className="card_wapper"> */}
                  <Carousel responsive={responsive}>
                    <div className="favorits_card">
                      <div className="favorits_card_img">
                        <img src={fav_img1} alt="" />
                      </div>
                      <div className="favorits_discription">
                        <div className="favorits_name">
                          <p className='favorits_file_name'>file.png</p>
                          <p className='favorits_comments'>1 comment</p>
                        </div>
                        <div className="favorits_icon">
                          <i className="fa-solid fa-ellipsis"></i>
                          <i className="fa-solid fa-star fill_star"></i>
                        </div>
                      </div>
                    </div>
                    <div className="favorits_card">
                      <div className="favorits_card_img">
                        <img src={fav_img1} alt="" />
                      </div>
                      <div className="favorits_discription">
                        <div className="favorits_name">
                          <p className='favorits_file_name'>file.png</p>
                          <p className='favorits_comments'>1 comment</p>
                        </div>
                        <div className="favorits_icon">
                          <i className="fa-solid fa-ellipsis"></i>
                          <i className="fa-solid fa-star fill_star"></i>
                        </div>
                      </div>
                    </div>
                    <div className="uplode_section" >
                      <i className="fa-solid fa-plus plus"></i>
                    </div>
                  </Carousel>
                  {/* </div> */}
                </div>
                {/* ==================================== Polls section ====================================================== */}

                <div className="workpaces_favorits">
                  <div className="favorits_header">
                    <h2 style={{ fontFamily: "Graphik_Semibold" }}>Polls</h2>
                  </div>
                  {/* <div className="card_wapper"> */}
                  <Carousel responsive={responsive}>
                    <div className="favorits_card">
                      <div className="favorits_card_img">
                        <img src={fav_img1} alt="" />
                      </div>
                      <div className="favorits_discription">
                        <div className="favorits_name">
                          <p className='favorits_file_name'>file.png</p>
                          <p className='favorits_comments'>1 comment</p>
                        </div>
                        <div className="favorits_icon">
                          <i className="fa-solid fa-ellipsis"></i>
                          <i className="fa-solid fa-star fill_star"></i>
                        </div>
                      </div>
                    </div>
                    <div className="favorits_card">
                      <div className="favorits_card_img">
                        <img src={fav_img1} alt="" />
                      </div>
                      <div className="favorits_discription">
                        <div className="favorits_name">
                          <p className='favorits_file_name'>file.png</p>
                          <p className='favorits_comments'>1 comment</p>
                        </div>
                        <div className="favorits_icon">
                          <i className="fa-solid fa-ellipsis"></i>
                          <i className="fa-solid fa-star fill_star"></i>
                        </div>
                      </div>
                    </div>
                    <div className="favorits_card">
                      <div className="favorits_card_img">
                        <img src={fav_img1} alt="" />
                      </div>
                      <div className="favorits_discription">
                        <div className="favorits_name">
                          <p className='favorits_file_name'>file.png</p>
                          <p className='favorits_comments'>1 comment</p>
                        </div>
                        <div className="favorits_icon">
                          <i className="fa-solid fa-ellipsis"></i>
                          <i className="fa-solid fa-star fill_star"></i>
                        </div>
                      </div>
                    </div>
                  </Carousel>
                  {/* </div> */}
                </div>
                {/* ==================================== Social Media section ====================================================== */}


                <div className="workpaces_favorits">
                  <div className="favorits_header">
                    <h2 style={{ fontFamily: "Graphik_Semibold" }}>Social Media</h2>
                  </div>
                  {/* <div className="card_wapper">
                 */}
                  <Carousel responsive={responsive}>
                    <div className="favorits_card">
                      <div className="favorits_card_img">
                        <img src={fav_img1} alt="" />
                      </div>
                      <div className="favorits_discription">
                        <div className="favorits_name">
                          <p className='favorits_file_name'>file.png</p>
                          <p className='favorits_comments'>1 comment</p>
                        </div>
                        <div className="favorits_icon">
                          <i className="fa-solid fa-ellipsis"></i>
                          <i className="fa-solid fa-star fill_star"></i>
                        </div>
                      </div>
                    </div>
                    <div className="favorits_card">
                      <div className="favorits_card_img">
                        <img src={fav_img1} alt="" />
                      </div>
                      <div className="favorits_discription">
                        <div className="favorits_name">
                          <p className='favorits_file_name'>file.png</p>
                          <p className='favorits_comments'>1 comment</p>
                        </div>
                        <div className="favorits_icon">
                          <i className="fa-solid fa-ellipsis"></i>
                          <i className="fa-solid fa-star fill_star"></i>
                        </div>
                      </div>
                    </div>
                    <div className="uplode_section" >
                      <i className="fa-solid fa-plus plus"></i>
                    </div>
                  </Carousel>
                  {/* </div> */}
                </div>

                {/* ==================================== Tesla Campaign section ====================================================== */}

                <div className="workpaces_favorits">
                  <div className="favorits_header">
                    <h2 style={{ fontFamily: "Graphik_Semibold" }}>Tesla Campaign 1</h2>
                  </div>
                  {/* <div className="card_wapper"> */}
                  <Carousel responsive={responsive}>
                    <div className="favorits_card">
                      <div className="favorits_card_img">
                        <img src={fav_img1} alt="" />
                      </div>
                      <div className="favorits_discription">
                        <div className="favorits_name">
                          <p className='favorits_file_name'>file.png</p>
                          <p className='favorits_comments'>1 comment</p>
                        </div>
                        <div className="favorits_icon">
                          <i className="fa-solid fa-ellipsis"></i>
                          <i className="fa-solid fa-star fill_star"></i>
                        </div>
                      </div>
                    </div>
                    <div className="favorits_card">
                      <div className="favorits_card_img">
                        <img src={fav_img1} alt="" />
                      </div>
                      <div className="favorits_discription">
                        <div className="favorits_name">
                          <p className='favorits_file_name'>file.png</p>
                          <p className='favorits_comments'>1 comment</p>
                        </div>
                        <div className="favorits_icon">
                          <i className="fa-solid fa-ellipsis"></i>
                          <i className="fa-solid fa-star fill_star"></i>
                        </div>
                      </div>
                    </div>
                    <div className="favorits_card">
                      <div className="favorits_card_img">
                        <img src={fav_img1} alt="" />
                      </div>
                      <div className="favorits_discription">
                        <div className="favorits_name">
                          <p className='favorits_file_name'>file.png</p>
                          <p className='favorits_comments'>1 comment</p>
                        </div>
                        <div className="favorits_icon">
                          <i className="fa-solid fa-ellipsis"></i>
                          <i className="fa-solid fa-star fill_star"></i>
                        </div>
                      </div>
                    </div>
                    {/* </div> */}
                  </Carousel>
                </div>
                {/* ==================================== Videos section ====================================================== */}


                <div className="workpaces_favorits">
                  <div className="favorits_header">
                    <h2 style={{ fontFamily: "Graphik_Semibold" }}>Videos</h2>
                  </div>
                  {/* <div className="card_wapper">
                 */}
                  <Carousel responsive={responsive}>
                    <div className="favorits_card">
                      <div className="favorits_card_img">
                        <img src={fav_img1} alt="" />
                      </div>
                      <div className="favorits_discription">
                        <div className="favorits_name">
                          <p className='favorits_file_name'>file.png</p>
                          <p className='favorits_comments'>1 comment</p>
                        </div>
                        <div className="favorits_icon">
                          <i className="fa-solid fa-ellipsis"></i>
                          <i className="fa-solid fa-star fill_star"></i>
                        </div>
                      </div>
                    </div>
                    <div className="favorits_card">
                      <div className="favorits_card_img">
                        <img src={fav_img1} alt="" />
                      </div>
                      <div className="favorits_discription">
                        <div className="favorits_name">
                          <p className='favorits_file_name'>file.png</p>
                          <p className='favorits_comments'>1 comment</p>
                        </div>
                        <div className="favorits_icon">
                          <i className="fa-solid fa-ellipsis"></i>
                          <i className="fa-solid fa-star fill_star"></i>
                        </div>
                      </div>
                    </div>
                    <div className="uplode_section" >
                      <i className="fa-solid fa-plus plus"></i>
                    </div>
                  </Carousel>
                  {/* </div> */}
                </div>
                {/* ==================================== Unsorted section ====================================================== */}

                <div className="workpaces_favorits">
                  <div className="favorits_header">
                    <h2 style={{ fontFamily: "Graphik_Semibold" }}>Unsorted</h2>
                  </div>
                  {/* <div className="card_wapper"> */}
                  <Carousel responsive={responsive}>
                    <div className="favorits_card">
                      <div className="favorits_card_img">
                        <img src={fav_img1} alt="" />
                      </div>
                      <div className="favorits_discription">
                        <div className="favorits_name">
                          <p className='favorits_file_name'>file.png</p>
                          <p className='favorits_comments'>1 comment</p>
                        </div>
                        <div className="favorits_icon">
                          <i className="fa-solid fa-ellipsis"></i>
                          <i className="fa-solid fa-star fill_star"></i>
                        </div>
                      </div>
                    </div>
                    <div className="uplode_section" >
                      <i classname="fa-solid fa-plus plus"></i>
                    </div>
                  </Carousel>
                  {/* </div> */}
                </div>
              </div>
            </div>
            <div className="workpaces_commentsection">
              {/* <Team /> */}
              <Task/>
              <Comment />
              <Link to='/workspace/meetingview'>
                <div className="calling_Section">
                  <div className="call_img1">
                    <img src={user2} alt="" />
                  </div>
                  <div className="call_img2">
                    <img src={user} alt="" />
                  </div>
                </div>
              </Link>
              <Chat/>

            </div>
          </div>
        </div>

        <WorkspaceSidebar />

      </div>
    </>
  )
}

export default WorkspacesData

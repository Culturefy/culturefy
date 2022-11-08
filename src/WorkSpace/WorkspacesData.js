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
// import { Component } from 'react';
// import Carousel from 'react-elastic-carousel';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import WorkspaceSidebar from '../component/WorkspaceSidebar'

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
           <div className="workspace_data_header">
          <WorkspaceHeader/>
          </div>
          <div className="workpacesdata-wepper">
           
            <div className="workpacesdata_Section">
              <div className="workpacesdata_hader">
                <Link to="/workspacesupload"><button className='workpaces_upload_btn' >Upload Files &nbsp;<span><i className="fa-solid fa-upload"></i></span></button></Link>
                <button className='workpaces_createfolder_btn'>Create Folder +</button>
                <div className="search">
                  <input
                    type="search"
                    placeholder="Search assets"
                  />
                  <div className="search-button">
                    <i className="fa-solid fa-magnifying-glass"></i>
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
              <div className="workpaces_favorits">
                <div className="favorits_header">
                  <i className="fa-regular fa-star"></i>
                  <h2 style={{ fontWeight: "bold", fontFamily: "Graphik_Bold" }}>Favorites</h2>
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
                  <h2 style={{ fontWeight: "bold" }}>Advertisements</h2>
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
                  <h2 style={{ fontWeight: "bold" }}>Audio</h2>
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
                  <h2 style={{ fontWeight: "bold" }}>Banners</h2>
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
                  <h2 style={{ fontWeight: "bold" }}>Hashtags</h2>
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
                  <h2 style={{ fontWeight: "bold" }}>Photos</h2>
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
                  <h2 style={{ fontWeight: "bold" }}>Polls</h2>
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
                  <h2 style={{ fontWeight: "bold" }}>Social Media</h2>
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
                  <h2 style={{ fontWeight: "bold" }}>Tesla Campaign 1</h2>
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
                  <h2 style={{ fontWeight: "bold" }}>Videos</h2>
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
                  <h2 style={{ fontWeight: "bold" }}>Unsorted</h2>
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
            <div className="workpaces_commentsection">
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

            </div>
          </div>
        </div>

        <WorkspaceSidebar />

      </div>
    </>
  )
}

export default WorkspacesData

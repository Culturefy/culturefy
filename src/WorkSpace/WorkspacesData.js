import React from 'react'
import Content from '../component/Content'
import './WorkpacesData.css'
import fav_img1 from '../assets/fav_img1.jpg'
import { useState } from 'react'
import Filter from '../component/Filter'
import Comment from '../component/Comment'
import WorkspaceHeader from './WorkspaceHeader'
import { Link } from 'react-router-dom'



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
      <div className="workspacesdata">
        <Content />
        <WorkspaceHeader />
        <div className="workpacesdata-wepper">
          <div className="workpacesdata_Section">
            <div className="workpacesdata_hader">
              <button className='workpaces_upload_btn'>Upload Files &nbsp;<span><i class="fa-solid fa-upload"></i></span></button>
              <button className='workpaces_createfolder_btn'>Create Folder +</button>
              <div className="search">
                <input
                  type="search"
                  placeholder="Search assets"
                />
                <div className="search-button">
                  <i class="fa-solid fa-magnifying-glass"></i>
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
                <i class="fa-regular fa-star"></i>
                <h2 style={{ fontWeight: "bold" }}>Favorites</h2>
              </div>
              <div className="card_wapper">
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
                      <i class="fa-solid fa-ellipsis"></i>
                      <i class="fa-solid fa-star fill_star"></i>
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
                      <i class="fa-solid fa-ellipsis"></i>
                      <i class="fa-solid fa-star fill_star"></i>
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
                      <i class="fa-solid fa-ellipsis"></i>
                      <i class="fa-solid fa-star fill_star"></i>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* ==================================== Advertisements section ====================================================== */}
            <div className="workpaces_favorits">
              <div className="favorits_header">
                <h2 style={{ fontWeight: "bold" }}>Advertisements</h2>
              </div>
              <div className="card_wapper">
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
                      <i class="fa-solid fa-ellipsis"></i>
                      <i class="fa-solid fa-star fill_star"></i>
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
                      <i class="fa-solid fa-ellipsis"></i>
                      <i class="fa-solid fa-star fill_star"></i>
                    </div>
                  </div>
                </div>
                <div className="uplode_section" >
                  <Link to="/workspacesupload">
                    <i class="fa-solid fa-plus plus"></i>
                  </Link>
                </div>
              </div>
            </div>
            {/* ==================================== Audio section ====================================================== */}
            <div className="workpaces_favorits">
              <div className="favorits_header">
                <h2 style={{ fontWeight: "bold" }}>Audio</h2>
              </div>
              <div className="card_wapper">
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
                      <i class="fa-solid fa-ellipsis"></i>
                      <i class="fa-solid fa-star fill_star"></i>
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
                      <i class="fa-solid fa-ellipsis"></i>
                      <i class="fa-solid fa-star fill_star"></i>
                    </div>
                  </div>
                </div>
                <div className="uplode_section" >
                  <i class="fa-solid fa-plus plus"></i>
                </div>
              </div>

            </div>
            {/* ==================================== Banners section ====================================================== */}


            <div className="workpaces_favorits">
              <div className="favorits_header">
                <h2 style={{ fontWeight: "bold" }}>Banners</h2>
              </div>
              <div className="card_wapper">
                <div className="uplode_section" >
                  <i class="fa-solid fa-plus plus"></i>
                </div>
              </div>
            </div>
            <div className="workpaces_favorits">
              <div className="favorits_header">
                <h2 style={{ fontWeight: "bold" }}>Documents</h2>
              </div>
              <div className="card_wapper">
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
                      <i class="fa-solid fa-ellipsis"></i>
                      <i class="fa-solid fa-star fill_star"></i>
                    </div>
                  </div>
                </div>
                <div className="uplode_section" >
                  <i class="fa-solid fa-plus plus"></i>
                </div>
              </div>
            </div>
            {/* ==================================== Hashtags section ====================================================== */}

            <div className="workpaces_favorits">
              <div className="favorits_header">
                <h2 style={{ fontWeight: "bold" }}>Hashtags</h2>
              </div>
              <div className="card_wapper">
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
                      <i class="fa-solid fa-ellipsis"></i>
                      <i class="fa-solid fa-star fill_star"></i>
                    </div>
                  </div>
                </div>
                <div className="uplode_section" >
                  <i class="fa-solid fa-plus plus"></i>
                </div>
              </div>
            </div>

            {/* ==================================== Photos section ====================================================== */}

            <div className="workpaces_favorits">
              <div className="favorits_header">
                <h2 style={{ fontWeight: "bold" }}>Photos</h2>
              </div>
              <div className="card_wapper">
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
                      <i class="fa-solid fa-ellipsis"></i>
                      <i class="fa-solid fa-star fill_star"></i>
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
                      <i class="fa-solid fa-ellipsis"></i>
                      <i class="fa-solid fa-star fill_star"></i>
                    </div>
                  </div>
                </div>
                <div className="uplode_section" >
                  <i class="fa-solid fa-plus plus"></i>
                </div>
              </div>
            </div>
            {/* ==================================== Polls section ====================================================== */}

            <div className="workpaces_favorits">
              <div className="favorits_header">
                <h2 style={{ fontWeight: "bold" }}>Polls</h2>
              </div>
              <div className="card_wapper">
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
                      <i class="fa-solid fa-ellipsis"></i>
                      <i class="fa-solid fa-star fill_star"></i>
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
                      <i class="fa-solid fa-ellipsis"></i>
                      <i class="fa-solid fa-star fill_star"></i>
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
                      <i class="fa-solid fa-ellipsis"></i>
                      <i class="fa-solid fa-star fill_star"></i>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* ==================================== Social Media section ====================================================== */}


            <div className="workpaces_favorits">
              <div className="favorits_header">
                <h2 style={{ fontWeight: "bold" }}>Social Media</h2>
              </div>
              <div className="card_wapper">
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
                      <i class="fa-solid fa-ellipsis"></i>
                      <i class="fa-solid fa-star fill_star"></i>
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
                      <i class="fa-solid fa-ellipsis"></i>
                      <i class="fa-solid fa-star fill_star"></i>
                    </div>
                  </div>
                </div>
                <div className="uplode_section" >
                  <i class="fa-solid fa-plus plus"></i>
                </div>
              </div>
            </div>

            {/* ==================================== Tesla Campaign section ====================================================== */}

            <div className="workpaces_favorits">
              <div className="favorits_header">
                <h2 style={{ fontWeight: "bold" }}>Tesla Campaign 1</h2>
              </div>
              <div className="card_wapper">
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
                      <i class="fa-solid fa-ellipsis"></i>
                      <i class="fa-solid fa-star fill_star"></i>
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
                      <i class="fa-solid fa-ellipsis"></i>
                      <i class="fa-solid fa-star fill_star"></i>
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
                      <i class="fa-solid fa-ellipsis"></i>
                      <i class="fa-solid fa-star fill_star"></i>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* ==================================== Videos section ====================================================== */}


            <div className="workpaces_favorits">
              <div className="favorits_header">
                <h2 style={{ fontWeight: "bold" }}>Videos</h2>
              </div>
              <div className="card_wapper">
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
                      <i class="fa-solid fa-ellipsis"></i>
                      <i class="fa-solid fa-star fill_star"></i>
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
                      <i class="fa-solid fa-ellipsis"></i>
                      <i class="fa-solid fa-star fill_star"></i>
                    </div>
                  </div>
                </div>
                <div className="uplode_section" >
                  <i class="fa-solid fa-plus plus"></i>
                </div>
              </div>
            </div>
            {/* ==================================== Unsorted section ====================================================== */}

            <div className="workpaces_favorits">
              <div className="favorits_header">
                <h2 style={{ fontWeight: "bold" }}>Unsorted</h2>
              </div>
              <div className="card_wapper">
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
                      <i class="fa-solid fa-ellipsis"></i>
                      <i class="fa-solid fa-star fill_star"></i>
                    </div>
                  </div>
                </div>
                <div className="uplode_section" >
                  <i class="fa-solid fa-plus plus"></i>
                </div>
              </div>
            </div>
          </div>
          <div className="workpaces_commentsection">
            <Comment />
          </div>
        </div>
      </div>
    </>
  )
}

export default WorkspacesData

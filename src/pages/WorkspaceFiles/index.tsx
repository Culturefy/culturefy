//@ts-nocheck
import React from "react";
import "./WorkspaceFiles.css";
import fav_img1 from "../../assets/campaign/fav_img1.jpg";
import { useState } from "react";
import Filter from "../../components/Filter";
import Comment from "../../components/Comment";
import { Link } from "react-router-dom";
import user from "../../assets/campaign/meet user.png";
import user2 from "../../assets/campaign/meet user2.png";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
// import Team from "../component/Team";
import Task from "../../components/TaskTeam/Task";
import Chat from "../../components/Chat";
import { useFileUpload } from "use-file-upload";
import Search from "../../components/common/Search";

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};


const index = () => {

  const [filterClicked, setfilterclicked] = useState(false);
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
      setfilterclicked(true);
    } else {
      setfilterclicked(false);
    }
  };

  const [files, selectFiles] = useFileUpload();

  return (

    <div className="inner_workspacedata_wrapper">
      <div className="workpacesdata-wepper">
        <div className="workpacesdata_Section">
          <div className="workpacesdata_hader">
            <Link to="/workspacesupload">
              <button className="workpaces_upload_btn">
                Upload Files &nbsp;
                <span>
                  <i className="fa-solid fa-upload"></i>
                </span>
              </button>
            </Link>
            <Link to="/workspacesupload">
              <button className="workpaces_createfolder_btn">
                Create Folder +
              </button>
            </Link>
            <div className="wc_search">
              <Search
                placeholder="Serach  resource groups"
                icon={true}
                variant="seacrh2"
              />
            </div>

          </div>
          <div className="workspaces_filter">
            <p onClick={handleFilterClick}>Filter</p>
            <p>Sort</p>
          </div>
          {filterClicked ? (
            <div className="filter_section">
              <Filter />
            </div>
          ) : null}
          {/* ==================================== Favorites section ====================================================== */}
          <div className="scorll">
            <div className="workpaces_favorits">

              <div className="favorits_header">
                <i className="fa-regular fa-star wor_data_fav_star"></i>
                <h2 style={{ fontFamily: "Grpahik Semibold" }}>
                  Favorites
                </h2>
              </div>
              <div className="wc_car_grid">
                <Carousel responsive={responsive}>
                  <div className="favorits_card">
                    <Link to="/workspacesfile/workspacefilepng">
                      <div className="favorits_card_img">
                        <img src={fav_img1} alt="" />
                      </div>
                      <div className="favorits_discription">
                        <div className="favorits_name">
                          <p className="favorits_file_name">file.png</p>
                          <p className="favorits_comments">1 comment</p>
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
                        <p className="favorits_file_name">file.png</p>
                        <p className="favorits_comments">1 comment</p>
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
                        <p className="favorits_file_name">file.png</p>
                        <p className="favorits_comments">1 comment</p>
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
                        <p className="favorits_file_name">file.png</p>
                        <p className="favorits_comments">1 comment</p>
                      </div>
                      <div className="favorits_icon">
                        <i className="fa-solid fa-ellipsis"></i>
                        <i className="fa-solid fa-star fill_star"></i>
                      </div>
                    </div>
                  </div>
                  <Link to="/workspacesfile/workspacefilesUpload">
                    <div className="uplode_section" id="fav">
                      <i className="fa-solid fa-plus plus"></i>
                    </div>
                  </Link>
                </Carousel>

              </div>
            </div>
            {/* ==================================== Advertisements section ====================================================== */}

            <div className="workpaces_favorits">
              <div className="favorits_header">
                <h2>
                  Advertisements
                </h2>
              </div>
              <div className="wc_car_grid">
                <Carousel responsive={responsive}>
                  <div className="favorits_card">
                    <div className="favorits_card_img">
                      <img src={fav_img1} alt="" />
                    </div>
                    <div className="favorits_discription">
                      <div className="favorits_name">
                        <p className="favorits_file_name">file.png</p>
                        <p className="favorits_comments">1 comment</p>
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
                        <p className="favorits_file_name">file.png</p>
                        <p className="favorits_comments">1 comment</p>
                      </div>
                      <div className="favorits_icon">
                        <i className="fa-solid fa-ellipsis"></i>
                        <i className="fa-solid fa-star fill_star"></i>
                      </div>
                    </div>
                  </div>
                  <Link to="/workspacesupload">
                    <div className="uplode_section" id="fav">
                      <i className="fa-solid fa-plus plus"></i>
                    </div>
                  </Link>
                </Carousel>

              </div>
            </div>
            {/* ==================================== Audio section ====================================================== */}
            <div className="workpaces_favorits">
              <div className="favorits_header">
                <h2>Audio</h2>
              </div>
              <div className="wc_car_grid">
                <Carousel responsive={responsive}>
                  <div className="favorits_card">
                    <div className="favorits_card_img">
                      <img src={fav_img1} alt="" />
                    </div>
                    <div className="favorits_discription">
                      <div className="favorits_name">
                        <p className="favorits_file_name">file.png</p>
                        <p className="favorits_comments">1 comment</p>
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
                        <p className="favorits_file_name">file.png</p>
                        <p className="favorits_comments">1 comment</p>
                      </div>
                      <div className="favorits_icon">
                        <i className="fa-solid fa-ellipsis"></i>
                        <i className="fa-solid fa-star fill_star"></i>
                      </div>
                    </div>
                  </div>
                  <Link to="/workspacesupload">
                    <div className="uplode_section" id="fav">
                      <i className="fa-solid fa-plus plus"></i>
                    </div>
                  </Link>
                </Carousel>

              </div>
            </div>
            {/* ==================================== Banners section ====================================================== */}

            <div className="workpaces_favorits">
              <div className="favorits_header">
                <h2>Banners</h2>
              </div>
              <div className="wc_car_grid">
                <Carousel responsive={responsive}>
                  <div className="favorits_card">
                    <div className="favorits_card_img">
                      <img src={fav_img1} alt="" />
                    </div>
                    <div className="favorits_discription">
                      <div className="favorits_name">
                        <p className="favorits_file_name">file.png</p>
                        <p className="favorits_comments">1 comment</p>
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
                        <p className="favorits_file_name">file.png</p>
                        <p className="favorits_comments">1 comment</p>
                      </div>
                      <div className="favorits_icon">
                        <i className="fa-solid fa-ellipsis"></i>
                        <i className="fa-solid fa-star fill_star"></i>
                      </div>
                    </div>
                  </div>
                  <Link to="/workspacesupload">
                    <div className="uplode_section" id="fav">
                      <i className="fa-solid fa-plus plus"></i>
                    </div>
                  </Link>
                </Carousel>

              </div>
            </div>
            <div className="workpaces_favorits">
              <div className="favorits_header">
                <h2>Documents</h2>
              </div>
              <div className="wc_car_grid">
                <Carousel responsive={responsive}>
                  <div className="favorits_card">
                    <div className="favorits_card_img">
                      <img src={fav_img1} alt="" />
                    </div>
                    <div className="favorits_discription">
                      <div className="favorits_name">
                        <p className="favorits_file_name">file.png</p>
                        <p className="favorits_comments">1 comment</p>
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
                        <p className="favorits_file_name">file.png</p>
                        <p className="favorits_comments">1 comment</p>
                      </div>
                      <div className="favorits_icon">
                        <i className="fa-solid fa-ellipsis"></i>
                        <i className="fa-solid fa-star fill_star"></i>
                      </div>
                    </div>
                  </div>
                  <Link to="/workspacesupload">
                    <div className="uplode_section" id="fav">
                      <i className="fa-solid fa-plus plus"></i>
                    </div>
                  </Link>
                </Carousel>

              </div>
            </div>
            {/* ==================================== Hashtags section ====================================================== */}

            <div className="workpaces_favorits">
              <div className="favorits_header">
                <h2>Hashtags</h2>
              </div>
              <div className="wc_car_grid">
                <Carousel responsive={responsive}>
                  <div className="favorits_card">
                    <div className="favorits_card_img">
                      <img src={fav_img1} alt="" />
                    </div>
                    <div className="favorits_discription">
                      <div className="favorits_name">
                        <p className="favorits_file_name">file.png</p>
                        <p className="favorits_comments">1 comment</p>
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
                        <p className="favorits_file_name">file.png</p>
                        <p className="favorits_comments">1 comment</p>
                      </div>
                      <div className="favorits_icon">
                        <i className="fa-solid fa-ellipsis"></i>
                        <i className="fa-solid fa-star fill_star"></i>
                      </div>
                    </div>
                  </div>
                  <Link to="/workspacesupload">
                    <div className="uplode_section" id="fav">
                      <i className="fa-solid fa-plus plus"></i>
                    </div>
                  </Link>
                </Carousel>

              </div>
            </div>

            {/* ==================================== Photos section ====================================================== */}

            <div className="workpaces_favorits">
              <div className="favorits_header">
                <h2>Photos</h2>
              </div>
              <div className="wc_car_grid">
                <Carousel responsive={responsive}>
                  <div className="favorits_card">
                    <div className="favorits_card_img">
                      <img src={fav_img1} alt="" />
                    </div>
                    <div className="favorits_discription">
                      <div className="favorits_name">
                        <p className="favorits_file_name">file.png</p>
                        <p className="favorits_comments">1 comment</p>
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
                        <p className="favorits_file_name">file.png</p>
                        <p className="favorits_comments">1 comment</p>
                      </div>
                      <div className="favorits_icon">
                        <i className="fa-solid fa-ellipsis"></i>
                        <i className="fa-solid fa-star fill_star"></i>
                      </div>
                    </div>
                  </div>
                  <Link to="/workspacesupload">
                    <div className="uplode_section" id="fav">
                      <i className="fa-solid fa-plus plus"></i>
                    </div>
                  </Link>
                </Carousel>

              </div>
            </div>
            {/* ==================================== Polls section ====================================================== */}

            <div className="workpaces_favorits">
              <div className="favorits_header">
                <h2>Polls</h2>
              </div>
              <div className="wc_car_grid">
                <Carousel responsive={responsive}>
                  <div className="favorits_card">
                    <div className="favorits_card_img">
                      <img src={fav_img1} alt="" />
                    </div>
                    <div className="favorits_discription">
                      <div className="favorits_name">
                        <p className="favorits_file_name">file.png</p>
                        <p className="favorits_comments">1 comment</p>
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
                        <p className="favorits_file_name">file.png</p>
                        <p className="favorits_comments">1 comment</p>
                      </div>
                      <div className="favorits_icon">
                        <i className="fa-solid fa-ellipsis"></i>
                        <i className="fa-solid fa-star fill_star"></i>
                      </div>
                    </div>
                  </div>
                  <Link to="/workspacesupload">
                    <div className="uplode_section" id="fav">
                      <i className="fa-solid fa-plus plus"></i>
                    </div>
                  </Link>
                </Carousel>

              </div>
            </div>
            {/* ==================================== Social Media section ====================================================== */}

            <div className="workpaces_favorits">
              <div className="favorits_header">
                <h2>
                  Social Media
                </h2>
              </div>
              <div className="wc_car_grid">
                <Carousel responsive={responsive}>
                  <div className="favorits_card">
                    <div className="favorits_card_img">
                      <img src={fav_img1} alt="" />
                    </div>
                    <div className="favorits_discription">
                      <div className="favorits_name">
                        <p className="favorits_file_name">file.png</p>
                        <p className="favorits_comments">1 comment</p>
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
                        <p className="favorits_file_name">file.png</p>
                        <p className="favorits_comments">1 comment</p>
                      </div>
                      <div className="favorits_icon">
                        <i className="fa-solid fa-ellipsis"></i>
                        <i className="fa-solid fa-star fill_star"></i>
                      </div>
                    </div>
                  </div>
                  <Link to="/workspacesupload">
                    <div className="uplode_section" id="fav">
                      <i className="fa-solid fa-plus plus"></i>
                    </div>
                  </Link>
                </Carousel>

              </div>
            </div>

            {/* ==================================== Tesla Campaign section ====================================================== */}

            <div className="workpaces_favorits">
              <div className="favorits_header">
                <h2>
                  Tesla Campaign 1
                </h2>
              </div>
              <div className="wc_car_grid">
                <Carousel responsive={responsive}>
                  <div className="favorits_card">
                    <div className="favorits_card_img">
                      <img src={fav_img1} alt="" />
                    </div>
                    <div className="favorits_discription">
                      <div className="favorits_name">
                        <p className="favorits_file_name">file.png</p>
                        <p className="favorits_comments">1 comment</p>
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
                        <p className="favorits_file_name">file.png</p>
                        <p className="favorits_comments">1 comment</p>
                      </div>
                      <div className="favorits_icon">
                        <i className="fa-solid fa-ellipsis"></i>
                        <i className="fa-solid fa-star fill_star"></i>
                      </div>
                    </div>
                  </div>
                  <Link to="/workspacesupload">
                    <div className="uplode_section" id="fav">
                      <i className="fa-solid fa-plus plus"></i>
                    </div>
                  </Link>
                </Carousel>

              </div>
            </div>
            {/* ==================================== Videos section ====================================================== */}

            <div className="workpaces_favorits">
              <div className="favorits_header">
                <h2>Videos</h2>
              </div>
              <div className="wc_car_grid">
                <Carousel responsive={responsive}>
                  <div className="favorits_card">
                    <div className="favorits_card_img">
                      <img src={fav_img1} alt="" />
                    </div>
                    <div className="favorits_discription">
                      <div className="favorits_name">
                        <p className="favorits_file_name">file.png</p>
                        <p className="favorits_comments">1 comment</p>
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
                        <p className="favorits_file_name">file.png</p>
                        <p className="favorits_comments">1 comment</p>
                      </div>
                      <div className="favorits_icon">
                        <i className="fa-solid fa-ellipsis"></i>
                        <i className="fa-solid fa-star fill_star"></i>
                      </div>
                    </div>
                  </div>
                  <Link to="/workspacesupload">
                    <div className="uplode_section" id="fav">
                      <i className="fa-solid fa-plus plus"></i>
                    </div>
                  </Link>
                </Carousel>

              </div>
            </div>
            {/* ==================================== Unsorted section ====================================================== */}

            <div className="workpaces_favorits">
              <div className="favorits_header">
                <h2>Unsorted</h2>
              </div>
              <div className="wc_car_grid">
                <Carousel responsive={responsive}>
                  <div className="favorits_card">
                    <div className="favorits_card_img">
                      <img src={fav_img1} alt="" />
                    </div>
                    <div className="favorits_discription">
                      <div className="favorits_name">
                        <p className="favorits_file_name">file.png</p>
                        <p className="favorits_comments">1 comment</p>
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
                        <p className="favorits_file_name">file.png</p>
                        <p className="favorits_comments">1 comment</p>
                      </div>
                      <div className="favorits_icon">
                        <i className="fa-solid fa-ellipsis"></i>
                        <i className="fa-solid fa-star fill_star"></i>
                      </div>
                    </div>
                  </div>
                  <Link to="/workspacesupload">
                    <div className="uplode_section" id="fav">
                      <i className="fa-solid fa-plus plus"></i>
                    </div>
                  </Link>
                </Carousel>

              </div>
            </div>
          </div>
        </div>
        <div className="workpaces_commentsection">
          {/* <Team /> */}
          <Task />
          <Comment />
          <Link to="/workspace/meetingview">
            <div className="calling_Section">
              <div className="call_img1">
                <img src={user2} alt="" />
              </div>
              <div className="call_img2">
                <img src={user} alt="" />
              </div>
            </div>
          </Link>
          <Chat />
        </div>
      </div>
    </div>


  )
}

export default index

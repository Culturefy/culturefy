
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './Campaigns.css'
import ReactPaginate from 'react-paginate';
import '../component/Content.css';
import 'react-dates/initialize';
// import { DateRangePicker } from 'react-dates';
import PlanCircle from "../assets/plan-circle.svg"
import "./create.css"
import GoCircle from "../assets/go-circle.svg"
import PossesIcon from "../assets/posses-icon.svg"
import AsideLeft from '../Dashboard/AsideLeft';
import AsideRight from '../Dashboard/AsideRight';
import Slide1 from "../assets/slide-01.png";
import Slide2 from "../assets/slide-02.png";
import "../component/Content.css"
// import "./Content.css";
// import Campaigns from "../campaigns/Index.js";
import "../App.css";
import Content from '../component/Content';

const Create = () => {
    const [showtab, setShowtab] = useState(1)
    const [text,setText]=useState()

    const handletab = (e) => {
        setShowtab(e);
    }
    const handleText =(e)=>{
        setText(e)
    }

    const [show, setshow] = useState("hide");

  const handleHide =() => {
    if(show == "show"){
      setshow("hide");
    }
    else{
      setshow("show");
    }
    
  }

    return (
        <div>
            {/* <AsideLeft/>
            <AsideRight/> */}
            <Content/>
            <div class="main-inner-content inner-cont-pt">
                <div class="row mt-4">
                    <div class="col-lg-8">
                        <div class="action-sec">
                            <div class="key-action-wraper">
                                <ul class="nav nav-tabs">
                                    <li>
                                        <a class="active" data-bs-toggle="tab" href="#plan" aria-selected="true">Plan <i class="fa-solid fa-chevron-right"></i></a>
                                    </li>
                                    <li>
                                        <a data-bs-toggle="tab" href="#position" aria-selected="false">Position <i class="fa-solid fa-chevron-right"></i></a>
                                    </li>
                                    <li>
                                        <a id="contact-tab" data-bs-toggle="tab" href="#possess" aria-selected="false">Possess <i class="fa-solid fa-chevron-right"></i></a>
                                    </li>
                                </ul>
                            </div>
                            {/* <div class="tab-content key-content">
                                <ul id="plan" class="tab-pane fade in active show">
                                    <li><a href="#">Campaign Goal</a></li>
                                    <li><a href="#">Audience Targeting</a></li>
                                    <li><a href="#">Schedule</a></li>
                                </ul>
                                <ul id="position" class="tab-pane fade">
                                    <li><a href="#">Design Campaign</a></li>
                                </ul>
                                <ul id="possess" class="tab-pane fade">
                                    <li><a href="#">Review Campaign</a></li>
                                </ul>
                            </div> */}

                        </div>

                        <div class="ac-content crt-campaign">
                            <div class="ac-sec plan-sec">
                                <div class="sub-sec">
                                    <div class="main-head">
                                        <h3>Plan</h3>
                                        <span><img src={PlanCircle} /></span>

                                    </div>
                                    <div class="a-sm-content-box">
                                        <div class="sm-head checked">
                                            <h3>Campaign Goal</h3>
                                            <span><i class="fa-solid fa-check"></i></span>
                                        </div>
                                        <div class="cg-form">
                                            <form action="">
                                                <div class="cg-dropdown">
                                                    <select placeholder='Choose a goal'>
                                                        <option>Choose a goal</option>
                                                        <option>Recruit more employees</option>
                                                        <option>Attract more customers</option>
                                                    </select>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>

                                <div class="sub-sec">
                                    <div class="a-sm-content-box">
                                        <div class="sm-head">
                                            <span><i className="fa-solid fa-check"></i></span>
                                            <h3>Audience Targeting</h3>
                                        </div>
                                        <div class="at-checks">
                                            <ul>
                                                <li><label><input type="checkbox" /> <span> Use AI audience targeting
                                                </span></label></li>
                                                <li><label><input type="checkbox" /> <span>Use custom
                                                    audiences</span></label></li>
                                                <div class="cst-dropdowns">
                                                    <div>
                                                        <select>
                                                            <option><li>Gender</li></option>
                                                            <otion><sapn>All Gender</sapn></otion>
                                                            <option><li>Female</li></option>
                                                            <option><li>Male</li></option>
                                                        </select>
                                                    </div>

                                                    <div>
                                                        <select>
                                                            <option><li><a href="#"><label><input type="checkbox" /> All
                                                                Ages</label></a></li></option>
                                                            <option>  <li><a href="#"><label><input type="checkbox" />18 -
                                                                24</label></a></li></option>
                                                            <option> <li><a href="#"><label><input type="checkbox" /> 25 -
                                                                34</label></a></li></option>
                                                            <option><li><a href="#"><label><input type="checkbox" /> 35 -
                                                                44</label></a></li></option>
                                                            <option> <li><a href="#"><label><input type="checkbox" /> 45 -
                                                                54</label></a></li></option>
                                                            <option> <li><a href="#"><label><input type="checkbox" /> 55 -
                                                                64</label></a></li></option>
                                                            <option>  <li><a href="#"><label><input type="checkbox" />
                                                                65+</label></a></li></option>

                                                        </select>
                                                    </div>
                                                </div>
                                            </ul>
                                        </div>
                                    </div>
                                </div>

                                <div class="sub-sec">
                                    <div class="a-sm-content-box">
                                        <div class="sm-head">
                                            <h3>Schedule</h3>
                                            <span><i class="fa-solid fa-check"></i></span>
                                        </div>
                                        <div class="sh-date">
                                            <input placeholder="Start Date" type="text" onfocus="(type='date')" onblur="(this.type='text')" id="date" />
                                            <input placeholder="End Date" type="text" onfocus="(type='date')" onblur="(this.type='text')" />
                                        </div>
                                    </div>
                                </div>

                            </div>
                            <div class="ac-sec position">
                                <div class="sub-sec">
                                    <div class="main-head">
                                        <h2>Position</h2>
                                        <span><img src={GoCircle} /></span>
                                    </div>
                                    <div class="a-sm-content-box">
                                        <div class="sm-head">
                                            <h3>Design Campaign</h3>
                                            <span class="yellow-circle" ><i class="fa-solid fa-check" style={{ borderColor: "#f5a41d" }} /></span>
                                        </div>
                                        <div class="design-form-wraper">
                                            <ul class="nav ds-form-tabs" role="tablist">
                                                <li class="nav-item" >
                                                    <button className={showtab === 1 ? "nav-link active" : "nav-link"} onClick={() => handletab(1)} >Info</button>
                                                </li>
                                                <li class="nav-item" >
                                                    <button className={showtab === 2 ? "nav-link active" : "nav-link"} onClick={() => handletab(2)}>native</button>
                                                </li>
                                                <li class="nav-item" >
                                                    <button className={showtab === 3 ? "nav-link active" : "nav-link"} onClick={() => handletab(3)}>Display</button>
                                                </li>
                                                <li class="nav-item" >
                                                    <button className={showtab === 4 ? "nav-link active" : "nav-link"} onClick={() => handletab(4)}>Video</button>
                                                </li>
                                                <li class="nav-item" >
                                                    <button className={showtab === 5 ? "nav-link active" : "nav-link"} onClick={() => handletab(5)}>Audio</button>
                                                </li>
                                            </ul>


                                            <div class="tab-content design">
                                                <div >
                                                    <form action="" className={showtab === 1 ? "tab-pane fade show active" : "tab-pane fade show"}>
                                                        <div class="form-group">
                                                            <input type="text" class="form-control title" placeholder="Job Title" />
                                                        </div>
                                                        <div class="form-group">
                                                            <input type="text" class="form-control" placeholder="Job Description" />
                                                        </div>
                                                        <div class="form-group">
                                                            <input type="text" class="form-control" placeholder="Job Locaton" />
                                                        </div>
                                                        <div class="row">
                                                            {/* <div class="col-lg-6">
                                                            <div class="form-dropdown">
                                                                <button type="button" class="btn dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                                                                    <span>March 2022</span>
                                                                </button>
                                                                <ul class="dropdown-menu">
                                                                    <li><a class="dropdown-item" href="#">Full
                                                                        Time</a></li>
                                                                    <li><a class="dropdown-item" href="#">Part
                                                                        Time</a></li>
                                                                    <li><a class="dropdown-item" href="#">Contract</a></li>
                                                                </ul>
                                                            </div>
                                                            <div class="form-dropdown">
                                                                <button type="button" class="btn dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                                                                    <span>Job Level</span>
                                                                </button>
                                                                <ul class="dropdown-menu">
                                                                    <li><a class="dropdown-item" href="#">Entry
                                                                        Level</a></li>
                                                                    <li><a class="dropdown-item" href="#">Mid-Senior
                                                                        Level</a></li>
                                                                </ul>
                                                            </div>
                                                        </div> */}
                                                            <div class="col-lg-6">
                                                                {/* <div class="form-group">
                                                                <select class="js-example-basic-multiple select2-hidden-accessible" name="states[]" multiple="" data-select2-id="select2-data-1-d914" tabindex="-1" aria-hidden="true">
                                                                    <option value="MK">Marketing</option>
                                                                    <option value="PR">Production</option>
                                                                </select><span class="select2 select2-container select2-container--default" dir="ltr" data-select2-id="select2-data-2-vffe" style={{width: "103.469px;"}}><span class="selection"><span class="select2-selection select2-selection--multiple" role="combobox" aria-haspopup="true" aria-expanded="false" tabindex="-1" aria-disabled="false"><ul class="select2-selection__rendered" id="select2-states-vs-container"></ul><span class="select2-search select2-search--inline"><textarea class="select2-search__field" type="search" tabindex="0" autocorrect="off" autocapitalize="none" spellcheck="false" role="searchbox" aria-autocomplete="list" autocomplete="off" aria-label="Search" aria-describedby="select2-states-vs-container" placeholder="" style={{width:" 0.75em;"}}></textarea></span></span></span><span class="dropdown-wrapper" aria-hidden="true"></span></span>
                                                            </div> */}
                                                                {/* <div class="form-group">
                                                                <select class="js-example-basic-multiple select2-hidden-accessible" name="states[]" multiple="" data-select2-id="select2-data-3-gc5b" tabindex="-1" aria-hidden="true">
                                                                    <option value="tech">Technology</option>
                                                                    <option value="Oth">Other</option>
                                                                </select><span class="select2 select2-container select2-container--default" dir="ltr" data-select2-id="select2-data-4-cx23" style={{width: "107.938px;"}}><span class="selection"><span class="select2-selection select2-selection--multiple" role="combobox" aria-haspopup="true" aria-expanded="false" tabindex="-1" aria-disabled="false"><ul class="select2-selection__rendered" id="select2-states-nl-container"></ul><span class="select2-search select2-search--inline"><textarea class="select2-search__field" type="search" tabindex="0" autocorrect="off" autocapitalize="none" spellcheck="false" role="searchbox" aria-autocomplete="list" autocomplete="off" aria-label="Search" aria-describedby="select2-states-nl-container" placeholder="" style={{width: "0.75em;"}}></textarea></span></span></span><span class="dropdown-wrapper" aria-hidden="true"></span></span>
                                                            </div> */}
                                                            </div>
                                                        </div>
                                                        <div class="form-group">
                                                            <input type="text" class="form-control" placeholder="Add required skills +" />
                                                            <div class="keywords">
                                                                <span>Advertising <button><i class="fa-solid fa-xmark"></i></button></span>
                                                                <span>Search Engine Optimization (SEO) <button><i class="fa-solid fa-xmark"></i></button></span>
                                                                <span>Adobe Photoshop <button><i class="fa-solid fa-xmark"></i></button></span>
                                                            </div>
                                                        </div>
                                                    </form>
                                                </div>
                                                <div >
                                                    <form action="" className={showtab === 2 ? "tab-pane fade show active" : "tab-pane fade"}>
                                                        <div class="row">
                                                            <div class="col-lg-6">
                                                                <div class="form-group">
                                                                    <input type="text" class="form-control title" placeholder="Ad Title" />
                                                                </div>
                                                                <div class="form-group">
                                                                    <input type="text" class="form-control" placeholder="Ad Description" />
                                                                </div>
                                                                <div class="form-group">
                                                                    <input type="url" class="form-control" placeholder="URL" />
                                                                </div>
                                                                <div class="btn-upload">
                                                                    <button><img src="assets-qa/images/Icon-Upload1.svg" alt="" /> Upload Files</button>
                                                                </div>
                                                            </div>
                                                            <div class="col-lg-6">
                                                                <div class="upload-img-box">
                                                                    <div class="img-preview">
                                                                        <img src="" alt="" id="userImg" />
                                                                    </div>
                                                                    <input type="file" id="imgInp" />
                                                                    <div class="upload-txt" id="uploadTxt">
                                                                        <div class="icon"><img src="assets-qa/images/Icon-Upload2.svg" alt="" /></div>
                                                                        <h3>Upload Files</h3>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </form>
                                                </div>
                                                <div class="tab-pane fade" className={showtab === 3 ? "tab-pane fade show active" : "tab-pane fade"}>
                                                    <form action="">
                                                        <div class="row">
                                                            <div class="col-lg-4">
                                                                <div class="form-group">
                                                                    <input type="text" class="form-control title" placeholder="Ad Title" />
                                                                </div>
                                                                <div class="form-group">
                                                                    <input type="text" class="form-control" placeholder="Ad Description" />
                                                                </div>
                                                                <div class="form-group">
                                                                    <input type="url" class="form-control" placeholder="URL" />
                                                                </div>
                                                                <div class="btn-upload">
                                                                    <button><img src="assets-qa/images/Icon-Upload1.svg" alt="" /> Upload Files</button>
                                                                </div>
                                                            </div>
                                                            <div class="col-lg-8">
                                                                <div class="upload-img-box display">
                                                                    <div class="img-preview">
                                                                        <img src="" alt="" id="displayImg" />
                                                                    </div>
                                                                    <input type="file" id="imgInp-display" />
                                                                    <div class="upload-txt" id="uploadTxt">
                                                                        <div class="icon"><img src="assets-qa/images/Icon-Upload2.svg" alt="" /></div>
                                                                        <h3>Upload Files</h3>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </form>
                                                </div>
                                                <div className={showtab === 4 ? "tab-pane fade show active" : "tab-pane fade"} id="video" role="tabpanel">
                                                    <form action="">
                                                        <div class="row">
                                                            <div class="col-lg-4">
                                                                <div class="form-group">
                                                                    <input type="text" class="form-control title" placeholder="Video Title" />
                                                                </div>
                                                                <div class="form-group">
                                                                    <input type="text" class="form-control" placeholder="Video description" />
                                                                </div>
                                                                <div class="form-group">
                                                                    <input type="url" class="form-control" placeholder="URL" />
                                                                </div>
                                                                <div class="btn-upload">
                                                                    <button><img src="assets-qa/images/Icon-Upload1.svg" alt="" /> Upload Files</button>
                                                                </div>
                                                            </div>
                                                            <div class="col-lg-8">
                                                                <div class="upload-img-box display">
                                                                    <div class="img-preview">
                                                                        <img src="" alt="" id="displayImg" />
                                                                    </div>
                                                                    <input type="file" id="imgInp-display" />
                                                                    <div class="upload-txt" id="uploadTxt">
                                                                        <div class="icon"><img src="assets-qa/images/Icon-Upload2.svg" alt="video" /></div>
                                                                        <h3>Upload Files</h3>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </form>
                                                </div>
                                                <div className={showtab === 5 ? "tab-pane fade show active" : "tab-pane fade"} id="audio" role="tabpanel">
                                                    <form action="" class="form-design">
                                                        <div class="row">
                                                            <div class="col-lg-7">
                                                                <div class="form-group">
                                                                    <input type="text" class="form-control title" placeholder="Ad Title" />
                                                                </div>
                                                                <div class="form-group">
                                                                    <input type="text" class="form-control" placeholder="Ad Description" />
                                                                </div>
                                                                <div class="form-group">
                                                                    <input type="url" class="form-control" placeholder="URL" />
                                                                </div>
                                                                <div class="btn-upload">
                                                                    <button><img src="assets-qa/images/Icon-Upload1.svg" alt="" /> Upload Files</button>
                                                                </div>
                                                            </div>
                                                            <div class="col-lg-5">
                                                                <div class="upload-img-box display">
                                                                    <div class="img-preview">
                                                                        <img src="" alt="" id="displayImg" />
                                                                    </div>
                                                                    <input type="file" id="imgInp-display" />
                                                                    <div class="upload-txt" id="uploadTxt">
                                                                        <div class="icon"><img src="assets-qa/images/Icon-Upload2.svg" alt="" /></div>
                                                                        <h3>Upload Files</h3>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </form>



                                                    <div class="ac-sec possess">
                                                        <div className="sub-sec">
                                                            <div class="main-head">
                                                                <h2>Possess</h2>
                                                                <span><img src={PossesIcon} alt="" /></span>
                                                            </div>
                                                            <div class="a-sm-content-box">
                                                                <div class="sm-head">
                                                                    <h3>Review Campaign</h3>
                                                                    <span className="prim-circle"><i class="fa-solid fa-check" style={{ borderColor: "#2394ae" }} /></span>
                                                                    <button className="btn-generate" onClick={()=>handleHide()}>Generate Preview</button>
{/* 
                                                                    {
              show == "show" ? <button className='toggle' onClick={handleHide}>   <svg width="18" height="2" viewBox="0 0 18 2" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M17 1H9H1" stroke="#4B4B4B" strokeWidth="2" strokeLinecap="round"/>
              </svg></button> : <button className='toggle'  onClick={handleHide}><svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M9.99996 19.4597V10.3793M9.99996 10.3793V1.29883M9.99996 10.3793H18.3333M9.99996 10.3793H1.66663" stroke="#4B4B4B" strokeWidth="2" strokeLinecap="round"/>
              </svg></button>
            } */}

                                                                </div>
                                                                <div className={text?"rev-campaign":"rev-campaign show"}  >
                                                                    <div class="tp-list-wraper">
                                                                        <div class="toplist">
                                                                            <h3 class="top-head">Campaign Goal</h3>
                                                                            <ul>
                                                                                <li>Recruit more employees</li>
                                                                            </ul>
                                                                        </div>
                                                                        <div class="toplist">
                                                                            <h3 class="top-head">Audience Targeting </h3>
                                                                            <ul>
                                                                                <li>Custom audiences</li>
                                                                                <li>All Genders</li>
                                                                                <li>All Ages</li>
                                                                            </ul>
                                                                        </div>
                                                                        <div class="toplist">
                                                                            <h3 class="top-head">Schedule</h3>
                                                                            <ul>
                                                                                <li>Starts August 9, 2022</li>
                                                                                <li>Ends October 1, 2022</li>
                                                                            </ul>
                                                                        </div>
                                                                    </div>
                                                                    <div class="row">
                                                                        <div class="col-12">
                                                                            <div class="job-sec">
                                                                                <div class="title">
                                                                                    <h4>Job Title</h4>
                                                                                    <h4 class="sub-title">Job Title</h4>
                                                                                </div>
                                                                                <div class="job-desc">
                                                                                    <h4>Job Description</h4>
                                                                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                                                                                        sed do eiusmod tempor incididunt ut labore et dolore
                                                                                        magna aliqua. Ut enim ad minim veniam, quis nostrud
                                                                                        exercitation ullamco laboris nisi ut aliquip ex ea
                                                                                        commodo consequat. Duis aute irure dolor in
                                                                                        reprehenderit in voluptate velit esse cillum dolore eu
                                                                                        fugiat nulla pariatur. Excepteur sint occaecat cupidatat
                                                                                        non proident. </p>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                        <div class="col-12">
                                                                            <div class="heading-box">
                                                                                <h4>Job Location</h4>
                                                                                <h4 class="sub-title">Acworth, GA</h4>
                                                                            </div>
                                                                        </div>
                                                                        <div class="col-lg-6">
                                                                            <div class="heading-box">
                                                                                <h4>Employment Type</h4>
                                                                                <h4 class="sub-title">Full Time</h4>
                                                                            </div>
                                                                        </div>
                                                                        <div class="col-lg-6">
                                                                            <div class="heading-box">
                                                                                <h4>Job Function</h4>
                                                                                <h4 class="sub-title">Marketing</h4>
                                                                            </div>
                                                                        </div>
                                                                        <div class="col-lg-6">
                                                                            <div class="heading-box">
                                                                                <h4>Job Level</h4>
                                                                                <h4 class="sub-title">Entry Level</h4>
                                                                            </div>
                                                                        </div>
                                                                        <div class="col-lg-6">
                                                                            <div class="heading-box">
                                                                                <h4>Company Industry</h4>
                                                                                <h4 class="sub-title">Technology</h4>
                                                                            </div>
                                                                        </div>
                                                                        <div class="col-12">
                                                                            <div class="heading-box">
                                                                                <h4>Required Skills</h4>
                                                                                <h4 class="sub-title">Advertising, Search Engine Optimization
                                                                                    (SEO), Adobe Photoshop</h4>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div class="slider-wraper">
                                                                        <div class="slider-camp slick-initialized slick-slider slick-dotted">
                                                                            <div class="slick-list draggable">
                                                                                <div class="slick-track" style={{ opacity: "1", width: "0px", transform: "translate3d(0px, 0px, 0px)" }}>
                                                                                    <div class="img slick-slide slick-cloned" data-slick-index="-1" id="" aria-hidden="true" tabindex="-1">
                                                                                        <img src={Slide2} />
                                                                                    </div><div class="img slick-slide slick-current slick-active" data-slick-index="0" aria-hidden="false" tabindex="0" role="tabpanel" id="slick-slide00" aria-describedby="slick-slide-control00">
                                                                                        <img src={Slide1} />
                                                                                    </div>

                                                                                </div></div>



                                                                            <ul class="slick-dots" role="tablist">
                                                                                <li class="slick-active" role="presentation">
                                                                                    <button type="button" role="tab" id="slick-slide-control00" aria-controls="slick-slide00" aria-label="1 of 4" tabindex="0" aria-selected="true">1</button>
                                                                                </li>
                                                                                <li role="presentation"><button type="button" role="tab" id="slick-slide-control01" aria-controls="slick-slide01" aria-label="2 of 4" tabindex="-1">2</button></li>
                                                                                <li role="presentation"><button type="button" role="tab" id="slick-slide-control02" aria-controls="slick-slide02" aria-label="3 of 4" tabindex="-1">3</button></li>
                                                                                <li role="presentation"><button type="button" role="tab" id="slick-slide-control03" aria-controls="slick-slide03" aria-label="4 of 4" tabindex="-1">4</button></li>
                                                                            </ul></div>
                                                                        <div class="arrows-camp">
                                                                            <button class="left-arrow slick-arrow" ><i class="fa-solid fa-chevron-left"></i></button>
                                                                            <button class="right-arrow slick-arrow" ><i class="fa-solid fa-chevron-right"></i></button>
                                                                        </div>
                                                                    </div>

                                                                    <div class="publish-btns">
                                                                        <a href="workspace-main.html"> <button>View in Workspace</button></a>
                                                                        <button>Publish</button>
                                                                    </div>
                                                                </div>

                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* <div class="ac-sec possess">
                                <div class="sub-sec">
                                    <div class="main-head">
                                        <h2>Possess</h2>
                                        <span><img src={PossesIcon} alt=""/></span>
                                    </div>
                                    <div class="a-sm-content-box">
                                        <div class="sm-head">
                                            <h3>Review Campaign</h3>
                                            <span class="prim-circle"></span>
                                            <button class="btn-generate">Generate Preview</button>
                                        </div>
                                        </div>
                                    </div> */}

                    </div>
                </div>


            </div>

        </div>


    )
}

export default Create
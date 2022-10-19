
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './Campaigns.css'
import ReactPaginate from 'react-paginate';
import '../component/Content.css';
import 'react-dates/initialize';
import PlanCircle from "../assets/plan-circle.svg"
import "./create.css"
import GoCircle from "../assets/go-circle.svg"
import PossesIcon from "../assets/posses-icon.svg"
import AsideLeft from '../Dashboard/AsideLeft';
import AsideRight from '../Dashboard/AsideRight';
import Slide1 from "../assets/slide-01.png";
import Slide2 from "../assets/slide-02.png";
import "../component/Content.css"
import "../App.css";
import Content from '../component/Content';
import Upload2 from "../assets/Icon-Upload2.svg"
import { Tab, Tabs, TabList, TabPanel} from "react-tabs"
import Icon from "../assets/Icon-Upload1.svg"
import { makeStyles } from '@material-ui/core/styles'


const Create = () => {
    const [showtab, setShowtab] = useState(1)
    const [text, setText] = useState()
    const [value, setValue] = useState()
    const [active, setActive] = useState()
    // const [success, setSucess] = useState(false);
    const tabs = ["Campaign Goal", "Audience Targeting", "Schedule"]
    const users = ["Plan", "Position", "Possess"]

    const handletab = (e) => {
        setShowtab(e);
    }
    const handleText = (e) => {
        setText(e)
    }

    const [show, setshow] = useState("hide");

    const handleHide = () => {
        if (show == "show") {
            setshow("hide");
        }
        else {
            setshow("show");
        }

    }
    const [toggles, setToggles] = useState(null);
    let handleToggle=(id)=>{
        if(toggle===id){
            setToggle(null);
            return false
        }
       setToggle(id)
       
    }
    


    //   const createTabs = () => {
    //     const { tabs, currentTab, } = tab;

    //     const allTabs = tabs.map(tab => {
    //       return (
    //         <li>
    //           {currentTab.id === tab.id  (
    //              (
    //             <button
    //               className={currentTab.id === tab.id ? "tab active" : "tab"}
    //               onClick={() => this.handleSelectTab(tab)}
    //               onDoubleClick={() => this.handleDoubleClick(tab)}
    //             >
    //               {tab.tabs.name}
    //             </button>
    //           ))}
    //         </li>
    //       );
    //     });

    //     return <ul className="nav nav-tabs">{allTabs}</ul>;
    //   };


    const [checked, setChecked] = useState('checked1');



    const [showForm, setShowForm] = useState(false);

    const showForms = () => {
        setShowForm(!showForm);
    }
    const [tab1, setTab1] = useState(true)
    const showTab1 = () => {
        setTab1(!tab1)
    }
    const [tab2, setTab2] = useState(false)
    const showTab2 = () => {
        setTab2(!tab2)
    }
    const [tab3, setTab3] = useState(false)
    const showTab3 = () => {
        setTab3(!tab3)
    }
    const [tab4, setTab4] = useState(false)
    const showTab4 = () => {
        setTab4(!tab4)
    }
    const [tab5, setTab5] = useState(false)
    const showTab5 = () => {
        setTab5(!tab5)
    }

    const [plan, setPlan] = useState(false)

    const handlePlans = () => {
        setPlan(!plan)
    }

    const [position, setPosition] = useState(false)
    const handlePosition = () => {
        setPosition(!position)
    }
    const [possess, setPossess] = useState(false)
    const handlePossess = () => {
        setPossess(!possess)
    }






    const [slides, setSlides] = useState([
        {
            src: "https://webprojectmockup.com/html/Culturefy/assets-qa/images/slide-01.png",
            title: "Half Moon Pier"
        },
        {
            src: "https://webprojectmockup.com/html/Culturefy/assets-qa/images/slide-02.png",
            title: "Port Washington Rocks"
        },
    ]);

    console.log(slides)
    // SET CAROUSEL DEFAULTS
    let [currentPosition, setCurrentPosition] = useState(0); // Initial slide index value
    let currentSlide = slides[currentPosition]; // variable index value we can reference later

    const arrowRightClick = () => {
        currentPosition !== slides.length - 1 ? // Check index length
            setCurrentPosition(currentPosition + 1) : setCurrentPosition(currentPosition = 0);
        currentSlide = slides[currentPosition];
    }

    const arrowLeftClick = () => {
        currentPosition !== 0 ? // Check index length
            setCurrentPosition(currentPosition - 1) : setCurrentPosition(currentPosition = slides.length - 1);
        currentSlide = slides[currentPosition];
    }
    const shirts = { Slide1, Slide2 }
    const [selected, setSelected] = useState(shirts.Slide1)


    const [shows, setShows] = useState(false)
    const [texts, setTexts] = useState(false)
    const [toggle, setToggle] = useState(false)

    const handleChange =()=>{
        if(shows){
            setShows(!shows)
        }
        else{
            // setTexts(false)
            // setToggle(false)
        }
    }
    const [activeTab,setActiveTab] =useState(2)

    const state = {
        activeTab: activeTab || 1
      };
    
    return (
        <div>
            <Content />
            <div class="main-inner-content inner-cont-pt">
                <div class="row mt-4">
                    <div class="col-lg-8">
                        <div class="action-sec">
                            {/* <div class="key-action-wraper">
                                
                                <ul class="nav nav-tabs">
                                    <li>
                                        <a class="active" data-bs-toggle="tab" onClick={handlePlans} aria-selected="true">Plan <i class="fa-solid fa-chevron-right" ></i></a>
                                    </li>
                                    <li>
                                        <a data-bs-toggle="tab" aria-selected="false" onClick={handlePosition}>Position <i class="fa-solid fa-chevron-right"></i></a>
                                    </li>
                                    <li>
                                        <a id="contact-tab" data-bs-toggle="tab" aria-selected="false" onClick={handlePossess}>Possess <i class="fa-solid fa-chevron-right"></i></a>
                                    </li>
                                </ul>
                            </div>
                            <div class="tab-content key-content" style={{ paddingLeft: " 75px" }}>
                                {plan && <ul id="plan" class="tab-pane fade in active show">
                                    <li><a href="#">Campaign Goal</a></li>
                                    <li><a href="#">Audience Targeting</a></li>
                                    <li><a href="#">Schedule</a></li>
                                </ul>}
                                {position && <ul id="position" class="tab-pane fade">
                                    <li><a href="#">Design Campaign</a></li>
                                </ul>}
                                {possess && <ul id="possess" class="tab-pane fade">
                                    <li><a href="#">Review Campaign</a></li>
                                </ul>}
                            </div> */}




{/* <th>Status
						
						{sortField === 'Status' && sortType === 'dsc' && <svg className={LicenseStyles.sortIcon}
							onClick={() => onSort('Status', 'asc')}>
							<use xlinkHref="/sprite.svg#icon-arrow-down2" />
						</svg>}
						{sortField === 'Status' && sortType === 'asc' && <svg className={LicenseStyles.sortIcon}
							onClick={() => onSort('Status', 'dsc')}>
							<use xlinkHref="/sprite.svg#icon-arrow-up2" />
						</svg>}
						{(sortField !== 'Status' || sortType === '') && <svg className={LicenseStyles.sortIcon}
							onClick={() => onSort('Status', 'asc')}>
							<use xlinkHref="/sprite.svg#icon-tab" />
						</svg>}
					</th> */}


                            <div className="key-action-wraper">
                            {/* <Tabs>
                                <TabList className="nav nav-tabs">    
                                     
                                   <Tab class="tab-pane fade in active show" >Plan <i class="fa-solid fa-chevron-right"></i></Tab> 
                                <Tab>Position <i class="fa-solid fa-chevron-right" ></i></Tab>
                                <Tab>Possess <i class="fa-solid fa-chevron-right" ></i></Tab>
                                </TabList>
                                <div class="tab-content key-content" style={{ paddingLeft: " 75px" }}>
                                <TabPanel>
                                 Campaign Goal | 
                                   Audience Targeting | 
                                    Schedule
                                </TabPanel>
                                <TabPanel>
                                <li>Design Campaign</li>
                                </TabPanel>
                                <TabPanel>
                                <li>Review Campaign</li>
                                </TabPanel>
                                </div>
                            </Tabs> */}
                             <ul class="nav nav-tabs" onClick={handleChange}>
                                    Plan
                                    <li onClick={() => setShows(!shows)}>{shows ? <i class="fa fa-chevron-down" aria-hidden="true"></i> : <i class="fa-solid fa-chevron-right" ></i>}</li>
                                    Possess
                                    <li onClick={() => setTexts(!texts)}>{texts ? <i class="fa fa-chevron-down" aria-hidden="true"></i> : <i class="fa-solid fa-chevron-right" ></i>}</li>
                                    Position
                                    <li onClick={() => setToggle(!toggle)}>{toggle ? <i class="fa fa-chevron-down" aria-hidden="true"></i> : <i class="fa-solid fa-chevron-right" ></i>}</li>
                                    </ul>
                                    <div className="tab-contents key-content">
                                    <ul className='para'>
                                    {shows&& <><li > Campaign Goal</li><li>Audience Targeting</li><li> Schedule</li></>}
                                    {texts && <p> Design Campaign</p>}
                                    {toggle && <p>Review Campaign</p>}
                                    </ul>
                                    </div>
                            </div>
                        </div>

                        <div class="ac-content crt-campaign">
                            <div class="ac-sec plan-sec">
                                <div class="sub-sec">
                                    <div class="main-head">
                                        <h2>Plan</h2>
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
                                                    <div class="sh-date">
                                                        <select>
                                                            <option><li>Gender</li></option>
                                                            <otion><sapn>All Gender</sapn></otion>
                                                            <option><li>Female</li></option>
                                                            <option><li>Male</li></option>
                                                        </select>
                                                    </div>

                                                    <div class="sh-date">
                                                        <select>
                                                            <option><li><label><input type="checkbox" /> All
                                                                Ages</label></li></option>
                                                            <option>  <li><label><input type="checkbox" />18 -
                                                                24</label></li></option>
                                                            <option> <li><label><input type="checkbox" /> 25 -
                                                                34</label></li></option>
                                                            <option><li><label><input type="checkbox" /> 35 -
                                                                44</label></li></option>
                                                            <option> <li><label><input type="checkbox" /> 45 -
                                                                54</label></li></option>
                                                            <option> <li><label><input type="checkbox" /> 55 -
                                                                64</label></li></option>
                                                            <option>  <li><label><input type="checkbox" />
                                                                65+</label></li></option>

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
                                            {/* <ul class="nav ds-form-tabs" role="tablist">
                                                <li class="nav-item" >
                                                    <button onClick={showTab1}>Info</button>
                                                </li>
                                                <li class="nav-item" >
                                                    <button onClick={showTab2}>native</button>
                                                </li>
                                                <li class="nav-item" >
                                                    <button onClick={showTab3}>Display</button>
                                                </li>
                                                <li class="nav-item" >
                                                    <button onClick={showTab4}>Video</button>
                                                </li>
                                                <li class="nav-item" >
                                                    <button onClick={showTab5}>Audio</button>
                                                </li>
                                            </ul> */}
                                           <Tabs className="myClass">
                                                <TabList class=" ds-form-tabs" role="tablist" activeTintColor= 'blue'>
                                                   <div className='navbar'> 
                                                   <Tab class="nav-item active" >Info</Tab>
                                                    <Tab  class="nav-item" >native</Tab>
                                                    <Tab  class="nav-item" >Display</Tab>
                                                    <Tab  class="nav-item" >Video</Tab>
                                                    <Tab  class="nav-item" >Audio</Tab>
                                                    </div>
                                                </TabList>
                                                <div className='tab-content'>
                                                <TabPanel class="tab-content design">
                                                    <section id='tab-laboratory-values' className='tab-panel' checked="checked1">
                                                        <form action="" className="form-design" >
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
                                                                <div class="col-lg-6">
                                                                    <div class="form-dropdown">
                                                                        {/* <button type="button" class="btn dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                                                                <span>March 2022</span>
                                                            </button>
                                                            <ul class="dropdown-menu">
                                                                <li><a class="dropdown-item" href="#">Full
                                                                    Time</a></li>
                                                                <li><a class="dropdown-item" href="#">Part
                                                                    Time</a></li>
                                                                <li><a class="dropdown-item" href="#">Contract</a></li>
                                                            </ul> */}
                                                                        <select>
                                                                <option>Full Time</option>
                                                                <option>Part Time</option>
                                                                <option>Contract</option>
                                                            </select>
                                                                    </div>
                                                                    <div class="form-dropdown">
                                                                        {/* <button type="button" class="btn dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                                                                <span>Job Level</span>
                                                            </button>
                                                            <ul class="dropdown-menu">
                                                                <li><a class="dropdown-item" href="#">Entry
                                                                    Level</a></li>
                                                                <li><a class="dropdown-item" href="#">Mid-Senior
                                                                    Level</a></li>
                                                            </ul> */}
                                                                        <select  class="btn dropdown-toggle">
                                                                            <option>Job Level</option>
                                                                            <option>Entery Level</option>
                                                                            <option>Mid-Senior Level</option>
                                                                        </select>
                                                                    </div>
                                                                </div>
                                                                <div class="col-lg-6">
                                                                    <div class="form-dropdown">
                                                                        <select class="btn dropdown-toggle">
                                                                            <option></option>
                                                                            <option>Marketing</option>
                                                                            <option>Production</option>
                                                                        </select>
                                                            {/* <select class="js-example-basic-multiple select2-hidden-accessible" name="states[]" multiple="" data-select2-id="select2-data-1-d914" tabindex="-1" aria-hidden="true">
                                                                <option value="MK">Marketing</option>
                                                                <option value="PR">Production</option>
                                                            </select> */}
                                                            {/* <span class="select2 select2-container select2-container--default" dir="ltr" data-select2-id="select2-data-2-vffe" style={{width: "103.469px;"}}><span class="selection"><span class="select2-selection select2-selection--multiple" role="combobox" aria-haspopup="true" aria-expanded="false" tabindex="-1" aria-disabled="false"><ul class="select2-selection__rendered" id="select2-states-vs-container"></ul><span class="select2-search select2-search--inline"><textarea class="select2-search__field" type="search" tabindex="0" autocorrect="off" autocapitalize="none" spellcheck="false" role="searchbox" aria-autocomplete="list" autocomplete="off" aria-label="Search" aria-describedby="select2-states-vs-container" placeholder="" style={{width:" 0.75em;"}}></textarea></span></span></span><span class="dropdown-wrapper" aria-hidden="true"></span></span> */}
                                                        </div>
                                                        <div class="form-dropdown">
                                                                        <select class="btn dropdown-toggle">
                                                                            <option></option>
                                                                            <option>Technology</option>
                                                                            <option>Other</option>
                                                                        </select>
                                                                        </div>
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
                                                    </section>
                                                </TabPanel>
                                                
                                            <TabPanel>
                                            <div >
                                                    <form action="" className="form-design">
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
                                                                    <button><img src={Icon} alt="" /> Upload Files</button>
                                                                </div>
                                                            </div>
                                                            <div class="col-lg-6">
                                                                <div class="upload-img-box">
                                                                    <div class="img-preview">
                                                                        <img src="" alt="" id="userImg" />
                                                                    </div>
                                                                    <input type="file" id="imgInp" />
                                                                    <div class="upload-txt" id="uploadTxt">
                                                                        <div class="icon"><img src={Upload2} alt="" /></div>
                                                                        <h3>Upload Files</h3>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </form>
                                            </div>
                                            </TabPanel>
                                           <TabPanel>
                                            <div class="tab-pane fade" className={showtab === 3 ? "tab-pane fade show active" : "tab-pane fade"}>
                                               
                                                    <form action="" className="form-design">
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
                                                                    <button><img src={Icon} alt="" /> Upload Files</button>
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
                                            </TabPanel>
                                            <TabPanel>
                                            <div className={showtab === 4 ? "tab-pane fade show active" : "tab-pane fade"} id="video" role="tabpanel">
                                            
                                                    <form action="" className="form-design">
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
                                                                    <button><img src={Icon} /> Upload Files</button>
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
                                            </TabPanel>
                                            <TabPanel>
                                            <div className="tab-pane fade show active">
                                                    <form action="" className="form-design">
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
                                                                    <button><img src={Icon} alt="" /> Upload Files</button>
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
                                                    </div>
                                                    </TabPanel>
                                                    </div>
                                                    </Tabs>
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
                                                                <button className="btn-generate" onClick={showForms} >Generate Preview</button>
                                                            </div>
                                                            {showForm &&
                                                                <form className="form-design">
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
                                                                    <div class="rows">
                                                                        <div class="col-12">
                                                                            {/* <div class="job-sec">
                                                                                <div class="title">
                                                                                    <h4>Job Title</h4>
                                                                                    <h4 className="text">Job Title</h4>
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
                                                                            </div> */}
                                                                        </div>
                                                                        <div class="col-12">
                                                                            <div class="heading-box">
                                                                                <h4>Job Location</h4>
                                                                                <h4 className="text">Acworth, GA</h4>
                                                                            </div>
                                                                        </div>
                                                                        <div class="col-lg-6">
                                                                            <div class="heading-box">
                                                                                <h4>Employment Type</h4>
                                                                                <h4 className="text">Full Time</h4>
                                                                            </div>
                                                                        </div>
                                                                        <div class="col-lg-6">
                                                                            <div class="heading-box">
                                                                                <h4>Job Function</h4>
                                                                                <h4 className="text">Marketing</h4>
                                                                            </div>
                                                                        </div>
                                                                        <div class="col-lg-6">
                                                                            <div class="heading-box">
                                                                                <h4>Job Level</h4>
                                                                                <h4 className="text">Entry Level</h4>
                                                                            </div>
                                                                        </div>
                                                                        <div class="col-lg-6">
                                                                            <div class="heading-box">
                                                                                <h4>Company Industry</h4>
                                                                                <h4 className="text">Technology</h4>
                                                                            </div>
                                                                        </div>
                                                                        <div class="col-12">
                                                                            <div class="heading-box">
                                                                                <h4>Required Skills</h4>
                                                                                <h4 className="text">Advertising, Search Engine Optimization
                                                                                    (SEO), Adobe Photoshop</h4>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div class="slider-wraper">
                                                                        <div class="slider-camp slick-initialized slick-slider slick-dotted">
                                                                            <div class="slick-list draggable">
                                                                                {/* {<div class="slick-track" style={{ opacity: "1", width: "0px", transform: "translate3d(0px, 0px, 0px)" }}>
                                                                                <div class="img slick-slide slick-cloned" data-slick-index="-1" id="" aria-hidden="true" tabindex="-1">
                                                                                    <img src={Slide2} />
                                                                                </div>?
                                                                                <div class="img slick-slide slick-current slick-active" data-slick-index="0" aria-hidden="false" tabindex="0" role="tabpanel" id="slick-slide00" aria-describedby="slick-slide-control00">
                                                                                    <img src={Slide1} />
                                                                                </div>
                                                                                </div>
                                                                                   } */}
                                                                                <div className="slide">
                                                                                    <img src={currentSlide.src} alt={currentSlide.title} title={currentSlide.title} className="slider-img" />

                                                                                </div>
                                                                            </div>
                                                                            <ul class="slick-dots" role="tablist" onClick={arrowLeftClick}>
                                                                                <li class="slick-active" role="presentation">
                                                                                    <button type="button" role="tab" id="slick-slide-control00" aria-controls="slick-slide00" aria-label="1 of 4" tabindex="0" aria-selected="true">1</button>
                                                                                </li>
                                                                                <li role="presentation"><button type="button" role="tab" id="slick-slide-control01" aria-controls="slick-slide01" aria-label="2 of 4" tabindex="-1">2</button></li>
                                                                                <li role="presentation"><button type="button" role="tab" id="slick-slide-control02" aria-controls="slick-slide02" aria-label="3 of 4" tabindex="-1">3</button></li>
                                                                                <li role="presentation"><button type="button" role="tab" id="slick-slide-control03" aria-controls="slick-slide03" aria-label="4 of 4" tabindex="-1">4</button></li>
                                                                            </ul></div>
                                                                        <div class="arrows-camp">
                                                                            <div class="left-arrow slick-arrow" onClick={arrowLeftClick} ><i class="fa-solid fa-chevron-left"></i></div>
                                                                            <div class="right-arrow slick-arrow" onClick={arrowRightClick}><i class="fa-solid fa-chevron-right"></i></div>
                                                                        </div>
                                                                    </div>

                                                                    <div class="publish-btns">
                                                                        <Link to="/workspace-main"> <button>View in Workspace</button></Link>
                                                                        <button>Publish</button>
                                                                    </div>
                                                                </form>}

                                                        </div>
                                                    </div>
                                                </div>
                                           
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>


               
                <div className="col-lg-4">
                    <div class="c-right-content">
                        <h2>Recommendations</h2>
                        <form action="" className="form-design">
                            <div class="hz-sort-filter">
                                <div class="hz-filter">
                                    <select name="" id="">
                                        <option value="" selected="" disabled="">Filter</option>
                                        <option value="">1</option>
                                        <option value="">2</option>
                                        <option value="">3</option>
                                    </select>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="17.414" height="8.431" viewBox="0 0 17.414 8.431">
                                        <path id="Path_2504" data-name="Path 2504" d="M12,15.724,3.293,8.471,4.707,7.293,12,13.368l7.293-6.075,1.414,1.178Z" transform="translate(-3.293 -7.293)"></path>
                                    </svg>
                                </div>
                                <div class="hz-sort">
                                    <select name="" id="">
                                        <option value="" selected="" disabled="">Sort</option>
                                        <option value="">1</option>
                                        <option value="">2</option>
                                        <option value="">3</option>
                                    </select>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="17.414" height="8.431" viewBox="0 0 17.414 8.431">
                                        <path id="Path_2504" data-name="Path 2504" d="M12,15.724,3.293,8.471,4.707,7.293,12,13.368l7.293-6.075,1.414,1.178Z" transform="translate(-3.293 -7.293)"></path>
                                    </svg>
                                </div>
                            </div>
                        </form>
                        <div class="hz-profecional-skills brand">
                            <div class="hzps-inner">
                                <h2>Campaign</h2>
                                <h3>Sexism</h3>
                                <p>There should be no gender-coded content that could exclude candidates based on gender
                                    identities.</p>
                                <a href="campaign-ad.html"> <button class="hz-add">Create Task</button></a>
                            </div>
                            <div class="hzps-inner">
                                <h2>Campaign</h2>
                                <h3>Racism and Tokenism</h3>
                                <p>There should be no racially insensitive content and language that tokenizes groups.
                                </p>
                                <a href="campaign-ad.html"> <button class="hz-add">Create Task</button></a>
                            </div>
                            <div class="hzps-inner">
                                <h2>Campaign</h2>
                                <h3>Ableism</h3>
                                <p>There should be no language that could exclude people with physical disabilites.</p>
                                <a href="campaign-ad.html"> <button class="hz-add">Create Task</button></a>
                            </div>
                            <div class="hzps-inner">
                                <h2>Campaign</h2>
                                <h3>Ageism</h3>
                                <p>There should be no ageist content that could exclude people based on age, both young
                                    and old.</p>
                                <a href="campaign-ad.html"> <button class="hz-add">Create Task</button></a>
                            </div>
                            <div class="hzps-inner">
                                <h2>Campaign</h2>
                                <h3>Elitism</h3>
                                <p>There should be no content that excludes people from different socioconomic
                                    backgrounds</p>
                                <a href="campaign-ad.html"> <button class="hz-add">Create Task</button></a>
                            </div>
                            <div class="hzps-inner">
                                <h2>Campaign</h2>
                                <h3>Religion</h3>
                                <p>There should be no language that excludes people from different religious backgrounds
                                </p>
                                <a href="campaign-ad.html"> <button class="hz-add">Create Task</button></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        </div>

         </div >


    )
}

export default Create
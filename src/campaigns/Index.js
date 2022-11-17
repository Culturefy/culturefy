
import React, { useState, useCallback } from 'react'
import { Link } from 'react-router-dom'
import './Campaigns.css'
import ReactPaginate from 'react-paginate';
import '../component/Content.css';
import 'react-dates/initialize';
import 'react-dates/lib/css/_datepicker.css';
import Content from "../component/Content"
import DateFilter from '../component/DateFilter';
// Search bar Mui
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import { Tab, Tabs, TabList, TabPanel } from "react-tabs"
import Calender from '../assets/calendar-icon.png'
import Notification from '../assets/Notifiction.svg'
import AdminImg from '../assets/admin-img.png'

const Index = () => {
  const minDays = 5;
  const maxDays = 10;
  const [index, setIndex] = useState()
  const [data, setData] = useState([
    {
      heading: "Open a Coke, Open Happi...",
      Paragraph: "2022 Jul 22 - 2022 Aug 21",
      status: "Pending",
      progresstext: "$ 0 out of $ 1,000 Budget",
      progresstext1: "-- days left",
      Impression: "-- imp",
      Reach: "-- users",
      Click: "-- clicks"
    }
    ,
    {
      heading: "Beat the heat with Coca-Cola",
      Paragraph: "2022 Jul 22 - 2022 Aug 21",
      status: "Pending",
      progresstext: "$ 0 out of $ 1,000 Budget",
      progresstext1: "-- days left",
      Impression: "-- imp",
      Reach: "-- users",
      Click: "-- clicks"
    },

    {
      heading: "Can't Beat The Real Thing...",
      Paragraph: "2022 Jul 22 - 2022 Aug 21",
      status: "Active",
      progresstext: "$ 400 out of $ 1,000 Budget",
      progresstext1: "18 days left",
      Impression: "4,004 imp ",
      Reach: "5,890 users",
      Click: "6,238 clicks"
    },

    {
      heading: "They don't make 'em like th...",
      Paragraph: "2022 Jul 22 - 2022 Aug 21",
      status: "Active",
      progresstext: "$ 400 out of $ 1,000 Budget",
      progresstext1: "18 days left",
      Impression: "4,004 imp ",
      Reach: "5,890 users",
      Click: "6,238 clicks"
    },

    {
      heading: "Taste the Feeling. Coca-Cola",
      Paragraph: "2022 Jul 22 - 2022 Aug 21",
      status: "Active",
      progresstext: "$ 400 out of $ 1,000 Budget",
      progresstext1: "18 days left",
      Impression: "4,004 imp ",
      Reach: "5,890 users",
      Click: "6,238 clicks"
    },

    {
      heading: "This is how we celebrate wi...",
      Paragraph: "2022 Jul 22 - 2022 Aug 21",
      status: "Active",
      progresstext: "$ 400 out of $ 1,000 Budget",
      progresstext1: "18 days left",
      Impression: "4,004 imp ",
      Reach: "5,890 users",
      Click: "6,238 clicks"
    },

    {
      heading: "#ChooseHappiness #Coca-...",
      Paragraph: "2022 Jul 22 - 2022 Aug 21",
      status: "Completed",
      progresstext: "$ 400 out of $ 1,000 Budget",
      progresstext1: "18 days left",
      Impression: "4,004 imp ",
      Reach: "5,890 users",
      Click: "6,238 clicks"
    },
    {
      heading: "Things go better with Coca...",
      Paragraph: "2022 Jul 22 - 2022 Aug 21",
      status: "Completed",
      progresstext: "$ 400 out of $ 1,000 Budget",
      progresstext1: "18 days left",
      Impression: "4,004 imp ",
      Reach: "5,890 users",
      Click: "6,238 clicks"
    },
    {
      heading: "#EnjoyCoca-Cola",
      Paragraph: "2022 Jul 22 - 2022 Aug 21",
      status: "Completed",
      progresstext: "$ 400 out of $ 1,000 Budget",
      progresstext1: "18 days left",
      Impression: "4,004 imp ",
      Reach: "5,890 users",
      Click: "6,238 clicks"
    }

  ]


  )

  const perPageUser = 4;
  const totalPages = data.length / perPageUser;
  console.log(totalPages)

  let nextContentFrom = 0;
  const handlePageChange = (currentPage) => {
    nextContentFrom = currentPage.selected * perPageUser;
    const nextContentTo = currentPage.selected * perPageUser + 9;
    setData(data.slice(nextContentFrom, nextContentTo))
    setIndex(currentPage.selected * perPageUser + 1);
  };

  const handleSearch = () => {
    console.log(data)
    return (data.filter((item) => item.heading.toLowerCase().includes(search)))

  }

  const [statusSearch, setStatussearch] = useState(data)
  const [search, setSearch] = useState(data)

  const handleStatus = (items) => {
    const updateStatus = data.filter((currElem) => {
      return currElem.status === items
    })
    setStatussearch(updateStatus);
    setActive(!active);
    setActives(!actives);
    setActivess(!activess);
    setActivesss(!activesss);

  }
  console.log(data)

  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [focusedInput, setFocusedInput] = useState(null);

  const [active, setActive] = useState(false);
  // const handleClick = () => {
  //   setActive(!active);
  // };
  const [actives, setActives] = useState(true);

  const handleChanges = () => {

  }
  const [activess, setActivess] = useState(true);
  const [activesss, setActivesss] = useState(true);

  // const btn = document.getElementById('btn');

  // btn.addEventListener('click', function onClick() {
  //   btn.style.backgroundColor = 'salmon';
  //   btn.style.color = 'white';
  // });
  const [btnClass, setBtnClass] = useState(false);
  const [btnColor, setBtnColor] = useState("black");
  const [act, setAct] = useState(false);
  const handleClick = () => {
    setAct(!act);
  };

  const [color, setColor] = useState('red');
  const [textColor, setTextColor] = useState('white');

  return (
    <div>
      <Content />
      <div className='campaign_wrapper'>
        <div className='Campaign_header_pr'>
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
          <div className='heading_search_container'>
            <h2 className='heading_main_container'>Campaigns</h2>
            <Paper
              component="form"
              sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: 400 }}
            >
              <InputBase
                sx={{ ml: 1, flex: 1 }}
                placeholder="Search a Campaigns"
                inputProps={{ 'aria-label': 'Search a Campaigns' }}
              />
              <IconButton type="button" sx={{ p: '10px' }} aria-label="search">
                <SearchIcon />
              </IconButton>
              <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
            </Paper>
          </div>
        </div>

        {/* Tabs From Here */}

        <div className='Sub_container'>
          <div className='wrapper'>

            <div className="create-new-campaigns">
              <Link to="/create-campaigns"><button >+<span> Create New Campaigns</span></button></Link>
            </div>
            <div className="nav-campaign-tabs" >
              <Tabs>
                <ul className="nav campaign-tabs">
                  <TabList>
                    <Tab onClick={() => setStatussearch(data)}>All</Tab>
                    <Tab onClick={() => handleStatus('Pending')}>Pending</Tab>
                    <Tab onClick={() => handleStatus('Active')}>Active</Tab>
                    <Tab onClick={() => handleStatus('Completed')}>Complete</Tab>
                  </TabList>
                </ul>
              </Tabs>
            </div>
            <div className="campaign-wraper">
              <div className="campaign-top">
                <div className="header">
                  <h3>Campaigns</h3>
                  <div className="search">
                    <input
                      type="search"
                      // value={search}
                      placeholder="Search a brand / company name"
                      onChange={(e) => { setSearch(e.target.value.toLowerCase()) }}
                    />
                    <div className="search-button">
                      <i class="fa-solid fa-magnifying-glass" onClick={handleSearch}></i>
                    </div>
                  </div>
                </div>
                <DateFilter />
              </div>
              {/* <div className="tab-content campaign"> */}
              {/* <div className="tab-pane fade show active" id="All" role="tabpanel"> */}
              <div className="campaign-table">
                <table className="table">
                  <thead>
                    <tr>
                      <th scope="col">
                        Campaign
                        <span>
                          <svg
                            id="Component_398_2"
                            data-name="Component 398 – 2"
                            xmlns="http://www.w3.org/2000/svg"
                            width="20"
                            height="20"
                            viewBox="0 0 20 20"
                          >
                            <path
                              id="Path_6058"
                              data-name="Path 6058"
                              d="M3,4H13.111M3,7h7M3,10h7m3.889-3v9m0,0-3.111-3m3.111,3L17,13"
                              transform="translate(0)"
                              fill="none"
                              stroke="#2394ae"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="1"
                            ></path>
                          </svg>
                        </span>
                      </th>
                      <th scope="col">Status</th>
                      <th scope="col">Progress</th>
                      <th scope="col">Impression</th>
                      <th scope="col">Reach</th>
                      <th scope="col">Click</th>
                    </tr>
                  </thead>
                  <tbody>
                    {statusSearch &&
                      // statusSearch.filter((item) => item.heading.toLowerCase().includes(search))
                      statusSearch.map((result) => {
                        console.log(result)
                        return (
                          <tr>
                            <td>
                              <h4>{result.heading}</h4>
                              <p>{result.Paragraph}</p>
                            </td>
                            <td>
                              <h4 className={result.status} setQuery={result.status}>{result.status}</h4>
                            </td><td>
                              <div class="progress-text">
                                <p>{result.progresstext}</p>
                                <p>{result.progresstext1}</p>
                              </div>
                              <div class="progress">
                                <div
                                  class={result.status}
                                  role="progressbar"
                                  aria-valuenow="75"
                                  aria-valuemin="0"
                                  aria-valuemax="100"
                                ></div>
                              </div>
                            </td><td>
                              <h4>{result.Impression}</h4>
                            </td><td>
                              <h4>{result.Reach}</h4>
                            </td><td>
                              <h4>{result.Click}</h4>
                            </td>
                          </tr>

                        )
                      })}
                  </tbody>
                </table>
              </div>
              {/* </div> */}
              {/* </div> */}
            </div>
            {data &&
              data.length > 4 &&
              (
                <div className="Pagination">
                  <ReactPaginate
                    nextClassName={''} //clientList.data.result.length < rowsPerPage && "nextClassName"
                    previousLabel={'< Previous'}
                    nextLabel={'next >'}
                    pageCount={totalPages}
                    onPageChange={handlePageChange}
                    marginPagesDisplayed={1}
                    pageRangeDisplayed={5}
                    containerClassName={'paginationBttns'}
                    previousLinkClassName={'previousBttn'}
                    nextLinkClassName={'nextBttn'}
                    disabledClassName={'paginationDisabled'}
                    activeClassName={'paginationActive'}
                  />
                </div>
              )
            }
          </div>
        </div>
      </div>



    </div>

  )
}

export default Index
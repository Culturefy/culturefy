import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './Campaigns.css'
import ReactPaginate from 'react-paginate';
import '../component/Content.css'
import Calender from "../assets/calender.svg"


const Index = () => {

  // const [inputText, setInputText] = useState("");
  // let inputHandler = (e) => {
  //   //convert input text to lower case
  //   var lowerCase = e.target.value.toLowerCase();
  //   setInputText(lowerCase);
  // };
  const [search, setSearch] = useState()
  const [index, setIndex] = useState()
  const [data, setData] = useState([
    {
      heading: "Open a Coke, Open Happi...",
      Paragraph: "2022 Jul 22 - 2022 Aug 21",
      status: "Pending",
      progresstext: "$ 0 out of $ 1,000 Goal",
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
      progresstext: "$ 0 out of $ 1,000 Goal",
      progresstext1: "-- days left",
      Impression: "-- imp",
      Reach: "-- users",
      Click: "-- clicks"
    },

    {
      heading: "Can't Beat The Real Thing...",
      Paragraph: "2022 Jul 22 - 2022 Aug 21",
      status: "Active",
      progresstext: "$ 400 out of $ 1,000 Goal",
      progresstext1: "18 days left",
      Impression: "4,004 imp ",
      Reach: "5,890 users",
      Click: "6,238 clicks"
    },

    {
      heading: "They don't make 'em like th...",
      Paragraph: "2022 Jul 22 - 2022 Aug 21",
      status: "Active",
      progresstext: "$ 400 out of $ 1,000 Goal",
      progresstext1: "18 days left",
      Impression: "4,004 imp ",
      Reach: "5,890 users",
      Click: "6,238 clicks"
    },

    {
      heading: "Taste the Feeling. Coca-Cola",
      Paragraph: "2022 Jul 22 - 2022 Aug 21",
      status: "Active",
      progresstext: "$ 400 out of $ 1,000 Goal",
      progresstext1: "18 days left",
      Impression: "4,004 imp ",
      Reach: "5,890 users",
      Click: "6,238 clicks"
    },

    {
      heading: "This is how we celebrate wi...",
      Paragraph: "2022 Jul 22 - 2022 Aug 21",
      status: "Active",
      progresstext: "$ 400 out of $ 1,000 Goal",
      progresstext1: "18 days left",
      Impression: "4,004 imp ",
      Reach: "5,890 users",
      Click: "6,238 clicks"
    },

    {
      heading: "#ChooseHappiness #Coca-...",
      Paragraph: "2022 Jul 22 - 2022 Aug 21",
      status: "Completed",
      progresstext: "$ 400 out of $ 1,000 Goal",
      progresstext1: "18 days left",
      Impression: "4,004 imp ",
      Reach: "5,890 users",
      Click: "6,238 clicks"
    },
    {
      heading: "Things go better with Coca...",
      Paragraph: "2022 Jul 22 - 2022 Aug 21",
      status: "Completed",
      progresstext: "$ 400 out of $ 1,000 Goal",
      progresstext1: "18 days left",
      Impression: "4,004 imp ",
      Reach: "5,890 users",
      Click: "6,238 clicks"
    },
    {
      heading: "#EnjoyCoca-Cola",
      Paragraph: "2022 Jul 22 - 2022 Aug 21",
      status: "Completed",
      progresstext: "$ 400 out of $ 1,000 Goal",
      progresstext1: "18 days left",
      Impression: "4,004 imp ",
      Reach: "5,890 users",
      Click: "6,238 clicks"
    }
    // }
  ]
  )
  const perPageUser = 4;
  const totalPages = data.length / perPageUser;
  console.log(totalPages)

  let nextContentFrom = 0;
  const handlePageChange = (currentPage) => {
    nextContentFrom = currentPage.selected * perPageUser;
    const nextContentTo = currentPage.selected * perPageUser + 10;
    setData(data.slice(nextContentFrom, nextContentTo))
    setIndex(currentPage.selected * perPageUser + 1);
  };

  const handleSearch = () => {
    console.log(data)
    return (data.filter((item) => item.heading.toLowerCase().includes(search)))

  }
const [query,setQuery] = useState()
  const handleStatus = () => {
    return (data.filter((items) => items.status.toLowerCase().includes(query)))
  }
  return (
    <div className='wrapper'>
      <div className="create-new-campaigns">
        <button>+ <span> Create New Campaigns</span></button>
      </div>
      <div className="nav-campaign-tabs">
        <ul onClick={handleStatus}>
          <li><Link>All</Link></li>
          <li><Link>Pending</Link></li>
          <li><Link>Active</Link></li>
          <li><Link>Complete</Link></li>
        </ul>
      </div>
      <div className="campaign-wraper">
        <div className="campaign-top">
          <div className="header">
            <h1>Campaigns</h1>
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
          <div className="wraper-filter">
            <h4>Filter by</h4>
            <div className="search">
              <input
                type="search"
                // value={search}
                placeholder="Select a start and end dates"
              />
              <div className="search-buttons">
              <span><svg xmlns="http://www.w3.org/2000/svg" width="15.5" height="15.5" viewBox="0 0 15.5 15.5">
              <path id="Path_9118" data-name="Path 9118" d="M6.889,6.111V3m6.222,3.111V3m-7,6.222h7.778M4.556,17H15.444A1.556,1.556,0,0,0,17,15.444V6.111a1.556,1.556,0,0,0-1.556-1.556H4.556A1.556,1.556,0,0,0,3,6.111v9.333A1.556,1.556,0,0,0,4.556,17Z" transform="translate(-2.25 -2.25)" fill="none" stroke="#f5a41d" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"></path>
            </svg>
            </span>
              </div>
            </div>
            
            {/* <select
              className="filter-date">
                
              <option type="date" className="filter-date">Select a start and end dates</option>
              <option>Start Date</option>
              <option>End Date</option>
             
            </select> */}
            
          </div>
        </div>
        <div className="tab-content campaign">
          <div className="tab-pane fade show active" id="All" role="tabpanel">
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
                  {data &&
                    data.filter((item) => item.heading.toLowerCase().includes(search))
                      .map((result) => {
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
          </div>
        </div>
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
  )
}

export default Index
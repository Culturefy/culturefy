//@ts-nocheck
import React, { useState, useCallback } from 'react'
import { Link } from 'react-router-dom'
import './Campaign.css';
import DateFilter from '../../components/DateFilter';
import { Tab, Tabs, TabList } from "react-tabs"
import Search from "../../components/common/Search";
import { Pagination } from "react-pagination-bar"
import 'react-pagination-bar/dist/index.css'


const index = () => {
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
    },
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
    },



    {
      heading: "Open a Coke, Open Happi...",
      Paragraph: "2022 Jul 22 - 2022 Aug 21",
      status: "Pending",
      progresstext: "$ 0 out of $ 1,000 Budget",
      progresstext1: "-- days left",
      Impression: "-- imp",
      Reach: "-- users",
      Click: "-- clicks"
    },
    {
      heading: "Open a Coke, Open Happi...",
      Paragraph: "2022 Jul 22 - 2022 Aug 21",
      status: "Pending",
      progresstext: "$ 0 out of $ 1,000 Budget",
      progresstext1: "-- days left",
      Impression: "-- imp",
      Reach: "-- users",
      Click: "-- clicks"
    },
    {
      heading: "Open a Coke, Open Happi...",
      Paragraph: "2022 Jul 22 - 2022 Aug 21",
      status: "Pending",
      progresstext: "$ 0 out of $ 1,000 Budget",
      progresstext1: "-- days left",
      Impression: "-- imp",
      Reach: "-- users",
      Click: "-- clicks"
    },
    {
      heading: "Open a Coke, Open Happi...",
      Paragraph: "2022 Jul 22 - 2022 Aug 21",
      status: "Pending",
      progresstext: "$ 0 out of $ 1,000 Budget",
      progresstext1: "-- days left",
      Impression: "-- imp",
      Reach: "-- users",
      Click: "-- clicks"
    },
    {
      heading: "Open a Coke, Open Happi...",
      Paragraph: "2022 Jul 22 - 2022 Aug 21",
      status: "Pending",
      progresstext: "$ 0 out of $ 1,000 Budget",
      progresstext1: "-- days left",
      Impression: "-- imp",
      Reach: "-- users",
      Click: "-- clicks"
    },
    {
      heading: "Open a Coke, Open Happi...",
      Paragraph: "2022 Jul 22 - 2022 Aug 21",
      status: "Pending",
      progresstext: "$ 0 out of $ 1,000 Budget",
      progresstext1: "-- days left",
      Impression: "-- imp",
      Reach: "-- users",
      Click: "-- clicks"
    },

    {
      heading: "Open a Coke, Open Happi...",
      Paragraph: "2022 Jul 22 - 2022 Aug 21",
      status: "Pending",
      progresstext: "$ 0 out of $ 1,000 Budget",
      progresstext1: "-- days left",
      Impression: "-- imp",
      Reach: "-- users",
      Click: "-- clicks"
    },
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
    },
    {
      heading: "Open a Coke, Open Happi...",
      Paragraph: "2022 Jul 22 - 2022 Aug 21",
      status: "Pending",
      progresstext: "$ 0 out of $ 1,000 Budget",
      progresstext1: "-- days left",
      Impression: "-- imp",
      Reach: "-- users",
      Click: "-- clicks"
    },
    {
      heading: "Open a Coke, Open Happi...",
      Paragraph: "2022 Jul 22 - 2022 Aug 21",
      status: "Pending",
      progresstext: "$ 0 out of $ 1,000 Budget",
      progresstext1: "-- days left",
      Impression: "-- imp",
      Reach: "-- users",
      Click: "-- clicks"
    },
    {
      heading: "Open a Coke, Open Happi...",
      Paragraph: "2022 Jul 22 - 2022 Aug 21",
      status: "Pending",
      progresstext: "$ 0 out of $ 1,000 Budget",
      progresstext1: "-- days left",
      Impression: "-- imp",
      Reach: "-- users",
      Click: "-- clicks"
    },
    {
      heading: "Open a Coke, Open Happi...",
      Paragraph: "2022 Jul 22 - 2022 Aug 21",
      status: "Pending",
      progresstext: "$ 0 out of $ 1,000 Budget",
      progresstext1: "-- days left",
      Impression: "-- imp",
      Reach: "-- users",
      Click: "-- clicks"
    },
    {
      heading: "Open a Coke, Open Happi...",
      Paragraph: "2022 Jul 22 - 2022 Aug 21",
      status: "Pending",
      progresstext: "$ 0 out of $ 1,000 Budget",
      progresstext1: "-- days left",
      Impression: "-- imp",
      Reach: "-- users",
      Click: "-- clicks"
    },
    {
      heading: "Open a Coke, Open Happi...",
      Paragraph: "2022 Jul 22 - 2022 Aug 21",
      status: "Pending",
      progresstext: "$ 0 out of $ 1,000 Budget",
      progresstext1: "-- days left",
      Impression: "-- imp",
      Reach: "-- users",
      Click: "-- clicks"
    },

  ]
  )
  const [currentPage, setCurrentPage] = useState(1);
  const pagePostsLimit = 9;
  const [statusSearch, setStatussearch] = useState(data)

  const handleStatus = (items) => {
    const updateStatus = data.filter((currElem) => {
      return currElem.status === items
    })
    setStatussearch(updateStatus);
  }

  return (
    
      
        <div className='wrapper'>
          <div className="create-new-campaigns">
            <Link to="/campaign/create-campaigns"><button >+<span> Create New Campaigns</span></button></Link>
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
                <Search
                  placeholder="Search a brand / company name"
                  icon={true}
                  variant="seacrh2"
                />
              </div>
              <DateFilter />
            </div>
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
                    statusSearch
                      .slice((currentPage - 1) * pagePostsLimit, currentPage * pagePostsLimit)
                      .map((result) => {
                        return (
                          <tr>
                            <td>
                              <h4>{result.heading}</h4>
                              <p>{result.Paragraph}</p>
                            </td>
                            <td>
                              <h4 className={result.status} setQuery={result.status}>{result.status}</h4>
                            </td><td>
                              <div className="progress-text">
                                <p>{result.progresstext}</p>
                                <p>{result.progresstext1}</p>
                              </div>
                              <div className="progress">
                                <div
                                  className={result.status}
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
          <div className="campaign_footer">
            <Pagination
            currentPage={currentPage}
            itemsPerPage={pagePostsLimit}
            onPageChange={(pageNumber) => setCurrentPage(pageNumber)}
            totalItems={statusSearch.length}
            pageNeighbours={2}
            prevLabel='Prev'
            nextLabel='Next'
          />
          </div>

        </div>

  )
}

export default index




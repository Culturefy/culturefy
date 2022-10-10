import React from "react";
import "./Content.css";
import Campaigns from "../campaigns/Index.js";
import "../App.css";

const Content = () => {
  return (
    <div className="content">
      <div className="main-top-nav">
        <div className="list-user">
          <ul>
            <li>
              <div className="calander"></div>
            </li>
            <li>
              <div className="notification"></div>
            </li>
            <li>
              <div className="user"></div>
            </li>
          </ul>
        </div>
        <div className="bio-box">
          <h1>Campaigns</h1>
          <div className="search">
            <input type="text" placeholder="Type in to search..." />
            <div className="search-button">
              <i class="fa-solid fa-magnifying-glass"></i>
            </div>
          </div>
        </div>
      </div>
      <Campaigns />
      <div className="campaign-wraper">
        <div className="campaign-top">
          <div className="header">
            <h1>Campaigns</h1>
            <div className="search">
              <input
                type="search"
                placeholder="Search a brand / company name"
              />
              <div className="search-button">
                <i class="fa-solid fa-magnifying-glass"></i>
              </div>
            </div>
          </div>
          <div className="wraper-filter">
            <h4>Filter by</h4>{" "}
            <input
              placeholder="Select a start and end dates"
              className="filter-date"
            />
            <div>
            <i class="bi bi-calendar"></i>
            </div>
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
                  <tr>
                    <td>
                      <h4>Open a Coke, Open Happi...</h4>
                      <p>2022 Jul 22 - 2022 Aug 21</p>
                    </td>
                    <td>
                      <h4 class="status pending">Pending</h4>
                    </td>
                    <td>
                      <div class="progress-text">
                        <p>$ 0 out of $ 1,000 Goal</p>
                        <p>-- days left</p>
                      </div>
                      <div class="progress">
                        <div
                          class="progress-bar"
                          role="progressbar"
                          style={{ width: "0%" }}
                          aria-valuenow="75"
                          aria-valuemin="0"
                          aria-valuemax="100"
                        ></div>
                      </div>
                    </td>
                    <td>
                      <h4>-- imp </h4>
                    </td>
                    <td>
                      <h4>-- users</h4>
                    </td>
                    <td>
                      <h4>-- clicks</h4>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <h4>Beat the heat with Coca-Cola</h4>
                      <p>2022 Jul 22 - 2022 Aug 21</p>
                    </td>
                    <td>
                      <h4 class="status pending">Pending</h4>
                    </td>
                    <td>
                      <div class="progress-text">
                        <p>$ 0 out of $ 1,000 Goal</p>
                        <p>-- days left</p>
                      </div>
                      <div class="progress">
                        <div
                          class="progress-bar"
                          role="progressbar"
                          aria-valuenow="75"
                          aria-valuemin="0"
                          aria-valuemax="100"
                        ></div>
                      </div>
                    </td>
                    <td>
                      <h4>-- imp </h4>
                    </td>
                    <td>
                      <h4>-- users</h4>
                    </td>
                    <td>
                      <h4>-- clicks</h4>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <h4>Can't Beat The Real Thing...</h4>
                      <p>2022 Jul 22 - 2022 Aug 21</p>
                    </td>
                    <td>
                      <h4 class="status active">Active</h4>
                    </td>
                    <td>
                      <div class="progress-text">
                        <p>$ 400 out of $ 1,000 Goal</p>
                        <p>18 days left</p>
                      </div>
                      <div class="progress active">
                        <div
                          class="progress-bar"
                          role="progressbar"
                          style={{ width: "40%" }}
                          aria-valuenow="75"
                          aria-valuemin="0"
                          aria-valuemax="100"
                        ></div>
                      </div>
                    </td>
                    <td>
                      <h4>4,004 imp </h4>
                    </td>
                    <td>
                      <h4>5,890 users</h4>
                    </td>
                    <td>
                      <h4>6,238 clicks</h4>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <h4>They don't make 'em like th...</h4>
                      <p>2022 Jul 22 - 2022 Aug 21</p>
                    </td>
                    <td>
                      <h4 class="status active">Active</h4>
                    </td>
                    <td>
                      <div class="progress-text">
                        <p>$ 400 out of $ 1,000 Goal</p>
                        <p>18 days left</p>
                      </div>
                      <div class="progress active">
                        <div
                          class="progress-bar"
                          role="progressbar"
                          style={{ width: "40%" }}
                          aria-valuenow="75"
                          aria-valuemin="0"
                          aria-valuemax="100"
                        ></div>
                      </div>
                    </td>
                    <td>
                      <h4>4,004 imp </h4>
                    </td>
                    <td>
                      <h4>5,890 users</h4>
                    </td>
                    <td>
                      <h4>6,238 clicks</h4>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <h4>Taste the Feeling. Coca-Cola</h4>
                      <p>2022 Jul 22 - 2022 Aug 21</p>
                    </td>
                    <td>
                      <h4 class="status active">Active</h4>
                    </td>
                    <td>
                      <div class="progress-text">
                        <p>$ 400 out of $ 1,000 Goal</p>
                        <p>18 days left</p>
                      </div>
                      <div class="progress active">
                        <div
                          class="progress-bar"
                          role="progressbar"
                          style={{ width: "40%" }}
                          aria-valuenow="75"
                          aria-valuemin="0"
                          aria-valuemax="100"
                        ></div>
                      </div>
                    </td>
                    <td>
                      <h4>4,004 imp </h4>
                    </td>
                    <td>
                      <h4>5,890 users</h4>
                    </td>
                    <td>
                      <h4>6,238 clicks</h4>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <h4>This is how we celebrate wi...</h4>
                      <p>2022 Jul 22 - 2022 Aug 21</p>
                    </td>
                    <td>
                      <h4 class="status active">Active</h4>
                    </td>
                    <td>
                      <div class="progress-text">
                        <p>$ 400 out of $ 1,000 Goal</p>
                        <p>18 days left</p>
                      </div>
                      <div class="progress active">
                        <div
                          class="progress-bar"
                          role="progressbar"
                          style={{ width: "40%" }}
                          aria-valuenow="75"
                          aria-valuemin="0"
                          aria-valuemax="100"
                        ></div>
                      </div>
                    </td>
                    <td>
                      <h4>4,004 imp </h4>
                    </td>
                    <td>
                      <h4>5,890 users</h4>
                    </td>
                    <td>
                      <h4>6,238 clicks</h4>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <h4>#ChooseHappiness #Coca-...</h4>
                      <p>2022 Jul 22 - 2022 Aug 21</p>
                    </td>
                    <td>
                      <h4 class="status completed">Completed</h4>
                    </td>
                    <td>
                      <div class="progress-text">
                        <p>$ 1,000 out of $ 1,000 Goal</p>
                        <p>Goal!</p>
                      </div>
                      <div class="progress completed">
                        <div
                          class="progress-bar"
                          role="progressbar"
                          style={{ width: "40%" }}
                          aria-valuenow="75"
                          aria-valuemin="0"
                          aria-valuemax="100"
                        ></div>
                      </div>
                    </td>
                    <td>
                      <h4>4,004 imp </h4>
                    </td>
                    <td>
                      <h4>5,890 users</h4>
                    </td>
                    <td>
                      <h4>6,238 clicks</h4>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <h4>Things go better with Coca...</h4>
                      <p>2022 Jul 22 - 2022 Aug 21</p>
                    </td>
                    <td>
                      <h4 class="status completed">Completed</h4>
                    </td>
                    <td>
                      <div class="progress-text">
                        <p>$ 1,000 out of $ 1,000 Goal</p>
                        <p>Goal!</p>
                      </div>
                      <div class="progress completed">
                        <div
                          class="progress-bar"
                          role="progressbar"
                          style={{ width: "0%" }}
                          aria-valuenow="75"
                          aria-valuemin="0"
                          aria-valuemax="100"
                        ></div>
                      </div>
                    </td>
                    <td>
                      <h4>4,004 imp </h4>
                    </td>
                    <td>
                      <h4>5,890 users</h4>
                    </td>
                    <td>
                      <h4>6,238 clicks</h4>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <h4>#EnjoyCoca-Cola</h4>
                      <p>2022 Jul 22 - 2022 Aug 21</p>
                    </td>
                    <td>
                      <h4 class="status completed">Completed</h4>
                    </td>
                    <td>
                      <div class="progress-text">
                        <p>$ 1,000 out of $ 1,000 Goal</p>
                        <p>Goal!</p>
                      </div>
                      <div class="progress completed">
                        <div
                          class="progress-bar"
                          role="progressbar"
                          style={{ width: "100%" }}
                          aria-valuenow="75"
                          aria-valuemin="0"
                          aria-valuemax="100"
                        ></div>
                      </div>
                    </td>
                    <td>
                      <h4>4,004 imp </h4>
                    </td>
                    <td>
                      <h4>5,890 users</h4>
                    </td>
                    <td>
                      <h4>6,238 clicks</h4>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* </div> */}
      </div>
    </div>
  );
};

export default Content;

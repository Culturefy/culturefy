//@ts-nocheck
import React from "react";
import "./WorkspaceAgendaTemplates.css";
import { Link } from "react-router-dom";
import { Outlet } from "react-router-dom";
import { useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import user from "../../../assets/campaign/meet user.png";
import user2 from "../../../assets/campaign/meet user2.png";
import Chat from '../../../components/Chat'
const index = () => {
  const navigate = useNavigate();
  const [change, setChange] = useState(false);

  const changeHandler = () => {
    setChange(true);
  };
  const linetwoHandler = () => {
    setChange(true);
  };
  const thirdHandler = () => {
    setChange(true);
  };
  const fourthtempHandler = () => {
    setChange(true);
  };
  const CreateTemplateHandler = () => {
    setChange(true);
  };

  const item = useSelector((state) => state.counter);
  console.log(item, "redux");

  const locationHandler = (e) => {
    navigate("/workspaceagendatemplates/create_newTemplate");
    setChange(true);
  };
  return (
    <>
      <div className="workspace_agenda_main_workspace_agendas_wrepper">
        <div className="workspace_agendastemplates_wrepper">
          <div className="agendaview_inner_wrepper">
            <div className="agendatemplate_section">
              <div className="agendatemplate_header">
                <h4>Choose Agenda Template</h4>
                <Link to="/workspacesfile/workspaceagendas">
                  <i className="fa-solid fa-xmark cross"></i>
                </Link>
              </div>

              {change ? (
                ""
              ) : (
                <div className="Agenda_buttons">
                  <Link to="/workspacesfile/create_newTemplate">
                  <button className="create_template">
                    Create New Template +
                  </button>
                  </Link>
                </div>
              )}

              {change ? (
                <div className="agenda_view_section">
                  <Outlet />
                </div>
              ) : (
                <div className="agenda_view_section">
                  {/* Map */}
                  {/* ===========================================1========================================================= */}
                  <Link
                    to="/workspacesfile/create_newTemplate"
                    style={{ textDecoration: "none", color: "lightGrey" }}
                  >
                    <div
                      className="agendas_view  create_new"
                      onClick={CreateTemplateHandler}
                    >
                      <h4>Create New Template+</h4>
                    </div>
                  </Link>
                  {item.map((currValue, index) => {
                    return (
                      <div
                        className="agendas_view"
                        key={index}
                        onClick={locationHandler}
                      >
                        {console.log(currValue.abc[0].props.children, "currrr")}
                        {currValue.abc}
                      </div>
                    );
                  })}

                  {/* ============================================2======================================================== */}

                  <Link
                    to="/workspaceagendatemplates/agenda_template_second"
                    style={{ color: "black", textDecoration: "none" }}
                  >
                    <div className="agendas_view" onClick={linetwoHandler}>
                      <h6>Agenda</h6>
                      <div className="agenda_date_time">
                        <span>[Location]</span>
                        <span>[Date]</span>
                        <span>[Time]</span>
                      </div>
                      <div className="agenda_items">
                        <p>Agenda Items</p>
                        <ol type="I">
                          <li>
                            <p style={{ color: "white" }}>abc</p>
                            <ol type="a">
                              <li></li>
                              <li></li>
                              <li></li>
                            </ol>
                          </li>
                          <li>
                            <p style={{ color: "white" }}>abc</p>
                            <ol type="a">
                              <li></li>
                              <li></li>
                              <li></li>
                            </ol>
                          </li>
                          <li>
                            <p style={{ color: "white" }}>abc</p>
                            <ol type="a">
                              <li></li>
                              <li></li>
                              <li></li>
                            </ol>
                          </li>
                        </ol>
                      </div>
                    </div>
                  </Link>

                  {/* =============================================3=================================================================== */}

                  <Link
                    to="/workspaceagendatemplates/agenda_template_third"
                    style={{ color: "black", textDecoration: "none" }}
                  >
                    <div className="agendas_view_style3" onClick={thirdHandler}>
                      <div className="agenda_style3">
                        <h6>Agenda</h6>
                        <div className="agenda_list">
                          <ul>
                            <li>Location</li>
                            <li>Date</li>
                            <li>Time</li>
                          </ul>
                          <ul style={{ marginLeft: "10px" }}>
                            <li>[Location]</li>
                            <li>[Meeting Date]</li>
                            <li>[Meeting Time]</li>
                          </ul>
                        </div>
                      </div>
                      <div
                        className="agenda_items"
                        style={{ padding: "0 10px" }}
                      >
                        <p>Agenda Items</p>
                        <ol type="I">
                          <li>
                            <p style={{ color: "white" }}>abc</p>
                            <ol type="a">
                              <li></li>
                              <li></li>
                              <li></li>
                            </ol>
                          </li>
                          <li>
                            <p style={{ color: "white" }}>abc</p>
                            <ol type="a">
                              <li></li>
                              <li></li>
                              <li></li>
                            </ol>
                          </li>
                          <li>
                            <p style={{ color: "white" }}>abc</p>
                            <ol type="a">
                              <li></li>
                              <li></li>
                              <li></li>
                            </ol>
                          </li>
                        </ol>
                      </div>
                    </div>
                  </Link>

                  {/* =============================================4======================================================= */}

                  <Link
                    to="/workspaceagendatemplates/agenda_template_fourth"
                    style={{ color: "black", textDecoration: "none" }}
                  >
                    <div className="agendas_view" onClick={fourthtempHandler}>
                      <h6>Agenda</h6>
                      <div className="agenda_date_time">
                        <span>July 6,2022</span>
                        <span>1:00 PM EST</span>
                      </div>
                      <div className="agenda_items">
                        <p>Agenda Items</p>
                        <ol type="I">
                          <li>
                            <p style={{ color: "white" }}>abc</p>
                            <ol type="I">
                              <li>
                                <span> Talking Point Number one</span>
                              </li>
                              <li>
                                <span> Second Talking Point</span>
                              </li>
                              <li>
                                <span> Next Topic of discussion</span>
                              </li>
                            </ol>
                          </li>
                          <li>
                            <p style={{ color: "white" }}>abc</p>
                            <ol type="I">
                              <li>
                                <span> Talking Point Number one</span>
                              </li>
                              <li>
                                <span> Second Talking Point</span>
                              </li>
                              <li>
                                <span> Next Topic of discussion</span>
                              </li>
                            </ol>
                          </li>
                          <li>
                            <p style={{ color: "white" }}>abc</p>
                            <ol type="I">
                              <li>
                                <span> Talking Point Number one</span>
                              </li>
                              <li>
                                <span> Second Talking Point</span>
                              </li>
                              <li>
                                <span> Next Topic of discussion</span>
                              </li>
                            </ol>
                          </li>
                        </ol>
                      </div>
                    </div>
                  </Link>
                  {/* ==============================================5====================================================== */}

                  <div className="agendas_view">
                    <h6>Agenda</h6>
                    <div className="agenda_date_time">
                      <span>[Location]</span>
                      <span>[Date]</span>
                      <span>[Time]</span>
                    </div>
                    <div className="agenda_items">
                      <p>Agenda Items</p>
                      <ol type="I">
                        <li>
                          <p style={{ color: "white" }}>abc</p>
                          <ol type="a">
                            <li></li>
                            <li></li>
                            <li></li>
                          </ol>
                        </li>
                        <li>
                          <p style={{ color: "white" }}>abc</p>
                          <ol type="a">
                            <li></li>
                            <li></li>
                            <li></li>
                          </ol>
                        </li>
                        <li>
                          <p style={{ color: "white" }}>abc</p>
                          <ol type="a">
                            <li></li>
                            <li></li>
                            <li></li>
                          </ol>
                        </li>
                      </ol>
                    </div>
                  </div>

                  {/* ===================================================6================================================= */}
                  <Link
                    to="/workspaceagendatemplates/agenda_template_line"
                    style={{ color: "black", textDecoration: "none" }}
                  >
                    <div
                      className="agendas_view_style3"
                      onClick={changeHandler}
                    >
                      <div className="agenda_style6">
                        <h6
                          style={{
                            color: "#bf161f",
                            fontFamily: "Graphik_Bold",
                          }}
                        >
                          Agenda
                        </h6>
                        <div className="agenda_list">
                          <ul>
                            <li>Location</li>
                            <li>Date</li>
                            <li>Time</li>
                          </ul>
                          <ul style={{ marginLeft: "10px" }}>
                            <li>[Location]</li>
                            <li>[Meeting Date]</li>
                            <li>[Meeting Time]</li>
                          </ul>
                        </div>
                      </div>
                      <div
                        className="agenda_items"
                        style={{ padding: "0 10px" }}
                      >
                        <p
                          style={{
                            color: "#bf161f",
                            fontFamily: "Graphik_Bold",
                          }}
                        >
                          Agenda Items
                        </p>
                        <ol type="I">
                          <li>
                            <p style={{ color: "white" }}>abc</p>
                            <ol type="a">
                              <li></li>
                              <li></li>
                              <li></li>
                            </ol>
                          </li>
                          <li>
                            <p style={{ color: "white" }}>abc</p>
                            <ol type="a">
                              <li></li>
                              <li></li>
                              <li></li>
                            </ol>
                          </li>
                          <li>
                            <p style={{ color: "white" }}>abc</p>
                            <ol type="a">
                              <li></li>
                              <li></li>
                              <li></li>
                            </ol>
                          </li>
                        </ol>
                      </div>
                    </div>
                  </Link>
                </div>
              )}
            </div>
            <div className="agendacall_section">
              <div className="agendacall_section_cmnt"></div>
              <div className="agendacall_section_vc">
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
              </div>
              <div className="agendacall_section_chat">
              <Chat/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default index;

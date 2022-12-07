//@ts-nocheck
import React, { useState } from "react";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import './Task.css'

const index = () => {
    const [arrow, setarrow] = useState(false);
    const [state, setState] = React.useState({
        top: false,
        left: false,
        bottom: false,
        right: false,
    });
    const [user, setuser] = useState(false);
    const toggleDrawer = (anchor, open) => (event) => {
        if (
            event.type === "keydown" &&
            (event.key === "Tab" || event.key === "Shift")
        ) {
            return;
        }
        setState({ ...state, [anchor]: open });
        if (arrow === false) {
            setarrow(true);
        } else if (arrow === true) {
            setarrow(false);
        }
    };
    return (
        <>
            {["right"].map((anchor) => (
                <React.Fragment key={anchor}>
                    <div className="team_drawer">
                        <Button onClick={toggleDrawer(anchor, true)} >
                            {!arrow ? <ArrowBackIosIcon style={{ color: "black", fontSize: "16px" }} /> : null}
                            Task
                            {arrow ? (
                                <ArrowForwardIosIcon style={{ color: "black", fontSize: "16px" }} />
                            ) : null}
                        </Button>
                    </div>

                    {arrow ? (
                        <div
                            anchor={anchor}
                            open={state[anchor]}
                            onClose={toggleDrawer(anchor, false)}
                            className="drawer"
                        >
                        
                            <div className="drawer_inner_conntainer">
                                <div className="section">
                                    <ul>
                                        <li>
                                            <div className="section_li">
                                                <input type="checkbox" name="" id="" />
                                                <span>Section A</span>
                                            </div>
                                            <ul>
                                                <li>
                                                    <div className="section_inner_li">
                                                        <i class="fa-solid fa-align-justify section_plus "></i>
                                                        <input type="checkbox" name="" id="" />
                                                        <span>Task one</span>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="section_inner_li">
                                                        <i class="fa-solid fa-align-justify section_plus"></i>
                                                        <input type="checkbox" name="" id="" />
                                                        <span>Task one</span>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="section_inner_li">
                                                        <i class="fa-solid fa-align-justify section_plus"></i>
                                                        <input type="checkbox" name="" id="" />
                                                        <span>Task one</span>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="section_inner_li">
                                                        <i class="fa-solid fa-align-justify section_plus"></i>
                                                        <input type="checkbox" name="" id="" />
                                                        <span>Task one</span>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="section_inner_li">
                                                        <i class="fa-solid fa-align-justify section_plus"></i>
                                                        <input type="checkbox" name="" id="" />
                                                        <span>Task one</span>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="section_inner_li">
                                                        <i class="fa-solid fa-align-justify section_plus"></i>
                                                        <input type="checkbox" name="" id="" />
                                                        <span>Task one</span>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="section_inner_li">
                                                        <i class="fa-solid fa-plus section_plus"></i>

                                                        <span className="section_additem">
                                                            Add items...
                                                        </span>
                                                    </div>
                                                </li>
                                            </ul>
                                        </li>
                                        <li>
                                            <div className="section_li">
                                                <input type="checkbox" name="" id="" />
                                                <span>Section B</span>
                                            </div>
                                            <ul>
                                                <li>
                                                    <div className="section_inner_li">
                                                        <i class="fa-solid fa-align-justify section_plus "></i>
                                                        <input type="checkbox" name="" id="" />
                                                        <span>Task one</span>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="section_inner_li">
                                                        <i class="fa-solid fa-align-justify section_plus"></i>
                                                        <input type="checkbox" name="" id="" />
                                                        <span>Task one</span>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="section_inner_li">
                                                        <i class="fa-solid fa-align-justify section_plus"></i>
                                                        <input type="checkbox" name="" id="" />
                                                        <span>Task one</span>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="section_inner_li">
                                                        <i class="fa-solid fa-align-justify section_plus"></i>
                                                        <input type="checkbox" name="" id="" />
                                                        <span>Task one</span>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="section_inner_li">
                                                        <i class="fa-solid fa-align-justify section_plus"></i>
                                                        <input type="checkbox" name="" id="" />
                                                        <span>Task one</span>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="section_inner_li">
                                                        <i class="fa-solid fa-align-justify section_plus"></i>
                                                        <input type="checkbox" name="" id="" />
                                                        <span>Task one</span>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="section_inner_li">
                                                        <Link to="/workspace/meetingview">
                                                            <i class="fa-solid fa-plus section_plus"></i>

                                                            <span className="section_additem">
                                                                Add items...
                                                            </span>
                                                        </Link>
                                                    </div>
                                                </li>
                                            </ul>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    ) : (
                        ""
                    )}
                </React.Fragment>
            ))}
        </>
    )
}

export default index


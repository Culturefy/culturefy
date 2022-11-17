import React, { useState } from 'react'
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import drawer_user1 from '../assets/p-1.png'
// Mui Dialog
// import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
// import MuiAvtar from "./MuiAvtar";
import MuiAvtar from "../WorkSpace/MuiAvtar";

// paper
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
// Radio Button
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import { Link } from 'react-router-dom';

const Task = () => {
    const [state, setState] = React.useState({
        top: false,
        left: false,
        bottom: false,
        right: false,
    });
    const [user, setuser] = useState(false)

    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };


    const toggleDrawer = (anchor, open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }

        setState({ ...state, [anchor]: open });
    };

    const handleUsers = () => {
        if (user === false) {
            setuser(true)
        }
        else if (user === true) {
            setuser(false)
        }
    }
    return (
        <>
            {['right'].map((anchor) => (
                <React.Fragment key={anchor}>
                    <div className="team_drawer">
                        <Button onClick={toggleDrawer(anchor, true)}
                        >Task</Button>
                    </div>



                    <Drawer
                        anchor={anchor}
                        open={state[anchor]}
                        onClose={toggleDrawer(anchor, false)}
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

                                                    <span className='section_additem'>Add items...</span>
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

                                                    <span className='section_additem'>Add items...</span>
                                                </Link>
                                                </div>
                                            </li>
                                        </ul>
                                    </li>
                                </ul>


                            </div>


                        </div>

                    </Drawer>


                </React.Fragment>
            ))}
        </>
    )
}

export default Task

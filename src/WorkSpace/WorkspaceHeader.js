import React from "react"
import p1 from "../assets/p1.png";
import P1 from "../assets/p-1.png";
import P2 from "../assets/p-2.png";
import P3 from "../assets/p-3.png";
import P5 from "../assets/p5.png";
import Content from "../component/Content";
import "./WorkspaceHeader.css"
import teslalogo from '../assets/teslalogo.jpg'
// Mui Dialog
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import MuiAvtar from "./MuiAvtar";

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


const Workspace = () => {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    return (
        <>
            <div className="workspace_header_container">
                <div className="workspace_title">
                    <div className="header_logo">
                        <img src={teslalogo} alt="" />
                    </div>
                    <div className="header_title">
                        <h1>Workspace</h1>
                    </div>
                </div>
                <div className="workspace_users">
                    <div className="user1">
                        <div className="inneruser1">
                            <img src={p1} alt="" />
                        </div>
                        <p>john</p>
                    </div>
                    <div className="user1">
                        <div className="inneruser1">
                            <img src={P2} alt="" />
                        </div>
                        <p>john</p>
                    </div>
                    <div className="user1">
                        <div className="inneruser1">
                            <img src={P3} alt="" />
                        </div>
                        <p>john</p>
                    </div>
                    <div className="user1">
                        <div className="inneruser1">
                            <img src={P5} alt="" />
                        </div>
                        <p>john</p>
                    </div>
                    <div className="user1">
                        <div className="inneruser1">
                            <img src={p1} alt="" />
                        </div>
                        <p>john</p>
                    </div>
                    {/* =========== Add New User======== */}
                    <div className="user1">
                        <div className="inneruser5">
                            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-person-plus-fill " viewBox="0 0 16 16"
                                // id="basic-button"
                                // aria-controls={open ? 'basic-menu' : undefined}
                                // aria-haspopup="true"
                                // aria-expanded={open ? 'true' : undefined}
                                onClick={handleClick}>
                                <path d="M1 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
                                <path fill-rule="evenodd" d="M13.5 5a.5.5 0 0 1 .5.5V7h1.5a.5.5 0 0 1 0 1H14v1.5a.5.5 0 0 1-1 0V8h-1.5a.5.5 0 0 1 0-1H13V5.5a.5.5 0 0 1 .5-.5z" />
                            </svg>
                           
                            <Menu
                                id="basic-menu"
                                anchorEl={anchorEl}
                                open={open}
                                onClose={handleClose}
                                centered
                            >
                                <div className="header_dialg_bx">
                                    <div className="invite_frnds">
                                        <h5>Invite Friends</h5>
                                        <Paper
                                            component="form"
                                            sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: 400 }}
                                            className="invite_frnd_srchbar"
                                        >
                                            <InputBase
                                                placeholder="Search"
                                                inputProps={{ 'aria-label': 'Search a Campaigns' }}
                                            />
                                            <IconButton type="button" sx={{ p: '10px' }} aria-label="search">
                                                <SearchIcon />
                                            </IconButton>
                                            <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />

                                        </Paper>
                                    </div>
                                    <MenuItem onClick={handleClose}><MuiAvtar /></MenuItem>
                                    <MenuItem onClick={handleClose}><MuiAvtar /></MenuItem>
                                    <MenuItem onClick={handleClose}><MuiAvtar /></MenuItem>
                                    <MenuItem onClick={handleClose}><MuiAvtar /></MenuItem>
                                    <MenuItem onClick={handleClose}><MuiAvtar /></MenuItem>
                                    <MenuItem onClick={handleClose}><MuiAvtar /></MenuItem>
                                    <MenuItem onClick={handleClose}><MuiAvtar /></MenuItem>
                                    <MenuItem onClick={handleClose}><MuiAvtar /></MenuItem>
                                    <MenuItem onClick={handleClose}><MuiAvtar /></MenuItem>
                                    <MenuItem onClick={handleClose}><MuiAvtar /></MenuItem>
                                    <MenuItem onClick={handleClose}><MuiAvtar /></MenuItem>
                                    <MenuItem onClick={handleClose}><MuiAvtar /></MenuItem>
                                    <MenuItem onClick={handleClose}><MuiAvtar /></MenuItem>
                                    <MenuItem onClick={handleClose}><MuiAvtar /></MenuItem>
                                    <MenuItem onClick={handleClose}><MuiAvtar /></MenuItem>
                                    <MenuItem onClick={handleClose}><MuiAvtar /></MenuItem>
                                    <MenuItem onClick={handleClose}><MuiAvtar /></MenuItem>
                                    <MenuItem onClick={handleClose}><MuiAvtar /></MenuItem>
                                    <MenuItem onClick={handleClose}><MuiAvtar /></MenuItem>
                                    <MenuItem onClick={handleClose}><MuiAvtar /></MenuItem>
                                    <MenuItem onClick={handleClose}><MuiAvtar /></MenuItem>
                                    <MenuItem onClick={handleClose}><MuiAvtar /></MenuItem>
                                    <MenuItem onClick={handleClose}><MuiAvtar /></MenuItem>
                                    <MenuItem onClick={handleClose}><MuiAvtar /></MenuItem>
                                    <MenuItem onClick={handleClose}><MuiAvtar /></MenuItem>
                                    <MenuItem onClick={handleClose}><MuiAvtar /></MenuItem>
                                    <MenuItem onClick={handleClose}><MuiAvtar /></MenuItem>
                                    <MenuItem onClick={handleClose}><MuiAvtar /></MenuItem>
                                    <MenuItem onClick={handleClose}><MuiAvtar /></MenuItem>
                                    <MenuItem onClick={handleClose}><MuiAvtar /></MenuItem>
                                    <MenuItem onClick={handleClose}><MuiAvtar /></MenuItem>
                                    <MenuItem onClick={handleClose}><MuiAvtar /></MenuItem>
                                    <MenuItem onClick={handleClose}><MuiAvtar /></MenuItem>
                                    <MenuItem onClick={handleClose}><MuiAvtar /></MenuItem>
                                    <MenuItem onClick={handleClose}><MuiAvtar /></MenuItem>
                                    <MenuItem onClick={handleClose}><MuiAvtar /></MenuItem>
                                    <MenuItem onClick={handleClose}><MuiAvtar /></MenuItem>
                                    <MenuItem onClick={handleClose}><MuiAvtar /></MenuItem>
                                    <MenuItem onClick={handleClose}><MuiAvtar /></MenuItem>
                                    <MenuItem onClick={handleClose}><MuiAvtar /></MenuItem>
                                    <MenuItem onClick={handleClose}><MuiAvtar /></MenuItem>
                                    <MenuItem onClick={handleClose}><MuiAvtar /></MenuItem>
                                    <MenuItem onClick={handleClose}><MuiAvtar /></MenuItem>
                                    
                                </div>
                                <div className="invite_radio_btn">
                                    <div className="invite_radio_btn_ch">
                                    <FormControl style={{border:'1px solid lightGrey'}}>
                                        <RadioGroup
                                            row
                                            aria-labelledby="demo-row-radio-buttons-group-label"
                                            name="row-radio-buttons-group"
                                        >
                                            <FormControlLabel value="host" control={<Radio />} label="host" />
                                            <FormControlLabel value="speaker" control={<Radio />} label="speaker" />
                                            <FormControlLabel value="Listner" control={<Radio />} label="Listner" />
                                      
                                        </RadioGroup>
                                    </FormControl>
                                    </div>
                                    <div className="wrkspc_invite_btn">
                                        <button>Invite to Workspace</button>
                                    </div>
                                </div>
                            </Menu>
                        </div>
                     
                    </div>
          

                </div>
                <div className="workspace_user_buttons">
                    <button className="leave_call">Leave Call</button>
                    <button className="send_review_link">Send Review Link</button>
                </div>

            </div>
        </>
    )
}
export default Workspace
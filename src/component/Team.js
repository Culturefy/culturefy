import React, { useState } from "react";
import "./Team_Task.css";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import drawer_user1 from "../assets/p-1.png";
// Mui Dialog
// import Button from '@mui/material/Button';
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
// import MuiAvtar from "./MuiAvtar";
import MuiAvtar from "../WorkSpace/MuiAvtar";

// paper
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
// Radio Button
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

const Team = () => {
  const [arrow, setarrow] = useState(false);

  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });
  const [user, setuser] = useState(false);

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

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

  const handleUsers = () => {
    if (user === false) {
      setuser(true);
    } else if (user === true) {
      setuser(false);
    }
  };
  return (
    <>
      {["right"].map((anchor) => (
        <React.Fragment key={anchor}>
          <div className="team_drawer">
            <Button onClick={toggleDrawer(anchor, true)}>
              {!arrow ? <ArrowBackIosIcon style={{ color: "black",fontSize:"16px" }} /> : null}
              Team
              {arrow ? (
                <ArrowForwardIosIcon style={{ color: "black",fontSize:"16px" }} />
              ) : null}
            </Button>
          </div>
          {arrow ? (
            <div
              anchor={anchor}
              open={state[anchor]}
              onClose={toggleDrawer(anchor, false)}
            >
              <div className="drawer_inner_conntainer">
                <span
                  className="team_drawer_invite"
                  open={open}
                  onClose={handleClose}
                  onClick={handleClick}
                >
                  Invite +
                </span>
                <Menu
                  id="basic-menu"
                  anchorEl={anchorEl}
                  open={open}
                  onClose={handleClose}
                >
                  <div className="header_dialg_bx">
                    <div className="invite_frnds">
                      <h5>Invite Friends</h5>
                      <Paper
                        component="form"
                        sx={{
                          p: "2px 4px",
                          display: "flex",
                          alignItems: "center",
                          width: 400,
                        }}
                        className="invite_frnd_srchbar"
                      >
                        <InputBase
                          placeholder="Search"
                          inputProps={{ "aria-label": "Search a Campaigns" }}
                        />
                        <IconButton
                          type="button"
                          sx={{ p: "10px" }}
                          aria-label="search"
                        >
                          <SearchIcon />
                        </IconButton>
                        <Divider
                          sx={{ height: 28, m: 0.5 }}
                          orientation="vertical"
                        />
                      </Paper>
                    </div>
                    <MenuItem onClick={handleClose}>
                      <MuiAvtar />
                    </MenuItem>
                    <MenuItem onClick={handleClose}>
                      <MuiAvtar />
                    </MenuItem>
                    <MenuItem onClick={handleClose}>
                      <MuiAvtar />
                    </MenuItem>
                    <MenuItem onClick={handleClose}>
                      <MuiAvtar />
                    </MenuItem>
                    <MenuItem onClick={handleClose}>
                      <MuiAvtar />
                    </MenuItem>
                    <MenuItem onClick={handleClose}>
                      <MuiAvtar />
                    </MenuItem>
                    <MenuItem onClick={handleClose}>
                      <MuiAvtar />
                    </MenuItem>
                    <MenuItem onClick={handleClose}>
                      <MuiAvtar />
                    </MenuItem>
                    <MenuItem onClick={handleClose}>
                      <MuiAvtar />
                    </MenuItem>
                    <MenuItem onClick={handleClose}>
                      <MuiAvtar />
                    </MenuItem>
                    <MenuItem onClick={handleClose}>
                      <MuiAvtar />
                    </MenuItem>
                    <MenuItem onClick={handleClose}>
                      <MuiAvtar />
                    </MenuItem>
                    <MenuItem onClick={handleClose}>
                      <MuiAvtar />
                    </MenuItem>
                    <MenuItem onClick={handleClose}>
                      <MuiAvtar />
                    </MenuItem>
                    <MenuItem onClick={handleClose}>
                      <MuiAvtar />
                    </MenuItem>
                    <MenuItem onClick={handleClose}>
                      <MuiAvtar />
                    </MenuItem>
                    <MenuItem onClick={handleClose}>
                      <MuiAvtar />
                    </MenuItem>
                    <MenuItem onClick={handleClose}>
                      <MuiAvtar />
                    </MenuItem>
                    <MenuItem onClick={handleClose}>
                      <MuiAvtar />
                    </MenuItem>
                    <MenuItem onClick={handleClose}>
                      <MuiAvtar />
                    </MenuItem>
                    <MenuItem onClick={handleClose}>
                      <MuiAvtar />
                    </MenuItem>
                    <MenuItem onClick={handleClose}>
                      <MuiAvtar />
                    </MenuItem>
                    <MenuItem onClick={handleClose}>
                      <MuiAvtar />
                    </MenuItem>
                    <MenuItem onClick={handleClose}>
                      <MuiAvtar />
                    </MenuItem>
                    <MenuItem onClick={handleClose}>
                      <MuiAvtar />
                    </MenuItem>
                    <MenuItem onClick={handleClose}>
                      <MuiAvtar />
                    </MenuItem>
                    <MenuItem onClick={handleClose}>
                      <MuiAvtar />
                    </MenuItem>
                    <MenuItem onClick={handleClose}>
                      <MuiAvtar />
                    </MenuItem>
                    <MenuItem onClick={handleClose}>
                      <MuiAvtar />
                    </MenuItem>
                    <MenuItem onClick={handleClose}>
                      <MuiAvtar />
                    </MenuItem>
                    <MenuItem onClick={handleClose}>
                      <MuiAvtar />
                    </MenuItem>
                    <MenuItem onClick={handleClose}>
                      <MuiAvtar />
                    </MenuItem>
                    <MenuItem onClick={handleClose}>
                      <MuiAvtar />
                    </MenuItem>
                    <MenuItem onClick={handleClose}>
                      <MuiAvtar />
                    </MenuItem>
                    <MenuItem onClick={handleClose}>
                      <MuiAvtar />
                    </MenuItem>
                    <MenuItem onClick={handleClose}>
                      <MuiAvtar />
                    </MenuItem>
                    <MenuItem onClick={handleClose}>
                      <MuiAvtar />
                    </MenuItem>
                    <MenuItem onClick={handleClose}>
                      <MuiAvtar />
                    </MenuItem>
                    <MenuItem onClick={handleClose}>
                      <MuiAvtar />
                    </MenuItem>
                    <MenuItem onClick={handleClose}>
                      <MuiAvtar />
                    </MenuItem>
                    <MenuItem onClick={handleClose}>
                      <MuiAvtar />
                    </MenuItem>
                    <MenuItem onClick={handleClose}>
                      <MuiAvtar />
                    </MenuItem>
                    <MenuItem onClick={handleClose}>
                      <MuiAvtar />
                    </MenuItem>
                  </div>
                  <div className="invite_radio_btn">
                    <div className="invite_radio_btn_ch">
                      <FormControl style={{ border: "1px solid lightGrey" }}>
                        <RadioGroup
                          row
                          aria-labelledby="demo-row-radio-buttons-group-label"
                          name="row-radio-buttons-group"
                        >
                          <FormControlLabel
                            value="host"
                            control={<Radio />}
                            label="host"
                          />
                          <FormControlLabel
                            value="speaker"
                            control={<Radio />}
                            label="speaker"
                          />
                          <FormControlLabel
                            value="Listner"
                            control={<Radio />}
                            label="Listner"
                          />
                        </RadioGroup>
                      </FormControl>
                    </div>
                    <div className="wrkspc_invite_btn">
                      <button>Invite to Workspace</button>
                    </div>
                  </div>
                </Menu>

                {/* ======================================= */}
                <div className="drawer_host">
                  <h6>Hosts</h6>
                  <div className="host_container">
                    <div className="host_user">
                      <div className="host_user_image" onClick={handleUsers}>
                        <img src={drawer_user1} alt="" />
                      </div>
                    </div>
                    <div className="host_name">
                      <span>John (You)</span>
                    </div>
                  </div>
                  <div className="host_container">
                    <div className="host_user">
                      <div className="host_user_image">
                        <img src={drawer_user1} alt="" />
                      </div>
                    </div>
                    <div className="host_name">
                      <span>Benjamin</span>
                    </div>
                  </div>
                </div>

                {/* ========================================= */}
                <div className="drawer_host">
                  <h6>Speakers</h6>
                  <div className="host_container">
                    <div className="host_user">
                      <div className="host_user_image">
                        <img src={drawer_user1} alt="" />
                      </div>
                    </div>
                    <div className="host_name">
                      <span>Bilan</span>
                    </div>
                  </div>
                  <div className="host_container">
                    <div className="host_user">
                      <div className="host_user_image">
                        <img src={drawer_user1} alt="" />
                      </div>
                    </div>
                    <div className="host_name">
                      <span>Ju</span>
                    </div>
                  </div>
                  <div className="host_container">
                    <div className="host_user">
                      <div className="host_user_image">
                        <img src={drawer_user1} alt="" />
                      </div>
                    </div>
                    <div className="host_name">
                      <span>Nud</span>
                    </div>
                  </div>
                </div>

                {/* =========================================== */}
                <div className="drawer_host">
                  <h6>Listeners</h6>
                  <div className="host_container">
                    <div className="host_user">
                      <div className="host_user_image">
                        <img src={drawer_user1} alt="" />
                      </div>
                    </div>
                    <div className="host_name">
                      <span>George</span>
                    </div>
                  </div>
                  <div className="host_container">
                    <div className="host_user">
                      <div className="host_user_image">
                        <img src={drawer_user1} alt="" />
                      </div>
                    </div>
                    <div className="host_name">
                      <span>Mika</span>
                    </div>
                  </div>
                  <div className="host_container">
                    <div className="host_user">
                      <div className="host_user_image">
                        <img src={drawer_user1} alt="" />
                      </div>
                    </div>
                    <div className="host_name">
                      <span>Steve</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* </div> */}
            </div>
          ) : (
            ""
          )}
        </React.Fragment>
      ))}
    </>
  );
};

export default Team;

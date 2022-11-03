import React from 'react'
// Images
import position from '../../assets/go-circle.svg'
// Mui tabs
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import CheckIcon from '@mui/icons-material/Check';

const Position = () => {
    const [value, setValue] = React.useState("kxzjhcvnxzkvc");
    console.log(value)
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    return (

        <div className='crt_cmpgn_plan__'>
            <div className='_header_title_position'>
                <img src={position} alt="" />
                <h1>Position</h1>
            </div>
            {/* ==================CampaignGoal=========================== */}
            <div className='Position_crt_cmgn'>
                <div className='campaign_goal_check'>
                    <CheckIcon className='cmpgn_check_icon' />
                </div>
                <div >
                    <div className='position_h3'>
                        <h3>Design campaign</h3>
                    </div>
                    <div className='position_tabs'>
                        <Box sx={{ width: '100%' }} >
                            <Tabs value={value} onChange={handleChange} className="cmpg_position_tabs_header">
                                <Tab label="INFO" />
                                <Tab label="NATIVE" />
                                <Tab label="DISPLAY" />
                                <Tab label="VIDEO" />
                                <Tab label="AUDIO" />
                            </Tabs>
                        </Box>
                    </div>
                </div>
            </div>

            {value === 0 ? <div className='position_tabs_info'>
                <div className='position_tabs_title'>
                    <input type="text" placeholder='Job Title' />
                </div>
                <div className='position_tabs_fields'>
                    <input type="text" placeholder='Job Description' />
                </div>
                <div className='position_tabs_fields'>
                    <input type="text" placeholder='Job Location' />
                </div>
                {/* == */}
                <div className='position_tabs_drpdn'>
                    <div className='position_tabs_drpdn_tr'>
                        <div className='position_tabs_drpdn_td'>

                            <input type="text" placeholder='Employee Type' />

                        </div>
                        <div className='position_tabs_drpdn_td'>

                            <input type="text" placeholder='Job Function (add upto 3)' />

                        </div>
                    </div>
                </div>
                {/* ==== */}
                <div className='position_tabs_drpdn'>
                    <div className='position_tabs_drpdn_tr'>
                        <div className='position_tabs_drpdn_td'>

                            <input type="text" placeholder='Job Level' />

                        </div>
                        <div className='position_tabs_drpdn_td'>

                            <input type="text" placeholder='Company Industry (add upto 3)' />

                        </div>
                    </div>
                </div>
                {/* == */}
                <div className='position_tabs_fields'>
                    <input type="text" placeholder='Add Required Skills+' />
                </div>
            </div> : null}
            <div className='position_native'>
                <div className='position_native_inputs'>
                    <input type="text" placeholder='Add Title' />

                </div>
                <div className='position_native_inputs'>
                    <input type="text" placeholder='Ad Description' />
                </div>
                <div className='position_native_inputs'>
                    <input type="text" placeholder='URL' />
                </div>

                <div className='position_native_button'>
                    <button>uploads Files</button>
                </div>
            </div>

        </div>
    )
}

export default Position

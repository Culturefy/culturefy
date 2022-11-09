import React from 'react'

// fileUploder
import { UploadButton } from "react-uploader";
import { UploadDropzone } from "react-uploader";
import { Uploader } from "uploader";
// Images
import position from '../../assets/go-circle.svg'
import upload from '../../assets/file_upload.png'
// Mui tabs
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import CheckIcon from '@mui/icons-material/Check';

const Position = () => {
    const uploader = Uploader({
        apiKey: "free"
    });

    const [value, setValue] = React.useState(0);
    console.log(value)
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    return (
        <div className='crt_cmpgn_plan__'>
            <div className='_header_title_plan_pr'>
                <div className='_header_title_plan'>
                    <div className='_header_title_plan_ch'>
                        <img src={position} alt="" className="campaign_goal_check_pr_img"/>
                    </div>
                </div>
                <div className='position_h3_pr'>
                    <h1>Position</h1>
                </div>
            </div>
            {/* ==================CampaignGoal=========================== */}
            <div className='Position_crt_cmgn'>
                <div className='campaign_goal_check_pr'>
                    <div className='campaign_goal_check_possess_ch'>
                        <div className='campaign_goal_check'>
                            <CheckIcon className='cmpgn_check_icon' />
                        </div>
                    </div>
                </div>
                <div className='position_h3_pr' >
                    <div className='cmgn_h3'>
                        <h3>Design campaign</h3>
                    </div>
                    <div className='position_tabs'>
                        <Box sx={{ width: '100%' }} >

                            <Tabs value={value} onChange={handleChange} className="cmpg_position_tabs_header">
                                {value === 0 ?
                                    <Tab label="INFO" style={{ color: "black", fontSize: "20px", fontWeight: "700" }}
                                    /> : <Tab label="INFO" style={{ color: "lightgrey", fontSize: "20px", fontWeight: "700" }}
                                    />}
                                {
                                    value === 1 ?
                                        <Tab label="NATIVE" style={{ color: "black", fontSize: "20px", fontWeight: "700" }} /> : <Tab label="NATIVE" style={{ color: "lightgrey", fontSize: "20px", fontWeight: "700" }} />
                                }
                                {
                                    value === 2 ?

                                        <Tab label="DISPLAY" style={{ color: "black", fontSize: "20px", fontWeight: "700" }} /> :
                                        <Tab label="DISPLAY" style={{ color: "lightgrey", fontSize: "20px", fontWeight: "700" }} />
                                }

                                {
                                    value === 3 ?
                                        <Tab label="VIDEO" style={{ color: "black", fontSize: "20px", fontWeight: "700" }} /> :
                                        <Tab label="VIDEO" style={{ color: "lightgrey", fontSize: "20px", fontWeight: "700" }} />
                                }
                                {
                                    value === 4 ?
                                        <Tab label="AUDIO" style={{ color: "black", fontSize: "20px", fontWeight: "700" }} /> :
                                        <Tab label="AUDIO" style={{ color: "lightgrey", fontSize: "20px", fontWeight: "700" }} />
                                }
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

            {value === 1 ?
                <div className='position_native'>
                    {/* == */}
                    <div className='position_native_asideleft'>
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
                    {/* == */}
                    <div className='position_native_asideright'>
                        <div className='position_native_asideright_fileupload'>

                            <UploadButton uploader={uploader}
                                options={{ multi: true }}
                                onComplete={files => console.log(files)}>
                                {({ onClick }) =>
                                    <button onClick={onClick} className="uploadwer_btn" >
                                        Upload a file...
                                    </button>
                                }
                            </UploadButton>
                            <img src={upload} alt="file" className='native_file_uploader' />

                        </div>
                    </div>
                </div> : null
            }

            {
                value === 2 ?
                    <div className='position_native'>
                        {/* == */}
                        <div className='position_display_asideleft'>
                            <div className='position_display_inputs'>
                                <input type="text" placeholder='Add Title' />

                            </div>
                            <div className='position_display_inputs'>
                                <input type="text" placeholder='Ad Description' />
                            </div>
                            <div className='position_display_inputs'>
                                <input type="text" placeholder='URL' />
                            </div>

                            <div className='position_native_button'>
                                <button>uploads Files</button>
                            </div>
                        </div>
                        {/* == */}
                        <div className='position_display_asideright'>
                            <div className='position_display_asideright_fileupload'>

                                <UploadButton uploader={uploader}
                                    options={{ multi: true }}
                                    onComplete={files => console.log(files)}>
                                    {({ onClick }) =>
                                        <button onClick={onClick} className="uploadwer_btn" >
                                            Upload a file...
                                        </button>
                                    }
                                </UploadButton>
                                <img src={upload} alt="file" className='native_file_uploader' />

                            </div>
                        </div>
                    </div> : null
            }

            {
                value === 3 ?
                    <div className='position_native'>
                        {/* == */}
                        <div className='position_display_asideleft'>
                            <div className='position_display_inputs'>
                                <input type="text" placeholder='Video Title' />
                            </div>
                            <div className='position_display_inputs'>
                                <input type="text" placeholder='Video Description' />
                            </div>
                            <div className='position_display_inputs'>
                                <input type="text" placeholder='URL' />
                            </div>

                            <div className='position_native_button'>
                                <button>uploads Files</button>
                            </div>
                        </div>
                        {/* == */}
                        <div className='position_display_asideright'>
                            <div className='position_video_asideright_fileupload'>

                                <UploadButton uploader={uploader}
                                    options={{ multi: true }}
                                    onComplete={files => console.log(files)}>
                                    {({ onClick }) =>
                                        <button onClick={onClick} className="uploadwer_btn" >
                                            Upload a file...
                                        </button>
                                    }
                                </UploadButton>
                                <img src={upload} alt="file" className='native_file_uploader' />

                            </div>
                        </div>
                    </div> : null
            }


            {
                value === 4 ?
                    <div className='position_native'>
                        {/* == */}
                        <div className='position_audio_asideleft'>
                            <div className='position_display_inputs'>
                                <input type="text" placeholder='Video Title' />
                            </div>
                            <div className='position_display_inputs'>
                                <input type="text" placeholder='Video Description' />
                            </div>
                            <div className='position_display_inputs'>
                                <input type="text" placeholder='URL' />
                            </div>

                            <div className='position_native_button'>
                                <button>uploads Files</button>
                            </div>
                        </div>
                        {/* == */}
                        <div className='position_display_asideright'>
                            <div className='position_video_asideright_fileupload'>

                                <UploadButton uploader={uploader}
                                    options={{ multi: true }}
                                    onComplete={files => console.log(files)}>
                                    {({ onClick }) =>
                                        <button onClick={onClick} className="uploadwer_btn" >
                                            Upload a file...
                                        </button>
                                    }
                                </UploadButton>
                                <img src={upload} alt="file" className='native_file_uploader' />

                            </div>
                        </div>
                    </div> : null
            }





        </div>
    )
}

export default Position

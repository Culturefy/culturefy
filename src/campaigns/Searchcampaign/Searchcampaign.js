import React from 'react'
import Content from '../../component/Content'
import './Searchcampaign.css'
// mui Search
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
// Mui DropDown
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import NativeSelect from '@mui/material/NativeSelect';
import cola from '../../assets/coca-cola.png'
// Mui Button
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
const Searchcampaign = () => {

    const [age, setAge] = React.useState(''); //Mui DropDown
    const handleChange = (event) => {
        setAge(event.target.value);
    };
    return (
        <>
            <Content />
            <div className='srch_camp_pr'>

                {/* Header Parent */}
                <div className='srch_camp_hdr'>


                    {/*Header h1 */}
                    <div className='hdr_hding'>
                        <h1>Search Result</h1>
                    </div>


                    {/* Search Input */}
                    <div className='srch_inpt'>
                        <Paper
                            component="form"
                            sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: 400 }}
                        >
                            <InputBase
                                sx={{ ml: 1, flex: 1 }}
                                placeholder="Search Brand Culture Strategy"
                                inputProps={{ 'aria-label': 'Search Brand Culture Strategy' }}
                            />
                            <IconButton type="button" sx={{ p: '10px' }} aria-label="search">
                                <SearchIcon />
                            </IconButton>
                            <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
                        </Paper>
                    </div>
                </div>
            </div>

            {/* Drop Down Header */}
            <div className='srch_drpdn'>
                <div className='sech_drpdn_ch'>
                    {/* Best Match */}
                    <Box sx={{ minWidth: 0 }}>
                        <FormControl >
                            <NativeSelect
                                defaultValue="Best Match"
                                inputProps={{
                                }}
                            >
                                <option >Best Match</option>
                            </NativeSelect>
                        </FormControl>
                    </Box>

                    {/* type */}
                    <Box sx={{ minWidth: 0 }}>
                        <FormControl >
                            <NativeSelect
                                defaultValue="Best Match"
                                inputProps={{
                                }}
                            >
                                <option>Type</option>
                                <option>Audio/Video Ads</option>
                                <option>banner Ads</option>
                            </NativeSelect>
                        </FormControl>
                    </Box>

                    {/* Duration */}
                    <Box sx={{ minWidth: 0 }}>
                        <FormControl >
                            <NativeSelect
                                defaultValue="Best Match"
                                inputProps={{
                                }}
                            >
                                <option>Duration</option>
                                <option>10 sec</option>
                                <option>10-30 sec</option>
                                <option>30-60 sec</option>
                                <option>60-120 sec</option>
                                <option>120-180 sec</option>
                                <option>180 sec</option>
                            </NativeSelect>
                        </FormControl>
                    </Box>

                    {/* Archived */}
                    <Box sx={{ minWidth: 0 }}>
                        <FormControl >
                            <NativeSelect
                                defaultValue="Best Match"
                                inputProps={{
                                }}
                            >
                                <option>Archived</option>
                                <option>Audio/Video Ads</option>
                                <option>banner Ads</option>
                            </NativeSelect>
                        </FormControl>
                    </Box>
                </div>
            </div>
{/* ===================================================================================================== */}
            {/* Searched Products */}
            <div className='_srch_prdct_pr'>

                {/* Product Details Main Container */}
                <div className='_srch_prdct_details'>
                    <div className='_srch_add_descrptn'>
                        <div className='_srch_prdct_img_pr'>
                            <img src={cola} alt="" className='_srch_prdct_img' />
                        </div>
                        <div className='img_descrptn'>
                            <div className='add_dscrptn'>
                                <h6>Audio/Video AD</h6>
                                <p className='dscrptn_para'>
                                    <span>Lorem ipsum dolor sit amet  </span>
                                    <span className='srched_lttr'>Coca-Cola</span>
                                </p>
                            </div>
                            <div className='srched_ad_type'>
                                <p >Display Ad</p>
                                <span>20s</span>
                            </div>
                        </div>
                    </div>

                    {/* Type of Product */}
                    <div className='typ_of_add'>
                        <div className='srch_prdct_social'>
                            <div className='prdct_scal'>9,023 likes</div>|
                            <div className='prdct_scal'>10,950 Views</div>|
                            <div className='prdct_scal'> Posted On 2022 July 22</div>
                        </div>
                        {/* type Of Advertising */}
                        <div className='advtsng_head'>
                            <h6>Type of Advertising :</h6>
                            <p>Display Ads</p>
                        </div>
                        <div className='ad_lctn_gndr'>
                            <h6>Advertising Location/s:</h6>
                            <p>All State</p>
                        </div>
                        <div className='ad_lctn_gndr'>
                            <h6>Gender/s:</h6>
                            <p>All Gender</p>
                        </div>
                        <div className='rd_more'>
                            <h6>Read more</h6>
                        </div>

                        {/* Searched buttons */}


                        <div className='srchd_btns'>
                            <div className='edt_ad_srchd'>
                                <Stack spacing={2} direction="row" >
                                    <Button variant="outlined" className='srched_edt_btn'>Edit ad</Button>
                                </Stack>
                            </div>
                            <div className='dlt_ad_srchd'>
                                <Stack spacing={2} direction="row">
                                    <Button variant="outlined" className='srched_dlt_btn'>Delete ad</Button>
                                </Stack>
                            </div>
                            <div className='archvd_ad_srchd'>
                                <Stack spacing={2} direction="row">
                                    <Button variant="outlined" className='srched_archv_btn'>Archive ad</Button>
                                </Stack>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* ===================================================================================================== */}
            {/* Searched Products */}
            <div className='_srch_prdct_pr'>

                {/* Product Details Main Container */}
                <div className='_srch_prdct_details'>
                    <div className='_srch_add_descrptn'>
                        <div className='_srch_prdct_img_pr'>
                            <img src={cola} alt="" className='_srch_prdct_img' />
                        </div>
                        <div className='img_descrptn'>
                            <div className='add_dscrptn'>
                                <h6>Audio/Video AD</h6>
                                <p className='dscrptn_para'>
                                    <span>Lorem ipsum dolor sit amet  </span>
                                    <span className='srched_lttr'>Coca-Cola</span>
                                </p>
                            </div>
                            <div className='srched_ad_type'>
                                <p >Display Ad</p>
                                <span>20s</span>
                            </div>
                        </div>
                    </div>

                    {/* Type of Product */}
                    <div className='typ_of_add'>
                        <div className='srch_prdct_social'>
                            <div className='prdct_scal'>9,023 likes</div>|
                            <div className='prdct_scal'>10,950 Views</div>|
                            <div className='prdct_scal'> Posted On 2022 July 22</div>
                        </div>
                        {/* type Of Advertising */}
                        <div className='advtsng_head'>
                            <h6>Type of Advertising :</h6>
                            <p>Display Ads</p>
                        </div>
                        <div className='ad_lctn_gndr'>
                            <h6>Advertising Location/s:</h6>
                            <p>All State</p>
                        </div>
                        <div className='ad_lctn_gndr'>
                            <h6>Gender/s:</h6>
                            <p>All Gender</p>
                        </div>
                        <div className='rd_more'>
                            <h6>Read more</h6>
                        </div>

                        {/* Searched buttons */}


                        <div className='srchd_btns'>
                            <div className='edt_ad_srchd'>
                                <Stack spacing={2} direction="row" >
                                    <Button variant="outlined" className='srched_edt_btn'>Edit ad</Button>
                                </Stack>
                            </div>
                            <div className='dlt_ad_srchd'>
                                <Stack spacing={2} direction="row">
                                    <Button variant="outlined" className='srched_dlt_btn'>Delete ad</Button>
                                </Stack>
                            </div>
                            <div className='archvd_ad_srchd'>
                                <Stack spacing={2} direction="row">
                                    <Button variant="outlined" className='srched_archv_btn'>Archive ad</Button>
                                </Stack>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* ===================================================================================================== */}
            {/* Searched Products */}
            <div className='_srch_prdct_pr'>

                {/* Product Details Main Container */}
                <div className='_srch_prdct_details'>
                    <div className='_srch_add_descrptn'>
                        <div className='_srch_prdct_img_pr'>
                            <img src={cola} alt="" className='_srch_prdct_img' />
                        </div>
                        <div className='img_descrptn'>
                            <div className='add_dscrptn'>
                                <h6>Audio/Video AD</h6>
                                <p className='dscrptn_para'>
                                    <span>Lorem ipsum dolor sit amet  </span>
                                    <span className='srched_lttr'>Coca-Cola</span>
                                </p>
                            </div>
                            <div className='srched_ad_type'>
                                <p >Display Ad</p>
                                <span>20s</span>
                            </div>
                        </div>
                    </div>

                    {/* Type of Product */}
                    <div className='typ_of_add'>
                        <div className='srch_prdct_social'>
                            <div className='prdct_scal'>9,023 likes</div>|
                            <div className='prdct_scal'>10,950 Views</div>|
                            <div className='prdct_scal'> Posted On 2022 July 22</div>
                        </div>
                        {/* type Of Advertising */}
                        <div className='advtsng_head'>
                            <h6>Type of Advertising :</h6>
                            <p>Display Ads</p>
                        </div>
                        <div className='ad_lctn_gndr'>
                            <h6>Advertising Location/s:</h6>
                            <p>All State</p>
                        </div>
                        <div className='ad_lctn_gndr'>
                            <h6>Gender/s:</h6>
                            <p>All Gender</p>
                        </div>
                        <div className='rd_more'>
                            <h6>Read more</h6>
                        </div>

                        {/* Searched buttons */}
                        <div className='srchd_btns'>
                            <div className='edt_ad_srchd'>
                                <Stack spacing={2} direction="row" >
                                    <Button variant="outlined" className='srched_edt_btn'>Edit ad</Button>
                                </Stack>
                            </div>
                            <div className='dlt_ad_srchd'>
                                <Stack spacing={2} direction="row">
                                    <Button variant="outlined" className='srched_dlt_btn'>Delete ad</Button>
                                </Stack>
                            </div>
                            <div className='archvd_ad_srchd'>
                                <Stack spacing={2} direction="row">
                                    <Button variant="outlined" className='srched_archv_btn'>Archive ad</Button>
                                </Stack>
                            </div>
                        </div>
                    </div>
                </div>
            </div> 
        </>
    )
}

export default Searchcampaign

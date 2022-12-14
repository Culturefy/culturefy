import React from 'react'
import './Teslacampign.css'
import Carousel from 'react-bootstrap/Carousel';
import teslamobile from '../../src/assets/teslamob.png'
import Content from '../component/Content';
const Teslacampign = () => {
    return (
        <>
        <Content/>
                {/* -----------Extra Div for Header---------- */}

        <div className='bbc'>

        </div>
        <div className='teslacampign'>
            <div className='tesla_pr'>
                <div className='image_color'>
                    <img src="https://www.nicepng.com/png/full/36-362734_client-image-tesla-logo-transparent-background-white.png" alt="" />
                    <div className='color_div_pr'>
                        <div className='color_box'>
                            <button className='clr_blc'></button>
                            <button className='clr_red'></button>
                            <button className='clr_blu'></button>
                            <button className='clr_gre'></button>
                            <button className='clr_whi'></button>
                        </div>
                        <div className='hex_code'>
                            <h5 className='clr_code'>#111111</h5>
                            <h5 className='clr_code'>#E31937</h5>
                            <h5 className='clr_code'>#144178</h5>
                            <h5 className='clr_code'>#d5d5d5</h5>
                            <h5 className='clr_code'>#ffffff</h5>
                        </div>
                    </div>
                </div>
                {/*Carousel*/}
                <div className='img_slider'>
                    <Carousel fade>
                        <Carousel.Item>
                            <div>
                                <div className='image_fir'>
                                    <img
                                        className="d-block  first_img"
                                        src="https://thumbs.dreamstime.com/b/tesla-app-original-smartphone-screen-79913857.jpg"
                                    />
                                    <img
                                        className="d-block  second_img"
                                        src="https://th.bing.com/th/id/OIP.3aFASHXxV0nXaFQpxFZCVgHaFj?pid=ImgDet&rs=1"
                                        alt="Second slide"
                                    />
                                </div>
                                <div className='image_sec_'>
                                    <img
                                        className="d-block"
                                        src="https://th.bing.com/th/id/OIP.Ty_ZHLnAx9Trb9Pu8KV1-wHaEM?pid=ImgDet&rs=1"
                                        alt="Third slide"
                                    />
                                </div>
                            </div>
                        </Carousel.Item>
                        <Carousel.Item>
                            <div>
                                <div className='image_fir'>
                                    <img
                                        className="d-block  first_img"
                                        src="https://th.bing.com/th/id/R.6d637a728541e1b3181e6d30674a7496?rik=O3NU837gcW%2fR2A&riu=http%3a%2f%2frlv.zcache.com%2ftesla_letterhead_template-r8126680d62b2432eacb20e7b977db20c_vg63g_8byvr_324.jpg&ehk=9liFi8MnjoLYeFX2FDvl9qVONj4PbYqFgPXucOzRQ4Y%3d&risl=&pid=ImgRaw&r=0"
                                    />
                                    <img
                                        className="d-block  second_img"
                                        src="https://th.bing.com/th/id/OIP.oW18zIOaJnQbfmA_16Y3ygHaD5?pid=ImgDet&rs=1"
                                        alt="Second slide"
                                    />
                                </div>
                                <div className='image_sec_'>
                                    <img
                                        className="d-block "
                                        src="https://cdn.dribbble.com/users/2349068/screenshots/4697741/dribbble.png"
                                        alt="Third slide"
                                    />
                                </div>
                            </div>
                        </Carousel.Item>
                    </Carousel>
                </div>
            </div>
            <div className='comapny_details'>
                <div className='details_child'>
                    <h1>Tesla Campaign</h1>
                    <h5>
                        Tesla Campaign Description
                    </h5>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Earum minus veniam consequatur officia velit magni nulla perferendis expedita mollitia, ducimus fugiat laborum fuga repellat perspiciatis corporis amet iure saepe blanditiis?Lorem ipsum dolor sit amet consectetur adipisicing elit. Et tempora, maiores voluptate officiis corporis eaque? Porro, eveniet maxime? Facere, ipsam tempore! Iure quo esse voluptatem?</p>

                    <table className='company_details_table'>
                        <tr>
                            <th>Audience targeting</th>
                            <th>Schedule</th>
                        </tr>
                        <tr>
                            <td>Customer audiences</td>
                            <td>Starts Aug 9,2022</td>
                        </tr>
                        <tr>
                            <td>All Genders</td>
                            <td>Ends Oct 9,2023</td>
                        </tr>
                        <tr>
                            <td>All Genders</td>
                        </tr>
                    </table>
                </div>
            </div>
        </div>
        </>
    )
}

export default Teslacampign;

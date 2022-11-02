import React from 'react'
import Content from '../../component/Content'
import './Gapanalysis.css'
import user1 from '../../assets/user_img.jpg'
import user2 from '../../assets/user2.jpg'
import add_person from '../../assets/person-add.svg'
import StarBorderIcon from '@mui/icons-material/StarBorder';
import WorkspaceHeader from '../WorkspaceHeader'
import WorkspaceSidebar from '../../component/WorkspaceSidebar'
import Comment from '../../component/Comment'
import Chat from '../../component/Chat'
const Gapanalysis = () => {
    return (
        <>
            <Content />

            <div className="gapanalysis">
                <div className="gapanalysis_main_wrepper">
                    <div className="gapanalysis_header">
                        <WorkspaceHeader />
                    </div>
                    <div className="gapanalysis_inner_wrepper">
                        <div className='wrksp_gap_ana_pr'>
                            <div className='wrksp_gap_ana_ch'>
                                <h4>Gap Analysis</h4>
                            </div>
                            <div className='wrksp_gap_ana_table'>
                                <table>
                                    <tr>
                                        <th></th>
                                        <th className='gp_ana_curr'>Current State(FROM)</th>
                                        <th className='gp_ana_gaps'>GAPS</th>
                                        <th className='gp_ana_stat'>Desired Future State(TO)</th>
                                        <th className='gp_ana_ac'>Action</th>
                                    </tr>
                                    <tr>
                                        <td className='gp_ana_td'>Business Name:</td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                    </tr>
                                    <tr>
                                        <td className='gp_ana_td'>Another Title Here</td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                    </tr>       <tr>
                                        <td className='gp_ana_td'>Another Title Here</td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                    </tr>       <tr>
                                        <td className='gp_ana_td'>Another Title Here</td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                    </tr>       <tr>
                                        <td className='gp_ana_td'>Another Title Here</td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                    </tr>       <tr>
                                        <td className='gp_ana_td'>Another Title Here</td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                    </tr>       <tr>
                                        <td className='gp_ana_td'>Another Title Here</td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                    </tr>       <tr>
                                        <td className='gp_ana_td'>Another Title Here</td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                    </tr>       <tr>
                                        <td className='gp_ana_td'>Another Title Here</td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                    </tr>       <tr>
                                        <td className='gp_ana_td'>Another Title Here</td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                    </tr>
                                </table>
                                {/* fOLOOWERS */}
                                <div className='gp_flwrs_pr'>
                                    <div className='gp_flwrs_ch'>

                                        {/* 1st */}
                                        <div className="workspacesfilepng_viewer">
                                            <div className="viewer1"></div>
                                            <div className='wrkspc_flwrs_pr'>
                                                <span>Followers</span>
                                                <div className='wrkspc_flwrs'>
                                                    <div className="viewer2">
                                                        <img src={user1} alt="" />
                                                    </div>
                                                    <div className="viewer3">
                                                        <img src={user2} alt="" />
                                                    </div>
                                                    <div className="viewer4">
                                                        <img src={user1} alt="" />
                                                    </div>
                                                    <div className="viewer5">
                                                        <p>+8</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        {/* 2nd */}
                                        <div className="add_contribution">
                                            <img src={add_person} alt="" />
                                            <p>Add Followers</p>
                                        </div>

                                    </div>
                                    <div className='gp_fav'>
                                        <div className="workspacesfilepng_like">
                                            <StarBorderIcon />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="gapanalysis_comment">
                            <Comment />
                            <Chat />
                        </div>
                    </div>
                </div>
                <WorkspaceSidebar />
            </div>
        </>
    )
}

export default Gapanalysis;

import React from 'react'
import Content from '../../component/Content'
import Comment from '../../component/Comment'
import user1 from '../../assets/user_img.jpg'
import user2 from '../../assets/user2.jpg'
import add_person from '../../assets/person-add.svg'
import video from '../../assets/video1.mp4'
import Workspaces from '../WorkspaceHeader'
import WorkspaceSidebar from '../../component/WorkspaceSidebar'
import Chat from '../../component/Chat'
import { useState } from 'react'


const WorkspacefileMp4 = () => {
    const [show, setshow] = useState({
        input1: false,
        input2: false,
        input3: false,
        input4: false,
        input5: false,
        input6: false,
        input7: false,
        input8: false,
        input9: false,
        input10: false,
        input11: false,
        input12: false,
        input13: false,
        input14: false,
        input15: false,
        input16: false,
        input17: false,
        input18: false,
        input19: false,
        input20: false,
        input21: false,
        input22: false,
        input23: false,
        input24: false,
        input25: false,
        input26: false,
        input27: false,
        input28: false,
        input29: false,
        input30: false,
        input31: false,
        input32: false,
        input33: false,
        input34: false,
        input35: false,
        input36: false,
    })
    const [inputdata, setinputdata] = useState({
        inp_1: "",
        inp_2: "",
        inp_3: "",
        inp_4: "",
        inp_5: "",
        inp_6: "",
        inp_7: "",
        inp_8: "",
        inp_9: "",
        inp_10: "",
        inp_11: "",
        inp_12: "",
        inp_13: "",
        inp_14: "",
        inp_15: "",
        inp_16: "",
        inp_17: "",
        inp_18: "",
        inp_19: "",
        inp_20: "",
        inp_21: "",
        inp_22: "",
        inp_23: "",
        inp_24: "",
        inp_25: "",
        inp_26: "",
        inp_27: "",
        inp_28: "",
        inp_29: "",
        inp_30: "",
        inp_31: "",
        inp_32: "",
        inp_33: "",
        inp_34: "",
        inp_35: "",
        inp_36: "",

    })
    const [savedata, setsavedata] = useState([])

    const handleclickInput = (e) => {
        if (e === 1) { setshow({ input1: true }) }
        if (e === 2) { setshow({ input2: true }) }
        if (e === 3) { setshow({ input3: true }) }
        if (e === 4) { setshow({ input4: true }) }
        if (e === 5) { setshow({ input5: true }) }
        if (e === 6) { setshow({ input6: true }) }
        if (e === 7) { setshow({ input7: true }) }
        if (e === 8) { setshow({ input8: true }) }
        if (e === 9) { setshow({ input9: true }) }
        if (e === 10) { setshow({ input10: true }) }
        if (e === 11) { setshow({ input11: true }) }
        if (e === 12) { setshow({ input12: true }) }
        if (e === 13) { setshow({ input13: true }) }
        if (e === 14) { setshow({ input14: true }) }
        if (e === 15) { setshow({ input15: true }) }
        if (e === 16) { setshow({ input16: true }) }
        if (e === 17) { setshow({ input17: true }) }
        if (e === 18) { setshow({ input18: true }) }
        if (e === 19) { setshow({ input19: true }) }
        if (e === 20) { setshow({ input20: true }) }
        if (e === 21) { setshow({ input21: true }) }
        if (e === 22) { setshow({ input22: true }) }
        if (e === 23) { setshow({ input23: true }) }
        if (e === 24) { setshow({ input24: true }) }
        if (e === 25) { setshow({ input25: true }) }
        if (e === 26) { setshow({ input26: true }) }
        if (e === 27) { setshow({ input27: true }) }
        if (e === 28) { setshow({ input28: true }) }
        if (e === 29) { setshow({ input29: true }) }
        if (e === 30) { setshow({ input30: true }) }
        if (e === 31) { setshow({ input31: true }) }
        if (e === 32) { setshow({ input32: true }) }
        if (e === 33) { setshow({ input33: true }) }
        if (e === 34) { setshow({ input34: true }) }
        if (e === 35) { setshow({ input35: true }) }
        if (e === 36) { setshow({ input36: true }) }
    }
    const inputhandler = (e) => {
        setinputdata({ ...inputdata, [e.target.name]: e.target.value })
    }

    const submitHandler = (e) => {
        e.preventDefault()
        setsavedata([inputdata])
        setshow({
            input1: false,
            input2: false,
            input3: false,
            input4: false,
            input5: false,
            input6: false,
            input7: false,
            input8: false,
            input9: false,
            input10: false,
            input11: false,
            input12: false,
            input13: false,
            input14: false,
            input15: false,
            input16: false,
            input17: false,
            input18: false,
            input19: false,
            input20: false,
            input21: false,
            input22: false,
            input23: false,
            input24: false,
            input25: false,
            input26: false,
            input27: false,
            input28: false,
            input29: false,
            input30: false,
            input31: false,
            input32: false,
            input33: false,
            input34: false,
            input35: false,
            input36: false,
        })
    }
    console.log(savedata)
    return (
        <>
            <Content />
            <div className="workspace_file_main_wrapper">
                <div className="workspacesfile_wapper">
                    <div className="workspace_file_header">
                        <Workspaces />
                    </div>

                    <div className="inner_wepper">
                        <div className="workspacesfilepng_section">
                            <div className="workspacesfilepng_header">
                                <p>Click video to comment</p>
                            </div>
                            <div className="workspacesfilepng_image">
                                <video className='Workspace_video' style={{ width: "50vw", height: "60vh",position: "absolute" }} controls>
                                    <source src={video} type="video/mp4" />
                                    
                                </video>
                                <div className="grid_main_div">
                                    <form onSubmit={submitHandler}>
                                        <div className="grid_div" onClick={() => handleclickInput(1)}>
                                            {
                                                show.input1 ?
                                                    <input type="text" name="inp_1" id="" className='tag_input' value={inputdata.inp_1} onChange={inputhandler} />
                                                    : null

                                            }
                                            {savedata.map((e) => {
                                                return (
                                                    <div className='tagd_div'>
                                                        {
                                                            !e.inp_1 ? null : <div className="red_dot" title={e.inp_1}></div>
                                                        }
                                                    </div>
                                                )
                                            })}
                                        </div>
                                        <div className="grid_div" onClick={() => handleclickInput(2)}>
                                            {
                                                show.input2 ?
                                                    <input type="text" name="inp_2" id="" className='tag_input' value={inputdata.inp_2} onChange={inputhandler} />
                                                    : null
                                            }
                                            {savedata.map((e) => {
                                                return (
                                                    <div className='tagd_div'>
                                                        {
                                                            !e.inp_2 ? null : <div className="red_dot" title={e.inp_2}></div>
                                                        }
                                                    </div>
                                                )
                                            })}
                                        </div>
                                        <div className="grid_div" onClick={() => handleclickInput(3)}>
                                            {
                                                show.input3 ?
                                                    <input type="text" name="inp_3" id="" className='tag_input' value={inputdata.inp_3} onChange={inputhandler} />
                                                    : null
                                            }
                                            {savedata.map((e) => {
                                                return (
                                                    <div className='tagd_div'>
                                                        {
                                                            !e.inp_3 ? null : <div className="red_dot" title={e.inp_3}></div>
                                                        }
                                                    </div>
                                                )
                                            })}
                                        </div>
                                        <div className="grid_div" onClick={() => handleclickInput(4)}>
                                            {
                                                show.input4 ?
                                                    <input type="text" name="inp_4" id="" className='tag_input' value={inputdata.inp_4} onChange={inputhandler} />
                                                    : null
                                            }
                                            {savedata.map((e) => {
                                                return (
                                                    <div className='tagd_div'>
                                                        {
                                                            !e.inp_4 ? null : <div className="red_dot" title={e.inp_4}></div>
                                                        }
                                                    </div>
                                                )
                                            })}
                                        </div>
                                        <div className="grid_div" onClick={() => handleclickInput(5)}>
                                            {
                                                show.input5 ?
                                                    <input type="text" name="inp_5" id="" className='tag_input' value={inputdata.inp_5} onChange={inputhandler} />

                                                    : null
                                            }
                                            {savedata.map((e) => {
                                                return (
                                                    <div className='tagd_div'>
                                                        {
                                                            !e.inp_5 ? null : <div className="red_dot" title={e.inp_5}></div>
                                                        }

                                                    </div>
                                                )
                                            })}
                                        </div>
                                        <div className="grid_div" onClick={() => handleclickInput(6)}>
                                            {
                                                show.input6 ?
                                                    <input type="text" name="inp_6" id="" className='tag_input' value={inputdata.inp_6} onChange={inputhandler} />

                                                    : null
                                            }
                                            {savedata.map((e) => {
                                                return (
                                                    <div className='tagd_div'>
                                                        {
                                                            !e.inp_6 ? null : <div className="red_dot" title={e.inp_6}></div>
                                                        }

                                                    </div>
                                                )
                                            })}
                                        </div>
                                        <div className="grid_div" onClick={() => handleclickInput(7)}>
                                            {
                                                show.input7 ?
                                                    <input type="text" name="inp_7" id="" className='tag_input' value={inputdata.inp_7} onChange={inputhandler} />

                                                    : null
                                            }
                                            {savedata.map((e) => {
                                                return (
                                                    <div className='tagd_div'>
                                                        {
                                                            !e.inp_7 ? null : <div className="red_dot" title={e.inp_7}></div>
                                                        }

                                                    </div>
                                                )
                                            })}
                                        </div>
                                        <div className="grid_div" onClick={() => handleclickInput(8)}>
                                            {
                                                show.input8 ?
                                                    <input type="text" name="inp_8" id="" className='tag_input' value={inputdata.inp_8} onChange={inputhandler} />

                                                    : null
                                            }
                                            {savedata.map((e) => {
                                                return (
                                                    <div className='tagd_div'>
                                                        {
                                                            !e.inp_8 ? null : <div className="red_dot" title={e.inp_8}></div>
                                                        }

                                                    </div>
                                                )
                                            })}
                                        </div>
                                        <div className="grid_div" onClick={() => handleclickInput(9)}>
                                            {
                                                show.input9 ?
                                                    <input type="text" name="inp_9" id="" className='tag_input' value={inputdata.inp_9} onChange={inputhandler} />

                                                    : null
                                            }
                                            {savedata.map((e) => {
                                                return (
                                                    <div className='tagd_div'>
                                                        {
                                                            !e.inp_9 ? null : <div className="red_dot" title={e.inp_9}></div>
                                                        }

                                                    </div>
                                                )
                                            })}
                                        </div>
                                        <div className="grid_div" onClick={() => handleclickInput(10)}>
                                            {
                                                show.input10 ?
                                                    <input type="text" name="inp_10" id="" className='tag_input' value={inputdata.inp_10} onChange={inputhandler} />

                                                    : null
                                            }
                                            {savedata.map((e) => {
                                                return (
                                                    <div className='tagd_div'>
                                                        {
                                                            !e.inp_10 ? null : <div className="red_dot" title={e.inp_10}></div>
                                                        }

                                                    </div>
                                                )
                                            })}
                                        </div>
                                        <div className="grid_div" onClick={() => handleclickInput(11)}>
                                            {
                                                show.input11 ?
                                                    <input type="text" name="inp_11" id="" className='tag_input' value={inputdata.inp_11} onChange={inputhandler} />

                                                    : null
                                            }
                                            {savedata.map((e) => {
                                                return (
                                                    <div className='tagd_div'>
                                                        {
                                                            !e.inp_11 ? null : <div className="red_dot" title={e.inp_11}></div>
                                                        }

                                                    </div>
                                                )
                                            })}
                                        </div>
                                        <div className="grid_div" onClick={() => handleclickInput(12)}>
                                            {
                                                show.input12 ?
                                                    <input type="text" name="inp_12" id="" className='tag_input' value={inputdata.inp_12} onChange={inputhandler} />

                                                    : null
                                            }
                                            {savedata.map((e) => {
                                                return (
                                                    <div className='tagd_div'>
                                                        {
                                                            !e.inp_12 ? null : <div className="red_dot" title={e.inp_12}></div>
                                                        }

                                                    </div>
                                                )
                                            })}
                                        </div>
                                        <div className="grid_div" onClick={() => handleclickInput(13)}>
                                            {
                                                show.input13 ?
                                                    <input type="text" name="inp_13" id="" className='tag_input' value={inputdata.inp_13} onChange={inputhandler} />

                                                    : null
                                            }
                                            {savedata.map((e) => {
                                                return (
                                                    <div className='tagd_div'>
                                                        {
                                                            !e.inp_13 ? null : <div className="red_dot" title={e.inp_13}></div>
                                                        }

                                                    </div>
                                                )
                                            })}
                                        </div>
                                        <div className="grid_div" onClick={() => handleclickInput(14)}>
                                            {
                                                show.input14 ?
                                                    <input type="text" name="inp_14" id="" className='tag_input' value={inputdata.inp_14} onChange={inputhandler} />

                                                    : null
                                            }
                                            {savedata.map((e) => {
                                                return (
                                                    <div className='tagd_div'>
                                                        {
                                                            !e.inp_14 ? null : <div className="red_dot" title={e.inp_14}></div>
                                                        }

                                                    </div>
                                                )
                                            })}
                                        </div>
                                        <div className="grid_div" onClick={() => handleclickInput(15)}>
                                            {
                                                show.input15 ?
                                                    <input type="text" name="inp_15" id="" className='tag_input' value={inputdata.inp_15} onChange={inputhandler} />

                                                    : null
                                            }
                                            {savedata.map((e) => {
                                                return (
                                                    <div className='tagd_div'>
                                                        {
                                                            !e.inp_15 ? null : <div className="red_dot" title={e.inp_15}></div>
                                                        }

                                                    </div>
                                                )
                                            })}
                                        </div>
                                        <div className="grid_div" onClick={() => handleclickInput(16)}>
                                            {
                                                show.input16 ?
                                                    <input type="text" name="inp_16" id="" className='tag_input' value={inputdata.inp_16} onChange={inputhandler} />

                                                    : null
                                            }
                                            {savedata.map((e) => {
                                                return (
                                                    <div className='tagd_div'>
                                                        {
                                                            !e.inp_16 ? null : <div className="red_dot" title={e.inp_16}></div>
                                                        }

                                                    </div>
                                                )
                                            })}
                                        </div>
                                        <div className="grid_div" onClick={() => handleclickInput(17)}>
                                            {
                                                show.input17 ?
                                                    <input type="text" name="inp_17" id="" className='tag_input' value={inputdata.inp_17} onChange={inputhandler} />

                                                    : null
                                            }
                                            {savedata.map((e) => {
                                                return (
                                                    <div className='tagd_div'>
                                                        {
                                                            !e.inp_17 ? null : <div className="red_dot" title={e.inp_17}></div>
                                                        }

                                                    </div>
                                                )
                                            })}
                                        </div>
                                        <div className="grid_div" onClick={() => handleclickInput(18)}>
                                            {
                                                show.input18 ?
                                                    <input type="text" name="inp_18" id="" className='tag_input' value={inputdata.inp_18} onChange={inputhandler} />

                                                    : null
                                            }
                                            {savedata.map((e) => {
                                                return (
                                                    <div className='tagd_div'>
                                                        {
                                                            !e.inp_18 ? null : <div className="red_dot" title={e.inp_18}></div>
                                                        }

                                                    </div>
                                                )
                                            })}
                                        </div>
                                        <div className="grid_div" onClick={() => handleclickInput(19)}>
                                            {
                                                show.input19 ?
                                                    <input type="text" name="inp_19" id="" className='tag_input' value={inputdata.inp_19} onChange={inputhandler} />

                                                    : null
                                            }
                                            {savedata.map((e) => {
                                                return (
                                                    <div className='tagd_div'>
                                                        {
                                                            !e.inp_19 ? null : <div className="red_dot" title={e.inp_19}></div>
                                                        }

                                                    </div>
                                                )
                                            })}
                                        </div>
                                        <div className="grid_div" onClick={() => handleclickInput(20)}>
                                            {
                                                show.input20 ?
                                                    <input type="text" name="inp_20" id="" className='tag_input' value={inputdata.inp_20} onChange={inputhandler} />

                                                    : null
                                            }
                                            {savedata.map((e) => {
                                                return (
                                                    <div className='tagd_div'>
                                                        {
                                                            !e.inp_20 ? null : <div className="red_dot" title={e.inp_20}></div>
                                                        }

                                                    </div>
                                                )
                                            })}
                                        </div>
                                        <div className="grid_div" onClick={() => handleclickInput(21)}>
                                            {
                                                show.input21 ?
                                                    <input type="text" name="inp_21" id="" className='tag_input' value={inputdata.inp_21} onChange={inputhandler} />

                                                    : null
                                            }
                                            {savedata.map((e) => {
                                                return (
                                                    <div className='tagd_div'>
                                                        {
                                                            !e.inp_21 ? null : <div className="red_dot" title={e.inp_21}></div>
                                                        }

                                                    </div>
                                                )
                                            })}
                                        </div>
                                        <div className="grid_div" onClick={() => handleclickInput(22)}>
                                            {
                                                show.input22 ?
                                                    <input type="text" name="inp_22" id="" className='tag_input' value={inputdata.inp_22} onChange={inputhandler} />

                                                    : null
                                            }
                                            {savedata.map((e) => {
                                                return (
                                                    <div className='tagd_div'>
                                                        {
                                                            !e.inp_22 ? null : <div className="red_dot" title={e.inp_22}></div>
                                                        }

                                                    </div>
                                                )
                                            })}
                                        </div>
                                        <div className="grid_div" onClick={() => handleclickInput(23)}>
                                            {
                                                show.input23 ?
                                                    <input type="text" name="inp_23" id="" className='tag_input' value={inputdata.inp_23} onChange={inputhandler} />

                                                    : null
                                            }
                                            {savedata.map((e) => {
                                                return (
                                                    <div className='tagd_div'>
                                                        {
                                                            !e.inp_23 ? null : <div className="red_dot" title={e.inp_23}></div>
                                                        }

                                                    </div>
                                                )
                                            })}
                                        </div>
                                        <div className="grid_div" onClick={() => handleclickInput(24)}>
                                            {
                                                show.input24 ?
                                                    <input type="text" name="inp_24" id="" className='tag_input' value={inputdata.inp_24} onChange={inputhandler} />

                                                    : null
                                            }
                                            {savedata.map((e) => {
                                                return (
                                                    <div className='tagd_div'>
                                                        {
                                                            !e.inp_24 ? null : <div className="red_dot" title={e.inp_24}></div>
                                                        }

                                                    </div>
                                                )
                                            })}
                                        </div>
                                        <div className="grid_div" onClick={() => handleclickInput(25)}>
                                            {
                                                show.input25 ?
                                                    <input type="text" name="inp_25" id="" className='tag_input' value={inputdata.inp_25} onChange={inputhandler} />

                                                    : null
                                            }
                                            {savedata.map((e) => {
                                                return (
                                                    <div className='tagd_div'>
                                                        {
                                                            !e.inp_25 ? null : <div className="red_dot" title={e.inp_25}></div>
                                                        }

                                                    </div>
                                                )
                                            })}
                                        </div>
                                        <div className="grid_div" onClick={() => handleclickInput(26)}>
                                            {
                                                show.input26 ?
                                                    <input type="text" name="inp_26" id="" className='tag_input' value={inputdata.inp_26} onChange={inputhandler} />

                                                    : null
                                            }
                                            {savedata.map((e) => {
                                                return (
                                                    <div className='tagd_div'>
                                                        {
                                                            !e.inp_26 ? null : <div className="red_dot" title={e.inp_26}></div>
                                                        }

                                                    </div>
                                                )
                                            })}
                                        </div>
                                        <div className="grid_div" onClick={() => handleclickInput(27)}>
                                            {
                                                show.input27 ?
                                                    <input type="text" name="inp_27" id="" className='tag_input' value={inputdata.inp_27} onChange={inputhandler} />

                                                    : null
                                            }
                                            {savedata.map((e) => {
                                                return (
                                                    <div className='tagd_div'>
                                                        {
                                                            !e.inp_27 ? null : <div className="red_dot" title={e.inp_27}></div>
                                                        }

                                                    </div>
                                                )
                                            })}
                                        </div>
                                        <div className="grid_div" onClick={() => handleclickInput(28)}>
                                            {
                                                show.input28 ?
                                                    <input type="text" name="inp_28" id="" className='tag_input' value={inputdata.inp_28} onChange={inputhandler} />

                                                    : null
                                            }
                                            {savedata.map((e) => {
                                                return (
                                                    <div className='tagd_div'>
                                                        {
                                                            !e.inp_28 ? null : <div className="red_dot" title={e.inp_28}></div>
                                                        }

                                                    </div>
                                                )
                                            })}
                                        </div>
                                        <div className="grid_div" onClick={() => handleclickInput(29)}>
                                            {
                                                show.input29 ?
                                                    <input type="text" name="inp_29" id="" className='tag_input' value={inputdata.inp_29} onChange={inputhandler} />

                                                    : null
                                            }
                                            {savedata.map((e) => {
                                                return (
                                                    <div className='tagd_div'>
                                                        {
                                                            !e.inp_29 ? null : <div className="red_dot" title={e.inp_29}></div>
                                                        }

                                                    </div>
                                                )
                                            })}
                                        </div>
                                        <div className="grid_div" onClick={() => handleclickInput(30)}>
                                            {
                                                show.input30 ?
                                                    <input type="text" name="inp_30" id="" className='tag_input' value={inputdata.inp_30} onChange={inputhandler} />

                                                    : null
                                            }
                                            {savedata.map((e) => {
                                                return (
                                                    <div className='tagd_div'>
                                                        {
                                                            !e.inp_30 ? null : <div className="red_dot" title={e.inp_30}></div>
                                                        }

                                                    </div>
                                                )
                                            })}
                                        </div>
                                        <div className="grid_div" onClick={() => handleclickInput(31)}>
                                            {
                                                show.input31 ?
                                                    <input type="text" name="inp_31" id="" className='tag_input' value={inputdata.inp_31} onChange={inputhandler} />

                                                    : null
                                            }
                                            {savedata.map((e) => {
                                                return (
                                                    <div className='tagd_div'>
                                                        {
                                                            !e.inp_31 ? null : <div className="red_dot" title={e.inp_31}></div>
                                                        }

                                                    </div>
                                                )
                                            })}
                                        </div>
                                        <div className="grid_div" onClick={() => handleclickInput(32)}>
                                            {
                                                show.input32 ?
                                                    <input type="text" name="inp_32" id="" className='tag_input' value={inputdata.inp_32} onChange={inputhandler} />

                                                    : null
                                            }
                                            {savedata.map((e) => {
                                                return (
                                                    <div className='tagd_div'>
                                                        {
                                                            !e.inp_32 ? null : <div className="red_dot" title={e.inp_32}></div>
                                                        }

                                                    </div>
                                                )
                                            })}
                                        </div>
                                        <div className="grid_div" onClick={() => handleclickInput(33)}>
                                            {
                                                show.input33 ?
                                                    <input type="text" name="inp_33" id="" className='tag_input' value={inputdata.inp_33} onChange={inputhandler} />

                                                    : null
                                            }
                                            {savedata.map((e) => {
                                                return (
                                                    <div className='tagd_div'>
                                                        {
                                                            !e.inp_33 ? null : <div className="red_dot" title={e.inp_33}></div>
                                                        }

                                                    </div>
                                                )
                                            })}
                                        </div>
                                        <div className="grid_div" onClick={() => handleclickInput(34)}>
                                            {
                                                show.input34 ?
                                                    <input type="text" name="inp_34" id="" className='tag_input' value={inputdata.inp_34} onChange={inputhandler} />

                                                    : null
                                            }
                                            {savedata.map((e) => {
                                                return (
                                                    <div className='tagd_div'>
                                                        {
                                                            !e.inp_34 ? null : <div className="red_dot" title={e.inp_34}></div>
                                                        }

                                                    </div>
                                                )
                                            })}
                                        </div>
                                        <div className="grid_div" onClick={() => handleclickInput(35)}>
                                            {
                                                show.input35 ?
                                                    <input type="text" name="inp_35" id="" className='tag_input' value={inputdata.inp_35} onChange={inputhandler} />

                                                    : null
                                            }
                                            {savedata.map((e) => {
                                                return (
                                                    <div className='tagd_div'>
                                                        {
                                                            !e.inp_35 ? null : <div className="red_dot" title={e.inp_35}></div>
                                                        }

                                                    </div>
                                                )
                                            })}
                                        </div>
                                        <div className="grid_div" onClick={() => handleclickInput(36)}>
                                            {
                                                show.input36 ?
                                                    <input type="text" name="inp_36" id="" className='tag_input' value={inputdata.inp_36} onChange={inputhandler} />

                                                    : null
                                            }
                                            {savedata.map((e) => {
                                                return (
                                                    <div className='tagd_div'>
                                                        {
                                                            !e.inp_36 ? null : <div className="red_dot" title={e.inp_36}></div>
                                                        }

                                                    </div>
                                                )
                                            })}
                                        </div>
                                    </form>
                                </div>

                            </div>
                            <div className="workspacesfilepng_footer">
                                <div className="workspacesfilepng_viewer">
                                    <div className="viewer1"></div>
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
                                <div className="add_contribution">
                                    <img src={add_person} alt="" />
                                    <p>Add Contributors</p>
                                </div>
                                <div className="workspacesfilepng_like">
                                    <i class="fa-solid fa-star workspacesfilepng_likeStar"></i>
                                </div>
                            </div>
                        </div>
                        <div className="comment_section">
                            <Comment />
                            <Chat/>
                        </div>
                    </div>
                </div>
                <div className="workspacefile_footer">
                    <WorkspaceSidebar />
                </div>
            </div>
        </>
    )
}

export default WorkspacefileMp4

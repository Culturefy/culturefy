import React from 'react'
import { useState } from 'react'
import './SkillAdd.css'
const index = () => {
    const [addrow, setaddrow] = useState(false)

    const addrowHandle = () => {
        setaddrow(true)
    }
    const cancleHandle = () => {
        setaddrow(false)
    }
  return (
    <div className='Addskills_wrapper'>
            <div className="addskills_header">
                <h2>Add Skills</h2>
            </div>
            <div className="addskills_container">
                <div className="skill">
                    <span>Skill</span>
                    <div className="skill_input_container">
                        <div className="skill_Input">
                            <input type="text" placeholder='-' />
                        </div>
                        <div className="skill_cancle">
                            {addrow ? <i className="fa-solid fa-xmark cross que_cancle_btn" onClick={cancleHandle}></i> : null}
                        </div>
                    </div>
                </div>
                {
                    addrow ?
                        <div className="skill">
                            <span>Skill</span>
                            <div className="skill_input_container">
                                <div className="skill_Input">
                                    <input type="text" placeholder='-' />
                                </div>
                                <div className="skill_cancle">
                                    {addrow ? <i className="fa-solid fa-xmark cross que_cancle_btn" onClick={cancleHandle}></i> : null}
                                </div>
                            </div>
                        </div>
                         : null
                }
                <h6 className='addrow' onClick={addrowHandle}>Add Row +</h6>
                <div className="jobs_submit_buttons">
                    <button className='job_cancle'>Cancle</button>
                    <button className='Application_save'>Save</button>
                </div>
            </div>
        </div>
  )
}

export default index
import React from 'react'
import Content from '../../component/Content'
import { Link } from 'react-router-dom'
const Createpoll = () => {
  return (
    <>
      <Content />
      <div className='bbc'></div>
      <div className='Create_poll_pr'>
        <div className='create_poll_ch'>
          <Link to="/Workspacepoll">
          <h4>Cancel</h4>
          </Link>
          <div className='poll_op'>
            <input type="text" placeholder='Type question here' className='poll_que' />
            <input type="text" placeholder='Enter poll option...' className='poll_input_ot' />
            <input type="text" placeholder='Enter poll option...' className='poll_input_ot' />
            <input type="text" placeholder='Enter poll option...' className='poll_input_ot' />
            {/* cHECK BOX */}
            <label className="switch">
              <input type="checkbox" />
              <span className="slider round"></span>
            </label>
          <Link to="/Workspacepoll">
            <button className='poll_cr_btn'>Create Poll</button>
          </Link>
          </div>
        </div>
      </div>
    </>
  )
}

export default Createpoll

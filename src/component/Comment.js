import React from 'react'
import './Comment.css'
import user from '../assets/user2.jpg'
import { useState } from 'react'
import ScrollableFeed from 'react-scrollable-feed'

const Comment = () => {
  const [coomment, setComment] = useState();
  const [saveData, setSaveData] = useState([])

  const changeHandler = (e) => {
    setComment(e.target.value)
  }
  const submitHandler = (e) => {
    e.preventDefault()
    setComment("")
    if (!coomment) {
      return ("")
    } else {
      setSaveData([...saveData, coomment])
    }
  }
  return (
    <>
      <div className="comment_wepper">
        <div className='comment_wepper_ch'>
          <ScrollableFeed>
            {
              saveData.map((CurrValue, index) => {
                return (
                  <>
                    <div className="comment_div" >
                      <div className="comment_header">
                        <img src={user} alt="" />
                        <div className="h3tag" >
                          <h3>User</h3>
                        </div>
                        <div className="ptag">
                          <p>just now</p>
                        </div>
                      </div>
                      <div className="comment_text">
                        <div className="comment" key={index}>
                          <p>{CurrValue}</p>
                        </div>
                        <div className="task">
                          <p>Add to task +</p>
                        </div>
                      </div>
                      <div className="comment_reply">
                        <p style={{ marginRight: "5px" }}>Replay</p>
                        <i className="fa-solid fa-thumbs-up"></i>
                      </div>
                      <hr className="comment_hr" />
                    </div>
                  </>
                )
              })
            }
          </ScrollableFeed>
        </div>

        <form action="" className="write" onSubmit={submitHandler}>
          <input type="text"
            id=""
            placeholder='Write Something..'
            value={coomment}
            onChange={changeHandler}
          />
          <button className='_cmnt_btn' type='submit'>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-send" viewBox="0 0 16 16" style={{ color: "red" }}>
              <path d="M15.854.146a.5.5 0 0 1 .11.54l-5.819 14.547a.75.75 0 0 1-1.329.124l-3.178-4.995L.643 7.184a.75.75 0 0 1 .124-1.33L15.314.037a.5.5 0 0 1 .54.11ZM6.636 10.07l2.761 4.338L14.13 2.576 6.636 10.07Zm6.787-8.201L1.591 6.602l4.339 2.76 7.494-7.493Z" />
            </svg></button>
        </form>
      </div>

    </>
  )
}

export default Comment

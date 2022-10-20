import React from 'react'
import './Comment.css'
import user from '../assets/user2.jpg'
import send from '../assets/send.svg'

const Comment = () => {
    return (
        <>
            <div className="comment_wepper">
                <div className="comment_div">
                    <div className="comment_header">
                        <img src={user} alt="" />
                        <div className="h3tag">
                            <h3>Bimby</h3>
                        </div>
                        <div className="ptag">
                            <p>just now</p>
                        </div>
                    </div>
                    <div className="comment_text">
                      <div className="comment">
                        <p>Lorem ipsum dolor sit amet.</p>
                      </div>
                      <div className="task">
                        <p>Add to task +</p>
                      </div>
                    </div>
                    <div className="comment_reply">
                       <p style={{marginRight:"5px"}}>Replay</p>
                       <i class="fa-solid fa-thumbs-up"></i>
                    </div>
                    <hr className="comment_hr" />
                </div>
                <div className="comment_div">
                    <div className="comment_header">
                        <img src={user} alt="" />
                        <div className="h3tag">
                            <h3>Bimby</h3>
                        </div>
                        <div className="ptag">
                            <p>just now</p>
                        </div>
                    </div>
                    <div className="comment_text">
                      <div className="comment">
                        <p>Lorem ipsum dolor sit amet.</p>
                      </div>
                      <div className="task">
                        <p>Add to task +</p>
                      </div>
                    </div>
                    <div className="comment_reply">
                       <p style={{marginRight:"5px"}}>Replay</p>
                       <i class="fa-solid fa-thumbs-up"></i>
                    </div>
                    <hr className="comment_hr" />
                </div>
                <div className="comment_div">
                    <div className="comment_header">
                        <img src={user} alt="" />
                        <div className="h3tag">
                            <h3>Bimby</h3>
                        </div>
                        <div className="ptag">
                            <p>just now</p>
                        </div>
                    </div>
                    <div className="comment_text">
                      <div className="comment">
                        <p>Lorem ipsum dolor sit amet.</p>
                      </div>
                      <div className="task">
                        <p>Add to task +</p>
                      </div>
                    </div>
                    <div className="comment_reply">
                       <p style={{marginRight:"5px"}}>Replay</p>
                       <i class="fa-solid fa-thumbs-up"></i>
                    </div>
                    <hr className="comment_hr" />
                </div>
                <div className="write">
                    <input type="text"  id="" placeholder='Write Something..' />
                    <img src={send} alt="" className='send'/>
                </div>
            </div>
        </>
    )
}

export default Comment

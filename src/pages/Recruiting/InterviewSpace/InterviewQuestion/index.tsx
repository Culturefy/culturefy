import React from 'react'
import './InterviewQuestion.css'

const index = () => {
    const Question = [
        {
            q: "Question 1. Can you tell us about yourself?"
        },
        {
            q: "Question 2. How did you hear about this position?"
        },
        {
            q: "Question 3. Why do yo want to work at this company?"
        },
        {
            q: "Question 4. what are your strengths?"
        },
        {
            q: "Question 5. what are your weaknesses?"
        },
        {
            q: "Question 6. tell us about a challenge you have overcome?"
        },
        {
            q: "Question 7. what kind of environment do you work best in?"
        },
        {
            q: "Question 8. what are you most passionate about?"
        },
    ]
    return (
        <div className='interview_que_main'>
            <div className="question_inputbox">
                <input type="text" placeholder='Enter Question...' />
                <button>Enter</button>
            </div>
            {
                Question.map((e) => {
                    return (
                        <>
                            <div className="question_wrapper">
                                <div className="chackbox_div">
                                    <input type="checkbox" name="" id="" />
                                </div>
                                <div className="question_div">
                                    <span>{e.q}</span>
                                </div>
                            </div>
                        </>
                    )

                })

            }


        </div>
    )
}

export default index

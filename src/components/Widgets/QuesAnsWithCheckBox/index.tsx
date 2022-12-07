import React, { useState } from "react";
import global from "src/global.module.scss";
import Styles from "../styles.module.scss";
import Heading from "src/components/common/Heading";
import EditableAnswer from 'src/components/common/EditableAnswer'
import Button from "src/components/common/Button";
import { useDispatch } from "react-redux"
import { AppDispatch } from "src/store";
import { updateBCSanswer } from "src/store/apps/BCSanswers";

function QuesAnsWithCheckBox(props: any) {

  const [answerObj, setanswerObj] = useState(props?.questions?.answers)
  const [isTouched, setIsTouched] = useState(false)
  const dispatch = useDispatch<AppDispatch>()

  const onChange = (
    event: any,
    { card, options, subOptions }: { card: any, options: any, subOptions: any }
  ) => {

    setIsTouched(true)

    let cloneAnswerObj = JSON.parse(JSON.stringify(answerObj));

    const selectedAnswerObjIndex = answerObj.answer.findIndex((c) => c._id === card._id);
    const selectedOptionObjIndex = card.options.findIndex((item) => item._id === options._id);
    const selectedSubOptionObjIndex = card.options[selectedOptionObjIndex].subOptions.findIndex((item) => item._id === subOptions._id);

    cloneAnswerObj = {
      ...cloneAnswerObj,
      answer: [...cloneAnswerObj.answer]
    };
    console.log(cloneAnswerObj.answer[selectedAnswerObjIndex].options[selectedOptionObjIndex].subOptions);

    cloneAnswerObj.answer[selectedAnswerObjIndex].options[selectedOptionObjIndex].subOptions.forEach((_element, i) => {
      cloneAnswerObj.answer[selectedAnswerObjIndex].options[selectedOptionObjIndex].subOptions[i].isChecked = false;
    });

    cloneAnswerObj.answer[selectedAnswerObjIndex].options[selectedOptionObjIndex].subOptions[selectedSubOptionObjIndex].isChecked = true;

    setanswerObj(cloneAnswerObj);
  }

  // const submitAnswer = () =>{


  //   const answerBody = {
  //     answer_id: question?.answers?._id,
  //     answer: selected_possess,
  //     question: question?._id
  //   }

  //   // Put request if answer already exist
  //   if ((ansExist)) return dispatch(updateBCSanswer({ answerBody, dispatch }))

  //   delete answerBody.answer_id
  //   dispatch(postBCSanswer({ answerBody, dispatch }))
  // }


  return (
    <>
      <div className={Styles.strategyBox}>
        <div className={Styles.strategyImg}>
          <div className={global.roundImg40}>
            <img src={props.icon} alt="Question" className={global.fullImg} />
          </div>
        </div>
        <div className={Styles.strategyText}>
          <div className={`${Styles.headingBox} ${global.grayBox}`}>
            <Heading label={props.title} color="secondaryText" />
          </div>
          {props.questions ? (
            <div className={Styles.questionBox}>
              <p> {props?.questions?.question} </p>
            </div>
          ) : (
            ""
          )}
          {props.answer ? (
            <EditableAnswer answer={props.answer} />
          ) : (
            ""
          )}
        </div>
      </div>

      {props?.questions?.answers?.answer?.length ? (
        <div className={`${global.pl_75}`}>
          <div className={`${Styles.cardsAudit} ${global.grayBox}`}>
            {/* First Map */}
            {props?.questions?.answers?.answer?.map((questions: any) => {
              return (
                <div className={Styles.boxQuest}>
                  <div className={Styles.boxHeading}>
                    <Heading label={questions.heading} variant="heading4" />
                  </div>
                  {/* Second Map */}
                  {questions.options.map((question: any) => {
                    return (
                      <div key={question.id} className={Styles.ansRadio}>
                        <p> {question.subHeading} </p>
                        <ul>
                          {/* Third Map */}
                          {question.subOptions.map((subOptions: any, index: any) => {
                            return (
                              <li key={index}>
                                <input id={subOptions._id} type="radio" onChange={(e) => onChange(e, {
                                  card: questions,
                                  options: question,
                                  subOptions
                                })} value={subOptions.value} name={`${subOptions.name}`} />
                                <label htmlFor={`${subOptions.name}`}>
                                  {subOptions.value}
                                </label>
                              </li>
                            );
                          })}
                        </ul>
                      </div>
                    );
                  })}
                </div>
              );
            })}
          </div>
        </div>
      ) : (
        ""
      )}

      {isTouched ?
        <div className="text-end">
          <span>
            <Button
              label="Save"
              variant="transparent"
              color="primary"
            // onClick={submitAnswer}
            />
          </span>
        </div>
        :
        null
      }


    </>
  );
}

export default QuesAnsWithCheckBox;

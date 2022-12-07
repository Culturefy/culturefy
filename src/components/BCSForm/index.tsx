import React, { useState } from "react";
import Styles from "./styles.module.scss";
import global from "src/global.module.scss";

import { Col, Row } from "react-bootstrap";
import Heading from "src/components/common/Heading";

import PossesCard from 'src/components/common/PossesCard';
import WorkspaceCard from 'src/components/common/WorkspaceCard';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark, faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';

import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import { MdContentCopy } from 'react-icons/md';
import Search from 'src/components/common/Search';
import userImg from 'src/assets/images/inst1.png'

import { BiSend } from 'react-icons/bi';
import Button from 'src/components/common/Button';
import { useSelector } from "react-redux";

const Index = ({ categories, possesCards_array, goals_array }) => {
  const { user } = useSelector((state: any) => state.auth)
  const [slider, setSlider] = useState(false);
  const [count, setCount] = useState('1');
  const [uploadedMessage, setUploadedMessage] = useState(false);
  const [copied, setCopied] = useState(false);
  const [linkText, setLinkText] = useState(`http://127.0.0.1:5173/shared/survey?user=${user._id}`)
  const [key, setKey] = useState('link');

  const handleBack = () => {
    setSlider(false)
    setCount('1')
  }
  const handleNext = () => {
    setSlider(true)
    setCount('2')
  }

  const copyTextToClipBoard = () => {
    navigator.clipboard.writeText(linkText)
    setCopied(true)
  }



  return (
    <Row>
      <Col md={5}>
        <div className={Styles.leftBoxesMain}>
          <div className={`${Styles.brandCultureModalBox} ${slider ? "d-none" : "d-block"}`}>
            <Heading label="Brand Culture Strategy" variant="heading5" />

            <div className={`${Styles.headingCirclPoint} ${Styles.filledCircle} ${Styles.secondary}`}>
              <Heading label={categories[0]?.title} variant="heading6" />
            </div>
            {categories[0]?.subCategories.map((sub_category: any) => {
              if (sub_category.questions.type !== "BRAND_AUDIT" && sub_category.questions.answers.answer) {
                return (
                  <div className={Styles.headingCirclPoint}>
                    <Heading label={sub_category.title} variant="heading7" />
                    <p>{sub_category.questions.answers.answer}</p>
                  </div>
                );
              } else {
                return null;
              }
            })}
          </div>

          <div className={`${Styles.brandCultureModalBox} ${slider ? "d-block" : "d-none"}`}>
            <Heading label="Brand Culture Strategy" variant="heading5" />

            <div className={Styles.headingCirclPoint}>
              <Heading label="Employer Brand Audit" variant="heading7" />
              <div className="d-flex gap-3 mt-2">
                <div>
                  <h5 className="f8 graphik-semibold">Branding Opportunities</h5>
                  <ul className="f8 c-gray">
                    <li>Mission</li>
                    <li>Values</li>
                  </ul>
                </div>
                <div>
                  <h5 className="f8 graphik-semibold">Branding Opportunities</h5>
                  <ul className="f8 c-gray">
                    <li>Mission</li>
                    <li>Values</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className={`${Styles.headingCirclPoint} ${Styles.filledCircle} ${Styles.yellow}`}>
              <Heading label="Position" variant="heading6" />
            </div>
            <div className={`${Styles.headingCirclPoint} ${Styles.yellow}`}>
              <Heading label="Goals" variant="heading7" />
              <ul className="f8 c-black mt-1">
                {goals_array.map((goals) => {
                  return <li> {goals} </li>;
                })}
              </ul>
            </div>

            <div className={`${Styles.headingCirclPoint} ${Styles.filledCircle} ${Styles.primary}`}>
              <Heading label="Possess" variant="heading6" />
              <div className="mt-2">
                <Heading label="Campaigns, Activations, and Tactics" variant="heading7" />
                <div className={`${global.dflexCenter} ${"gap-1"}`}>
                  {possesCards_array.map((posses_cards) => {
                    return (
                      <PossesCard
                        variant={posses_cards.color}
                        image={posses_cards.image}
                        title={posses_cards.title}
                        text={posses_cards.description}
                        points={posses_cards.points}
                        text_color={posses_cards.text_color}
                        inpId={posses_cards._id}
                        size="small"
                      />
                    );
                  })}
                </div>
              </div>
            </div>
          </div>

          <p className={`${Styles.slidesCount} ${"f12 c-gray mt-3"}`}>
            <FontAwesomeIcon icon={faChevronLeft} onClick={() => handleBack()} />
            <span> {count}/2 </span>
            <FontAwesomeIcon icon={faChevronRight} onClick={() => handleNext()} />
          </p>
        </div>
      </Col>

      <Col md={7}>
        <div className="modal-tabs">
          <Tabs id="controlled-tab-example" activeKey={key} onSelect={(k) => setKey(k)}>
            <Tab eventKey="link" title="Link">
              <div className={`${Styles.modalContent}`}>
                <Heading label="Copy Link" variant="heading2" />
                <div className={`${Styles.copyLinkInnerText} ${global.dflexCenter} `}>
                  <p className={`${global.oneLineText} ${"graphik-semibold f16"}`}> {linkText} </p>
                  <button onClick={() => copyTextToClipBoard()}>
                    <MdContentCopy />
                    <span className={`${"graphik-reg f14"} ${copied ? Styles.showcopied : ""} `}>copied! </span>
                  </button>
                </div>
              </div>
            </Tab>

            <Tab eventKey="direct_message" title="Direct Message">
              <div className={`${Styles.modalContent}`}>
                <Heading label="Direct Message" variant="heading2" />
                <div className={`${"dc-div-w100"} ${Styles.modalSearch}`}>
                  <Search placeholder="Serach People" icon={true} variant="seacrh2" iconColor="secondary" />
                </div>
                <div className={Styles.peopleList}>
                  <ul className={`${global.dflexCenter} ${"my-3"}`}>
                    <li className={`${global.dflexCenter} ${Styles.userSearched}`}>
                      <div className={`${global.roundImg} ${global.roundImg25}`}>
                        <img src={userImg} alt="" />
                      </div>
                      <span className="f20 graphik-reg">John Doe</span>
                      <FontAwesomeIcon icon={faXmark} className="c-gray f18" />
                    </li>

                    <li className={`${global.dflexCenter} ${Styles.userSearched}`}>
                      <div className={`${global.roundImg} ${global.roundImg25}`}>
                        <img src={userImg} alt="" />
                      </div>
                      <span className="f20 graphik-reg">John Doe</span>
                      <FontAwesomeIcon icon={faXmark} className="c-gray f18" />
                    </li>

                    <li className={`${global.dflexCenter} ${Styles.userSearched}`}>
                      <div className={`${global.roundImg} ${global.roundImg25}`}>
                        <img src={userImg} alt="" />
                      </div>
                      <span className="f20 graphik-reg">John Doe</span>
                      <FontAwesomeIcon icon={faXmark} className="c-gray f18" />
                    </li>
                  </ul>
                </div>
                <div className={`${Styles.modalInp} ${global.dflexCenter}`}>
                  <input type="text" placeholder="Add a message..." />
                  <BiSend className="c-secondary f22" />
                </div>
              </div>
            </Tab>

            <Tab eventKey="save_as_file" title="Save As File">
              <div className={`${Styles.modalContent}`}>
                <Heading label="Save As File" variant="heading2" />
                <div>
                  <Button label="PDF" size="smallBtn" />
                  <Button label="Microsoft Word" size="smallBtn" variant="secondary" />
                </div>
              </div>
            </Tab>

            <Tab eventKey="add_to_workspace" title="Add to Workspace">
              <div className={`${Styles.modalContent}`}>
                <Heading label="Upload to Workspace" variant="heading2" />

                <div className={`${global.dflexCenter} ${"gap-20 mb-3"}`}>
                  <WorkspaceCard title="Workspace Title" users_img={userImg} more_imgs_count="3" />
                  <WorkspaceCard title="Workspace Title" users_img={userImg} more_imgs_count="3" />
                </div>

                <Button label="Upload" variant="blackBtn" size="smallBtn" onClick={() => setUploadedMessage(true)} />
                {uploadedMessage ? (
                  <p className="graphik-reg f16 mt-2 mx-2">
                    Uploaded Successfully! <span className="graphik-semibold c-primary f12"> View in Workspce</span>{" "}
                  </p>
                ) : (
                  ""
                )}
              </div>
            </Tab>
          </Tabs>
          <div className={Styles.doneBtn}>
            <Button label="Done" variant="blackBtn" size="smallBtn" />
          </div>
        </div>
      </Col>
    </Row>
  );
};

export default Index;

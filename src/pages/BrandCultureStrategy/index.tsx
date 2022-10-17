import React from "react";
import { RiShareForwardLine } from "react-icons/ri";
import { Col, Row } from "react-bootstrap";

import global from "../../global.module.scss";
import Styles from "./styles.module.scss";

import BrandCategories from "../../components/BrandCategories";
import Heading from "../../components/common/Heading";
import IconButton from "../../components/common/IconButton";
import StrategyBox from "../../components/StrategyBox";
import QuestionRadioBox from "../../components/QuestionRadioBox";

import planeImg from "../../assets/images/plan-circle.svg";
import goalImg from "../../assets/images/goal-circle.svg";
import coreImg from "../../assets/images/core-value.svg";
import purposeImg from "../../assets/images/purpose.svg";
import heartImg from "../../assets/images/heart.svg";
import missionImg from "../../assets/images/mission.svg";
import empImg from "../../assets/images/emp.svg";
import empbImg from "../../assets/images/empb.svg";

function BrandCultureStartegy() {
  return (
    <Row>
      <Col md={8}>
        <BrandCategories />
        <div className={`${Styles.keyActions} ${global.dflexCenter}`}>
          <Heading label="Key Actions" variant="heading3" />
          <IconButton icon={<RiShareForwardLine />} />
        </div>

        <div className={Styles.strRightMain}>
          <div className={`${Styles.headingWithImg} ${global.dflexCenter}`}>
            <div className={global.roundImg55}>
              <img src={planeImg} alt="headingImg" className={global.fullImg} />
            </div>
            <div>
              <Heading label="Plan" variant="heading2" />
            </div>
          </div>
          <StrategyBox
            image={goalImg}
            heading="Target Audience"
            question="What groups of people are you aiming to reach with your brand?"
            answer="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. "
          />
          <StrategyBox
            image={coreImg}
            heading="Core Value"
            question={`Your brand’s core value is the leading principle you want your brand to convey.`}
            answer="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. "
          />
          <StrategyBox
            image={purposeImg}
            heading="Purpose"
            question="What is the reason behind your brand’s existence?"
            answer="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. "
          />
          <StrategyBox
            image={heartImg}
            heading="Beliefs"
            question="A brand should have certain ideals that influence how it is portrayed."
            answer="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. "
          />
          <StrategyBox
            image={missionImg}
            heading="Mission"
            question="Your mission is an action or difference that you plan to achieve wtih your brand."
            answer="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. "
          />
          <StrategyBox
            image={empImg}
            heading="Employer Brand Promise"
            question="The Employer Brand Promise is a list of benefits you promise to your employees for working with you. Having a brand promise improves employee satisfaction and attracts new talent."
            answer="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. "
          />
          <StrategyBox
            image={empbImg}
            heading="Employer Brand Audit"
            question={`You might not be fully aware of the reputation your company has among job seekers or even your own employees. Send out internal surveys, conduct social media searches, check out sites like Glassdoor to read reviews, or hire a firm that administers reputation monitoring. 
                        Ultimately, your research should uncover your employees’ favorite aspects of your company culture that you can focus on highlighting as well as any areas for improvement to ensure a strong employer brand.`}
          />
          <div className={global.dflexCenter}>
            <div className={global.strategyImg}></div>
            <div className={Styles.cardsAudit}>
              <QuestionRadioBox heading="Branding" />
              <QuestionRadioBox heading="Recruitment" />
              <QuestionRadioBox heading="Satisfaction" />
            </div>
          </div>
        </div>
      </Col>
      <Col md={4}></Col>
    </Row>
  );
}

export default BrandCultureStartegy;

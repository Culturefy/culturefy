import React from "react";
import Styles from "./Styles.module.scss";
import Button from "../../components/common/Button";
import Heading from "../../components/common/Heading";
import { Container, Row, Col } from "react-bootstrap";
import CourseTitleDesc from "../../components/common/CourseTitleDesc";
import exp1 from "../../assets/images/exp1.png";
import VideoBox from "../../components/common/VideoBox";
import isnt1 from "../../assets/images/inst1.png";
import { Link } from "react-router-dom";

const CreatedModules = (props: any) => {
  return (
    <Container className={Styles.modules}>
      <Heading label={props.heading1} variant="heading1" />
      <Row>
        <Col md={3}>
          <div className={`${Styles.videoTxt}`}>
            <VideoBox poster={props.poster} source={props.source} />
          </div>
        </Col>
        <Col md={3} className={Styles.pl_O}>
          <CourseTitleDesc
            course={props.course}
            courseTitle={props.courseTitle}
            instructorImg={props.instructorImg}
            InstructorName={props.InstructorName}
            insSub={props.insSub}
            lesson={props.lesson}
            countLess={props.countLess}
          />
        </Col>
        <Col md={6}>
          <div className={Styles.separator}>
            <p>
              Lorem Ipsum is simply dummy text of the printing and type standard
              dummy text ever since the 1500s, when an unknown printer took a
              galley of type and scrambled it to make a type specimen book. It
              has survived not only five centuries <Link to="/">Read more</Link>
            </p>
            <div className={Styles.flexDiv}>
              <Button label={props.btnLabel} variant="primary" size="large" />
              <Button
                label={props.btnLabel2}
                variant="redOutlined"
                size="large"
              />
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default CreatedModules;

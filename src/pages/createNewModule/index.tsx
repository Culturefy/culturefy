import React from "react";
import Styles from "./styles.module.scss";
import { Container, Row, Col } from "react-bootstrap";
import VideoBox from "../../components/common/VideoBox";
import exp1 from "../../assets/images/exp1.png";
import CourseTitleDesc from "../../components/common/CourseTitleDesc";
import { BiUpload } from "react-icons/bi";

import Button from "../../components/common/Button";
import Input from "../../components/common/Input";
import Heading from "../../components/common/Heading";
import UploadButton from "../../components/common/uploadButton";

function CreateNewModule() {
  return (
    <>
      <Container>
        <h2 className={Styles.pageHeadings}> Create New Module</h2>

        <Row>
          <Col md={12}>
            <div className={Styles.inputf}>
              <Input placeholder="Subtitle1" type="text" />
            </div>
          </Col>
        </Row>

        <Row>
          <Col md={8}>
            <Heading label="Upload Video" />
            <div
              className={`${Styles.uploadfilescontainer}  ${Styles.createcourse} `}
            >
              <div className={Styles.dragfilearea}>
                <div className={Styles.btn1}>
                  <UploadButton
                    type="file"
                    label=" Upload Files"
                    icon={<BiUpload />}
                    size="large"
                    dragTxt="or drag & drop"
                  />
                </div>
              </div>

              <div className={Styles.buttons}>
                <Button label="Publish Module" size="large" />
                <Button
                  label="Archive Module"
                  size="large"
                  variant="outlined"
                  color="black"
                />
              </div>
            </div>
          </Col>

          <Col md={4}>
            <div className={`${Styles.videoTxt}`}>
              <VideoBox poster={exp1} source={exp1} />
              <CourseTitleDesc
                course="Course"
                courseTitle="Diversity, Equity and Inclusion in Work"
                views="10,061 viewers. 2022 June 15"
              />
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default CreateNewModule;

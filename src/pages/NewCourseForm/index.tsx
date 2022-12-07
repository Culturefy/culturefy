import React, { useEffect, useState } from "react";
import LabelWithInput from "../../components/common/LabelWithInput";

import Heading from "../../components/common/Heading";
import { Form, Link, useNavigate } from "react-router-dom";
import SelectOptions from "../../components/common/SelectOptions";
import { Col, Container, Row } from "react-bootstrap";
import VideoBox from "../../components/common/VideoBox";
import CourseTitleDesc from "../../components/common/CourseTitleDesc";
import exp1 from "../../assets/images/exp1.png";
import Styles from "./styles.module.scss";
import { GrAttachment } from "react-icons/gr";
import UploadButton from "../../components/common/uploadButton";
import { BiUpload } from "react-icons/bi";
import { InputText } from "src/core/form";
import { useCourse } from "../../hooks/form/useCourse";
import { useSelector } from "react-redux";
import Button from "../../components/common/Button";


function NewCourseForm() {
  
  const [fieldValue, setFieldValue] = useState({
    title: "",
    number_of_lessons: "",
    moduleType: "course",
    duration: "",
    instructor: "",
    details: "",
    isPublish: true,
  });

  const options = [
    { name: "Course", value: "course" },
    { name: "Video", value: "video" },
  ];

  const { learningCourses } = useSelector((state: any) => state.learningModule);
  const {
    form: {
      handleSubmit,
      register,
      formState: { errors },
    },
    store,
    getCourses,
    getCourse,
    addCourse,
    updateCourse,
  } = useCourse(null);

  const navigate = useNavigate();

  useEffect(() => {
    getCourses();
  }, []);

  const onChange = (e: any) => {
    setFieldValue({
      ...fieldValue,
      [e.target.name]: e.target.value,
    });
  };

  if (fieldValue.moduleType === "course") {
    delete fieldValue.moduleType;
  }
  const courses = store.courses;

  const onSubmit = async (data: any) => {
    data = fieldValue;
   await addCourse(data)
   
  };

  console.log(courses , "courses")

  return (
    <Container>
      <Row>
        <Col md={8}>
          <Heading label="Create New Course" variant="heading1" />
          <form onSubmit={handleSubmit(onSubmit)}>
            <InputText type="text" label="Title of the module" name="title" placeholder=" " onChange={onChange} />
            <SelectOptions
              type="text"
              label="Types of Module"
              placeholder=" "
              optionsData={options}
              onChange={onChange}
              name="moduleType"
            />
            {fieldValue.moduleType === "video" ? (
              <SelectOptions
                type="text"
                label="Courses"
                placeholder=" "
                optionsData={courses}
                onChange={onChange}
                name="moduleType"
              />
            ) : (
              ""
            )}
            <InputText type="text" label="Number of Lessons" name="number_of_lessons" placeholder=" " onChange={onChange} />
            <InputText type="text" label="Time Duration" name="duration" placeholder=" " onChange={onChange} />
            <InputText type="text" label="Instructor" name="instructor" placeholder=" " onChange={onChange} />
            <InputText type="text" label="Course Details" name="details" placeholder=" " onChange={onChange} />

            <div className={Styles.mt3}>
              <Heading label="Upload file attachment/s" />
            </div>
            <div className={`${Styles.uploadfilescontainer}  ${Styles.createcourse} `}>
              <div className={Styles.dragfilearea}>
                <div className={Styles.btn1}>
                  <GrAttachment className={Styles.videoIcon} />
                  <UploadButton type="file" label=" Upload Files" icon={<BiUpload />} size="large" dragTxt="or drag & drop" />
                </div>
              </div>

              <div className={Styles.buttonDiv}>
                <Button type="submit" label="Next" size="large" variant="primary" />
              </div>
            </div>
          </form>
        </Col>

        <Col md={4} className={Styles.recentList}>
          <Heading label="Recent Module" />
          {/* <div className={`${Styles.videoTxt}`}>
            <VideoBox poster={exp1} source={exp1} />
            <CourseTitleDesc course="Course" courseTitle="Diversity, Equity and Inclusion in Work" views="10,061 viewers. 2022 June 15" />
          </div>
          <div className={`${Styles.videoTxt}`}>
            <VideoBox poster={exp1} source={exp1} />
            <CourseTitleDesc course="Course" courseTitle="Diversity, Equity and Inclusion in Work" views="10,061 viewers. 2022 June 15" />
          </div>
          <div className={`${Styles.videoTxt}`}>
            <VideoBox poster={exp1} source={exp1} />
            <CourseTitleDesc course="Video" courseTitle="Diversity, Equity and Inclusion in Work" views="10,061 viewers. 2022 June 15" />
          </div>
          <div className={`${Styles.videoTxt}`}>
            <VideoBox poster={exp1} source={exp1} />
            <CourseTitleDesc course="Course" courseTitle="Diversity, Equity and Inclusion in Work" views="10,061 viewers. 2022 June 15" />
          </div> */}
          {/* {learningData} */}
        </Col>
      </Row>
    </Container>
  );
}

export default NewCourseForm;

import React, { useEffect, useRef, useState, useMemo } from "react";
import Styles from "./styles.module.scss";
import { Container, Row, Col } from "react-bootstrap";
import VideoBox from "../../components/common/VideoBox";
import exp1 from "../../assets/images/exp1.png";
import CourseTitleDesc from "../../components/common/CourseTitleDesc";
import { BiUpload } from "react-icons/bi";
import Button from "../../components/common/Button";
import Input from "../../components/common/Inputqa";
import Heading from "../../components/common/Heading";
import UploadButton from "../../components/common/uploadButton";
import { FiVideo } from "react-icons/fi";
import LabelWithInput from "../../components/common/LabelWithInput";
import { Link, useNavigate } from "react-router-dom";
import uploadToCloudinary from "src/utils/cloudinary";
import { useParams } from "react-router-dom";
import { useCourse } from "src/hooks/form/useCourse";
import { useSelector } from "react-redux";
import VideoPlayer from "src/components/VideoPlayer";
import { toast } from "react-toastify";
import { GrAttachment } from "react-icons/gr";
import { FcPrevious } from "react-icons/fc";

import { FcNext } from "react-icons/fc";

function CreateNewCourse() {
  const navigate = useNavigate();
  const [fetchCourse, setFetchCourse] = useState(false);
  // const [course, setCourse] = useState<any>({})
  const [currentIndex, setCurrentIndex] = useState(1);
  const { fetched } = useSelector((state: any) => state.courses);

  const {
    store: { course },
    getCourse,
    addCourseVideo,
    updateCourseVideo,
  } = useCourse(null);
  const [video, setVideo] = useState<any>({});
  const { id } = useParams();

  const initialState = {
    _id: "",
    videoTitle: "",
    courseId: id,
    source: "",
    index: currentIndex,
  };

  const [courseVideo, setCourseVideo] = useState(initialState);

  const onChange = (e: any) => {
    setCourseVideo({
      ...courseVideo,
      [e.target.name]: e.target.value,
    });
  };

  const onPrevious = async () => {
    let url: string = "";
    if (Object.keys(video).length) {
      const response = await uploadToCloudinary(video);
      url = response.url;
      setVideo({});
      courseVideo.source = url;
    }

    updateCourseVideo(courseVideo._id, courseVideo).then(() => {
      setCurrentIndex((prevState) => prevState - 1);
      setFetchCourse(!fetchCourse);
      // setCourseVideo(initialState)
      setVideo({});
    });
  };

  const onNext = async (type: "NEXT" | "PREVIOUS") => {
    let url: string = courseVideo.source;
    if (video.name) {
      const response = await uploadToCloudinary(video);
      url = response.url;
      setVideo({});
    }

    {/* @ts-ignore */}
    const isTitleUpdated = course.courseVideo.find(
      (video) => video.videoTitle === courseVideo.videoTitle
    );
    {/* @ts-ignore */}
    const isSourceUpdated = course.courseVideo.find(
      (video) => video.source === url
    );

    if (!isTitleUpdated || !isSourceUpdated) {
      updateCourseVideo(courseVideo._id, { ...courseVideo, source: url }).then(
        () => {
          setVideo({});
        }
      );
    } else {
      setVideo({});
    }

    if (type === "NEXT") {
      // @ts-ignore
      if (currentIndex < course?.number_of_lessons) {
        setCurrentIndex((prevState) => prevState + 1);
      } else {
        // toast.info("End")
        navigate("/user/learning");
      }
    } else if (type === "PREVIOUS") {
      if (currentIndex > 1) {
        setCurrentIndex((prevState) => prevState - 1);
      } else {
        // toast.info("Chal nikal")
      }
    } else {
      toast.info("Something went wrong");
    }
  };

  useEffect(() => {
    getCourse(id);
  }, []);

  useMemo(() => {
    // @ts-ignore
    if (course && course?.courseVideo && course?.courseVideo.length) {
      // @ts-ignore
      const videoObj = course?.courseVideo.find((video) => video.index == currentIndex)
      setCourseVideo(videoObj)
    }
  }, [currentIndex, course]);

  return (
    <>
      <Container>
        <h2 className={Styles.pageHeadings}> Create New Module</h2>
        {Object.keys(course).length && (
          <Row>
            <Col md={2}>
              {/* @ts-ignore */}
              <Heading label={`${currentIndex} of ${course?.number_of_lessons} Lessons`}/>
            </Col>
            <Col md={6}>
              <button
                onClick={() => onNext("PREVIOUS")}
                className={Styles.btnYellow}
              >
                <FcPrevious />
              </button>
              <button
                className={Styles.btnYellow}
                onClick={() => onNext("NEXT")}
              >
                <FcNext />
              </button>
            </Col>
          </Row>
        )}

        <Row>
          <Col
            md={8}
            className={` ${Styles.pR} ${video.name ? Styles.uploadedv : ""}  `}
          >
            <LabelWithInput
              label="Subtitle1"
              placeholder=" "
              value={courseVideo.videoTitle}
              onChange={onChange}
              type="text"
              name="videoTitle"
            />
            <Heading label="Upload Video" />
            <div className={Styles.upinput}>
              <GrAttachment className={Styles.videoIcon} />
              <label htmlFor="uploadV" className={Styles.customFileLbl}>
                Upload Video
                <input
                  type="file"
                  id="uploadV"
                  onChange={(e) => setVideo(e.target.files[0])}
                  className={Styles.customFile}
                />
                <BiUpload />
              </label>

              {/* <input
                type="file"
                onChange={(e) => setVideo(e.target.files[0])}
              /> */}
            </div>

            <VideoPlayer
              video={video}
              courseVideo={courseVideo}
              setVideo={setVideo}
            />
          </Col>

          <Col md={4} className={Styles.recentList}>
            <Heading label="Recent Module" />
            <div className={`${Styles.videoTxt}`}>
              <VideoBox poster={exp1} source={exp1} />
              <CourseTitleDesc
                course="Course"
                courseTitle="Diversity, Equity and Inclusion in Work"
                views="10,061 viewers. 2022 June 15"
              />
            </div>
            <div className={`${Styles.videoTxt}`}>
              <VideoBox poster={exp1} source={exp1} />
              <CourseTitleDesc
                course="Course"
                courseTitle="Diversity, Equity and Inclusion in Work"
                views="10,061 viewers. 2022 June 15"
              />
            </div>
            <div className={`${Styles.videoTxt}`}>
              <VideoBox poster={exp1} source={exp1} />
              <CourseTitleDesc
                course="Video"
                courseTitle="Diversity   Equity and Inclusion in Work"
                views="10,061 viewers. 2022 June 15"
              />
            </div>
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

export default CreateNewCourse;

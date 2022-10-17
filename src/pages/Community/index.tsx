import { Row, Col, Container } from "react-bootstrap";
import Styles from "./index.module.scss";

import Group from "../../components/common/Group";
import Heading from "../../components/common/Heading";

import CreatePost from "../../components/CreatePost";
import Mentorship from "../../components/Mentorship";
import Posts from "../../components/Posts";
import ProfileCover from "../../components/ProfileCover";
import Recognition from "../../components/Recognition";
import FriendSuggestion from "../../components/common/FriendSuggestion";
// import EventImg from '../../../components/common/EventImg'
import Event from "../../components/common/Event";

import coverImg from "../../assets/images/video5.png";
import doneImg from "../../assets/images/done.png";
import inst1Img from "../../assets/images/inst1.png";
import inst2Img from "../../assets/images/inst2.png";
import inst3Img from "../../assets/images/inst3.png";
import inst4Img from "../../assets/images/inst4.png";
import inst5Img from "../../assets/images/inst5.png";

import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

const Community = () => {
  return (
    <>
      <Row>
        <Col sm={10}>
          <ProfileCover userCoverImg={coverImg} />
          <Row className={Styles.profileFeed}>
            <Col sm={3}>
              <Recognition />
              <Mentorship />
            </Col>
            <Col sm={1}></Col>
            <Col sm={8}>
              <CreatePost variant="primary" />
              <Posts
                postOwnerImg={inst3Img}
                postOwner="You"
                postTime="Just Now"
                postImg={coverImg}
                lessonNumber="1"
                lessonName="Leadership and Organizational Training"
                partNumber="1"
                partName="Introduction"
                lessonNextBtn="Watch Part 2"
                lessonNextBtnIcon={faArrowRight}
                reactedUserImg={inst4Img}
                commentsCount="0"
                shareCount="0"
                currentUserImg={inst3Img}
              />
              <Posts
                postOwnerImg={inst3Img}
                postOwner="You"
                postTime="32 mins ago"
                reactedUserImg={inst4Img}
                commentsCount="0"
                shareCount="0"
                currentUserImg={inst3Img}
                postText=" I would like to Kudos @Carla, for the #courteousness in every appointment, and deadlines throughout the month of may "
              />
            </Col>
          </Row>
        </Col>
        <Col sm={2}>
          <Heading label="Resource Groups" variant="heading5" />
          <div className={Styles.grpRecom}>
            <Group image={doneImg} heading={`Women's Group`} />
            <Group image={doneImg} heading={`Disabilities`} />
          </div>
          <div className={Styles.friendRecom}>
            <Heading label="Friend Recommendations" variant="heading5" />
            <FriendSuggestion
              userImg={inst5Img}
              userName="Steve Harris"
              courcesCount={30}
              videosCount={12}
            />
            <FriendSuggestion
              userImg={inst4Img}
              userName="Mika Davis"
              courcesCount={30}
              videosCount={12}
            />
            <FriendSuggestion
              userImg={inst3Img}
              userName="Bilan Jones"
              courcesCount={30}
              videosCount={12}
            />
            <FriendSuggestion
              userImg={inst2Img}
              userName="Ju Anderson"
              courcesCount={30}
              videosCount={12}
            />
            <FriendSuggestion
              userImg={inst1Img}
              userName="Benjamin Smith"
              courcesCount={30}
              videosCount={12}
            />
          </div>
          {/* <EventImg eventImage={coverImg} /> */}
          <Heading label="Recent Events" variant="heading4" border="bottom" />

          <Event
            ownerImg={inst1Img}
            eventTitle="Membership and why it..."
            eventDetails="Creating a workspace where..."
            eventSeen="8"
            seenedUser={inst3Img}
          />
          <Event
            ownerImg={inst1Img}
            eventTitle="Membership and why it..."
            eventDetails="Creating a workspace where..."
            eventSeen="8"
            seenedUser={inst3Img}
          />
        </Col>
      </Row>
    </>
  );
};

export default Community;

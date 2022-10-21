import { Row, Col, Container } from "react-bootstrap";

import Styles from "./styles.module.scss";
import TextFieldQa from "../../../components/common/TextFieldQa";
import RadioBtn from "../../../components/common/RadioBtn";
import Button from "../../../components/common/Button";
import adminImg from '../../../assets/images/admin-img.png'

const ProfileSetting = () => {
  return (
      <Container className={Styles.notificationMain}>
        <Row>
          <Col md={12}>
            <h1>Profile Setting</h1>
            <div classlName={Styles.user}>
              <img src={adminImg} alt="new" />
            </div>
          </Col>
        </Row>
        <Row>
          <Col md={8}>
            <div className={Styles.profilesettingform}>
              <div className="row">
                <Col md={6} className={Styles.coltxt}>
                  <label>Full Name</label>
                  <TextFieldQa placeholder="Jhon Doe" />
                </Col>
                <Col md={6} className={Styles.coltxt}>
                  <label>Birthday</label>
                  <TextFieldQa placeholder="Jhon Doe" type="date" />
                </Col>
                <Col md={6} className={Styles.coltxt}>
                  <label>Email</label>
                  <TextFieldQa placeholder="Youremail@gmail.com" type="email" />
                </Col>
                <Col md={6} className={Styles.coltxt}>
                  <label>Bio</label>
                  <TextFieldQa placeholder="UI Designer" />
                </Col>
                <Col md={6} className={Styles.coltxt}>
                  <label>Phone Number</label>
                  <TextFieldQa placeholder="12345678" type="number" />
                </Col>
                <Col md={6} className={Styles.coltxt}>
                  <label>Website</label>
                  <TextFieldQa placeholder="www.youtube.com" />
                </Col>
                <Col md={6} className={Styles.coltxt}>
                  <label>Gender</label>
                  <div className={Styles.genderradiobox}>
                    <div className={Styles.dflex}>
                      <RadioBtn type="radio" value="male" id="male" label="male" />
                      <RadioBtn type="radio" value="female" id="female" label="female" />
                      <RadioBtn type="radio" value="custom" id="custom" label="custom"/>
                    </div>
                  </div>
                </Col>
                <Col md={6} className={Styles.coltxt}>
                  <label>Location</label>
                  <TextFieldQa placeholder="Sythlet,Bangladesh" />
                </Col>
                <Col md={12} className={Styles.innerheading}>
                  <h1>Social Link</h1>
                </Col>
                <Col md={6} className={Styles.coltxt} >
                  <label>Facebook</label>
                  <TextFieldQa placeholder="Profile.userhere" type="text" />
                </Col>
                <Col md={6} className={Styles.coltxt}>
                  <label>Twitter</label>
                  <TextFieldQa placeholder="Profile.userher" />
                </Col>
                <Col md={6} className={Styles.coltxt}>
                  <label>Instagram</label>
                  <TextFieldQa placeholder="Profile.userhere" type="text" />
                </Col>
                <Col md={6} className={Styles.coltxt}>
                  <label>Linkdin</label>
                  <TextFieldQa placeholder="Profile.userher" />
                </Col>
              </div>
            </div>
          </Col>
        </Row>
        <Row className={Styles.btnus}> 
        <Col md={8} className={Styles.btn}>
          <Col md={6}>
        <Button color="black" variant="transparent" label="Cancel" size="smallBtn"/>
        <Button label='Save' variant="filled" color="secondary" size="smallBtn"/>
        </Col>
        </Col>
        </Row>
          
        
      </Container>
  );
};

export default ProfileSetting;
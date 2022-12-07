import { Row, Col, Container } from "react-bootstrap";
import Button from "../Button";
import Styles from "./styles.module.scss";
import TextFieldQa from "../TextFieldQa";
import RadioBtn from "../RadioBtn";
import Heading from "../Heading";

import { Checkbox } from "src/components/common/Checkbox";
import { useState } from "react";


function Adduser() {

  const [showPermissions , setShowPermissions] = useState(false);
  const handleChange = (event:any) => {
    if (event.target.checked) {
      if(event.target.value === 'custom'){
        setShowPermissions(true)
      }
      else{
        setShowPermissions(false)
      }
    }
  };
  
  return (
    <>
      <Container className={Styles.usersBtnsAccSet}>
        <Row>
          <Col>
            <Heading label="Create User" />
          </Col>
          <Col md={12} className="pb-3">
            <Button
              label="Upload .csv"
              variant="filled"
              color="secondary"
              size="medium"
            />
          </Col>
        </Row>

        <Row>
          <Col md={8}>
            <div className={Styles.profilesettingform}>
              <div className="row align-items-center">
                <Col md={6} className={Styles.coltxt}>
                  <label>First Name</label>
                  <TextFieldQa variant="bordered" placeholder="Jhon " />
                </Col>
                <Col md={6} className={Styles.coltxt}>
                  <label>Last Name</label>
                  <TextFieldQa variant="bordered" placeholder="Doe" />
                </Col>
                <Col md={6} className={Styles.coltxt}>
                  <label>Email</label>
                  <TextFieldQa
                    variant="bordered"
                    placeholder="Youremail@gmail.com"
                    type="email"
                  />
                </Col>
                <Col md={6} className={Styles.coltxt}>
                  <label>Birthday</label>
                  <TextFieldQa
                    variant="bordered"
                    placeholder="Jhon Doe"
                    type="date"
                  />
                </Col>
                <Col md={6} className={Styles.coltxt}>
                  <label>Phone Number</label>
                  <TextFieldQa
                    variant="bordered"
                    placeholder="12345678"
                    type="number"
                  />
                </Col>
                <Col md={6} className={Styles.coltxt}>
                  <label>ID</label>
                  <TextFieldQa variant="bordered" placeholder="IMC-00123" />
                </Col>
                <Col md={6} className={Styles.coltxt}>
                  <label>Password</label>
                  <TextFieldQa
                    variant="bordered"
                    placeholder="Profile.userhere"
                    type="password"
                  />
                </Col>
                <Col md={6} className={Styles.coltxt}>
                  <label>Confirm Password</label>
                  <TextFieldQa
                    variant="bordered"
                    placeholder="Profile.userher"
                    type="password"
                  />
                </Col>
                <Col md={6} className={Styles.coltxt}>
                  <label>Gender</label>
                  <div className={Styles.genderradiobox}>
                    <div
                      className={`${
                        Styles.radioBoxWrapper
                      } ${"d-flex gap-3"}`}
                    >
                      <RadioBtn
                        type="radio"
                        value="male"
                        id="male"
                        label="male"
                        onChange={handleChange}
                      />
                      <RadioBtn
                        type="radio"
                        value="female"
                        id="female"
                        label="female"
                        onChange={handleChange}
                      />
                      <RadioBtn
                        type="radio"
                        value="custom"
                        id="custom"
                        label="custom"
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                </Col>
                <Col md={6} className={Styles.coltxt}>
                  <label>Location</label>
                  <TextFieldQa
                    variant="bordered"
                    placeholder="Sythlet,Bangladesh"
                  />
                </Col>
                
              </div>
            </div>
          </Col>
          <Col md={8}>
            {
              showPermissions===true ? 
              <div className={`${'d-flex mt-4'} ${Styles.chekboxesListMain}`}>
                <div>
                  <h2 className="f16  graphik-semibold mb-3">Custom Permissions</h2>
                  <div className={Styles.chekboxesList}>
                    <Checkbox label="Brand Culture Strategy" id='cat1' value='Brand Culture Strategy'  />
                    <Checkbox label="Create Surveys" id='cat2' value='Create Surveys'  />
                    <Checkbox label="Create Courses" id='cat3' value='Create Courses'  />
                    <Checkbox label="Create Rewards Program" id='cat4' value='Create Rewards Program'  />
                    <Checkbox label="Create Resource Group" id='cat5' value='Create Resource Group'  />
                    <Checkbox label="Create Campaign" id='cat6' value='Create Campaign'  />
                    <Checkbox label="Create Workspace" id='cat7' value='Create Workspace'  />
                    <Checkbox label="Create Events" id='cat8' value='Create Events'  />
                    <Checkbox label="Create Tasks" id='cat9' value='Create Tasks'  />
                    <Checkbox label="Become a Mentor" id='cat10' value='Become a Mentor'  />
                  </div>
                </div>
                <div>
                  <h2 className="f16  graphik-semibold mb-3">Custom Permissions</h2>
                  <div className={Styles.chekboxesList}>
                    <Checkbox label="Download Files" id='cat11' value='Download Files'  />
                    <Checkbox label="Upload Files" id='cat12' value='Upload Files'  />
                    <Checkbox label="Manage Brand Assets" id='cat13' value='Manage Brand Assets'  />
                    <Checkbox label="Manage Agenda" id='cat14' value='Manage Agenda'  />
                    <Checkbox label="Annotate Files" id='cat15' value='Annotate Files'  />
                    <Checkbox label="Comment" id='cat16' value='Comment'  />
                    <Checkbox label="Create Polls" id='cat17' value='Create Polls'  />
                    <Checkbox label="Vote In Polls" id='cat18' value='Vote In Polls'  />
                    <Checkbox label="Use Pen/Erase" id='cat19' value='Use Pen/Erase'  />
                    <Checkbox label="Share For Review" id='cat20' value='Share For Review'  />
                    <Checkbox label="Review" id='cat21' value='Review'  />
                    <Checkbox label="Create Folders" id='cat22' value='Create Folders'  />
                  </div>
                </div>
              </div> 
              : ''
            }
          </Col>
          <Col md={8}>
            <div className={Styles.btn}>
              <Button
                color="black"
                variant="transparent"
                label="Cancel"
                size="smallBtn"
              />
              <Button
                label="Save"
                variant="filled"
                color="secondary"
                size="smallBtn"
              />
            </div>
          </Col>
        </Row>

      </Container>
    </>
  );
}
export default Adduser;

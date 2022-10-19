import React from "react";
import { Col, Row } from "react-bootstrap";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import { Link } from "react-router-dom";

// import global from "../../global.module.scss";
import Styles from "./styles.module.scss";
import Button from "../../components/common/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

function Rewards() {
  return (
    <Row>
      <Col md={12}>

        {/* <ul className="nav rewards-tabs" role="tablist">
          <li className="nav-item" role="presentation">
            <button
              className="nav-link active"
              data-bs-toggle="pill"
              data-bs-target="#my-reward"
              type="button"
              aria-selected="true"
            >
              My Rewards
            </button>
          </li>
          <li className="nav-item" role="presentation">
            <button
              className="nav-link"
              data-bs-toggle="pill"
              data-bs-target="#all-team"
              type="button"
              aria-selected="false"
            >
              All Teams
            </button>
          </li>
          <li className="nav-item" role="presentation">
            <button
              className="nav-link"
              data-bs-toggle="pill"
              data-bs-target="#team-challenge"
              type="button"
              aria-selected="false"
            >
              Team challenges
            </button>
          </li>
          <li className="nav-item" role="presentation">
            <button
              className="nav-link"
              data-bs-toggle="pill"
              data-bs-target="#leaderboard"
              type="button"
              aria-selected="false"
            >
              Leaderboard
            </button>
          </li>
        </ul> */}
        <Tabs
          defaultActiveKey="profile"
          id="uncontrolled-tab-example"
          className={Styles.rewardsTabs}
        >
          <Tab eventKey="home" title="Home">
            <h1>Home</h1>
          </Tab>
          <Tab eventKey="profile" title="Profile">
            <h1>profile</h1>
          </Tab>
          <Tab eventKey="contact" title="Contact">
            <h1>Contact</h1>
          </Tab>
        </Tabs>
      </Col>
    </Row>
  );
}

export default Rewards;

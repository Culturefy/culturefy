import { Row, Col, Container } from 'react-bootstrap'

import Styles from './styles.module.scss'


const ProfileSetting = () => {
    return (
        <>
            <Container className={Styles.notificationMain}>
                <Row>
                    <Col md={12}>
                        <h1>Profile Setting</h1>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default ProfileSetting;
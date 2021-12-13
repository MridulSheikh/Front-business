import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import phone from "./../../asset/images/TopHeaderImage/—Pngtree—answer phone call phone call_5464561.png";
import eamil from "./../../asset/images/TopHeaderImage/email-13783.png";
import notificaton from "./../../asset/images/TopHeaderImage/icons8-notification-50.png"

const HeaderTop = () => {
    return (
        <div className='bg-light border'>
        <Container>
            <Row md={3} sm={3} className='py-2'>
            <Col>
            <img src={phone} alt="" width="30px"  />
            <span className='ms-2'>+8801883992408</span>
            </Col>
            <Col>
            <img src={eamil} alt="" width="30px"  />
            <span className='ms-2'>mridul.sheikh.90@gmail.com</span>
            </Col>
            <Col className='d-flex justify-content-end'>
            <div> <img src={notificaton} alt="" width="30px" /> </div>
            <button className='mx-3 bg-warning text-light py-1 border-0 rounded'>Notification</button>
            </Col>
            </Row>
        </Container>
        </div>
    );
};

export default HeaderTop;
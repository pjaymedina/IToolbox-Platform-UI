import React from 'react'
import { Container, Row, Col, Button, Image, Form } from "react-bootstrap";
import missionVision from "../../assets/images/mission-vision.png";
function Register(props) {
  return (
    <div>
        <Container>
                <Row className="bannerContainer">
                    <Col className="col-md-6 col-12">
                        <h1 className="bannerTitle">
                            Register now!
                        </h1>
                        <Form>
                      <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" />
                      </Form.Group>
                      <Form.Group className="mb-3" controlId="formBasicName">
                        <Form.Label>Name</Form.Label>
                        <Form.Control type="text" placeholder="Enter Name" />
                      </Form.Group>
                      <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Enter Password" />
                      </Form.Group>
                      <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Re Enter Password</Form.Label>
                        <Form.Control type="password" placeholder="Re Enter Password" />
                      </Form.Group> 
                      </Form>
                      <p>Have An Account?  <a href="/login">Log in</a> </p>
                        <Button className="primaryButton">Let's Go!</Button>
                    </Col>
                    <Col className="col-md-6 col-12">
                    <Image
                                src={missionVision}
                                alt="mission-vision"
                                fluid
                            />
                    </Col>
                </Row>
            </Container>
            <Container>
                    <Row className="justify-content-around align-items-center marginTB backgroundSecondary margin2 box2">
                        <Col className="textWhite col-md-6 col-10 contactUs">
                            <h3 className="textTitle">Get in touch with us</h3>
                            <p className="mb-0">(+63)-9992298724</p>
                            <p>itoolbox2019@gmail.com</p>
                        </Col>
                        <Col className="textWhite col-md-5 col-10 text-center">
                            <Button className="primaryButton">
                                Contact Us
                            </Button>
                        </Col>
                    </Row>
                </Container>
    </div>
);
  }
export default Register;
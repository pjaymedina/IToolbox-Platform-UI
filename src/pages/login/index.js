import React from "react";
import { Container, Row, Col, Button, Image, Form } from "react-bootstrap";
import banner from "../../assets/images/banner.png";
import {
  FaPiggyBank,
  FaBezierCurve,
  FaLaptopCode,
  FaUserTie,
  FaCheckCircle,
} from "react-icons/fa";
const features = [
  {
      icon: <FaPiggyBank size={25} className="icon textSecondary" />,
      text: "Save money",
  },
  {
      icon: <FaBezierCurve size={25} className="icon textSecondary" />,
      text: "Improve communication",
  },
  {
      icon: <FaLaptopCode size={25} className="icon textSecondary" />,
      text: "Multimedia learning",
  },
  {
      icon: <FaUserTie size={25} className="icon textSecondary" />,
      text: "Efficient management",
  },
];


function Login(props) {
  return (
    <div>
        <Container>
                <Row className="bannerContainer">
                    <Col className="col-md-6 col-12">
                        <h1 className="bannerTitle">
                            Log in to Itoolbox
                        </h1>
                        <Form>
                      <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" />
                        <Form.Text className="text-muted">
                          We'll never share your email with anyone else.
                        </Form.Text>
                      </Form.Group>

                      <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" />
                      </Form.Group>
                      <Form.Group className="mb-3" controlId="formBasicCheckbox">
                        <Form.Check type="checkbox" label="Check me out" />
                      </Form.Group>  
                      </Form>
                      <p>No Account?  <a href="/register">Register</a> </p>
                        <Button className="primaryButton">Log in</Button>
                    </Col>
                    <Col className="col-md-6 col-12">
                        <Image src={banner} alt="banner" fluid />
                    </Col>
                </Row>
            </Container>
            <Container>
                <Row>
                    {features.map(({ icon, text }, index) => {
                        return (
                            <Col
                                key={index}
                                className="col-md-3 col-12 text-center "
                            >
                                <div className="text-center box my-3 card">
                                    {icon}
                                    <p className="px-2 textGray">{text}</p>
                                </div>
                            </Col>
                        );
                    })}
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
export default Login;
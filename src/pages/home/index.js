import React from "react";
import { Container, Row, Col, Button, Image } from "react-bootstrap";
import {
    FaPiggyBank,
    FaBezierCurve,
    FaLaptopCode,
    FaUserTie,
    FaCheckCircle,
} from "react-icons/fa";

import banner from "../../assets/images/banner.png";
import mainGoal from "../../assets/images/main-goal.png";
import missionVision from "../../assets/images/mission-vision.png";
import Team from "../../components/team";

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

function HomePage(props) {
    return (
        <>
            <Container>
                <Row className="bannerContainer">
                    <Col className="col-md-6 col-12">
                        <h1 className="bannerTitle">
                            IT solutions for every Filipinos
                        </h1>
                        <p className="margin textGray">
                            Promote the value of education using the available
                            technology to let Filipinos access IToolbox
                            Interactive Learning Advocacies even the lowest
                            class citizen.
                        </p>
                        <Button className="primaryButton">Get Started</Button>
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
            <Container id="about">
                <Row className="bannerContainer">
                    <Col className="col-md-6 col-12">
                        <Image
                            src={mainGoal}
                            alt="main-goal"
                            fluid
                            className="margin"
                        />
                    </Col>
                    <Col className="col-md-6 col-12">
                        <h2 className="textBlack fontSubtitle">
                            Our main goal is to promote the value of education
                            for every Filipino and make it reachable anytime and
                            anywhere
                        </h2>
                        <div className="textGray">
                            <p className="footerText1 margin">
                                You can explore the features that we provide and
                                have their own functions each feature.
                            </p>
                            <p className="footerText2">
                                <FaCheckCircle
                                    size={18}
                                    className="textSecondary marginRight"
                                />
                                IToolboxPH eLearning Portal
                            </p>
                            <p className="footerText2">
                                <FaCheckCircle
                                    size={18}
                                    className="textSecondary marginRight"
                                />
                                Technology Solution Provider and Consultation
                            </p>
                            <p className="footerText2">
                                <FaCheckCircle
                                    size={18}
                                    className="textSecondary marginRight"
                                />
                                Innovative Products and sevices
                            </p>
                        </div>
                    </Col>
                </Row>
            </Container>
            <div className="backgroundGray marginTB">
                <Container className="marginTB">
                    <Row className="justify-content-center align-items-center marginTB">
                        <Col className="col-md-6 col-12">
                            <h1 className="textTitle textSecondary">
                                Our mission
                            </h1>
                            <p className="textGray">
                                Promote the value of education using the
                                available technology to let Filipinos access
                                IToolbox Interactive Learning Advocacies even
                                the lowest class citizen. Promote the technology
                                solutions of IToolboxPH in order to serve
                                Filipinos on a day-to-day activities or
                                operation by providing updated and useful
                                technologies for every Filipinos.
                            </p>
                            <h1 className="textTitle textSecondary">
                                Our vision
                            </h1>
                            <p className="textGray">
                                Let the Filipinos adapt the technology trends
                                and inspire to use the technology as a service
                                and help the environment and even the society.
                                IToolbox will be the leading IT resources
                                provider that will guide and assist fellow
                                professional. As a service, IToolbox will
                                contribute to our society by giving what the
                                Filipino deserve or what they should have
                                especially the needy one and the lowest class
                                Filipinos.
                            </p>
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
                <Team />
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
        </>
    );
}

export default HomePage;

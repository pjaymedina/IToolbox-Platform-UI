import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import colors from "../../config/colors";

function Footer(props) {
    return (
        <Container style={styles.footerContainer} fluid>
            <Row>
                <Col className="col-md-6 col-12 textWhite">
                    <p className="fontSubtitle">iToolbox PH</p>
                    <p style={styles.footerSubtitle} className="footerText">
                        IToolbox aimed to provide an opportunity to solve
                        different problems through technology innovations and
                        inspire the IT industry both professionals and
                        non-professionals.
                    </p>
                    <p>©2019 iToolboxPH</p>
                </Col>
                <Col>
                    <p className="textSecondary fw-bold">Product</p>
                    <div className="textWhite">
                        <p>Register</p>
                        <p>Pricing</p>
                        <p>iToolbox Platform</p>
                        <p>Digicool</p>
                        <p>Countries</p>
                    </div>
                </Col>
                <Col>
                    <p className="textSecondary fw-bold">Engage</p>
                    <div className="textWhite">
                        <p>Terms of Service</p>
                        <p>FAQ</p>
                        <p>Tutorials</p>
                        <p>About Us</p>
                        <p>Privacy Policy</p>
                    </div>
                </Col>
                <Col>
                    <p className="textSecondary fw-bold">Earn Money</p>
                    <div className="textWhite">
                        <p>Affiliate</p>
                        <p>Become Partner</p>
                    </div>
                </Col>
            </Row>
        </Container>
    );
}

const styles = {
    footerContainer: {
        backgroundColor: colors.primary,
        padding: "5% 10%",
    },
};

export default Footer;

import React from "react";
import { Container, Navbar, Nav, Button } from "react-bootstrap";
import colors from "../../config/colors";

function NavBar(props) {
    return (
        <>
            <Container id="home" />
            <Navbar bg="white" expand="lg" sticky="top">
                <Container style={styles.navbarContainer}>
                    <Navbar.Brand href="/" style={styles.navBrand}>
                        IToolbox
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="/#home">Home</Nav.Link>
                            <Nav.Link href="/#about">About Us</Nav.Link>
                            <Nav.Link href="/#team">Team</Nav.Link>
                            <Nav.Link href="/#contact">Contact Us</Nav.Link>
                        </Nav>
                        <Button style={styles.signInButton}>Sign In</Button>
                        <Button style={styles.signUpButton}>Sign Up</Button>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
}

const styles = {
    navBrand: {
        fontWeight: "700",
    },
    navbarContainer: {
        marginTop: "2%",
    },
    signInButton: {
        backgroundColor: "transparent",
        border: "none",
        color: colors.black,
        marginRight: "1%",
        fontWeight: "700",
        paddingLeft: 0,
    },
    signUpButton: {
        backgroundColor: "transparent",
        color: colors.primary,
        borderColor: colors.primary,
        borderRadius: 50,
        padding: "5px 30px",
        fontWeight: "700",
    },
};

export default NavBar;

import React from "react";
import { Container, Navbar, Nav, Button } from "react-bootstrap";
import colors from "../../config/colors";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
function NavBar(props) {
    return (
        <>
        <Router>
            <div>
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
                        <Button style={styles.signInButton} href="/login">Login</Button>
                        <Button style={styles.signUpButton} href="/register"> Sign Up</Button>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            </div>
            {/* <div>
                <Switch>
                    <Route path="/login">
                        <Login/>
                    </Route>
                    <Route path="/register">
                        <Register/>
                    </Route>
                </Switch>
            </div> */}
            </Router>
            
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

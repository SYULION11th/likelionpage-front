import {React, useState} from "react";
import Navbar from 'react-bootstrap/Navbar';
import Container from "react-bootstrap/Container";
import Nav from 'react-bootstrap/Nav';
import {Link} from 'react-router-dom';
import logo from '../Assets/logo.png';

function NavBar() {
    const [expand, updateExpanded] = useState(false);
    const [navColour, updateNavbar] = useState(false);

    function scrollHandler() {
        if (window.scrollY >= 20) {
            updateNavbar(true);
        } else {
            updateNavbar(false);
        }
    }

    window.addEventListener("scroll", scrollHandler);


    return (
        <Navbar
            bg="light"
            expanded={expand}
            fixed="top"
            expand="md"
            className={navColour
                ? "sticky"
                : "navbar"}>
            <Container>

                <Navbar.Brand href="/likelionpage-front/" className="d-flex">
                    <img src={logo} className="img-fluid navLogo" alt="brand"/>
                </Navbar.Brand>
                <Navbar.Toggle
                    aria-controls="responsive-navbar-nav"
                    onClick={() => {
                        updateExpanded(
                            expand
                                ? false
                                : "expanded"
                        );
                    }}>
                    <span></span>
                    <span></span>
                    <span></span>
                </Navbar.Toggle>
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="ms-auto" defaultActiveKey="#home">

                        <Nav.Item>
                            <Nav.Link as={Link} to="/Question" onClick={() => updateExpanded(false)}>

                                Q&A
                            </Nav.Link>
                        </Nav.Item>

                        <Nav.Item>
                            <Nav.Link as={Link} to="/Submit" onClick={() => updateExpanded(false)}>

                                지원하기
                            </Nav.Link>
                        </Nav.Item>

                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NavBar;

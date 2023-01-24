import React from "react";
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { Link } from 'react-router-dom';

function NavBar() {
    return (
        
        <Navbar bg="dark" variant="dark">
        <Navbar.Brand as={Link} to="/">멋쟁이사자처럼</Navbar.Brand>
        <Navbar.Brand as={Link} to="/">로그인</Navbar.Brand>
        <Nav className="mr-auto">
            <Nav.Link as={Link} to="/">홈</Nav.Link>
            <Nav.Link as={Link} to="/Notice">공지</Nav.Link>
            <Nav.Link as={Link} to="/">일정</Nav.Link>
            <Nav.Link as={Link} to="/">과제</Nav.Link>
            <Nav.Link as={Link} to="/">Q&A</Nav.Link>
        </Nav>
        </Navbar>
    );
    }

export default NavBar;
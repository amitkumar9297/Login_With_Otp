import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const Header = () => {
    return (
        <>
            <Navbar bg="dark" data-bs-theme="dark">
                <Container>
                    <Navbar.Brand href="#home">OTP VERIFICATION</Navbar.Brand>
                    <Nav >
                        <Nav.Link href="/register">Register</Nav.Link>
                        <img src="/logo192.png" style={{ width: 50 }} alt="" />
                    </Nav>
                </Container>
            </Navbar>
        </>
    )
}

export default Header
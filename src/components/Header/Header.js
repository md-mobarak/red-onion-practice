import React from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from '../../image/logo2.png'
import './Hedear.css'

const Header = () => {
    return (
        <Navbar collapseOnSelect expand="lg" bg="white" variant="dark">
            <Container>

                <Navbar.Brand as={Link} to="/home"> <img className='logo-img' src={logo} alt="" />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" className='dark' />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        {/* <Nav.Link href="#features" className='text-dark'>Features</Nav.Link> */}
                    </Nav>
                    <Nav>
                        <Nav.Link className='text-dark' as={Link} to="cart">Cart</Nav.Link>
                        <Nav.Link className='text-dark' as={Link} to="login">Login</Nav.Link>
                        <Nav.Link eventKey={2} as={Link} to="signup">
                            <button className='signup-btn'>Sign up</button>
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;
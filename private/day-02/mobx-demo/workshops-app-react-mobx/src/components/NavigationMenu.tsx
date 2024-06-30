import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav, Container } from 'react-bootstrap';

const NavigationMenu = () => {
    return (
        <Navbar bg="light" variant="light">
            <Container>
                <Nav className="me-auto">
                    <Nav.Link to="/" as={Link}>
                        Home
                    </Nav.Link>
                    <Nav.Link to="/workshops" as={Link}>
                        List of workshops
                    </Nav.Link>
                </Nav>
            </Container>
        </Navbar>
    );
}

export default NavigationMenu;
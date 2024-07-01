import { useContext } from 'react';
import {
    Container,
    Nav,
    Navbar
} from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import { ThemeContext } from '../../contexts/ThemeContext';

const Navigation = () => {
    const value = useContext(ThemeContext);

    return (
        <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
            <Container>
                <Navbar.Brand as={NavLink} to="/" end>Workshops App</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link as={NavLink} to="/workshops" end>List of workshops</Nav.Link>
                        <Nav.Link as={NavLink} to="/workshops/add" end>Add a workshop</Nav.Link>
                    </Nav>
                    <Nav>
                        <Nav.Link as="span" onClick={value.toggle}>Change theme</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Navigation;
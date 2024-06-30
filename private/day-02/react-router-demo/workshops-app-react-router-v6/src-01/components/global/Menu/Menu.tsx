import { NavLink, NavLinkProps } from "react-router-dom";
import { Navbar, Nav, Container } from "react-bootstrap";

const getNavLinkClassName: NavLinkProps["className"] = ({
    isActive,
    isPending,
}) => {
    return isActive ? "nav-link active" : "nav-link";
};

const Menu = () => {
    return (
        <Navbar bg="light" expand="lg">
            <Container>
                <span className="navbar-brand">
                    <NavLink to="/" end className={getNavLinkClassName}>
                        Workshops App
                    </NavLink>
                </span>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav className="me-auto my-2 my-lg-0" navbarScroll>
                        <NavLink end to="/" className={getNavLinkClassName}>
                            Home
                        </NavLink>
                        <NavLink
                            end
                            to="/workshops"
                            className={getNavLinkClassName}
                        >
                            List of workshops
                        </NavLink>
                        <NavLink
                            end
                            to="/workshops/add"
                            className={getNavLinkClassName}
                        >
                            Add a workshop
                        </NavLink>
                        <NavLink
                            end
                            to="/feedback"
                            className={getNavLinkClassName}
                        >
                            Feedback
                        </NavLink>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Menu;

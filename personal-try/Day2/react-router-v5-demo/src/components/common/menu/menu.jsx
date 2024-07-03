import { NavLink } from "react-router-dom";

import './menu.css';

//sfc
const Menu = () => {
    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
                <NavLink className="navbar-brand" to="/">Tool</NavLink>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <NavLink exact activeClassName="active" className="nav-link" aria-current="page" to="/">Home</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink exact className="nav-link" to="/workshops">List of Workshops</NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Menu;
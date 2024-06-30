import React from 'react';
import { Link } from 'react-router-dom';

const NavigationMenu = () => {
    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                        <Link to="/" className="nav-link active">Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/workshops" className="nav-link active">List of workshops</Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default NavigationMenu;
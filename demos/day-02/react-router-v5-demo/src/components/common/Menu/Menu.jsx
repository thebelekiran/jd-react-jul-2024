import { Link, NavLink } from 'react-router-dom';

// sfc + Enter
const Menu = () => {
    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">MyApp</Link>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/workshops">List of workshops</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Menu;
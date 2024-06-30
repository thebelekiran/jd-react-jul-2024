import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className="p-5 bg-blue-500 text-white text-3xl font-bold">
            <Link to="/">Fidget Spinner World</Link>
        </div>
    );
}

export default Header;
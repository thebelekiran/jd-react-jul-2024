import { Link } from 'next/link';

const Menu = () => {
    return (
        <div>
            <Link href="/">Home</Link>
            {" "}
            <Link href="/">List of workshops</Link>
        </div>
    );
};

export default Menu;
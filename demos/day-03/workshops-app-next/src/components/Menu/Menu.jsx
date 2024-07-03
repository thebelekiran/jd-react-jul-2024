import Link from 'next/link';

export default function Menu() {
    return (
        <div>
            <Link href="/">Home</Link>
            {" "}
            <Link href="/workshops">List of workshops</Link>
        </div>
    );
};
import Link from 'next/link';
import Head from 'next/head';

export default function HomePage() {
    return (
        <div>
            <Head>
                <title>Home | Workshops App</title>
            </Head>
            Welcome to Workshops App. View <Link href="/workshops">all workshops</Link>.
        </div>
    )
}
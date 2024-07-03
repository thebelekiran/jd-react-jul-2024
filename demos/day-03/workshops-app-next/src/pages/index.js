import Link from 'next/link';
import Head from 'next/head';

export default function Home() {
  return (
    <>
      <Head>
        <title>Home page</title>
        <meta name="description" content="Welome to workshops app"></meta>
      </Head>
      This is Workshops App. Click here to <Link href="/workshops">view all workshops</Link>.
    </>
  );
}

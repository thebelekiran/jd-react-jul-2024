import Link from 'next/link';

export default function Home() {
  return (
    <>
      This is Workshops App. Click here to <Link href="/workshops">view all workshops</Link>.
  </>
  );
}

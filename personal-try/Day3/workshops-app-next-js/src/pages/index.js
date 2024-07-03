import { Inter } from "next/font/google";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      This is workshops App. Click here to view <Link href="/workshops"> all workshops. </Link>
    </>
  );
}
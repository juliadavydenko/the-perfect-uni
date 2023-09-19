import Link from "next/link";

export default function Navbar() {
  return (
    <nav>
      <h1>Navbar</h1>
      <Link href="/">Main Page</Link>
      <Link href="/universities">All Universities</Link>
    </nav>
  );
}

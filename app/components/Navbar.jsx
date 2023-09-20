import Link from "next/link";
import Image from "next/image";
import Logo from "./uni-logo.png";

export default function Navbar() {
  return (
    <nav>
      <Image src={Logo} alt="The Perfect Uni logo" width={70} quality={100} />
      <h1>The Perfect Uni</h1>
      <Link href="/">Main</Link>
      <span> | </span>
      <Link href="/universities">All Universities</Link>
    </nav>
  );
}

import Link from "next/link";
import Image from "next/image";
import Logo from "./uni-logo.png";

export default function Navbar() {
  return (
    <nav className="flex justify-between px-10 py-5 items-center bg-white">
      <div>
        <Image src={Logo} alt="The Perfect Uni logo" width={70} quality={100} />
        <h1 class="text-xl text-gray-800 font-bold">The Perfect Uni</h1>
      </div>
      <div class="flex items-center">
        <ul class="flex items-center space-x-6">
          <li class="font-semibold text-gray-700">
            <Link href="/">Main</Link>
          </li>
          <span> | </span>
          <li class="font-semibold text-gray-700">
            <Link href="/universities">All Universities</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

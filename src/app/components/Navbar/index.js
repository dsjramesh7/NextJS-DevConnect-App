import { LOGO } from "@/app/utils/constants";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="bg-red-300 shadow-lg">
      <div className="container flex justify-between mx-auto px-1 py-2 items-center">
        <Link href="/" className="flex items-center">
          <Image src={LOGO} alt="logo" height={80} width={80} />
          <h1 className="text-2xl font-bold">
            <span className="text-red-600">Dev</span>
            <span className="text-yellow-200">Connect</span> 🚀
          </h1>
        </Link>
        <ul className="flex gap-12 font-semibold text-xl">
          <li className="hover:text-yellow-100 transition delay-150 duration-300 ease-in-out">
            <Link href={"/"}>Home</Link>
          </li>
          <li className="hover:text-yellow-100 transition delay-150 duration-300 ease-in-out">
            <Link href={"/explore"}>Explore</Link>
          </li>
          <li className="hover:text-yellow-100 transition delay-150 duration-300 ease-in-out">
            <Link href={"/login"}>Login</Link>
          </li>
          <li className="hover:text-yellow-100 transition delay-150 duration-300 ease-in-out">
            <Link href={"/signup"}>SignUp</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;

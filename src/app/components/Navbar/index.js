"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { LOGO } from "@/app/utils/constants";
import { GiHamburgerMenu } from "react-icons/gi";

const Navbar = () => {
  const [isOpenMenu, setIsOpenMenu] = useState(false);
  const AllMenus = ["Home", "Explore", "Login", "SignUp"];
  return (
    <nav className="bg-red-300 shadow-lg">
      <div className="container flex justify-between mx-auto px-4 py-2 items-center">
        {/* My App Logo  */}
        <Link href="/" className="flex items-center">
          <Image src={LOGO} alt="logo" height={70} width={70} />
          <h1 className="text-2xl font-bold">
            <span className="text-red-600">Dev</span>
            <span className="text-yellow-200">Connect</span> 🚀
          </h1>
        </Link>

        {/* Desktop/laptop Menus  */}
        <ul className="hidden md:flex gap-12 font-semibold text-xl">
          {AllMenus.map((singleMenuItem, index) => (
            <li
              key={index}
              className="hover:text-yellow-100 transition delay-150 duration-300 ease-in-out"
            >
              <Link href={`/${singleMenuItem.toLowerCase()}`}>
                {singleMenuItem}
              </Link>
            </li>
          ))}
        </ul>
        <div
          className="md:hidden text-white p-4"
          onClick={() => {
            setIsOpenMenu(!isOpenMenu);
          }}
        >
          <GiHamburgerMenu size={30} />
        </div>
      </div>

      {/* mobile/tablet menu  */}
      {isOpenMenu && (
        <ul className="md:hidden flex flex-col items-center gap-4 pb-4">
          {AllMenus.map((item) => (
            <li
              key={item}
              className="cursor-pointer text-lg hover:bg-yellow-400 transition duration-300"
            >
              <Link
                href={`/${item.toLowerCase()}`}
                onClick={() => setIsOpen(false)}
              >
                {item}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
};

export default Navbar;

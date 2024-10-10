import React from "react";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="bg-customGreen text-white p-4">
      <ul className="flex justify-around">
        <li>
          <Link href="/home" className="hover:text-customHover">
            Home
          </Link>
        </li>
        <li>
          <Link href="/login" className="hover:text-customHover">
            Login
          </Link>
        </li>
        <li>
          <Link href="/register" className="hover:text-customHover">
            Register
          </Link>
        </li>
        <li>
          <Link href="/profile" className="hover:text-customHover">
            Profile
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;

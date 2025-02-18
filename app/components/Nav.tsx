"use client";

import Link from "next/link";
import { FaSearch } from "react-icons/fa";

const Nav = () => {
  return (
    <header className="bg-white w-full shadow-md p-4 fixed top-0 left-0 z-50">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-xl font-bold text-red-600">Kotak Neo</h1>
        <div className="relative w-1/3">
          <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            placeholder="Search shares, companies..."
            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none"
          />
        </div>
        <nav className="flex gap-4 items-center">
          {["Home", "Orders", "Portfolio", "Invest", "Funds"].map((item) => (
            <Link key={item} href={`/${item.toLowerCase()}`} className="text-gray-600 hover:text-red-500">
              {item}
            </Link>
          ))}
          <div className="bg-gray-200 px-3 py-1 rounded-full text-gray-800">AK</div>
        </nav>
      </div>
    </header>
  );
};

export default Nav;

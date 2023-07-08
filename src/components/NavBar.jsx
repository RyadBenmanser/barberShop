"use client";
import Link from "next/link";
import React, { useState } from "react";

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menu = [{ name: "Home" }, { name: "Our Team" }, { name: "Gallery" }];

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <nav className="bg-gray-800 fixed z-10 left-0 right-0">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <Link href="/">
              <p className="text-white">Logo</p>
            </Link>
          </div>
          <div className="hidden sm:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <Link href="/about">
                <p className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                  About
                </p>
              </Link>
              <Link href="/services">
                <p className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                  Services
                </p>
              </Link>
              <Link href="/contact">
                <p className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                  Contact
                </p>
              </Link>
            </div>
          </div>
          <div className="sm:hidden">
            <button
              type="button"
              className="text-gray-300 hover:bg-gray-700 hover:text-white px-2 py-1 rounded-md"
              onClick={toggleMenu}
            >
              <svg
                className="h-6 w-6 fill-current"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                {isMenuOpen ? (
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M19 12H5a1 1 0 1 1 0-2h14a1 1 0 0 1 0 2zM4 8a1 1 0 0 1 0-2h16a1 1 0 1 1 0 2H4zm15 8H5a1 1 0 0 1 0-2h14a1 1 0 0 1 0 2z"
                  />
                ) : (
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M4 6a2 2 0 1 1 4 0v12a2 2 0 1 1-4 0V6zm7 0a2 2 0 1 1 4 0v12a2 2 0 1 1-4 0V6zm9 0a2 2 0 1 1 4 0v12a2 2 0 1 1-4 0V6z"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
        {isMenuOpen && (
          <div className="sm:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <Link href="/about">
                <p className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
                  About
                </p>
              </Link>
              <Link href="/services">
                <p className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
                  Services
                </p>
              </Link>
              <Link href="/contact">
                <p className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
                  Contact
                </p>
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default NavBar;

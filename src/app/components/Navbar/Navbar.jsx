// components/Navbar.js
"use client";
import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import logo from "../../../../public/ayushnirmatalogo.png";
import header from "../../../../public/ayushsiteheader.png";
import Login from "../Login/Login"; // Import the Login component

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const openLoginModal = () => {
    setIsLoginModalOpen(true);
  };

  const closeLoginModal = () => {
    setIsLoginModalOpen(false);
  };

  return (
    <>
      <nav className="bg-[#ffffff] p-4 shadow-md">
        <div className="container mx-auto flex justify-between items-center">
          <div className="text-black text-2xl font-bold flex items-center space-x-8">
            <Image src={logo} alt="logo" width={80} height={80} />
            <Image src={header} alt="header" width={220} height={220} />
          </div>

          <div className="md:hidden">
            <button onClick={toggleMenu} className="focus:outline-none">
              {isOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>

          <ul className="md:flex sm:space-x-12 hidden">
            <li>
              <Link href="/pagecommit">
                <h1 className="text-black text-base sm:text-lg md:text-sm lg:text-xl font-bold hover:text-red-500">
                  Committee
                </h1>
              </Link>
            </li>
            <li>
              <Link href="/association">
                <h1 className="text-black text-lg font-bold hover:text-red-500">
                  Our Associate
                </h1>
              </Link>
            </li>
            <li>
              <Link href="/aboutus">
                <h1 className="text-black text-lg font-bold hover:text-red-500">
                  About Us
                </h1>
              </Link>
            </li>
            <li>
              <Link href="/product">
                <h1 className="text-black text-lg font-bold hover:text-red-500">
                  Products
                </h1>
              </Link>
            </li>
            <li>
              <Link href="/member">
                <h1 className="text-black text-lg font-bold hover:text-red-500">
                  Members
                </h1>
              </Link>
            </li>
            <li>
              <Link href="/contactus">
                <h1 className="text-black text-lg font-bold hover:text-red-500">
                  Contact Us
                </h1>
              </Link>
            </li>
          </ul>

          <div className="hidden md:block">
            <button
              onClick={openLoginModal}
              className="text-black text-lg font-bold border-4 border-red-500 bg-white px-6 py-1 rounded-lg hover:bg-red-500 hover:text-white transition-all duration-300"
            >
              Login
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`md:hidden ${isOpen ? "block" : "hidden"}`}>
          <ul className="flex flex-col space-y-4 mt-4">
            <li>
              <Link href="/pagecommit">
                <h1 className="text-black text-lg font-bold hover:text-red-500">
                  Committee
                </h1>
              </Link>
            </li>
            <li>
              <Link href="/aboutus">
                <h1 className="text-black text-lg font-bold hover:text-red-500">
                  About Us
                </h1>
              </Link>
            </li>
            <li>
              <Link href="/product">
                <h1 className="text-black text-lg font-bold hover:text-red-500">
                  Products
                </h1>
              </Link>
            </li>
            <li>
              <Link href="/member">
                <h1 className="text-black text-lg font-bold hover:text-red-500">
                  Members
                </h1>
              </Link>
            </li>
            <li>
              <Link href="/contactus">
                <h1 className="text-black text-lg font-bold hover:text-red-500">
                  Contact Us
                </h1>
              </Link>
            </li>
            <li>
              <button
                onClick={openLoginModal}
                className="text-black text-lg font-bold border-2 border-red-500 bg-white px-4 py-2 rounded-lg hover:bg-red-500"
              >
                Login
              </button>
            </li>
          </ul>
        </div>
      </nav>

      {/* Login Modal */}
      {isLoginModalOpen && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex justify-center items-center">
          <div className="bg-white p-8 rounded-lg shadow-xl w-[400px] relative">
            <button
              onClick={closeLoginModal}
              className="absolute -top-2 -right-2 p-2 rounded-full hover:bg-gray-100 transition-colors"
            >
              <X className="w-6 h-6 text-red hover:text-red-700" />
            </button>
            <Login />
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;

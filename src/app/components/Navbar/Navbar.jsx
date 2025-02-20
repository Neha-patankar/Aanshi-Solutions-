"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import Login from "../Login/Login";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);

  return (
    <div className="w-full">
      {/* Top Navigation Bar */}
      <nav className="bg-white items-center justify-center w-full">
        <div className="container flex items-center justify-center mx-auto px-4">
          <div className="flex h-24 justify-center w-full items-center">
            {/* Logo Section */}
            <div className="flex items-center justify-center md:space-x-8  space-x-4">
              <Image
                src="/ayushnirmatalogo.png"
                alt="Logo"
                width={80}
                height={80}
                className="rounded-full w-[80px] h-[80px] md:w-[80px] md:h-[80px]"
              />
              <Image
                src="/ayushsiteheader.png"
                alt="Site Header"
                width={220}
                height={220}
                className="rounded-full text-white w-[160px] h-[60px] md:w-[220px] md:h-[60px]"
              />
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden absolute right-4">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="text-[#000957] hover:text-[#000957]"
              >
                {isOpen ? (
                  <X className="h-6 w-6" />
                ) : (
                  <Menu className="h-6 w-6" />
                )}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Red Navigation Bar */}
      <div className="bg-gray-500 w-full">
        <div className="container mx-auto px-4">
          {/* Desktop Menu */}
          <div className="hidden md:flex justify-center items-center h-12">
            <Link
              href="/"
              className="text-white px-4 hover:bg-red-500 h-full flex items-center"
            >
              Home
            </Link>
            <Link
              href="/pagecommit"
              className="text-white px-4 hover:bg-red-500 h-full flex items-center"
            >
              Committee
            </Link>
            <Link
              href="/association"
              className="text-white px-4 hover:bg-red-500 h-full flex items-center"
            >
              Our Associates
            </Link>
            <Link
              href="/aboutus"
              className="text-white px-4 hover:bg-red-500 h-full flex items-center"
            >
              About Us
            </Link>
            <Link
              href="/product"
              className="text-white px-4 hover:bg-red-500 h-full flex items-center"
            >
              Products
            </Link>
            <Link
              href="/member"
              className="text-white px-4 hover:bg-red-500 h-full flex items-center"
            >
              Members
            </Link>
            <Link
              href="/contactus"
              className="text-white px-4 hover:bg-red-500 h-full flex items-center"
            >
              Contact Us
            </Link>
            <button
              onClick={() => setIsLoginModalOpen(true)}
              className="text-white px-4 hover:bg-red-500 h-full flex items-center"
            >
              Login
            </button>
          </div>

          {/* Mobile Menu */}
          <div className={`md:hidden ${isOpen ? "block" : "hidden"}`}>
            <div className="px-2 pt-2 pb-3 space-y-1">
              <Link
                href="/"
                className="text-white block px-3 py-2 hover:bg-red-500"
              >
                Home
              </Link>
              <Link
                href="/aboutus"
                className="text-white block px-3 py-2 hover:bg-red-500"
              >
                About Us
              </Link>
              <Link
                href="/pagecommit"
                className="text-white block px-3 py-2 hover:bg-red-500"
              >
                Committee
              </Link>
              <Link
                href="/product"
                className="text-white block px-3 py-2 hover:bg-red-500"
              >
                Products
              </Link>
              <Link
                href="/member"
                className="text-white block px-3 py-2 hover:bg-red-500"
              >
                Members
              </Link>
              <Link
                href="/association"
                className="text-white block px-3 py-2 hover:bg-red-500"
              >
                Our Associates
              </Link>
              <Link
                href="/contactus"
                className="text-white block px-3 py-2 hover:bg-red-500"
              >
                Contact Us
              </Link>
              <button
                onClick={() => setIsLoginModalOpen(true)}
                className="text-white block px-3 py-2 hover:bg-red-500 w-full text-left"
              >
                Login
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Login Modal */}
      {isLoginModalOpen && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex justify-center items-center z-50">
          <div className="bg-white p-8 rounded-lg shadow-xl w-[400px] relative">
            <button
              onClick={() => setIsLoginModalOpen(false)}
              className="absolute -top-2 -right-2 p-2 rounded-full hover:bg-gray-100 transition-colors"
            >
              <X className="w-6 h-6 text-red-500 hover:text-red-500" />
            </button>
            <Login />
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;

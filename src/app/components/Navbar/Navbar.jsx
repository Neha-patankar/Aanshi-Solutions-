"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react"; // Icons for burger menu
import { Eye, EyeOff } from "lucide-react";
// import Login from "../Login/Login";
import Image from "next/image";
import logo from "../../../../public/ayushnirmatalogo.png";
import header from "../../../../public/ayushsiteheader.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false); // State for login modal

  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    mobile: "",
    password: "",
  });

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const openLoginModal = () => {
    setIsLoginModalOpen(true);
  };

  const closeLoginModal = () => {
    setIsLoginModalOpen(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle login logic here
    console.log("Form submitted:", formData);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // if (!isLoginModalOpen) return null;

  return (
    <>
      <nav className=" bg-[#ffffff] p-4 shadow-md">
        <div className="container mx-auto flex justify-between items-center">
          <div className="text-black text-2xl font-bold flex items-center space-x-8">
            <Image src={logo} alt="logo" width={80} height={80} />
            <Image src={header} alt="header" width={220} height={220} />
          </div>

          <div className="md:hidden">
            {/* Burger Icon for mobile */}
            <button onClick={toggleMenu} className="focus:outline-none">
              {isOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>

          {/* Links for desktop */}
          <ul className={`md:flex sm:space-x-12  hidden md:flex`}>
            <li>
              <Link href="/pagecommit">
                <h1 className="text-black text-base sm:text-lg md:text-sm lg:text-xl font-bold hover:text-red-500">
                  {" "}
                  Committee
                </h1>
              </Link>
            </li>
            <li>
              <Link href="/association">
                <h1 className="text-black text-lg font-bold  hover:text-red-500">
                 Association
                </h1>
              </Link>
            </li>
            <li>
              <Link href="/aboutus">
                <h1 className="text-black text-lg font-bold  hover:text-red-500">
                  About Us
                </h1>
              </Link>
            </li>
          
            <li>
              <Link href="/product">
                <h1 className="text-black text-lg font-bold  hover:text-red-500">
                  Products
                </h1>
              </Link>
            </li>
            <li>
              <Link href="/member">
                <h1 className="text-black text-lg font-bold  hover:text-red-500">
                  Members
                </h1>
              </Link>
            </li>

            <li>
              <Link href="/contactus">
                <h1 className="text-black text-lg font-bold  hover:text-red-500">
                  Contact Us
                </h1>
              </Link>
            </li>
          </ul>
          {/* Login button for desktop */}
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
                <h1 className="text-black text-lg font-bold  hover:text-red-500">
                  Committee
                </h1>
              </Link>
            </li>
            <li>
              <Link href="/aboutus">
                <h1 className="text-black text-lg font-bold  hover:text-red-500">
                  About Us
                </h1>
              </Link>
            </li>
            <li>
              <Link href="/product">
                <h1 className="text-black text-lg font-bold  hover:text-red-500">
                  Products
                </h1>
              </Link>
            </li>
            <li>
              <Link href="/member">
                <h1 className="text-black text-lg font-bold  hover:text-red-500">
                  Members
                </h1>
              </Link>
            </li>

            <li>
              <Link href="/contactus">
                <h1 className="text-black text-lg font-bold  hover:text-red-500">
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

      {/* Modal for Login */}
      {isLoginModalOpen && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex justify-center items-center">
          <div className="bg-white p-8 rounded-lg shadow-xl w-[400px] relative">
            {/* Header */}
            <div className="relative mb-6">
              <h1 className="text-2xl text-center font-bold text-gray-800">
                Login
              </h1>
              <button
                onClick={closeLoginModal}
                className="absolute -top-2 -right-2 p-2 rounded-full hover:bg-gray-100 transition-colors"
              >
                <X className="w-6 h-6 text-red hover:text-red-700" />
              </button>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit}>
              {/* Mobile Input */}
              <div className="mb-6">
                <label className="block text-gray-700 font-semibold mb-2">
                  Mobile Number
                </label>
                <input
                  type="tel"
                  name="mobile"
                  value={formData.mobile}
                  onChange={handleChange}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 outline-none transition-all"
                  placeholder="Enter your mobile number"
                  required
                />
              </div>

              {/* Password Input */}
              <div className="mb-6">
                <label className="block text-gray-700 font-semibold mb-2">
                  Password
                </label>
                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 outline-none transition-all"
                    placeholder="Enter your password"
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700"
                  >
                    {showPassword ? (
                      <EyeOff className="w-5 h-5" />
                    ) : (
                      <Eye className="w-5 h-5" />
                    )}
                  </button>
                </div>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-4 rounded-lg transition-colors"
              >
                Login
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;

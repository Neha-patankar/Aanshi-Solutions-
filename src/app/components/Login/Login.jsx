"use client"
import React, { useState, useRef, useEffect } from 'react';
import { X, Eye, EyeOff } from 'lucide-react';

const Login = ({ isOpen, onClose }) => {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    mobile: '',
    password: ''
  });
  const modalRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        onClose();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [onClose]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Add your login logic here
    console.log('Form submitted:', formData);
    // You can add your own success handling here
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-50">
      <div ref={modalRef} className="bg-[#F8F0EE] p-5 rounded-2xl shadow-lg w-full max-w-3xl">
        <div className="flex flex-col md:flex-row">
          {/* Left Section - Image */}
          <div className="w-full md:w-1/2 p-0 relative">
            <h2 className="text-gray-800 text-sm font-bold hidden md:block mb-4">
              Brandsmashers Academy
            </h2>
            <div className="flex items-center justify-center h-[100px] sm:h-[200px] md:h-[250px]">
              <img
                src="/LoginImage.svg"
                alt="Login"
                className="w-36 sm:w-48 md:w-56"
              />
            </div>
          </div>

          {/* Right Section - Form */}
          <div className="w-full md:w-1/2 p-0 relative">
            <button
              onClick={onClose}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
            >
              <X className="h-6 w-6" />
            </button>

            <div className="max-w-sm">
              <h2 className="text-xl md:text-2xl font-bold mb-6 text-gray-800">
                Login to Your Account
              </h2>

              <form onSubmit={handleSubmit} className="space-y-4">
                {/* Mobile Number Field */}
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-1">
                    Mobile no.
                  </label>
                  <div className="flex">
                    <span className="inline-flex items-center px-3 py-2 bg-[#FFE3DE] border border-r-0 border-[#F8F0EE] rounded-l-lg text-gray-500">
                      +91
                    </span>
                    <input
                      type="tel"
                      value={formData.mobile}
                      onChange={(e) => setFormData({ ...formData, mobile: e.target.value })}
                      className="w-full px-4 py-2 bg-[#FFE3DE] border border-[#F8F0EE] rounded-r-lg focus:ring-2 focus:ring-red-500 focus:border-transparent outline-none"
                      placeholder="Enter mobile number"
                    />
                  </div>
                </div>

                {/* Password Field */}
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-1">
                    Password
                  </label>
                  <div className="relative">
                    <input
                      type={showPassword ? "text" : "password"}
                      value={formData.password}
                      onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                      className="w-full px-4 py-2 bg-[#FFE3DE] border border-[#F8F0EE] rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent outline-none pr-10"
                      placeholder="Enter password"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3 top-1/2 transform -translate-y-1/2"
                    >
                      {showPassword ? (
                        <EyeOff className="h-5 w-5 text-gray-500" />
                      ) : (
                        <Eye className="h-5 w-5 text-gray-500" />
                      )}
                    </button>
                  </div>
                </div>

                {/* Forgot Password Link */}
                <div className="text-right">
                  <a href="#" className="text-sm text-red-500 hover:text-red-600">
                    Forgot Password?
                  </a>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full bg-red-500 text-white text-md py-2 px-4 rounded-lg hover:bg-red-600 transition-colors"
                >
                  Login
                </button>

                {/* Sign Up Link */}
                <p className="text-center text-sm text-gray-600">
                  Don't have an account?{' '}
                  <a href="#" className="text-red-500 hover:text-red-600 font-medium">
                    Sign Up
                  </a>
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
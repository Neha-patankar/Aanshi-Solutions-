"use client";

import { useState } from "react";
import { X } from "lucide-react";
import Image from "next/image";
import logo from "../../../../public/ayushnirmatalogo.png";
import header from "../../../../public/ayushsiteheader.png";

const Login = () => {
  const [isOtpSent, setIsOtpSent] = useState(false);
  const [formData, setFormData] = useState({
    mobile: "",
    otp: "",
  });

  const handleSendOtp = (e) => {
    e.preventDefault();
    // OTP sending logic here
    console.log("Sending OTP to:", formData.mobile);
    setIsOtpSent(true);
  };

  const handleVerifyOtp = (e) => {
    e.preventDefault();
    // OTP verification logic here
    console.log("Verifying OTP:", formData.otp);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex justify-center items-center">
      <div className="bg-white p-0 rounded-lg shadow-xl w-[90%] sm:w-[400px] relative">
        {/* Header */}
        <div className="relative mb-6">
         
          <button
            onClick={() => window.history.back()}
            className="absolute -top-0 -right-0 p-2 rounded-full hover:bg-gray-100 transition-colors"
          >
            <X className="w-6 h-6 text-red hover:text-[#000957]" />
          </button>
        </div>

        {/* Logo and header images with border */}
        <div className="flex justify-center mb-4 -mt-3 gap-8 border-b-4 border-[#2e7d32] pb-4">
          <Image
            src={logo}
            alt="logo"
            width={80}
            height={80}
            className="object-contain"
          />
          <Image
            src={header}
            alt="header"
            width={180}
            height={180}
            className="object-contain"
          />
          
        </div>
        <h1 className="text-2xl text-center font-bold text-[#2e7d32] mt-4">
            Login
          </h1>

        {/* Form */}
        <form onSubmit={isOtpSent ? handleVerifyOtp : handleSendOtp} className="p-6">
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
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#2e7d32] focus:border-[#2e7d32] outline-none transition-all"
              placeholder="Enter your mobile number"
              required
              disabled={isOtpSent}
            />
          </div>

          {/* OTP Input - Only shown after OTP is sent */}
          {isOtpSent && (
            <div className="mb-6">
              <label className="block text-gray-700 font-semibold mb-2">
                Enter OTP
              </label>
              <input
                type="text"
                name="otp"
                value={formData.otp}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#2e7d32] focus:border-[#2e7d32] outline-none transition-all"
                placeholder="Enter OTP"
                required
                maxLength="6"
              />
            </div>
          )}

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-[#2e7d32] hover:bg-[#1b5e20] text-white font-bold py-3 px-4 rounded-lg transition-colors"
          >
            {isOtpSent ? "Verify OTP" : "Send OTP"}
          </button>

          {/* Resend OTP button */}
          {isOtpSent && (
            <button
              type="button"
              onClick={handleSendOtp}
              className="w-full mt-4 text-[#2e7d32] hover:text-[#1b5e20] font-semibold"
            >
              Resend OTP
            </button>
          )}
        </form>
      </div>
    </div>
  );
};

export default Login;

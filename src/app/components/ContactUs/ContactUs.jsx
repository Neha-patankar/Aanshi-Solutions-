import React from "react";
import { MapPin, Mail, Phone } from "lucide-react";
import Image from "next/image";

const ContactUs = () => {
  const contactInfo = [
    {
      icon: <MapPin className="w-12 h-12 text-[#344742]" />,
      title: "Address",
      content:
        "304/6, Uma Nagar Extension, Indore. Office: Shop No. 1, 4th Floor, Dawa Bazar, Indore - 452001",
    },
    {
      icon: <Mail className="w-12 h-12 text-[#344742] " />,
      title: "Mail Us",
      content: "morbiceraasso@yahoo.com",
    },
    {
      icon: <Phone className="w-12 h-12 text-[#344742] " />,
      title: "Call Us",
      content: "+91 7600010255",
    },
  ];

  return (
    <div className="w-full  -mt-20">
      {" "}
      {/* Added -mt-4 and bg-white */}
      {/* Hero Section - Removed default padding at top */}
      <div
        className="w-full"
        style={{
          backgroundImage:
            'url("/companyLogo/gradient.png"), linear-gradient(to right, #5BA353, #FFCC33, #3F6D2A)',
          backgroundSize: "cover",
          backgroundBlendMode: "overlay",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="max-w-6xl mx-auto px-4 py-8">
          {" "}
          {/* Adjusted padding */}
          {/* Header Section */}
          <div className="text-center mb-8">
            {" "}
            {/* Reduced margin */}
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Get In Touch With Us
            </h2>
          </div>
          {/* Contact Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {" "}
            {/* Adjusted gap and margin */}
            {contactInfo.map((info, index) => (
              <div
                key={index}
                className="p-6 border border-gray-200 rounded-lg 
                  border-t-8 border-t-[#344742]  hover:border-4 hover:border-[#344742] 
                  transition-all duration-300 ease-in-out hover:-translate-y-1 text-center bg-white"
              >
                <div className="flex justify-center mb-4">{info.icon}</div>
                <h2 className="text-xl font-semibold text-black mb-3">
                  {info.title}
                </h2>
                <p className="text-black leading-relaxed">{info.content}</p>
              </div>
            ))}
          </div>
          {/* Form Section */}
          <section className="py-8 rounded-lg shadow-md bg-white">
            {" "}
            {/* Adjusted padding */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between">
              <div className="md:w-1/2">
                <h2 className="text-2xl font-bold mb-4 text-gray-800">
                  Get in Touch
                </h2>
                <p className="mb-6 text-gray-700">
                  Have questions or want to work together? Feel free to drop us
                  a message.
                </p>

                <form className="space-y-4 max-w-lg mx-auto">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-lg text-gray-800 font-semibold mb-2"
                    >
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      placeholder="Enter your name"
                      className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#344742]   focus:border-transparent transition-shadow"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block text-lg text-gray-800 font-semibold mb-2"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      placeholder="Enter your email"
                      className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#344742]   focus:border-transparent transition-shadow"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="subject"
                      className="block text-lg text-gray-800 font-semibold mb-2"
                    >
                      Subject
                    </label>
                    <input
                      type="text"
                      id="subject"
                      placeholder="Enter subject"
                      className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#344742]   focus:border-transparent transition-shadow"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-lg text-gray-800 font-semibold mb-2"
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      placeholder="Enter your message"
                      className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#344742]   focus:border-transparent transition-shadow h-30"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-[#344742]   hover:bg-[#344742]   text-white font-bold py-3 px-6 rounded-lg transition-all duration-300 ease-in-out shadow-lg"
                  >
                    Submit
                  </button>
                </form>
              </div>

              {/* Additional Info Section */}
              <div className="md:w-1/2 mt-8 md:mt-0 md:ml-8">
                {" "}
                {/* Adjusted margin */}
                <div className="flex items-center justify-center space-x-4 mb-8">
                  {" "}
                  {/* Reduced space between logos */}
                  <Image
                    src="/ayushnirmatalogo.png"
                    alt="Ayush Nirmatasangh Logo"
                    width={80} // Reduced from 100
                    height={80} // Reduced from 100
                    className="object-contain"
                  />
                  <Image
                    src="/ayushsiteheader.png"
                    alt="Logo"
                    width={140} // Reduced from 180
                    height={140} // Reduced from 180
                    className="rounded-full object-contain"
                  />
                </div>
                <div className="px-4">
                  {" "}
                  {/* Added padding for better mobile display */}
                  <p className="mb-4">
                    <span className="font-bold text-black">Address:</span>
                    304/6, Uma Nagar Extension, Indore. Office: Shop No. 1, 4th
                    Floor, Dawa Bazar, Indore
                  </p>
                  <p className="mb-2">
                    <span className="font-bold text-black">Phone:</span> +91
                    9826210740
                  </p>
                  <p className="mb-2">
                    <span className="font-bold text-black">Email: </span>

                    <a
                      href="mailto: m.p.ayush@yahoo.com"
                      className="text-blue-500 hover:underline"
                    >
                      m.p.ayush@yahoo.com
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;

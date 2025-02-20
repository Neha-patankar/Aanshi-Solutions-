import React from "react";
import { MapPin, Mail, Phone } from "lucide-react";
import Image from "next/image";

const ContactUs = () => {
  const contactInfo = [
    {
      icon: <MapPin className="w-12 h-12 text-[#2e8220] " />,
      title: "Address",
      content:
        "First Floor, 1-Real Plaza, 8-A National Highway, Morbi-363642, Gujarat(INDIA)",
    },
    {
      icon: <Mail className="w-12 h-12 text-[#2e8220] " />,
      title: "Mail Us",
      content: "morbiceraasso@yahoo.com",
    },
    {
      icon: <Phone className="w-12 h-12 text-[#2e8220] " />,
      title: "Call Us",
      content: "+91 7600010255",
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <div
        className="p-5 lg:px-32 min-h-[300px] flex items-center justify-center min-h-screen"
        style={{
          backgroundImage:
            'url("/companyLogo/gradient.png"), linear-gradient(to right, #5BA353, #FFCC33, #3F6D2A)',
          backgroundSize: "cover",
          backgroundBlendMode: "overlay",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
       
    

      <div className="max-w-6xl mx-auto px-4 py-10">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mt-4">
            Get In Touch With Us
          </h2>
        </div>

        {/* Contact Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {contactInfo.map((info, index) => (
            <div
              key={index}
              className="p-8 border border-gray-200 rounded-lg 
                border-t-8 border-t-[#2e8220]  hover:border-4 hover:border-[#2e8220] 
                transition-all duration-300 ease-in-out hover:-translate-y-1 text-center bg-white"
            >
              <div className="flex justify-center mb-6">{info.icon}</div>
              <h2 className="text-xl font-semibold text-black mb-4">
                {info.title}
              </h2>
              <p className="text-black leading-relaxed">{info.content}</p>
            </div>
          ))}
        </div>

        {/* Form Section */}
        <section className="py-12 rounded-lg shadow-md bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between">
            <div className="md:w-1/2">
              <h2 className="text-2xl font-bold mb-4 text-gray-800">
                Get in Touch
              </h2>
              <p className="mb-6 text-gray-700">
                Have questions or want to work together? Feel free to drop us a
                message.
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
                    className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2e8220]  focus:border-transparent transition-shadow"
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
                    className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2e8220]  focus:border-transparent transition-shadow"
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
                    className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2e8220]  focus:border-transparent transition-shadow"
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
                    className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2e8220]  focus:border-transparent transition-shadow h-30"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#2e8220]  hover:bg-[#2e8220]  text-white font-bold py-3 px-6 rounded-lg transition-all duration-300 ease-in-out shadow-lg"
                >
                  Submit
                </button>
              </form>
            </div>

            {/* Additional Info Section */}
            <div className="md:w-1/2 mt-12 md:mt-0 md:ml-8">
              <div className="flex items-center justify-center space-x-8 mb-10">
                <Image
                  src="/ayushnirmatalogo.png"
                  alt="Ayush Nirmatasangh Logo"
                  width={100}
                  height={100}
                  className="object-contain"
                />
                <Image
                  src="/ayushsiteheader.png"
                  alt="Logo"
                  width={180}
                  height={180}
                  className="rounded-full object-contain"
                />
              </div>

              <p className="mb-4">
                <span className="font-bold text-black">Address:</span> 39,
                Industrial Area Rau Dist-Indore(M.P)-453331
              </p>
              <p className="mb-2">
                <span className="font-bold text-black">Phone:</span> +9178945612
              </p>
              <p className="mb-2">
                <span className="font-bold text-black">Email:{" "}</span>
                <a
                  href="mailto:ayush@gmail.com"
                  className="text-blue-500 hover:underline"
                >
                  ayush@gmail.com
                </a>
                ,{" "}
                <a
                  href="mailto:ayushnirmata0731@gmail.com"
                  className="text-blue-500 hover:underline"
                >
                  ayushnirmata0731@gmail.com
                </a>
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
    </div>
  );
};

export default ContactUs;

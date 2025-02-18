import React from 'react';
import { MapPin, Mail, Phone } from 'lucide-react';

const ContactUs = () => {
  const contactInfo = [
    {
      icon: <MapPin className="w-12 h-12 text-pink-500" />,
      title: "Address",
      content: "First Floor, 1-Real Plaza, 8-A National Highway, Morbi-363642, Gujarat(INDIA)"
    },
    {
      icon: <Mail className="w-12 h-12 text-pink-500" />,
      title: "Mail Us",
      content: "morbiceraasso@yahoo.com"
    },
    {
      icon: <Phone className="w-12 h-12 text-pink-500" />,
      title: "Call Us",
      content: "+91 7600010255"
    }
  ];

  return (
    <div className='bg-[#626F47]'>
    <div className="max-w-6xl mx-auto px-4 py-20   ">
      {/* Header Section */}
      <div className="text-center mb-16">
        <p className="text-white text-sm uppercase tracking-wider mb-4">
          CONTACT US
        </p>
        <h1 className="text-4xl font-bold text-white mb-8 relative inline-block">
          Get In Touch With Us
          <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-pink-500 -mb-4"></div>
        </h1>
      </div>

      {/* Contact Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {contactInfo.map((info, index) => (
          <div 
            key={index}
            className="p-8 border border-dashed border-gray-200 rounded-lg 
                     hover:border-solid hover:border-pink-500 transition-all 
                     duration-300 ease-in-out hover:-translate-y-1 text-center"
          >
            <div className="flex justify-center mb-6">
              {info.icon}
            </div>
            <h2 className="text-xl font-semibold text-white mb-4">
              {info.title}
            </h2>
            <p className="text-white leading-relaxed">
              {info.content}
            </p>
          </div>
        ))}
      </div>
    </div>
    </div>
  );
};

export default ContactUs;
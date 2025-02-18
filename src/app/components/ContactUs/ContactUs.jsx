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
      <div className="max-w-6xl mx-auto px-4 py-20">
        {/* Header Section */}
        <div className="text-center mb-16">
          <p className="text-white text-sm uppercase tracking-wider mb-4">
            CONTACT US
          </p>
        </div>

        {/* Contact Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16"> 
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

        {/* Form Section */}
        <section className="py-12 bg-gray-100 rounded-lg shadow-md">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between">
            <div className="md:w-1/2"> 
              <h2 className="text-2xl font-bold mb-4 text-gray-800">Get in Touch</h2>
              <p className="mb-6 text-gray-700">Have questions or want to work together? Feel free to drop us a message.</p>

              <form className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-gray-700 font-medium mb-1">
                    Your Name
                  </label>
                  <input 
                    type="text" 
                    id="name"
                    placeholder="Enter your name" 
                    className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-gray-700 font-medium mb-1">
                    Your Email
                  </label>
                  <input 
                    type="email" 
                    id="email"
                    placeholder="Enter your email" 
                    className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500"
                  />
                </div>
                <div>
                  <label htmlFor="subject" className="block text-gray-700 font-medium mb-1">
                    Subject
                  </label>
                  <input 
                    type="text" 
                    id="subject"
                    placeholder="Enter subject" 
                    className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-gray-700 font-medium mb-1">
                    Your Message
                  </label>
                  <textarea 
                    id="message" 
                    placeholder="Enter your message" 
                    className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500 h-32"
                  ></textarea>
                </div>
                <button 
                  type="submit" 
                  className="bg-pink-500 hover:bg-pink-600 text-white font-bold py-2 px-4 rounded-md"
                >
                  Submit
                </button>
              </form>
            </div>

            {/* Additional Info Section */}
            <div className="md:w-1/2 mt-12 md:mt-0"> 
              <div className="flex justify-center mb-4">
                <img src="your_logo.png" alt="WinPro Herbal Logo" className="max-w-48" /> 
              </div>
              <h3 className="text-xl font-bold mb-2">Ayush Nirmathsngh</h3>
              <p className="mb-2">Address: 39, Industrial Area Rau Dist-Indore(M.P)-453331</p>
              <p className="mb-2">Phone: +9178945612</p>
              <p className="mb-2">
                Email: <a href="mailto:winproherbals@gmail.com" className="text-blue-500 hover:underline">ayush@gmail.com</a>, 
                <a href="mailto:sanjaysethia0731@gmail.com" className="text-blue-500 hover:underline">ayushnirmata0731@gmail.com</a>
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default ContactUs;

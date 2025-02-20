import React from 'react';
import Link from 'next/link';

const ContactPage = () => {
  return (
     <div className="relative h-60 bg-[#000957] flex flex-col items-center justify-center text-white ">
           <div className="relative z-10 text-center">
              <h1 className="text-5xl font-bold mb-6">Contact Us</h1>
              
              <div className="inline-flex items-center px-4 py-2 space-x-3 bg-white rounded text-lg ">
                <Link href="/" className="text-[#000957] hover:text-[#000957] font-semibold">
                  HOME
                </Link >
                <span className="text-[#000957] font-semibold">&gt;</span>
                <Link href="#" className="text-[#000957] hover:text-[#000957] font-semibold ">
                  CONTACT US
                </Link >
              </div>
            </div>
          </div>
  );
};

export default ContactPage;
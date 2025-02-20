import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="relative bg-[#000957] text-white py-8">
      <div className="absolute inset-0 bg-black/40"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Main Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Logo and Organization Info */}
          <div className="flex flex-col items-start text-left">
            <Image 
              src="/ayushnirmatalogo.png"
              alt="Ayush Nirmatasangh Logo"
              width={100}
              height={100}
              className="mb-4"
            />
            <h2 className="text-2xl font-bold mb-4">Ayush Nirmatasangh</h2>
          </div>

          {/* Contact Information */}
          <div className="flex flex-col items-start text-left">
            <h3 className="text-xl font-semibold mb-4 text-red-500">Contact Information</h3>
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <MapPin className="w-5 h-5 text-red-500" />
                <p>123, Industrial Area, Indore(M.P.) - 452001</p>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-5 h-5 text-red-500" />
                <p>+91 1234567890</p>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-5 h-5 text-red-500" />
                <p>info@ayushnirmatasangh.com</p>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col items-start text-left">
            <h3 className="text-xl font-semibold mb-4 text-red-500">Quick Links</h3>
            <div className="space-y-2">
              {/* <Link href="/pagecommit" className="block hover:text-red-400">Committee</Link> */}
              <Link href="/aboutus" className="block hover:text-red-500">About Us</Link>
              <Link href="/product" className="block hover:text-red-500">Products</Link>
              <Link href="/member" className="block hover:text-red-500">Members</Link>
              <Link href="/contactus" className="block hover:text-red-500">Contact Us</Link>
            </div>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="border-t border-gray-600 pt-4 mt-4">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
            <p className=" md:text-left text-wrap">
              Copyright © Aanshi Solutions {new Date().getFullYear()}. All rights Reserved.
            </p>
            <div className="text-center md:text-right">
              Developed By{' '}
              <Link href="https://aanshisolutions.com" className="text-red-500 hover:underline">
                Aanshi Solutions
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

"use client";
import { MapPin, Mail, Phone, Globe, Facebook, Instagram, Twitter, Linkedin } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-[#2c3e50] text-white">
      <div className="max-w-7xl mx-auto px-4 py-10 md:py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
          
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
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#home" className="text-gray-300 hover:text-white transition-colors duration-200">
                  Home
                </Link>
              </li>
              <li>
                <Link href="#about-us" className="text-gray-300 hover:text-white transition-colors duration-200">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="#services" className="text-gray-300 hover:text-white transition-colors duration-200">
                  Services
                </Link>
              </li>
              <li>
                <Link href="#product" className="text-gray-300 hover:text-white transition-colors duration-200">
                  Products
                </Link>
              </li>
              <li>
                <Link href="#contact" className="text-gray-300 hover:text-white transition-colors duration-200">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          

          {/* Contact Information */}
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin className="w-5 h-5 mr-3 mt-1 flex-shrink-0" />
                <span className="text-gray-300">
                  123 Business Avenue, Tech Park, Suite 200, City, Country
                </span>
              </li>
              <li className="flex items-center">
                <Phone className="w-5 h-5 mr-3 flex-shrink-0" />
                <span className="text-gray-300">+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center">
                <Mail className="w-5 h-5 mr-3 flex-shrink-0" />
                <span className="text-gray-300">info@yourcompany.com</span>
              </li>
             
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-10 pt-6">
        <div className="border-t border-white pt-4 mt-4">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
            <p className=" md:text-left text-wrap">
              Copyright © Aanshi Solutions {new Date().getFullYear()}. All rights Reserved.
            </p>
            <div className="text-center md:text-right">
              Pawered By{' '}
              <Link href="https://aanshisolutions.com" className="text-white hover:underline">
                Aanshi Solutions
              </Link>
            </div>
          </div>
        </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
"use client";
import { useState, useEffect } from "react";
import { MapPin, Menu } from "lucide-react";
import Image from "next/image";

// Define smoothScroll function
const smoothScroll = (id) => {
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({ behavior: "smooth" });
  }
};

const CompanyDetails = ({ company }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <header className="shadow-md w-full z-50">
        {/* Company Logo and Name Section */}
        <div className="bg-white w-full flex justify-center items-center p-4">
          <div className="flex items-center justify-center">
            <Image
              src={
                company.imageLogo.startsWith("/")
                  ? company.imageLogo
                  : `/companyLogo/${company.imageLogo}`
              }
              alt={company.company}
              className="w-12 h-12 object-contain rounded-md mr-2"
              width={50}
              height={50}
            />
            <h1 className="text-2xl font-bold">{company.company}</h1>
          </div>
        </div>

        {/* Navigation Section */}
        <div className="bg-yellow-800 w-full">
          {/* Desktop Navigation */}
          <nav className="hidden md:flex justify-center space-x-4 p-4">
            <button onClick={() => smoothScroll("home")} className="text-lg text-white">
              Home
            </button>
            <button onClick={() => smoothScroll("product")} className="text-lg text-white">
              Product
            </button>
            <button onClick={() => smoothScroll("about-us")} className="text-lg text-white">
              About Us
            </button>
            <button onClick={() => smoothScroll("services")} className="text-lg text-white">
              Services
            </button>
            <button onClick={() => smoothScroll("certification")} className="text-lg text-white">
              Certification
            </button>
            <button onClick={() => smoothScroll("management")} className="text-lg text-white">
              Management
            </button>
            <button onClick={() => smoothScroll("contact")} className="text-lg text-white">
              Contact Us
            </button>
          </nav>

          {/* Hamburger Menu for Mobile */}
          <div className="md:hidden flex justify-between items-center p-4">
            <h1 className="text-white text-lg font-bold">Menu</h1>
            <button onClick={toggleMenu}>
              <Menu className="text-white w-8 h-8" />
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <nav className="flex flex-col space-y-2 p-4 bg-yellow-800 md:hidden">
              <button onClick={() => smoothScroll("home")} className="text-lg text-white">
                Home
              </button>
              <button onClick={() => smoothScroll("product")} className="text-lg text-white">
                Product
              </button>
              <button onClick={() => smoothScroll("about-us")} className="text-lg text-white">
                About Us
              </button>
              <button onClick={() => smoothScroll("services")} className="text-lg text-white">
                Services
              </button>
              <button onClick={() => smoothScroll("certification")} className="text-lg text-white">
                Certification
              </button>
              <button onClick={() => smoothScroll("management")} className="text-lg text-white">
                Management
              </button>
              <button onClick={() => smoothScroll("contact")} className="text-lg text-white">
                Contact Us
              </button>
            </nav>
          )}
        </div>
      </header>

      {/* Main Content */}
      <div className="p-10 space-y-16">
        {/* Home Section */}
        <section id="home" className="">
          <h2 className="text-3xl font-bold">Home</h2>
          <p>Welcome to the home section of {company.company}.</p>
        </section>

        {/* Product Section */}
        <section id="product" className="">
          <h2 className="text-3xl font-bold">Product</h2>
          <div className="text-lg font-semibold mt-4">{company.product}</div>
        </section>

        {/* About Us Section */}
        <section id="about-us" className="">
          <h2 className="text-3xl font-bold">About Us</h2>
          <p>Learn more about {company.company} and its values.</p>
        </section>

        {/* Services Section */}
        <section id="services" className="">
          <h2 className="text-3xl font-bold">Services</h2>
          <p>Explore the services offered by {company.company}.</p>
        </section>

        {/* Certification Section */}
        <section id="certification" className="">
          <h2 className="text-3xl font-bold">Certification</h2>
          <p>Check out the certifications and standards held by {company.company}.</p>
        </section>

        {/* Management Section */}
        <section id="management" className="">
          <h2 className="text-3xl font-bold">Management</h2>
          <p>Meet the management team behind {company.company}.</p>
        </section>

        {/* Contact Us Section */}
        <section id="contact" className="">
          <h2 className="text-3xl font-bold">Contact Us</h2>
          <p>Feel free to get in touch with us at {company.address}.</p>
        </section>
      </div>
    </>
  );
};

export default CompanyDetails;

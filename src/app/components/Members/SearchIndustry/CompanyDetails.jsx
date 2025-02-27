"use client";
import { useState, useEffect } from "react";
import {
  MapPin,
  Menu,
  Users,
  Briefcase,
  Settings,
  Home,
  Package,
  Info,
  HeartHandshake,
  Award,
  UserCog,
  Phone,
  User,
  X,
} from "lucide-react";
import Image from "next/image";
import Footer from "../../Footer/Footer";
import HomeCardSlider from "./HomeCardSlider";

// Define smoothScroll function
const smoothScroll = (id) => {
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({ behavior: "smooth" });
  }
};

const CompanyDetails = ({ company }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [isMobile, setIsMobile] = useState(false);

  // Check if viewport is mobile size
  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 768);
      if (window.innerWidth < 768) {
        setIsSidebarOpen(false);
      }
    };

    // Initial check
    checkIfMobile();

    // Add event listener
    window.addEventListener("resize", checkIfMobile);

    // Clean up
    return () => window.removeEventListener("resize", checkIfMobile);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const handleNavClick = (id) => {
    smoothScroll(id);
    // Close sidebar on mobile after navigation
    if (isMobile) {
      setIsSidebarOpen(false);
      setIsMenuOpen(false);
    }
  };

  // Sidebar navigation items with icons
  const sidebarItems = [
    { id: "home", label: "Home", icon: <Home className="w-6 h-6" /> },
    { id: "about-us", label: "About Us", icon: <Info className="w-6 h-6" /> },
    {
      id: "management",
      label: "Management",
      icon: <UserCog className="w-6 h-6" />,
    },
    {
      id: "certification",
      label: "Certification",
      icon: <Award className="w-6 h-6" />,
    },
    {
      id: "services",
      label: "Services",
      icon: <HeartHandshake className="w-6 h-6" />,
    },
    {
      id: "clients",
      label: "Clients",
      icon: <HeartHandshake className="w-6 h-6" />,
    },
    { id: "product", label: "Product", icon: <Package className="w-6 h-6" /> },
    { id: "contact", label: "Contact Us", icon: <Phone className="w-6 h-6" /> },
  ];

  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-gray-100 relative">
      {/* Sidebar - fixed for mobile, sticky for desktop */}
      <div
        className={`
          bg-[#2c3e50] text-white transition-all duration-300
          ${
            isSidebarOpen
              ? "translate-x-0"
              : "-translate-x-full md:translate-x-0"
          } 
          ${isSidebarOpen ? "md:w-44" : "md:w-20"} 
          md:sticky md:top-0 md:h-screen 
          fixed w-64 h-full overflow-y-auto shadow-lg z-50
        `}
      >
        {/* Mobile close button */}
        <button
          onClick={toggleSidebar}
          className="absolute top-4 right-4 md:hidden text-white"
        >
          <X className="w-6 h-6" />
        </button>

        {/* Toggle sidebar button - desktop only */}
        <button
          onClick={toggleSidebar}
          className="w-full p-4 hidden md:flex items-center justify-center border-b border-gray-700 hover:bg-[#34495e]"
        >
          <Menu className="w-6 h-6" />
        </button>

        {/* Navigation Items */}
        <div className="py-4">
          {sidebarItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNavClick(item.id)}
              className="w-full p-4 flex items-center hover:bg-[#34495e] transition-colors duration-200"
            >
              <div className="w-8 h-8 flex items-center justify-center bg-blue-600 rounded-lg">
                {item.icon}
              </div>
              {(isSidebarOpen || isMobile) && (
                <span className="ml-3">{item.label}</span>
              )}
            </button>
          ))}
        </div>
      </div>

      {/* Overlay for mobile sidebar */}
      {isMobile && isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={toggleSidebar}
        ></div>
      )}

      {/* Main Content */}
      <div className={`flex-1 transition-all duration-300 w-full`}>
        {/* Main Content */}
        <div className="p-4 md:p-10 space-y-8 md:space-y-16 bg-[#f0f2f5]">
          {/* Home Section */}
          <section
            id="home"
            className="bg-white p-4 md:p-6 rounded-lg shadow-md "
          >
            <h2 className="text-2xl md:text-3xl font-bold text-[#2c3e50]">
              Home
            </h2>
            <HomeCardSlider />
          </section>

          {/* Product Section */}
          <section
            id="product"
            className="bg-white p-4 md:p-6 rounded-lg shadow-md"
          >
            <h2 className="text-2xl md:text-3xl font-bold text-[#2c3e50]">
              Product
            </h2>
            <div className="text-base md:text-lg font-semibold mt-4">
              {company?.product || "Our products and services"}
            </div>
          </section>

          {/* About Us Section */}
          <section
            id="about-us"
            className="bg-white p-4 md:p-6 rounded-lg shadow-md"
          >
            <h2 className="text-2xl md:text-3xl font-bold text-[#2c3e50]">
              About Us
            </h2>
            <p className="mt-4">
              Learn more about {company?.company || "our company"} and its
              values.
            </p>
          </section>

          {/* Services Section */}
          <section
            id="services"
            className="bg-white p-4 md:p-6 rounded-lg shadow-md"
          >
            <h2 className="text-2xl md:text-3xl font-bold text-[#2c3e50]">
              Services
            </h2>
            <p className="mt-4">
              Explore the services offered by{" "}
              {company?.company || "our company"}.
            </p>

            {/* Service Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-6">
              {/* Service Card 1 */}
              <div className="bg-[#ecf0f1] p-4 rounded-lg shadow hover:shadow-lg transition-shadow duration-300">
                <h3 className="text-xl font-semibold text-[#34495e]">
                  Web Development
                </h3>
                <p className="mt-2 text-gray-700">
                  We provide full-stack web development services using modern
                  technologies.
                </p>
              </div>

              {/* Service Card 2 */}
              <div className="bg-[#ecf0f1] p-4 rounded-lg shadow hover:shadow-lg transition-shadow duration-300">
                <h3 className="text-xl font-semibold text-[#34495e]">
                  Mobile App Development
                </h3>
                <p className="mt-2 text-gray-700">
                  Our team builds responsive and user-friendly mobile
                  applications for both iOS and Android.
                </p>
              </div>

              {/* Service Card 3 */}
              <div className="bg-[#ecf0f1] p-4 rounded-lg shadow hover:shadow-lg transition-shadow duration-300">
                <h3 className="text-xl font-semibold text-[#34495e]">
                  Cloud Solutions
                </h3>
                <p className="mt-2 text-gray-700">
                  We offer scalable cloud solutions tailored to your business
                  needs.
                </p>
              </div>

              {/* Add more service cards as needed */}
            </div>
          </section>

          {/* Certification Section */}
          {/* Certification Section */}
          <section
            id="certification"
            className="bg-white p-4 md:p-6 rounded-lg shadow-md"
          >
            <h2 className="text-2xl md:text-3xl font-bold text-[#2c3e50]">
              Certifications
            </h2>
            <p className="mt-4">
              Check out the certifications and standards held by{" "}
              {company?.company || "our company"}.
            </p>

            {/* Certification Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-6">
              {/* Certification Card 1 */}
              <div className="bg-[#ecf0f1] p-4 rounded-lg shadow hover:shadow-lg transition-shadow duration-300">
                <h3 className="text-xl font-semibold text-[#34495e]">
                  ISO 9001:2015
                </h3>
                <p className="mt-2 text-gray-700">
                  Quality management standards for consistent performance and
                  service.
                </p>
              </div>

              {/* Certification Card 2 */}
              <div className="bg-[#ecf0f1] p-4 rounded-lg shadow hover:shadow-lg transition-shadow duration-300">
                <h3 className="text-xl font-semibold text-[#34495e]">
                  CE Certification
                </h3>
                <p className="mt-2 text-gray-700">
                  Ensures that products comply with the essential requirements
                  of EU directives.
                </p>
              </div>

              {/* Certification Card 3 */}
              <div className="bg-[#ecf0f1] p-4 rounded-lg shadow hover:shadow-lg transition-shadow duration-300">
                <h3 className="text-xl font-semibold text-[#34495e]">
                  ISO 27001
                </h3>
                <p className="mt-2 text-gray-700">
                  Information security management standards to protect data and
                  privacy.
                </p>
              </div>

              {/* Add more certification cards as needed */}
            </div>
          </section>

          {/* Management Section */}
          <section
            id="management"
            className="bg-white p-4 md:p-6 rounded-lg shadow-md"
          >
            <h2 className="text-2xl md:text-3xl font-bold text-[#2c3e50]">
              Management
            </h2>
            <p className="mt-4">
              Meet the management team behind{" "}
              {company?.company || "our company"}.
            </p>

            {/* Management Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-6">
              {/* Management Card 1 */}
              <div className="bg-[#ecf0f1] p-4 rounded-lg shadow hover:shadow-lg transition-shadow duration-300">
                <img
                  src="/path-to-image/ceo.jpg"
                  alt="CEO"
                  className="w-full h-40 object-cover rounded-t-lg"
                />
                <div className="mt-4">
                  <h3 className="text-xl font-semibold text-[#34495e]">
                    John Doe
                  </h3>
                  <p className="text-gray-600">CEO</p>
                  <p className="mt-2 text-gray-700">
                    Leading the company's vision and strategy with a focus on
                    innovation...
                  </p>
                </div>
              </div>

              {/* Management Card 2 */}
              <div className="bg-[#ecf0f1] p-4 rounded-lg shadow hover:shadow-lg transition-shadow duration-300">
                <img
                  src="/path-to-image/coo.jpg"
                  alt="COO"
                  className="w-full h-40 object-cover rounded-t-lg"
                />
                <div className="mt-4">
                  <h3 className="text-xl font-semibold text-[#34495e]">
                    Jane Smith
                  </h3>
                  <p className="text-gray-600">COO</p>
                  <p className="mt-2 text-gray-700">
                    Oversees day-to-day operations and ensures smooth business
                    processes...
                  </p>
                </div>
              </div>

              {/* Management Card 3 */}
              <div className="bg-[#ecf0f1] p-4 rounded-lg shadow hover:shadow-lg transition-shadow duration-300">
                <img
                  src="/path-to-image/cfo.jpg"
                  alt="CFO"
                  className="w-full h-40 object-cover rounded-t-lg"
                />
                <div className="mt-4">
                  <h3 className="text-xl font-semibold text-[#34495e]">
                    Robert Johnson
                  </h3>
                  <p className="text-gray-600">CFO</p>
                  <p className="mt-2 text-gray-700">
                    Responsible for financial planning, risk management, and
                    reporting.
                  </p>
                </div>
              </div>

              {/* Add more management cards as needed */}
            </div>
          </section>

          {/* Clients Section */}
          <section
            id="clients"
            className="bg-white p-4 md:p-6 rounded-lg shadow-md"
          >
            <h2 className="text-2xl md:text-3xl font-bold text-[#2c3e50]">
              Clients
            </h2>
            <p className="mt-4">Our valued clients and partners.</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 mt-6">
              {[1, 2, 3, 4, 5, 6].map((item) => (
                <div
                  key={item}
                  className="bg-gray-100 p-3 md:p-4 rounded-lg flex flex-col items-center justify-center hover:shadow-md transition-shadow"
                >
                  <div className="w-12 h-12 md:w-16 md:h-16 bg-gray-300 rounded-full mb-3 flex items-center justify-center">
                    <Users className="w-6 h-6 md:w-8 md:h-8 text-gray-600" />
                  </div>
                  <h3 className="font-semibold">Client {item}</h3>
                  <p className="text-xs md:text-sm text-gray-600 text-center mt-2">
                    A brief description about this client and their relationship
                    with us.
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* Contact Us Section */}
          <section
            id="contact"
            className="bg-white p-4 md:p-6 rounded-lg shadow-md"
          >
            <h2 className="text-2xl md:text-3xl font-bold text-[#2c3e50]">
              Contact Us
            </h2>
            <p className="mt-4">
              Feel free to get in touch with us at{" "}
              {company?.address || "our office"}.
            </p>
          </section>
        </div>

        {/* Footer */}
        <Footer />
      </div>
    </div>
  );
};

export default CompanyDetails;

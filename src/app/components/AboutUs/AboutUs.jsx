import React from "react";
import AboutPage from "./AboutPage";

const AboutUs = () => {
  return (
    <div>
      {/* Top Section with AboutPage */}
      <AboutPage />

      {/* Main content of About Us */}
      <div className="flex items-center justify-center min-h-screen bg-[#e0e0ddc8]">
        <div className="bg-white p-6 rounded-lg shadow-lg max-w-5xl w-full">
          {/* About Us Section */}
          <section className="text-start mb-2">
            <h1 className="text-3xl font-semibold text-gray-800">About Us</h1>
            <p className="mt-4 text-gray-600">
              Welcome to Ayush Nirmata Sangh, where we aim to empower individuals
              in the field of medicine and healthcare with resources, mentorship,
              and opportunities for professional growth....
            </p>
          </section>

          {/* Our Mission Section */}
          <section className="text-start mb-2">
            <h2 className="text-2xl font-semibold text-gray-800">Our Mission</h2>
            <p className="mt-4 text-gray-600">
              Our mission is to create a supportive and nurturing community for
              professionals in the medical field, providing them with the tools
              and guidance they need to excel in their careers and serve society.
            </p>
          </section>

          {/* Our Vision Section */}
          <section className="text-start mb-2">
            <h2 className="text-2xl font-semibold text-gray-800">Our Vision</h2>
            <p className="mt-4 text-gray-600">
              To be a leading platform that brings together medical professionals
              and creates opportunities for networking, collaboration, and
              continuous learning.
            </p>
          </section>

          {/* Contact Us Section */}
          <section className="text-start mb-6">
            <h2 className="text-2xl font-semibold text-gray-800">Contact Us</h2>
            <p className="mt-4 text-gray-600">
              Feel free to reach out to us for any inquiries or collaboration
              opportunities. We are here to assist you!
            </p>

            <div className="mt-6">
              <div className="mb-4">
                <span className="font-semibold">Email: </span>
                <a
                  href="mailto:info@ayushnirmatasangh.com"
                  className="text-blue-500 hover:underline"
                >
                  info@ayushnirmatasangh.com
                </a>
              </div>

              <div className="mb-4">
                <span className="font-semibold">Mobile No: </span>
                <span className="text-gray-600">1234567899</span>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;

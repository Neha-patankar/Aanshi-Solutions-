import React from "react";


const AboutUs = () => {
  return (
    <div className="sm:-mt-14">
      {/* Top Section with AboutPage */}
    
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
      {/* Main content of About Us */}
      <div className="flex items-center justify-center min-h-screen ">
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
    </div>
  );
};

export default AboutUs;

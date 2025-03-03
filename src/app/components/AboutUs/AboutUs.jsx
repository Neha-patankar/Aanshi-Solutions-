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
        <div className="container mx-auto">
          <div className="grid gap-6 grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3">
            {/* About Us Card */}
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <section className="text-start mb-2">
                <h1 className="text-3xl font-semibold text-gray-800">About Us</h1>
                <p className="mt-4 text-gray-600">
                  Welcome to Ayush Nirmata Sangh, where we aim to empower individuals in
                  the field of medicine and healthcare with resources, mentorship, and
                  opportunities for professional growth....
                </p>
              </section>
            </div>

            {/* Our Mission Card */}
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <section className="text-start mb-2">
                <h2 className="text-2xl font-semibold text-gray-800">Our Mission</h2>
                <p className="mt-4 text-gray-600">
                  Our mission is to create a supportive and nurturing community for
                  professionals in the medical field, providing them with the tools
                  and guidance they need to excel in their careers and serve society.
                </p>
              </section>
            </div>

            {/* Our Vision Card */}
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <section className="text-start mb-2">
                <h2 className="text-2xl font-semibold text-gray-800">Our Vision</h2>
                <p className="mt-4 text-gray-600">
                  To be a leading platform that brings together medical professionals
                  and creates opportunities for networking, collaboration, and
                  continuous learning.
                </p>
              </section>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;

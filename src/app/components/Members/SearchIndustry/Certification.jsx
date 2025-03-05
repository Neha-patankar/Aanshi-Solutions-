import React from 'react';

const Certifications = ({ company }) => {
  const certifications = [
    {
      title: "GMP",
      fullTitle: "Good Manufacturing Practice",
      description: "Ensures consistent quality and safety in manufacturing processes.",
      logo: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" className="w-20 h-20 mx-auto">
          <circle cx="50" cy="50" r="48" fill="#2ecc71"/>
          <text 
            x="50" 
            y="50" 
            textAnchor="middle" 
            dy=".3em" 
            className="fill-white font-bold text-3xl"
          >
            GMP
          </text>
        </svg>
      )
    },
    {
      title: "ISO 9001",
      fullTitle: "Quality Management Systems",
      description: "International standard for quality management and continuous improvement.",
      logo: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" className="w-20 h-20 mx-auto">
          <circle cx="50" cy="50" r="48" fill="#3498db"/>
          <text 
            x="50" 
            y="40" 
            textAnchor="middle" 
            className="fill-white font-bold text-2xl"
          >
            ISO
          </text>
          <text 
            x="50" 
            y="70" 
            textAnchor="middle" 
            className="fill-white text-xl"
          >
            9001
          </text>
        </svg>
      )
    },
    {
      title: "No Conviction",
      fullTitle: "Legal Compliance Certificate",
      description: "Official certification of legal compliance and ethical business practices.",
      logo: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" className="w-20 h-20 mx-auto">
          <circle cx="50" cy="50" r="48" fill="#e74c3c"/>
          <text 
            x="50" 
            y="40" 
            textAnchor="middle" 
            className="fill-white font-bold text-2xl"
          >
            No
          </text>
          <text 
            x="50" 
            y="70" 
            textAnchor="middle" 
            className="fill-white text-xl"
          >
            Conviction
          </text>
        </svg>
      )
    }
  ];

  return (
    <section className="">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            Our Certifications
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Validating our commitment to quality, safety, and excellence in {company?.company || "our organization"}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {certifications.map((cert, index) => (
            <div 
              key={index} 
              className="bg-white rounded-xl shadow-lg overflow-hidden transform transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
            >
              <div className="p-6 text-center">
                <div className="mb-4">
                  {cert.logo}
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">
                  {cert.title}
                </h3>
                <p className="text-sm font-medium text-gray-600 mb-4">
                  {cert.fullTitle}
                </p>
                <p className="text-gray-600 text-sm">
                  {cert.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Certification Number */}
        <div className="text-center mt-8">
          <p className="text-gray-600 font-medium">
            Certification Number: MP/25D/14/309
          </p>
        </div>
      </div>
    </section>
  );
};

export default Certifications;
import React from 'react';
import Image from "next/image";

const Management = ({ company }) => {
  const managementTeam = [
    {
      name: "Mr. Rajesh Sethia",
      role: "President",
      imageUrl: "/comittee/rajeshSethia.png",
      description: "Leads the vision and strategy of the organization, focusing on innovation."
    },
    {
      name: "Prateek Sethia",
      role: "Chief Executive Officer",
      imageUrl: "/comittee/prateeksethiya.png",
      description: "Oversees daily operations, ensuring the smooth functioning of business processes."
    },
    {
      name: "Disha Sethia",
      role: "Chief Executive Officer",
      imageUrl: "/comittee/prateeksethiya.png",
      description: "Oversees daily operations, ensuring the smooth functioning of business processes."
    },
  ];

  return (
    <section className="container mx-auto">
      {/* Section Title */}
      <div className="text-center mb-10">
        <h2 className="text-3xl pb-6 md:pb-10 font-bold text-gray-800">
          Management Team
        </h2>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-center items-center">
        {managementTeam.map((member, index) => (
          <div 
            key={index} 
            className="relative max-w-xs mx-auto"
          >
            <div className="bg-white rounded-xl pt-16 pb-8 px-6 text-center shadow-md hover:shadow-xl transition-shadow duration-300 ease-in-out">
              {/* Image */}
              <div className="absolute -top-12 left-1/2 transform -translate-x-1/2">
                <div className="w-32 h-32 rounded-full border-4 border-white overflow-hidden shadow-lg">
                  <Image
                    src={member.imageUrl}
                    alt={member.name}
                    width={128}
                    height={128}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* Text Content */}
              <div className="mt-6">
                <h3 className="text-xl md:text-2xl font-bold text-gray-800 mb-2">
                  {member.name}
                </h3>
                <p className="text-gray-600 mb-4 text-base md:text-lg">
                  {member.role}
                </p>
                <p className="text-gray-500 text-sm md:text-base px-2">
                  {member.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Management;

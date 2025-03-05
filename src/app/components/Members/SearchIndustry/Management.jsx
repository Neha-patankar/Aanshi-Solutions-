import React from 'react';
import Image from "next/image";

const Management = ({ company }) => {
  const managementTeam = [
    {
      name: "श्री राजेश सेठिया",
      role: "अध्यक्ष",
      imageUrl: "/comittee/rajeshSethia.png",
      description: "संस्था की दृष्टि और रणनीति का नेतृत्व करते हुए नवाचार पर ध्यान केंद्रित करते हैं।"
    },
    {
      name: "प्रतीक सेठिया",
      role: "मुख्य कार्यकारी अधिकारी",
      imageUrl: "/comittee/rajeshSethia.png",
      description: "दैनिक संचालन की देखरेख करते हुए व्यवसाय की प्रक्रियाओं को सुचारू रूप से चलाते हैं।"
    },
    {
      name: "प्रतीक सेठिया",
      role: "मुख्य कार्यकारी अधिकारी",
      imageUrl: "/comittee/rajeshSethia.png",
      description: "दैनिक संचालन की देखरेख करते हुए व्यवसाय की प्रक्रियाओं को सुचारू रूप से चलाते हैं।"
    }
  ];

  return (
    <section className="container mx-auto px-4 py-12">
      <div className="text-center mb-10">
        <h2 className="text-3xl pb-6 md:pb-10 font-bold text-gray-800">
          प्रबंधन टीम
        </h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 md:gap-6  gap-14 justify-center">
        {managementTeam.map((member, index) => (
          <div 
            key={index} 
            className="relative max-w-sm mx-auto"
          >
            <div className="bg-gradient-to-b from-orange-400 to-green-600 rounded-2xl pt-16 pb-6 px-4 text-center shadow-lg">
              <div className="absolute -top-12 md:-top-16 left-1/2 transform -translate-x-1/2 ">
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

              <div className="p-5">
                <h3 className="text-xl md:text-2xl font-bold text-white mb-2">
                  {member.name}
                </h3>
                <p className="text-white/80 mb-4 text-base md:text-lg">
                  {member.role}
                </p>
                <p className="text-white text-sm md:text-base px-2 md:px-4">
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

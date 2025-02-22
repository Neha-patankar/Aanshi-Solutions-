"use client";
import React, { useState } from "react";
import { associationMembers } from './data';
import Image from "next/image";
import person1 from '../../../../public/comittee/person1.png';

const Association = () => {
  const [clickedIndex, setClickedIndex] = useState(null);

  const handleCardClick = (index) => {
    setClickedIndex(index);
    setTimeout(() => {
      setClickedIndex(null); // Reset the state after animation
    }, 300); // Time should match the duration of animation
  };

  return (
  
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
        <div className="container mx-auto  -mt-90">
          <h2 className="text-3xl font-bold text-center mb-8 text-gray-800 ">Association Members</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {associationMembers.map((member, index) => (
              <div
                key={index}
                className={`bg-white shadow-lg rounded-lg overflow-hidden p-4 border-t-8 border-[#2e8220] 
                transition-transform transform-gpu 
                ${clickedIndex === index ? "scale-105" : "hover:scale-105"} 
                hover:shadow-2xl hover:shadow-black hover:translate-y-2 
                cursor-pointer 
                ${clickedIndex === index ? "animate-bounce" : ""}`}
                onClick={() => handleCardClick(index)}
              >
                <div className="flex items-center">
                  {/* Profile Image */}
                  <div className="w-1/4 flex-shrink-0 -mt-8">
                    <Image
                      className="w-24 h-24 rounded-full object-cover mb-4 border-4 border-white shadow-md"
                      src={person1}
                      alt={member.name}
                    />
                  </div>

                  {/* Member Details */}
                  <div className="w-3/4 pl-4">
                    <h3 className="text-xl font-bold text-[#000957]">{member.name}</h3>
                    <p className="text-black font-bold text-md">{member.role}</p>
                    <p className="text-gray-500 text-sm mt-2">{member.description}</p>
                  </div>
                </div>
                
              </div>
            ))}
          </div>
        </div>
      
    </div>
  );
};

export default Association;

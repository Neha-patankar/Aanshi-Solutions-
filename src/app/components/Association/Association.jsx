"use client";
import React, { useState } from "react";
import { associationMembers} from './data';
import Image from "next/image";
import person1 from '../../../../public/comittee/person1.png'
import AssociationPage from "./AssociationPage";

const Association = () => {
  const [clickedIndex, setClickedIndex] = useState(null);

  const handleCardClick = (index) => {
    setClickedIndex(index);
    setTimeout(() => {
      setClickedIndex(null); // Reset the state after animation
    }, 300); // Time should match the duration of animation
  };

  return (
    <div className="bg-[#e0e0ddc8]">
      <AssociationPage/>
      <div className="container mx-auto py-8 px-4">
       
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {associationMembers.map((member, index) => (
            <div
              key={index}
              className={`bg-white shadow-lg rounded-lg overflow-hidden p-4 border-t-8 border-[#000957] transition-all transform 
              ${clickedIndex === index ? "scale-105" : "hover:scale-105"} 
              hover:shadow-2xl cursor-pointer ${clickedIndex === index ? "animate-bounce" : ""}`}
              onClick={() => handleCardClick(index)}
            >
              <div className="flex flex-col items-center">
                {/* Profile Image */}
                <Image
                  className="w-24 h-24 rounded-full object-cover mb-4"
                  src={person1}
                  alt={member.name}
                />
                {/* Member Name and Role */}
                <h3 className="text-2xl font-bold text-[#000957]">{member.name}</h3>
                <p className="text-black font-bold text-lg">{member.role}</p>
                {/* Member Description */}
                <p className="text-gray-500 text-center mt-2">{member.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Association;

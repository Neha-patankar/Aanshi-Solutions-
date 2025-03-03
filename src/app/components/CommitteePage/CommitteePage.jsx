"use client";
import React from "react";
import Image from "next/image";
import { committeeMembers } from "./data";

// SpeakerCard component for rendering individual committee members
const SpeakerCard = ({ members }) => {
  // Fallback image if the image URL is not valid or missing
  const fallbackImage = "/comittee/default-placeholder.png";

  return (
    <div className="rounded-lg overflow-hidden shadow-2xl transition-all duration-300 hover:shadow-lg flex flex-col items-center justify-center p-6 relative bg-gradient-to-b from-orange-400 to-green-900">
      {/* Speaker Image Section */}
      <div className="relative h-24 w-24 mb-2 rounded-full border-4 border-white">
        <Image
          src={members.imageUrl || fallbackImage} // Use fallback if image is not provided
          alt={members.name}
          layout="fill"
          objectFit="cover"
          className="rounded-full"
        />
      </div>

      {/* Speaker Info Section */}
      <div className="text-center">
        <h3 className="font-bold text-lg text-white">{members.name}</h3>
        <p className="text-sm text-yellow-300">{members.role}</p>
      </div>
    </div>
  );
};

// Main component rendering the committee members
const CommitteePage = () => {
  return (
    <div className="bg-gray-200 min-h-screen py-8">
      <div className="container mx-auto px-6">
        <h1 className="text-center text-2xl font-bold mb-6">
          Committee Members
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-6">
          {committeeMembers.map((members, index) => (
            <SpeakerCard key={index} members={members} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CommitteePage;

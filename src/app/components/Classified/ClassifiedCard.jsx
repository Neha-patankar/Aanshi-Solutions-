import React from "react";
import Image from "next/image";

const ClassifiedCard = ({ classified }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-4 transition hover:shadow-lg hover:scale-[1.02]">
      <div className="w-full h-40 relative rounded-md overflow-hidden">
        <Image
          src={classified.image}
          alt={classified.title}
          fill
          className="object-cover"
        />
      </div>

      <div className="mt-4">
        <h3 className="text-lg font-bold text-gray-800">{classified.title}</h3>
        <p className="text-gray-600 text-sm mt-1">{classified.description}</p>
        <p className="text-blue-600 text-sm mt-2">📍 {classified.location}</p>
        <p className="text-green-700 text-sm mt-1">📞 {classified.contact}</p>
        <p className="inline-block mt-2 px-3 py-1 text-xs font-semibold text-white bg-[#344742] rounded-full">
          {classified.category}
        </p>
      </div>
    </div>
  );
};

export default ClassifiedCard;

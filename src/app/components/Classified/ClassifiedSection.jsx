"use client";
import React from "react";
import ClassifiedCard from "./ClassifiedCard";

export const classifieds = [
  {
    id: 1,
    title: "Distributorship for Herbal Products",
    description: "Join us to distribute Ayurvedic oils and capsules across Madhya Pradesh.",
    location: "Indore, MP",
    contact: "9876543210",
    category: "Business Opportunity",
    image: "/clasified/distributors.png",
  },
  {
    id: 2,
    title: "Experienced Ayurvedic Doctor Available",
    description: "20+ years experience in treating chronic diseases with Panchkarma & herbs.",
    location: "Bhopal",
    contact: "8888888888",
    category: "Medical",
    image: "/clasified/clasific1.png",
  },
  {
    id: 3,
    title: "Panchkarma Therapist Hiring",
    description: "Looking for certified Panchkarma therapist for full-time position.",
    location: "Jabalpur, MP",
    contact: "9345012345",
    category: "Job Vacancy",
    image: "/clasified/panchkarma.png",
  },
  {
    id: 4,
    title: "Herbal Raw Material Supplier",
    description: "Supplying Amla, Neem, Giloy and other Ayurvedic herbs in bulk.",
    location: "Neemuch, MP",
    contact: "9823011122",
    category: "Supply",
    image: "/clasified/raw.png",
  },
  {
    id: 5,
    title: "Online Consultation Services",
    description: "Book video consultation with our certified Ayurvedic experts.",
    location: "Available All India",
    contact: "9876003211",
    category: "Service",
    image: "/clasified/online.png",
  },
  {
    id: 6,
    title: "Looking for Franchise Partners",
    description: "Start your Ayurvedic clinic or pharmacy with our proven model.",
    location: "All Over India",
    contact: "9611112345",
    category: "Franchise",
    image: "/clasified/frelancer.png"
  }
];


const ClassifiedSection = () => {
  return (
    <section id="classifieds" className="px-4 py-10 bg-gray-100">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-[#344742] mb-10">
          Classifieds
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {classifieds.map((item) => (
            <ClassifiedCard key={item.id} classified={item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClassifiedSection;

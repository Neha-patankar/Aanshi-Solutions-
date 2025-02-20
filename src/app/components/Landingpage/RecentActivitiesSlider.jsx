"use client"
import React, { useState, useEffect } from 'react';
import { ChevronUp, ChevronDown, Calendar } from 'lucide-react';

const RecentActivitiesSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const activities = [
    {
      id: 1,
      title: "Annual General Meeting",
      date: "25 Feb 2024",
      location: "Main Conference Hall",
      type: "Meeting"
    },
    {
      id: 2,
      title: "Product Innovation Workshop",
      date: "22 Feb 2024",
      location: "Training Center",
      type: "Workshop"
    },
    {
      id: 3,
      title: "Quality Control Seminar",
      date: "20 Feb 2024",
      location: "Auditorium",
      type: "Seminar"
    },
    {
      id: 4,
      title: "Industry Networking Event",
      date: "18 Feb 2024",
      location: "Exhibition Center",
      type: "Networking"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === activities.length - 1 ? 0 : prevIndex + 1
      );
    }, 2000);

    return () => clearInterval(timer);  // Fixed the typo here
  }, []);

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? activities.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === activities.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="bg-blue-100 rounded-lg shadow-lg p-6 max-w-md">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-2xl font-bold text-gray-800">Recent Activities</h2>
        <div className="flex gap-2">
          <button 
            onClick={handlePrevious}
            className="p-1 rounded-full hover:bg-gray-100"
          >
            <ChevronUp className="w-5 h-5 text-black" />
          </button>
          <button 
            onClick={handleNext}
            className="p-1 rounded-full hover:bg-gray-100"
          >
            <ChevronDown className="w-5 h-5 text-gray-600" />
          </button>
        </div>
      </div>
      
      <div className="relative overflow-hidden h-64">
        <div 
          className="transition-transform duration-500"
          style={{ transform: `translateY(-${currentIndex * 100}%)` }}
        >
          {activities.map((item) => (
            <div 
              key={item.id} 
              className="p-4 border-b border-gray-200 h-64"
            >
              <div className="flex items-center gap-2 mb-2 text-sm text-gray-500">
                <Calendar className="w-4 h-4" />
                {item.date}
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-800">
                {item.title}
              </h3>
              <div className="mb-2 text-gray-600">{item.location}</div>
              <span className="inline-block px-2 py-1 text-sm rounded-full bg-blue-100 text-blue-800">
                {item.type}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RecentActivitiesSlider;
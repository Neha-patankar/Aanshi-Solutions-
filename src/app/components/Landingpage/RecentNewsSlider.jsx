"use client"
import React, { useState, useEffect } from 'react';
import { ChevronUp, ChevronDown } from 'lucide-react';

const RecentNewsSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const news = [
    {
      id: 1,
      title: "Industry Growth Report 2024",
      date: "20 Feb 2024",
      description: "Latest ceramic industry growth statistics and market analysis released."
    },
    {
      id: 2,
      title: "New Export Guidelines",
      date: "18 Feb 2024",
      description: "Updated export guidelines for ceramic manufacturers announced."
    },
    {
      id: 3,
      title: "Sustainability Initiative",
      date: "15 Feb 2024",
      description: "Green manufacturing practices implementation across the sector."
    },
    {
      id: 4,
      title: "Technology Workshop",
      date: "12 Feb 2024",
      description: "Advanced manufacturing technology workshop scheduled next month."
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === news.length - 1 ? 0 : prevIndex + 1
      );
    }, 2000);

    return () => clearInterval(timer);
  }, []);

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? news.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === news.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="bg-blue-100 rounded-lg shadow-lg p-2 max-w-md">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-2xl font-bold text-gray-800">Recent News</h2>
        <div className="flex gap-2">
          <button 
            onClick={handlePrevious}
            className="p-1 rounded-full hover:bg-gray-100"
          >
            <ChevronUp className="w-5 h-5 text-gray-600" />
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
          {news.map((item) => (
            <div 
              key={item.id} 
              className="p-4 border-b border-gray-200 h-64"
            >
              <div className="mb-2 text-sm text-gray-500">{item.date}</div>
              <h3 className="text-xl font-semibold mb-2 text-gray-800">
                {item.title}
              </h3>
              <p className="text-gray-600">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RecentNewsSlider;
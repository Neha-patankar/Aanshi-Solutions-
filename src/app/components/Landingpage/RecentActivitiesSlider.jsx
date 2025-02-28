"use client";
import React, { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const RecentActivitiesSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const slideRef = useRef(null);

  const news = [
    {
      id: 1,
      title: "Traditional Herbs Guide",
      date: "20 Feb 2024",
      description: "Comprehensive guide on medicinal properties of traditional Ayurvedic herbs released."
    },
    {
      id: 2,
      title: "Wellness Conference",
      date: "18 Feb 2024",
      description: "International Ayurvedic wellness conference announced for next month."
    },
    {
      id: 3,
      title: "Research Breakthrough",
      date: "15 Feb 2024",
      description: "New study validates traditional Ayurvedic treatment methods for chronic conditions."
    },
    {
      id: 4,
      title: "Certification Program",
      date: "12 Feb 2024",
      description: "Advanced Ayurvedic practitioner certification program launches online."
    }
  ];

  // Create a circular array by duplicating the first item at the end
  const extendedNews = [...news, news[0]];

  useEffect(() => {
    const timer = setInterval(() => {
      handleNext();
    }, 8000);

    return () => clearInterval(timer);
  }, [currentIndex]);

  const handleTransitionEnd = () => {
    if (currentIndex === news.length) {
      setIsTransitioning(false);
      setCurrentIndex(0);
    }
  };

  const handlePrevious = () => {
    setIsTransitioning(true);
    if (currentIndex === 0) {
      setCurrentIndex(news.length - 1);
    } else {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const handleNext = () => {
    setIsTransitioning(true);
    setCurrentIndex(currentIndex + 1);
    if (currentIndex === news.length - 1) {
      setTimeout(() => {
        setIsTransitioning(false);
        setCurrentIndex(0);
      }, 4000);
    }
  };

  return (
    
    <div className="w-full pb-5 bg-white border rounded-md shadow-2xl">
      {/* Title and navigation */}
      <div className="flex items-center justify-between mb-4 bg-[#344742] py-2 px-4 border-t rounded-md">
        <h2 className="text-2xl font-bold text-white">Recent Activities</h2>
        <div className="flex gap-2">
          <button 
            onClick={handlePrevious}
            className="p-2 rounded-full hover:bg-gray-100 transition-colors"
          >
            <ChevronLeft className="w-5 h-5 text-white" />
          </button>
          <button 
            onClick={handleNext}
            className="p-2 rounded-full hover:bg-gray-100 transition-colors"
          >
            <ChevronRight className="w-5 h-5 text-white" />
          </button>
        </div>
      </div>

      {/* Slider container */}
      <div className="relative overflow-hidden rounded-lg shadow-sm h-auto">
        <div 
          ref={slideRef}
          className="flex transition-transform duration-500"
          style={{ 
            transform: `translateX(-${currentIndex * 100}%)`,
            transition: isTransitioning ? 'transform 500ms ease-in-out' : 'none'
          }}
          onTransitionEnd={handleTransitionEnd}
        >
          {extendedNews.map((item, index) => (
            <div 
              key={`${item.id}-${index}`}
              className="flex-shrink-0 w-full p-4 bg-transparent border-l border-gray-200"
            >
              <div className="mb-2 text-sm text-gray-500 font-medium">{item.date}</div>
              <h3 className="text-xl font-semibold mb-2 text-gray-900">
                {item.title}
              </h3>
              <p className="text-gray-700">{item.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Slide indicators */}
      <div className="flex justify-center gap-2 mt-4">
        {news.map((_, index) => (
          <button
            key={index}
            className={`w-2 h-2 rounded-full transition-colors ${
              index === (currentIndex === news.length ? 0 : currentIndex)
                ? 'bg-gray-600'
                : 'bg-gray-200'
            }`}
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default RecentActivitiesSlider;

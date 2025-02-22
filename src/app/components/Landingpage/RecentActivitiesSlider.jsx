"use client"
import React, { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight, Clock, User, CheckCircle, Bell } from 'lucide-react';

const RecentActivitySlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const slideRef = useRef(null);

  const activities = [
    {
      id: 1,
      type: "appointment",
      title: "New Consultation Scheduled",
      user: "Dr. Sarah Miller",
      time: "2 hours ago",
      status: "Confirmed",
      description: "Patient consultation for herbal therapy scheduled for tomorrow at 10:00 AM."
    },
    {
      id: 2,
      type: "treatment",
      title: "Treatment Plan Updated",
      user: "Dr. James Chen",
      time: "4 hours ago",
      status: "In Progress",
      description: "Modified wellness program for chronic condition management based on latest assessment."
    },
    {
      id: 3,
      type: "notification",
      title: "Inventory Alert",
      user: "System",
      time: "6 hours ago",
      status: "Action Required",
      description: "Low stock alert for essential herbs. Please review and reorder supplies."
    },
    {
      id: 4,
      type: "report",
      title: "Monthly Report Generated",
      user: "Analytics System",
      time: "12 hours ago",
      status: "Completed",
      description: "February 2024 patient outcomes and treatment effectiveness report is ready."
    }
  ];

  const extendedActivities = [...activities, activities[0]];

  useEffect(() => {
    const timer = setInterval(() => {
      handleNext();
    }, 8000);

    return () => clearInterval(timer);
  }, [currentIndex]);

  const handleTransitionEnd = () => {
    if (currentIndex === activities.length) {
      setIsTransitioning(false);
      setCurrentIndex(0);
    }
  };

  const handlePrevious = () => {
    setIsTransitioning(true);
    if (currentIndex === 0) {
      setCurrentIndex(activities.length - 1);
    } else {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const handleNext = () => {
    setIsTransitioning(true);
    setCurrentIndex(currentIndex + 1);
    if (currentIndex === activities.length - 1) {
      setTimeout(() => {
        setIsTransitioning(false);
        setCurrentIndex(0);
      }, 4000);
    }
  };

  const getStatusColor = (status) => {
    switch (status.toLowerCase()) {
      case 'confirmed':
        return 'bg-green-100 text-green-800';
      case 'in progress':
        return 'bg-blue-100 text-blue-800';
      case 'action required':
        return 'bg-yellow-100 text-yellow-800';
      case 'completed':
        return 'bg-purple-100 text-purple-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="p-4 w-full ">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-2xl font-bold text-gray-800">Recent Activity</h2>
        <div className="flex gap-2">
          <button 
            onClick={handlePrevious}
            className="p-2 rounded-full hover:bg-gray-100 transition-colors"
          >
            <ChevronLeft className="w-5 h-5 text-gray-600" />
          </button>
          <button 
            onClick={handleNext}
            className="p-2 rounded-full hover:bg-gray-100 transition-colors"
          >
            <ChevronRight className="w-5 h-5 text-gray-600" />
          </button>
        </div>
      </div>
      
      <div className="relative overflow-hidden h-52">
        <div 
          ref={slideRef}
          className="flex transition-transform duration-500 h-full"
          style={{ 
            transform: `translateX(-${currentIndex * 100}%)`,
            transition: isTransitioning ? 'transform 500ms ease-in-out' : 'none'
          }}
          onTransitionEnd={handleTransitionEnd}
        >
          {extendedActivities.map((item, index) => (
            <div 
              key={`${item.id}-${index}`}
              className="flex-shrink-0 w-full p-4 border rounded-lg shadow-sm bg-white"
            >
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-2">
                  <User className="w-4 h-4 text-gray-600" />
                  <span className="text-sm text-gray-600">{item.user}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-gray-400" />
                  <span className="text-sm text-gray-400">{item.time}</span>
                </div>
              </div>
              
              <h3 className="text-xl font-semibold mb-2 text-gray-800">
                {item.title}
              </h3>
              
              <p className="text-gray-600 mb-3">{item.description}</p>
              
              <div className="flex items-center justify-between">
                <span className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(item.status)}`}>
                  {item.status}
                </span>
                <CheckCircle className="w-5 h-5 text-gray-400" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RecentActivitySlider;
"use client";
import React, { useState, useEffect } from 'react';

const Counter = ({ end, duration = 2000 }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTime = null;
    const startCount = 0;

    const animate = (currentTime) => {
      if (!startTime) startTime = currentTime;
      const progress = (currentTime - startTime) / duration;

      if (progress < 1) {
        setCount(Math.floor(startCount + (end - startCount) * progress));
        requestAnimationFrame(animate);
      } else {
        setCount(end);
      }
    };

    requestAnimationFrame(animate);
  }, [end, duration]);

  return <>{count.toLocaleString()}+</>;
};

const StatsSection = () => {
  const stats = [
    { number: 1000, label: "Pharma Companies" },
    { number: 2000, label: "Medical Products" },
    { number: 1000, label: "Job Works Done" }
  ];

  return (
    <div className="relative w-full min-h-[300px] overflow-hidden py-16 bg-[#e0e0ddc8]">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center"
        style={{
          backgroundImage: `url('/scroller/bgstate.png')`,
        }}
      >
        <div className="absolute inset-0 bg-black opacity-30"></div> {/* Overlay for better text contrast */}
      </div>

      {/* Content Container */}
      <div className="relative z-10 max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <div 
              key={index} 
              className="rounded-xl shadow-lg p-8 transform hover:scale-105 transition-transform duration-300"
            >
              <div className="flex flex-col items-center">
                <h2 className="text-5xl font-bold text-blue-950 mb-3">
                  <Counter end={stat.number} />
                </h2>
                <p className="text-gray-700 text-lg font-medium">
                  {stat.label}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default StatsSection;

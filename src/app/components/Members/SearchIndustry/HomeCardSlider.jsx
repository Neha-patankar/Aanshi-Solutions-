import React, { useEffect, useState, useRef } from 'react';
import { Package, Users, UserCog } from 'lucide-react'; // Use icon library like 'lucide-react' for icons

const HomeCardSlider = () => {
  const [position, setPosition] = useState(0);
  const sliderRef = useRef(null);

  const cards = [
    { title: "Purchase Orders", icon: Package, color: "bg-blue-600" },
    { title: "Sales Bill", icon: Users, color: "bg-blue-600" },
    { title: "Despatch Challan", icon: UserCog, color: "bg-blue-600" },
    { title: "Bill Payments", icon: Package, color: "bg-blue-600" },
    { title: "Purchase Orders", icon: Package, color: "bg-blue-600" },
    { title: "Sales Bill", icon: Users, color: "bg-blue-600" },
    { title: "Despatch Challan", icon: UserCog, color: "bg-blue-600" },
    { title: "Bill Payments", icon: Package, color: "bg-blue-600" },
    // Add more cards as needed
  ];

  const nextSlide = () => {
    setPosition((prevPosition) => (prevPosition === cards.length - 4 ? 0 : prevPosition + 1));
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 2000); // Slide every 2 seconds
    return () => clearInterval(interval); // Clean up interval on component unmount
  }, []);

  return (
    <div className="relative overflow-hidden w-full max-w-4xl mx-auto p-4">
      <div
        className="flex transition-transform ease-in-out duration-500"
        style={{ transform: `translateX(-${position * 25}%)` }} // Adjusting transform for 4 cards
        ref={sliderRef}
      >
        {cards.map((card, index) => (
          <div
            key={index}
            className="min-w-1/4 flex justify-center items-center p-4" // Each card is 1/4 of the slider width
          >
            <div className="bg-white p-6 rounded-lg shadow-lg text-center w-48 h-48 flex flex-col items-center justify-center">
              <div className={`flex items-center justify-center w-12 h-12 rounded-full mb-4 ${card.color}`}>
                <card.icon className="text-white" size={32} />
              </div>
              <div className="text-black font-bold text-lg">{card.title}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomeCardSlider;

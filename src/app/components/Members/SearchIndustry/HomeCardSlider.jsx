import React, { useEffect, useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const HomeCardSlider = () => {
  const [position, setPosition] = useState(0);
  
  const cards = [
    { name: "All Products", image: "/productsPage/product/allproducts.png" },
    { name: "Ayurvedic Oils", image: "/productsPage/product/ayurvedicoils.png" },
    { name: "Capsule", image: "/productsPage/product/capsule.png" },
    { name: "Gel Balm", image: "/productsPage/product/gelbalm.png" },
    { name: "Hair Oil", image: "/productsPage/product/hairoil.png" },
    { name: "Herbal", image: "/productsPage/product/herbal.png" },
    { name: "Syrup", image: "/productsPage/product/syrup.png" },
    // Add more cards as needed
  ];
  
  const visibleCards = Math.min(6, cards.length);
  const maxPosition = cards.length - visibleCards;
  
  const nextSlide = () => {
    setPosition((prevPosition) =>
      prevPosition >= maxPosition ? 0 : prevPosition + 1
    );
  };
  
  const prevSlide = () => {
    setPosition((prevPosition) =>
      prevPosition <= 0 ? maxPosition : prevPosition - 1
    );
  };
  
  // Auto-slide every 3 seconds
  useEffect(() => {
    const interval = setInterval(nextSlide, 3000);
    
    return () => clearInterval(interval);
  }, []);
  
  // Calculate card width percentage based on visible cards
  const cardWidth = 100 / visibleCards;
  
  return (
    <div className="relative w-full max-w-7xl mx-auto p-4">
      {/* Slider content */}
      <div className="relative overflow-hidden">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${position * cardWidth}%)` }}
        >
          {cards.map((card, index) => (
            <div 
              key={index} 
              className="flex-shrink-0"
              style={{ width: `${cardWidth}%` }}
            >
              <div className="mx-auto w-40 h-44 bg-white p-2 rounded-lg shadow-lg flex flex-col items-center justify-center">
                <div className="w-24 h-24 flex items-center justify-center">
                  <img
                    src={card.image}
                    alt={card.name}
                    className="max-w-40 max-h-40 object-contain"
                  />
                </div>
                {/* <p className="mt-5 text-sm text-center">{card.name}</p> */}
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Navigation buttons */}
      <button
        className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full shadow-lg z-10"
        onClick={prevSlide}
      >
        <ChevronLeft size={20} />
      </button>
      
      <button
        className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full shadow-lg z-10"
        onClick={nextSlide}
      >
        <ChevronRight size={20} />
      </button>
    </div>
  );
};

export default HomeCardSlider;
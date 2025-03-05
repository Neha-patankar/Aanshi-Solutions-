import React, { useEffect, useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react'; // Use icon library like 'lucide-react' for navigation

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

  const visibleCards = 7; // Set the number of visible cards

  const nextSlide = () => {
    setPosition((prevPosition) => (prevPosition === cards.length - visibleCards ? 0 : prevPosition + 1));
  };

  const prevSlide = () => {
    setPosition((prevPosition) => (prevPosition === 0 ? cards.length - visibleCards : prevPosition - 1));
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 3000); // Auto slide every 3 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full max-w-7xl p-4">
      {/* Slider content */}
      <div className="relative overflow-hidden">
        <div
          className="flex transition-transform ease-in-out duration-500"
          style={{ transform: `translateX(-${position * (100 / visibleCards)}%)` }}
        >
          {cards.map((card, index) => (
            <div key={index} className="min-w-1/8 p-4 flex justify-center">
              <div className="bg-white p-2 rounded-lg shadow-lg text-center w-40 h-40 flex flex-col items-center justify-center">
                <img
                  src={card.image}
                  alt={card.name}
                  className="w-60 h-60 object-contain mb-0"
                />
                {/* <div className="text-black font-bold text-md">{card.name}</div> */}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Previous button */}
      <button
        className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full shadow-lg"
        onClick={prevSlide}
      >
        <ChevronLeft size={24} />
      </button>

      {/* Next button */}
      <button
        className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full shadow-lg"
        onClick={nextSlide}
      >
        <ChevronRight size={24} />
      </button>
    </div>
  );
};

export default HomeCardSlider;

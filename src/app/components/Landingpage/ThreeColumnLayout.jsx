"use client"
import React, { useState, useEffect } from 'react';

const ThreeColumnLayout = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [activeCard, setActiveCard] = useState(null);
  
  // Sample data for recent news
  const recentNews = [
    { id: 1, title: "Candidates selected in Ayurveda Medical Officer Recruitment Examination 2021", isNew: true },
    { id: 2, title: "Order", isNew: false },
    { id: 3, title: "Regrading E-Aushadhi Portal Order", isNew: false },
    { id: 4, title: "Information letter regarding record verification through merit selection list", isNew: false },
    { id: 5, title: "Bid Document", isNew: false },
    { id: 6, title: "Advertisement - Regarding purchase of two new sedan government vehicles", isNew: false }
  ];

  // Sample data for slider images
  const sliderImages = [
    { id: 1, src: "/scroller/image1.png", alt: "Ayurvedic herbs and oils" },
    { id: 2, src: "/scroller/image2.png", alt: "Ayurvedic treatment" },
    { id: 3, src: "/scroller/image3.png", alt: "Ayurvedic medicine" }
  ];

  // Sample data for right side cards
  const cards = [
    { id: 1, title: "कुल आयुष निर्माता", count: 1500, color: "bg-green-800" },
    { id: 2, title: "कुल आयुष उत्पाद", count: 20000, color: "bg-yellow-700" },
    { id: 3, title: "कुल उत्पाद श्रेणियाँ", count: 25, color: "bg-red-700" }
  ];

  // Move to next slide
  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === sliderImages.length - 1 ? 0 : prev + 1));
  };

  // Move to previous slide
  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? sliderImages.length - 1 : prev - 1));
  };

  const handleCardClick = (id) => {
    setActiveCard(id); // Set the clicked card as active
  };

  // Automatically move to the next slide after 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 3000); // Change slide every 3 seconds

    return () => clearInterval(interval); // Clean up the interval on component unmount
  }, []);

  return (
    <div className="flex flex-col lg:flex-row w-full gap-4 p-4 bg-gray-100">
      {/* Left side - Recent News */}
      <div className="w-full lg:w-1/4 bg-yellow-700 rounded-lg p-4">
        <div className="bg-white rounded-md p-3 mb-4">
          <h2 className="text-xl font-bold text-green-700 text-center">Aayush New </h2>
        </div>
        <div className="space-y-2">
          {recentNews.map((news) => (
            <div key={news.id} className="flex items-start gap-2">
              <div className="text-white mt-1">▶</div>
              <div className="text-white text-sm">
                {news.title}
                {news.isNew && (
                  <span className="ml-2 bg-white text-yellow-600 text-xs px-2 py-0.5 rounded">Activity</span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Middle - Slider */}
      <div className="w-full lg:w-1/2 relative">
        <div className="relative h-96 overflow-hidden rounded-lg">
          {sliderImages.map((image, index) => (
            <div
              key={image.id}
              className={`absolute w-full h-full transition-opacity duration-500 ${index === currentSlide ? "opacity-100" : "opacity-0"}`}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
          <button
            onClick={prevSlide}
            className="absolute top-1/2 left-4 -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full"
          >
            ◀
          </button>
          <button
            onClick={nextSlide}
            className="absolute top-1/2 right-4 -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full"
          >
            ▶
          </button>
        </div>
      </div>

      {/* Right side - Cards */}
      <div className="w-full lg:w-1/4 grid grid-cols-1 gap-4">
        {cards.map((card) => (
          <div
            key={card.id}
            onClick={() => handleCardClick(card.id)}
            className={`${activeCard === card.id ? "bg-black" : card.color} 
              rounded-lg p-4 flex flex-col items-center justify-center text-white 
              cursor-pointer hover:bg-gray-800 transition-all duration-300`}
          >
            <p className="text-center text-lg font-bold mb-2">{card.title}</p>
            <p className="text-2xl font-bold">{card.count}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ThreeColumnLayout;

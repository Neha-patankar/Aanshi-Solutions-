"use client";
import { useState, useCallback, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const SliderScroller = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const images = [
    "/scroller/image1.png",
    "/scroller/image2.png",
    "/scroller/image3.png",
  ];

  const goToSlide = useCallback((index) => {
    if (!isTransitioning) {
      setIsTransitioning(true);
      setCurrentIndex(index);
    }
  }, [isTransitioning]);

  const nextSlide = useCallback(() => {
    if (!isTransitioning) {
      const newIndex = (currentIndex + 1) % images.length;
      goToSlide(newIndex);
    }
  }, [currentIndex, images.length, isTransitioning, goToSlide]);

  const prevSlide = useCallback(() => {
    if (!isTransitioning) {
      const newIndex = (currentIndex - 1 + images.length) % images.length;
      goToSlide(newIndex);
    }
  }, [currentIndex, images.length, isTransitioning, goToSlide]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowLeft') {
        prevSlide();
      } else if (e.key === 'ArrowRight') {
        nextSlide();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [nextSlide, prevSlide]);

  useEffect(() => {
    if (isTransitioning) {
      const timer = setTimeout(() => setIsTransitioning(false), 500);
      return () => clearTimeout(timer);
    }
  }, [isTransitioning]);

  useEffect(() => {
    const timer = setInterval(nextSlide, 3000);
    return () => clearInterval(timer);
  }, [nextSlide]);

  return (
    <div className="relative w-full overflow-hidden bg-black">
      {/* Container with responsive height */}
      <div className="relative w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px]">
        {images.map((src, index) => (
          <div
            key={index}
            className={`absolute w-full h-full transition-opacity duration-500 ease-in-out ${
              currentIndex === index ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <img
              src={src}
              alt={`Slide ${index + 1}`}
              className="object-cover w-full h-full"
              onLoad={() => setIsTransitioning(false)}
            />
          </div>
        ))}
      </div>

      {/* Navigation Arrows - Responsive sizing and positioning */}
      <button
        onClick={prevSlide}
        className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/75 text-white p-1 sm:p-2 rounded-full transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-white"
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-4 h-4 sm:w-6 sm:h-6" />
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/75 text-white p-1 sm:p-2 rounded-full transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-white"
        aria-label="Next slide"
      >
        <ChevronRight className="w-4 h-4 sm:w-6 sm:h-6" />
      </button>

      {/* Dots Navigation - Responsive spacing */}
      <div className="absolute bottom-2 sm:bottom-4 left-1/2 -translate-x-1/2 flex space-x-1 sm:space-x-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-white ${
              currentIndex === index
                ? 'bg-white scale-110'
                : 'bg-white/50 hover:bg-white/75'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default SliderScroller;
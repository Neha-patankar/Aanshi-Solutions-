"use client";
import React, { useState, useEffect } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Image from 'next/image';
import { Search } from 'lucide-react';

const Product = () => {
  const [isClient, setIsClient] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    setIsClient(true);
  }, []);

  const images = [
    { src: "/productsPage/product/allproducts.png", alt: "All Products", name: "All Products" },
    { src: "/productsPage/product/ayurvedicoils.png", alt: "Ayurvedic Oils", name: "Ayurvedic Oils" },
    { src: "/productsPage/product/capsule.png", alt: "Capsule", name: "Capsule" },
    { src: "/productsPage/product/gelbalm.png", alt: "Gel Balm", name: "Gel Balm" },
    { src: "/productsPage/product/hairoil.png", alt: "Hair Oil", name: "Hair Oil" },
    { src: "/productsPage/product/herbal.png", alt: "Herbal", name: "Herbal" },
    { src: "/productsPage/product/syrup.png", alt: "Syrup", name: "Syrup" }
  ];

  const filteredImages = images.filter(image =>
    image.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const settings = {
    dots: true,
    infinite: filteredImages.length > 4,
    speed: 500,
    slidesToShow: Math.min(4, filteredImages.length),
    slidesToScroll: 1,
    autoplay: filteredImages.length > 4,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: Math.min(3, filteredImages.length),
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: Math.min(2, filteredImages.length),
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      }
    ]
  };

  if (!isClient) {
    return null;
  }

  return (
    <div className='bg-[#e0e0ddc8]'>
    <div className="max-w-screen-xl mx-auto py-8 px-4 ">
      {/* Search Bar */}
      <div className="mb-8 relative max-w-md mx-auto">
        <div className="relative">
          <input
            type="text"
            placeholder="Search products..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full px-4 py-2 pl-10 pr-4 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
        </div>
      </div>

      {/* No Results Message */}
      {filteredImages.length === 0 ? (
        <div className="text-center py-8">
          <p className="text-gray-600 text-lg">No products found matching "{searchTerm}"</p>
        </div>
      ) : (
        /* Slider */
        <Slider {...settings}>
          {filteredImages.map((image, index) => (
            <div key={index} className="px-2">
              <div className="group relative h-64 rounded-lg overflow-hidden">
                <div className="relative w-full h-full transform transition-transform duration-300 group-hover:scale-105">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    sizes="(max-width: 480px) 50vw,
                           (max-width: 768px) 50vw,
                           (max-width: 1024px) 33vw,
                           25vw"
                    className="object-cover rounded-lg"
                    priority={index < 2}
                  />
                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                    <h3 className="text-white text-center font-semibold text-lg">
                      {image.name}
                    </h3>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      )}
    </div>
    </div>
  );
};

export default Product;
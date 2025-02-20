import React from 'react';

const HexagonCard = () => {
  return (
    <div className="bg-gray-50 py-12 px-4 sm:px-6 lg:px-8 flex justify-center">
      <div className="relative bg-blue-50 p-6 shadow-lg transform hover:scale-105 transition-transform duration-300 w-80">
        {/* Hexagon Shape */}
        <div className="relative w-full h-full">
          <div className="bg-blue-100 p-8 rounded-xl shadow-lg" style={{ clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)' }}>
            <div className="text-center">
              {/* Icon */}
              <div className="flex justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-teal-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 8c1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3 1.34 3 3 3z"></path>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3.29 2.29a1 1 0 01.29.71V18m-8 0v-2.5c0-.265.105-.52.293-.707L12 12"></path>
                </svg>
              </div>

              {/* Title */}
              <h3 className="text-2xl font-semibold text-pink-600">Our Mission</h3>

              {/* Divider */}
              <div className="flex justify-center mt-2">
                <div className="h-1 w-16 bg-gray-400">
                  <span className="h-1 w-5 bg-pink-600 block"></span>
                </div>
              </div>

              {/* Description */}
              <p className="mt-4 text-gray-700">
                The Morbi Ceramic Manufacturers Association is dedicated to the welfare of ceramic Industry, the preservation of its traditions of excellence in ceramic products, and the advancement of its stature in the world.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HexagonCard;

import React from 'react';

const VisionMission = () => {
  return (
    <div className='bg-[#344742] pt-10'>
    <div className="py-24 px-4 sm:px-6 lg:px-8 ">
      <div className="flex flex-col md:flex-row justify-center items-center gap-8 md:gap-16">
        {/* Vision Card */}
        <div className="w-80 transform hover:scale-105 transition-transform duration-300">
          <div className="bg-white shadow-lg p-8 rounded-2xl" style={{ clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)' }}>
            <div className="text-center py-4">
              <div className="flex justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-gray-700" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              </div>
              <h3 className="text-3xl font-semibold text-[#000957] mb-2">Our Vision</h3>
              <div className="w-16 h-0.5 bg-gray-300 mx-auto mb-4">
                <div className="w-8 h-0.5 bg-[#000957]"></div>
              </div>
              <p className="text-gray-800 font-bold text-sm pb-10 ">
                Through our extensive complement of high quality products and services, we will enable our clients to be updated in marketplace and will lead in the industry by exceeding our Customer's & Member's expectations.
              </p>
            </div>
          </div>
        </div>

        {/* Core Values Card */}
        <div className="w-80 transform hover:scale-105 transition-transform duration-300 ">
          <div className="bg-white shadow-lg p-8 rounded-xl" style={{ clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)' }}>
            <div className="text-center py-4">
              <div className="flex justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-gray-800" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                </svg>
              </div>
              <h3 className="text-3xl font-semibold text-[#000957] mb-2">Core Values</h3>
              <div className="w-16 h-0.5 bg-gray-300 mx-auto mb-4">
                <div className="w-8 h-0.5 bg-[#000957]"></div>
              </div>
              <p className="text-gray-800 font-bold text-sm pb-10">
                A commitment to doing well for the whole & believe to be support of each other. A commitment to sustainability and to acting in an environmentally friendly way. A commitment to innovation and excellence.
              </p>
            </div>
          </div>
        </div>

        {/* Mission Card */}
        <div className="w-80 transform hover:scale-105 transition-transform duration-300">
          <div className="bg-white shadow-lg p-8 rounded-xl" style={{ clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)' }}>
            <div className="text-center py-4">
              <div className="flex justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-gray-700" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                </svg>
              </div>
              <h3 className="text-3xl font-semibold text-[#000957] mb-2">Our Mission</h3>
              <div className="w-16 h-0.5 bg-gray-300 mx-auto mb-4">
                <div className="w-8 h-0.5 bg-[#000957]"></div>
              </div>
              <p className="text-gray-800 font-bold text-sm pb-10">
                The Morbi Ceramic Manufacturers Association is dedicated for the welfare of ceramic Industry, the preservation of its traditions of excellence in CERAMIC PRODUCTS, and the advancement of its stature in the world.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default VisionMission;
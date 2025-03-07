import React, { useEffect, useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react'; // Using icons for navigation
import { currentData } from './Data'; // Import your data correctly

const HomeCardSlider = () => {
  const [position, setPosition] = useState(0); // Position to control slider movement
  const [selectedCompany, setSelectedCompany] = useState(null); // To store the currently selected company
  const [displayedCompanyId, setDisplayedCompanyId] = useState(1); // Default to showing company ID 1
  const [selectedCompanyId, setSelectedCompanyId] = useState(null); // New state to track selected company ID
  const visibleCards = 7; // Number of cards visible at a time
  
  // Fix data structure inconsistency (some use "cards", company #7 uses "card")
  const fixedData = currentData.map(company => {
    if (company.card && !company.cards) {
      return { ...company, cards: company.card };
    }
    return company;
  });
  
  // Get the currently displayed company
  const displayedCompany = fixedData.find(company => company.id === displayedCompanyId) || fixedData[0];
  
  // Get cards from the displayed company, or empty array if no cards
  const companyCards = displayedCompany?.cards || [];
  
  // Function to move to the next slide
  const nextSlide = () => {
    setPosition((prevPosition) =>
      prevPosition === (companyCards.length - visibleCards < 0 ? 0 : companyCards.length - visibleCards) 
        ? 0 
        : prevPosition + 1
    );
  };

  // Function to move to the previous slide
  const prevSlide = () => {
    setPosition((prevPosition) =>
      prevPosition === 0 
        ? (companyCards.length - visibleCards < 0 ? 0 : companyCards.length - visibleCards)
        : prevPosition - 1
    );
  };

  // Function to change displayed company
  const changeDisplayedCompany = (id) => {
    setDisplayedCompanyId(id);
    setPosition(0); // Reset position when changing company
  };

  // Function to handle company selection for detailed view
  const handleCompanySelect = (companyId) => {
    const company = fixedData.find(comp => comp.id === companyId);
    setSelectedCompany(company);
    setSelectedCompanyId(companyId); // Set the selected company ID
  };

  // Auto-slide feature (slides every 3 seconds) - will pause if a company is selected
  useEffect(() => {
    if (!selectedCompany) {
      const interval = setInterval(nextSlide, 3000); // Auto slide every 3 seconds
      return () => clearInterval(interval); // Clear the interval on unmount
    }
  }, [selectedCompany, companyCards.length]);

  // Filter data based on selected company ID
  const selectedCompanyData = fixedData.find(company => company.id === selectedCompanyId);

  return (
    <div className="relative w-full max-w-7xl mx-auto p-4">
      {/* Company selector buttons */}
      <div className="mb-6 flex flex-wrap gap-2 justify-center">
        {fixedData.map((company) => (
          <button
            key={company.id}
            onClick={() => company.id === displayedCompanyId 
              ? handleCompanySelect(company.id) 
              : changeDisplayedCompany(company.id)
            }
            className={`px-3 py-1 rounded-lg transition-colors text-sm ${
              displayedCompanyId === company.id
                ? 'bg-blue-600 text-white'
                : 'bg-gray-200 hover:bg-gray-300'
            }`}
          >
            {company.company}
          </button>
        ))}
      </div>
      
      {/* Currently displayed company name */}
      <h2 className="text-xl font-bold mb-4 text-center">
        {displayedCompany.company}
      </h2>

      {/* Display selected company details when in detailed view */}
      {selectedCompany && (
        <div className="bg-white p-6 rounded-lg shadow-lg mb-8">
          <div className="flex justify-between items-start">
            <h2 className="text-2xl font-bold mb-4">{selectedCompany.company}</h2>
            <button
              onClick={() => setSelectedCompany(null)}
              className="px-3 py-1 rounded-lg bg-red-500 text-white hover:bg-red-600"
            >
              Close Details
            </button>
          </div>
          
          {/* Display company details */}
          {selectedCompanyData && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <p><span className="font-semibold">Contact:</span> {selectedCompanyData.contact}</p>
                <p><span className="font-semibold">Address:</span> {selectedCompanyData.address}</p>
                <p><span className="font-semibold">Area:</span> {selectedCompanyData.area}</p>
              </div>
              <div>
                <p><span className="font-semibold">License No:</span> {selectedCompanyData.licenseNo}</p>
                <p><span className="font-semibold">Valid Upto:</span> {selectedCompanyData.validUpto}</p>
                {selectedCompanyData.product && (
                  <p><span className="font-semibold">Product Type:</span> {selectedCompanyData.product}</p>
                )}
              </div>
            </div>
          )}
          
          {/* Display company products */}
          {selectedCompany.cards && selectedCompany.cards.length > 0 && (
            <div className="mt-6">
              <h3 className="text-xl font-semibold mb-4">Products</h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                {selectedCompany.cards.map((card, index) => (
                  <div key={index} className="bg-gray-50 p-3 rounded-lg text-center">
                    <img
                      src={card.image}
                      alt={card.name}
                      className="w-full h-32 object-contain mb-2"
                    />
                    <p className="font-medium">{card.name}</p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      )}

      {/* Slider container - show company-specific cards */}
      {!selectedCompany && (
        <>
          <div className="relative overflow-hidden">
            <div
              className="flex transition-transform ease-in-out duration-500"
              style={{ transform: `translateX(-${position * (100 / Math.min(visibleCards, companyCards.length))}%)` }}
            >
              {companyCards.length > 0 ? (
                companyCards.map((card, index) => (
                  <div 
                    key={index} 
                    className="min-w-[calc(100%/7)] p-4 flex justify-center"
                    onClick={() => handleCompanySelect(displayedCompanyId)}
                  >
                    <div className="bg-white p-2 rounded-lg shadow-lg text-center w-40 h-40 flex flex-col items-center justify-center cursor-pointer hover:shadow-xl transition-shadow">
                      <img
                        src={card.image}
                        alt={card.name}
                        className="w-24 h-24 object-contain mb-2"
                      />
                      <div className="text-black font-medium text-sm">{card.name}</div>
                    </div>
                  </div>
                ))
              ) : (
                <div className="w-full text-center py-8">
                  No product cards available for this company
                </div>
              )}
            </div>
          </div>

          {/* Only show navigation buttons if there are enough cards */}
          {companyCards.length > visibleCards && (
            <>
              <button
                className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full shadow-lg z-10"
                onClick={prevSlide}
              >
                <ChevronLeft size={24} />
              </button>

              <button
                className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full shadow-lg z-10"
                onClick={nextSlide}
              >
                <ChevronRight size={24} />
              </button>
            </>
          )}
        </>
      )}
    </div>
  );
};

export default HomeCardSlider;
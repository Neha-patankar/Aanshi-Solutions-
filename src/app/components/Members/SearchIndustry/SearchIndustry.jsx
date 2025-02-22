"use client";
import React, { useState, useEffect } from "react";
import Input from "./Input"; // Assuming you have a custom Input component
import { currentData } from "./Data"; // Assuming you have your data in Data.js
import { MapPin } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const SearchIndustry = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [filteredData, setFilteredData] = useState(currentData);
  const [locationCounts, setLocationCounts] = useState({});

  const ITEMS_PER_PAGE = 9;

  const handleSearch = () => {
    const lowerCaseSearchTerm = searchTerm.toLowerCase();

    const filtered = currentData.filter((item) => {
      if (!searchTerm) {
        return true; // Show all data when search term is empty
      }

      const matchFound =
        item.company.toLowerCase().includes(lowerCaseSearchTerm) ||
        item.product.toLowerCase().includes(lowerCaseSearchTerm) ||
        item.area.toLowerCase().includes(lowerCaseSearchTerm);

      return matchFound;
    });

    setFilteredData(filtered);
    setCurrentPage(1);
    countLocations(filtered);
  };

  const countLocations = (data) => {
    const counts = data.reduce((acc, item) => {
      const area = item.area.toLowerCase();
      acc[area] = acc[area] ? acc[area] + 1 : 1;
      return acc;
    }, {});
    setLocationCounts(counts);
  };

  useEffect(() => {
    countLocations(filteredData);
  }, [filteredData]);

  const totalPages = Math.ceil(filteredData.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const endIndex = startIndex + ITEMS_PER_PAGE;
  const paginatedData = filteredData.slice(startIndex, endIndex);

  const getPageNumbers = () => {
    const pageNumbers = [];
    for (let i = 1; i <= totalPages; i++) {
      pageNumbers.push(i);
    }
    return pageNumbers;
  };

  return (
    <div className="p-4">
      <div className="flex-col md:flex-row rounded-lg shadow-lg mb-8 gap-4">
        <div className="bg-[#2e8220]  rounded-t-md">
          <h4 className="font-semibold text-lg text-white text-center font-bold p-1">
            TOTAL COMPANIES : {filteredData.length}
          </h4>
        </div>

        <div className="bg-white p-4 rounded-lg shadow-md">
          <h4 className="font-semibold text-2xl text-black mb-2">
            Location Counts:
          </h4>
          <ul className="list-disc pl-5 flex flex-col md:flex-row gap-6 text-black font-bold">
            {Object.keys(locationCounts).map((location, index) => (
              <li key={index} className="text-black">
                {location.charAt(0).toUpperCase() + location.slice(1)}:{" "}
                {locationCounts[location]}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-lg p-0 mb-8 border-t-4 border-[#2e8220] ">
        <div className="bg-[#2e8220]  rounded-t-md pt-2"></div>
        <div className="flex flex-col md:flex-row items-center gap-4 p-10">
          <Input
            type="text"
            placeholder="Search (Company, Product, Area)"
            value={searchTerm}
            onChange={(e) => {
              setSearchTerm(e.target.value);
              handleSearch();
            }}
            className="w-full"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8">
        {paginatedData.map((item) => (
          <Link
            key={item.id}
            href={`/company/${item.id}`} // Correctly route to the company details page with dynamic id
            target="_blank" // Open link in a new tab
            rel="noopener noreferrer" // Security best practices
            className="w-full h-auto rounded-lg shadow-2xl hover:shadow-lg hover:scale-110 transition-transform duration-300 bg-white cursor-pointer"
          >
            <div className="flex flex-col items-center">
              <h3 className="text-lg bg-[#2e8220] font-semibold text-white text-center p-1 rounded-t-md w-full">
                {item.company}
              </h3>

              <div className="flex flex-col items-center sm:flex-row sm:items-start gap-4 w-full p-4">
                <div className="w-24 h-24 flex-shrink-0 border-4 border-[#2e8220] rounded-md mx-2 mb-4 sm:mb-0 sm:mr-4">
                  <Image
                    src={
                      item.imageLogo.startsWith("/")
                        ? item.imageLogo
                        : `/companyLogo/${item.imageLogo}` // Template literal here as well
                    }
                    alt={item.company}
                    className="w-full h-full object-contain rounded-md"
                    width={64}
                    height={64}
                  />
                </div>

                <div className="flex flex-col font-bold text-left text-center sm:text-left">
                  <div className="flex items-center justify-center sm:justify-start text-black text-lg mb-2">
                    <MapPin className="w-5 h-5 mr-1 text-blue-800" />
                    <span className="text-sm break-words">{item.address}</span>
                  </div>

                  <div className="flex items-center justify-center sm:justify-start text-black text-md">
                    <MapPin className="w-5 h-5 mr-1 text-blue-800" />
                    <span className="text-sm break-words">{item.area}</span>
                  </div>

                  <div className="mt-5 text-center sm:text-left">
                    <span className="px-3 py-1.5 rounded text-white text-sm font-bold bg-[#2e8220] hover:bg-[#2e8220] transition-colors duration-200">
                      View Details
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>

      {totalPages > 1 && (
        <div className="flex justify-center font-semibold items-center space-x-2 mt-8">
          <button
            onClick={() => setCurrentPage(1)}
            disabled={currentPage === 1}
            className="px-2 py-1 rounded-md border-2 border-white disabled:opacity-50 hover:bg-[#2e8220] hover:text-white text-xs sm:text-sm md:text-base"
          >
            {"<<"}
          </button>
          <button
            onClick={() => setCurrentPage((prev) => Math.max(1, prev - 1))}
            disabled={currentPage === 1}
            className="px-2 py-1 rounded-md border-2 border-white disabled:opacity-50 hover:bg-[#2e8220] hover:text-white text-xs sm:text-sm md:text-base"
          >
            {"<"}
          </button>

          {getPageNumbers().map((pageNum) => (
            <button
              key={pageNum}
              onClick={() => setCurrentPage(pageNum)}
              className={`px-2 py-1 rounded-md border-2 border-white text-xs sm:text-2xl md:text-base ${
                currentPage === pageNum
                  ? "bg-[#2e8220] text-white"
                  : "hover:bg-[#2e8220] hover:text-white"
              }`}
            >
              {pageNum}
            </button>
          ))}

          <button
            onClick={() =>
              setCurrentPage((prev) => Math.min(totalPages, prev + 1))
            }
            disabled={currentPage === totalPages}
            className="px-2 py-1 rounded-md border-2 border-white disabled:opacity-50 hover:bg-[#2e8220] hover:text-white text-xs sm:text-sm md:text-base"
          >
            {">"}
          </button>
          <button
            onClick={() => setCurrentPage(totalPages)}
            disabled={currentPage === totalPages}
            className="px-2 py-1 rounded-md border-2 border-white disabled:opacity-50 hover:bg-[#2e8220] hover:text-white text-xs sm:text-sm md:text-base"
          >
            {">>"}
          </button>
        </div>
      )}
    </div>
  );
};

export default SearchIndustry;

"use client";
import React, { useState, useEffect } from "react";
import Input from "./Input";
import { Dialog } from "@headlessui/react";
import { currentData } from "./Data";
import { MapPin } from "lucide-react";
import Image from "next/image";
import CompanyDetailsDialog from "./CompanyDetailsDialog ";

const SearchIndustry = () => {
  const [companySearch, setCompanySearch] = useState("");
  const [productSearch, setProductSearch] = useState("");
  const [areaSearch, setAreaSearch] = useState("");
  const [selectedItem, setSelectedItem] = useState(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [filteredData, setFilteredData] = useState(currentData); // Changed from initialData to currentData
  const [locationCounts, setLocationCounts] = useState({});

  const ITEMS_PER_PAGE = 9;

  const handleSearch = () => {
    const filtered = currentData.filter((item) => {
      // Changed from initialData to currentData
      if (!companySearch && !productSearch && !areaSearch) {
        return true;
      }

      const hasCompanyMatch = companySearch
        ? item.company.toLowerCase().includes(companySearch.toLowerCase())
        : false;

      const hasProductMatch = productSearch
        ? item.product.toLowerCase().includes(productSearch.toLowerCase())
        : false;

      const hasAreaMatch = areaSearch
        ? item.area.toLowerCase().includes(areaSearch.toLowerCase())
        : false;

      return hasCompanyMatch || hasProductMatch || hasAreaMatch;
    });

    setFilteredData(filtered);
    setCurrentPage(1);
    countLocations(filtered);
  };

  const handleViewDetails = (item) => {
    setSelectedItem(item);
    setIsDialogOpen(true);
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
  const paginatedData = filteredData.slice(startIndex, endIndex); // Renamed from currentData to avoid confusion

  const getPageNumbers = () => {
    let pageNumbers = [];
    for (let i = 1; i <= totalPages; i++) {
      pageNumbers.push(i);
    }
    return pageNumbers;
  };

  return (
    <div className="p-4">
      <div className="flex-col md:flex-row rounded-lg shadow-lg mb-8 gap-4 ">
        {/* Total Count Card */}
        <div className="bg-[#000957] rounded-t-md">
          <h4 className="font-semibold text-lg text-white text-center font-bold p-1">
            TOTAL COMPANIES : {filteredData.length}
          </h4>
        </div>

        {/* Location Count Card */}
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

      {/* Search Section */}
      <div className="bg-white rounded-xl shadow-lg p-0 mb-8 border-t-4 border-[#000957]">
        <div className="bg-[#000957] rounded-t-md pt-2"></div>
        <div className="flex flex-col md:flex-row items-center gap-4 p-10">
          <Input
            type="text"
            placeholder="Search by Company"
            value={companySearch}
            onChange={(e) => setCompanySearch(e.target.value)}
            className="w-full "
          />
          <Input
            type="text"
            placeholder="Search by Product"
            value={productSearch}
            onChange={(e) => setProductSearch(e.target.value)}
            className="w-full"
          />
          <Input
            type="text"
            placeholder="Search by Area"
            value={areaSearch}
            onChange={(e) => setAreaSearch(e.target.value)}
            className="w-full hover:border-[#000957]"
          />
          <button
            onClick={handleSearch}
            className="w-full md:w-auto bg-[#000957] hover:bg-[#000957] text-white font-bold font-medium py-2 px-6 rounded-lg transition-all duration-200"
          >
            Search
          </button>
        </div>
      </div>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8">
        {paginatedData.map((item) => (
          <div
            key={item.id}
            className="w-full h-auto rounded-lg shadow-2xl hover:shadow-lg hover:scale-110 transition-transform duration-300 bg-white"
          >
            <div className="flex flex-col items-center">
              <h3 className="text-lg bg-[#000957] font-semibold text-white text-center p-1 rounded-t-md w-full">
                {item.company}
              </h3>

              <div className="flex flex-col items-center sm:flex-row sm:items-start gap-4 w-full p-4">
                {/* Company Logo */}
                <div className="w-24 h-24 flex-shrink-0 border-4 border-[#000957] rounded-md mx-2 mb-4 sm:mb-0 sm:mr-4">
                  <Image
                    src={
                      item.imageLogo.startsWith("/")
                        ? item.imageLogo
                        : `/companyLogo/${item.imageLogo}`
                    }
                    alt={item.company}
                    className="w-full h-full object-contain rounded-md" // Changed to rounded-md for logo
                    width={64}
                    height={64}
                  />
                </div>

                {/* Address and Area */}
                <div className="flex flex-col font-bold text-left text-center sm:text-left">
                  {/* Location */}
                  <div className="flex items-center justify-center sm:justify-start text-black text-lg mb-2">
                    <MapPin className="w-5 h-5 mr-1 text-blue-800" />
                    <span className="text-sm break-words">{item.address}</span>
                  </div>

                  {/* Area */}
                  <div className="flex items-center justify-center sm:justify-start text-black text-md">
                    <MapPin className="w-5 h-5 mr-1 text-blue-800" />
                    <span className="text-sm break-words">{item.area}</span>
                  </div>

                  {/* Button */}
                  <div className="mt-5 text-center sm:text-left">
                    <button
                      onClick={() => handleViewDetails(item)}
                      className="px-3 py-1.5 rounded text-white text-sm font-bold bg-[#000957] hover:bg-[#1a1f71] transition-colors duration-200"
                    >
                      View Details
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="flex justify-center font-semibold items-center space-x-2 mt-8">
          <button
            onClick={() => setCurrentPage(1)}
            disabled={currentPage === 1}
            className="px-2 py-1 rounded-md border-2 border-white disabled:opacity-50 hover:bg-[#000957] hover:text-white text-xs sm:text-sm md:text-base"
          >
            {"<<"}
          </button>
          <button
            onClick={() => setCurrentPage((prev) => Math.max(1, prev - 1))}
            disabled={currentPage === 1}
            className="px-2 py-1 rounded-md border-2 border-white disabled:opacity-50 hover:bg-[#000957] hover:text-white text-xs sm:text-sm md:text-base"
          >
            {"<"}
          </button>

          {getPageNumbers().map((pageNum) => (
            <button
              key={pageNum}
              onClick={() => setCurrentPage(pageNum)}
              className={`px-2 py-1 rounded-md border-2 border-white text-xs sm:text-2xl md:text-base ${
                currentPage === pageNum
                  ? "bg-[#000957] text-white"
                  : "hover:bg-[#000957] hover:text-white"
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
            className="px-2 py-1 rounded-md border-2 border-white disabled:opacity-50 hover:bg-[#000957] hover:text-white text-xs sm:text-sm md:text-base"
          >
            {">"}
          </button>
          <button
            onClick={() => setCurrentPage(totalPages)}
            disabled={currentPage === totalPages}
            className="px-2 py-1 rounded-md border-2 border-white disabled:opacity-50 hover:bg-[#000957] hover:text-white text-xs sm:text-sm md:text-base"
          >
            {">>"}
          </button>
        </div>
      )}

      {/* Company Details Dialog */}
      <CompanyDetailsDialog
        isOpen={isDialogOpen}
        onClose={() => setIsDialogOpen(false)}
        company={selectedItem}
        logo={
          selectedItem?.imageLogo
            ? selectedItem.imageLogo.startsWith("/")
              ? selectedItem.imageLogo
              : `/companyLogo/${selectedItem.imageLogo}`
            : null
        }
      />
    </div>
  );
};

export default SearchIndustry;

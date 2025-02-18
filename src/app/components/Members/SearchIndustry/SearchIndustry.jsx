"use client";
import React, { useState, useEffect } from "react";
import Input from "./Input";
import { Dialog } from "@headlessui/react";
import { initialData } from "./Data";
import { MapPin, Phone, Mail, Globe, Building } from "lucide-react";
import Image from "next/image";
import logo1 from "../../../../../public/companyLogo/logo1.png";
import CompanyDetailsDialog from "./CompanyDetailsDialog ";

const SearchIndustry = () => {
  const [companySearch, setCompanySearch] = useState("");
  const [productSearch, setProductSearch] = useState("");
  const [areaSearch, setAreaSearch] = useState("");
  const [selectedItem, setSelectedItem] = useState(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [filteredData, setFilteredData] = useState(initialData);
  const [locationCounts, setLocationCounts] = useState({});

  const ITEMS_PER_PAGE = 9;

  const handleSearch = () => {
    const filtered = initialData.filter((item) => {
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
  const currentData = filteredData.slice(startIndex, endIndex);

  const getPageNumbers = () => {
    const pageNumbers = [];
    const showPages = 5;
    let startPage = Math.max(1, currentPage - 2);
    let endPage = Math.min(totalPages, startPage + showPages - 1);
    if (endPage - startPage + 1 < showPages) {
      startPage = Math.max(1, endPage - showPages + 1);
    }
    for (let i = startPage; i <= endPage; i++) {
      pageNumbers.push(i);
    }
    return pageNumbers;
  };

  return (
    <div className="p-4">
      {/* Search Section */}
      <div className="bg-white rounded-xl shadow-lg p-10 mb-8">
        <div className="flex flex-col md:flex-row items-center gap-4 ">
          <Input
            type="text"
            placeholder="Search by Company"
            value={companySearch}
            onChange={(e) => setCompanySearch(e.target.value)}
            className="w-full"
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
            className="w-full"
          />
          <button
            onClick={handleSearch}
            className="w-full md:w-auto bg-[#000957] hover:bg-[#000957] text-white font-medium py-2 px-6 rounded-lg transition-all duration-200"
          >
            Search
          </button>
        </div>
      </div>

      {/* Location Count */}
      {/* Location Count */}
      <div className="mb-4">
        <h4 className="font-semibold text-lg text-white">Location Counts:</h4>
        <ul className="lg:flex gap-10 list-disc pl-5">
          {Object.keys(locationCounts).map((location, index) => (
            <li key={index} className="text-white">
              {location.charAt(0).toUpperCase() + location.slice(1)}:{" "}
              {locationCounts[location]}
            </li>
          ))}
        </ul>
      </div>

      {/* Total Count */}
      <div className="mb-4">
        <h4 className="font-semibold text-lg text-white">
          Total Companies: {filteredData.length}
        </h4>
      </div>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {currentData.map((item, index) => (
          <div
            key={index}
            className="w-[400px] h-[200px] rounded-lg shadow-2xl hover:shadow-lg transition-shadow duration-300  bg-white"
          >
            <div className="flex flex-col items-center">
              <h3 className="text-lg bg-[#000957] font-semibold text-white text-center p-1 rounded-md  w-full">
                {item.company}
              </h3>

              <div className="flex items-center gap-4 mb-4">
                <div className="w-24 h-24 flex-shrink-0 border-4">
                  <Image
                    src={logo1} // Use public folder path here
                    alt={item.company}
                    className="w-full h-full object-contain"
                    width={84}
                    height={84}
                  />
                </div>

                <div className="flex flex-col text-left">
                  <div className="flex items-center text-gray-600">
                    <MapPin className="w-4 h-4 mr-1" />
                    <span className="text-sm">{item.address}</span>
                  </div>
                  <div className="flex items-center text-gray-600 mb-1">
                    <MapPin className="w-4 h-4 mr-1" />
                    <span className="text-sm">{item.area}</span>
                  </div>
                </div>
              </div>

              <div className="flex justify-center ">
                <button
                  onClick={() => handleViewDetails(item)}
                  className="px-4 py-2  rounded text-white bg-[#000957] hover:bg-[#000957] transition-colors duration-200"
                >
                  View Details
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="flex justify-center items-center space-x-2 mt-8">
          <button
            onClick={() => setCurrentPage(1)}
            disabled={currentPage === 1}
            className="px-3 py-1 rounded-lg border-4 border-white disabled:opacity-50 hover:bg-[#000957] hover:text-white"
          >
            {"<<"}
          </button>
          <button
            onClick={() => setCurrentPage((prev) => Math.max(1, prev - 1))}
            disabled={currentPage === 1}
            className="px-3 py-1 rounded-lg border-4 border-white disabled:opacity-50 hover:bg-[#000957] hover:text-white"
          >
            {"<"}
          </button>

          {getPageNumbers().map((pageNum) => (
            <button
              key={pageNum}
              onClick={() => setCurrentPage(pageNum)}
              className={`px-3 py-1 rounded-lg border-4 border-white ${
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
            className="px-3 py-1 rounded-lg border-4 border-white disabled:opacity-50 hover:bg-[#000957] hover:text-white"
          >
            {">"}
          </button>
          <button
            onClick={() => setCurrentPage(totalPages)}
            disabled={currentPage === totalPages}
            className="px-3 py-1 rounded-lg border-4 border-white disabled:opacity-50 hover:bg-[#000957] hover:text-white"
          >
            {">>"}
          </button>
        </div>
      )}

      {/* Company Details Dialog */}

      {/* Details Dialog */}
      <CompanyDetailsDialog
        isOpen={isDialogOpen}
        onClose={() => setIsDialogOpen(false)}
        company={selectedItem}
        logo={logo1}
      />
    </div>
  );
};

export default SearchIndustry;

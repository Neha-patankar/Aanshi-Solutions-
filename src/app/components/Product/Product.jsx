"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { Search } from "lucide-react";
import { products } from "./data";

const Product = () => {
  const [isClient, setIsClient] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All Products");

  useEffect(() => {
    setIsClient(true);
  }, []);
  
  const categories = [
    { name: "All Products" },
    { name: "Ayurvedic Oils" },
    { name: "Capsule"},
    { name: "Gel Balm" },
    { name: "Hair Oil" },
    { name: "Herbal"},
    { name: "Syrup" },
  ];
  
  const filteredProducts = products.filter((product) => {
    const matchesSearch = product.englishName
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    const matchesCategory =
      selectedCategory === "All Products" ||
      product.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const handleCategoryClick = (categoryName) => {
    setSelectedCategory(categoryName);
  };

  if (!isClient) {
    return null;
  }

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="flex flex-col md:flex-row">
        {/* Enhanced Sidebar with Button Design */}
        <div className=" md:w-40 bg-white shadow-xl h-screen">
          <div className="p-4">
            <h2 className="text-2xl font-bold mb-6 text-center text-gray-800 border-b pb-2">Categories</h2>

            {/* Category List - Button Style */}
            <div className="flex flex-col space-y-4">
              {categories.map((category) => (
                <button
                  key={category.name}
                  onClick={() => handleCategoryClick(category.name)}
                  className={`py-4 px-4 rounded-lg transition-all duration-300 font-medium text-left flex items-center
                    ${
                      selectedCategory === category.name
                      ? "bg-[#344742] text-white shadow-lg transform scale-105"
                      : "bg-green-100 text-[#344742] hover:bg-green-200 hover:shadow-md"
                    }`}
                >
                  <span className="ml-2">{category.name}</span>
                </button>
              ))}
            </div>
          </div>
        </div>
        
        {/* Main Content */}
        <div className="flex-1 p-4 md:p-6 lg:p-8">
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
          {filteredProducts.length === 0 ? (
            <div className="text-center py-8">
              <p className="text-gray-600 text-lg">
                No products found{" "}
                {searchTerm ? `matching "${searchTerm}"` : "in this category"}
              </p>
            </div>
          ) : (
            /* Product Grid */
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6">
              {filteredProducts.map((product, index) => (
                <div
                  key={index}
                  className="bg-white rounded-lg overflow-hidden shadow-lg hover:scale-105 transform transition-all duration-300"
                >
                  {/* Product Image */}
                  <div className="relative h-48 sm:h-56 w-full">
                    <Image
                      src={product.image}
                      alt={product.englishName}
                      fill
                      className="object-contain p-4"
                      priority={index < 4}
                    />
                  </div>

                  {/* Product Details */}
                  <div className="p-4">
                    <h3 className="text-lg font-bold mb-2">{product.name}</h3>
                    <h3 className="text-md font-bold text-green-700 mb-2">Company: {product.company}</h3>
                    <div className="space-y-1">
                      <p className="text-gray-600">SIZE: {product.size}</p>
                      <p className="text-gray-600">MRP: ₹ {product.mrp}</p>
                      <p className="text-green-700 font-semibold">
                        Offer Price: ₹ {product.offerPrice}
                      </p>
                    </div>
                    <button className="w-full mt-4 bg-[#344742] text-white py-2 rounded-md hover:bg-[#639385] transition-colors">
                      Buy Now
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Product;
"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { Search } from "lucide-react";

const Product = () => {
  const [isClient, setIsClient] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All Products");

  useEffect(() => {
    setIsClient(true);
  }, []);

  const categories = [
    { name: "All Products", image: "/productsPage/product/allproducts.png" },
    { name: "Ayurvedic Oils", image: "/productsPage/product/ayurvedicoils.png" },
    { name: "Capsule", image: "/productsPage/product/capsule.png" },
    { name: "Gel Balm", image: "/productsPage/product/gelbalm.png" },
    { name: "Hair Oil", image: "/productsPage/product/hairoil.png" },
    { name: "Herbal", image: "/productsPage/product/herbal.png" },
    { name: "Syrup", image: "/productsPage/product/syrup.png" },
  ];

  const products = [
    {
      name: "शुगर की फक्की",
      englishName: "Sugar Fakki",
      size: "200 gm",
      mrp: 180,
      offerPrice: 160,
      image: "/productsPage/product/herbal.png",
      category: "Herbal",
    },
    {
      name: "Proti Plus",
      englishName: "Proti Plus",
      size: "400 gm",
      mrp: 600,
      offerPrice: 505,
      image: "/productsPage/product/capsule.png",
      category: "Capsule",
    },
    {
      name: "American Mushroom",
      englishName: "American Mushroom",
      size: "100 gm",
      mrp: 400,
      offerPrice: 350,
      image: "/productsPage/product/herbal.png",
      category: "Herbal",
    },
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
    <div className="min-h-screen bg-[#e0e0ddc8]">
      <div className="flex flex-col md:flex-row">
        {/* Sidebar - Always visible */}
        <div className="w-full md:w-48 lg:w-64 bg-white shadow-lg">
          <div className="p-4">
            <h2 className="text-xl font-bold mb-4 text-gray-800">Categories</h2>

            {/* Category List */}
            <div className="grid grid-cols-3 md:grid-cols-1 gap-3">
              {categories.map((category) => (
                <div
                  key={category.name}
                  onClick={() => handleCategoryClick(category.name)}
                  className={`cursor-pointer transition-all ${
                    selectedCategory === category.name
                      ? "scale-105 shadow-lg"
                      : "hover:scale-105"
                  }`}
                >
                  <div className="relative h-24 md:h-28 lg:h-32 w-full rounded-lg overflow-hidden">
                    <Image
                      src={category.image}
                      alt={category.name}
                      fill
                      className="object-contain p-2"
                    />
                  </div>
                  <p className="text-center mt-2 text-sm">{category.name}</p>
                </div>
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
                    <div className="space-y-1">
                      <p className="text-gray-600">SIZE : {product.size}</p>
                      <p className="text-gray-600">MRP : ₹ {product.mrp}</p>
                      <p className="text-green-700 font-semibold">
                        Offer Price: ₹ {product.offerPrice}
                      </p>
                    </div>
                    <button className="w-full mt-4 bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition-colors">
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
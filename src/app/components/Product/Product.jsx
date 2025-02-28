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
    // Herbal Products
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
      name: "अमेरिकन मशरूम",
      englishName: "American Mushroom",
      size: "100 gm",
      mrp: 400,
      offerPrice: 350,
      image: "/productsPage/product/herbal.png",
      category: "Herbal",
    },
    {
      name: "अश्वगंधा चूर्ण",
      englishName: "Ashwagandha Powder",
      size: "150 gm",
      mrp: 220,
      offerPrice: 199,
      image: "/productsPage/product/herbal.png",
      category: "Herbal",
    },
    {
      name: "शतावरी चूर्ण",
      englishName: "Shatavari Powder",
      size: "100 gm",
      mrp: 190,
      offerPrice: 165,
      image: "/productsPage/product/herbal.png",
      category: "Herbal",
    },
    
    // Capsule Products
    {
      name: "प्रोटी प्लस",
      englishName: "Proti Plus",
      size: "400 gm",
      mrp: 600,
      offerPrice: 505,
      image: "/productsPage/product/capsule.png",
      category: "Capsule",
    },
    {
      name: "अश्वगंधा कैप्सूल",
      englishName: "Ashwagandha Capsules",
      size: "60 capsules",
      mrp: 450,
      offerPrice: 399,
      image: "/productsPage/product/capsule.png",
      category: "Capsule",
    },
    {
      name: "त्रिफला कैप्सूल",
      englishName: "Triphala Capsules",
      size: "60 capsules",
      mrp: 350,
      offerPrice: 299,
      image: "/productsPage/product/capsule.png",
      category: "Capsule",
    },
    {
      name: "तुलसी कैप्सूल",
      englishName: "Tulsi Capsules",
      size: "90 capsules",
      mrp: 375,
      offerPrice: 325,
      image: "/productsPage/product/capsule.png",
      category: "Capsule",
    },
    
    // Ayurvedic Oils
    {
      name: "नारायण तेल",
      englishName: "Narayan Oil",
      size: "100 ml",
      mrp: 290,
      offerPrice: 245,
      image: "/productsPage/product/ayurvedicoils.png",
      category: "Ayurvedic Oils",
    },
    {
      name: "महानारायण तेल",
      englishName: "Mahanarayana Oil",
      size: "200 ml",
      mrp: 410,
      offerPrice: 359,
      image: "/productsPage/product/ayurvedicoils.png",
      category: "Ayurvedic Oils",
    },
    {
      name: "पंचगुण तेल",
      englishName: "Panchagun Oil",
      size: "100 ml",
      mrp: 275,
      offerPrice: 235,
      image: "/productsPage/product/ayurvedicoils.png",
      category: "Ayurvedic Oils",
    },
    {
      name: "अनु तेल",
      englishName: "Anu Oil",
      size: "50 ml",
      mrp: 195,
      offerPrice: 175,
      image: "/productsPage/product/ayurvedicoils.png",
      category: "Ayurvedic Oils",
    },
    
    // Hair Oil
    {
      name: "भृंगराज तेल",
      englishName: "Bhringraj Hair Oil",
      size: "200 ml",
      mrp: 320,
      offerPrice: 275,
      image: "/productsPage/product/hairoil.png",
      category: "Hair Oil",
    },
    {
      name: "अमला हेयर ऑयल",
      englishName: "Amla Hair Oil",
      size: "100 ml",
      mrp: 150,
      offerPrice: 125,
      image: "/productsPage/product/hairoil.png",
      category: "Hair Oil",
    },
    {
      name: "नीम हेयर ऑयल",
      englishName: "Neem Hair Oil",
      size: "100 ml",
      mrp: 180,
      offerPrice: 150,
      image: "/productsPage/product/hairoil.png",
      category: "Hair Oil",
    },
    {
      name: "जटामांसी हेयर ऑयल",
      englishName: "Jatamansi Hair Oil",
      size: "150 ml",
      mrp: 260,
      offerPrice: 230,
      image: "/productsPage/product/hairoil.png",
      category: "Hair Oil",
    },
    
    // Gel Balm
    {
      name: "अर्निका जेल",
      englishName: "Arnica Gel",
      size: "50 g",
      mrp: 175,
      offerPrice: 145,
      image: "/productsPage/product/gelbalm.png",
      category: "Gel Balm",
    },
    {
      name: "पेन रिलीफ बाम",
      englishName: "Pain Relief Balm",
      size: "30 g",
      mrp: 120,
      offerPrice: 99,
      image: "/productsPage/product/gelbalm.png",
      category: "Gel Balm",
    },
    {
      name: "संधिवात जेल",
      englishName: "Arthritis Relief Gel",
      size: "75 g",
      mrp: 220,
      offerPrice: 199,
      image: "/productsPage/product/gelbalm.png",
      category: "Gel Balm",
    },
    {
      name: "कूलिंग मेंथॉल जेल",
      englishName: "Cooling Menthol Gel",
      size: "100 g",
      mrp: 190,
      offerPrice: 170,
      image: "/productsPage/product/gelbalm.png",
      category: "Gel Balm",
    },
    
    // Syrup
    {
      name: "चयवनप्राश",
      englishName: "Chyawanprash",
      size: "500 g",
      mrp: 340,
      offerPrice: 299,
      image: "/productsPage/product/syrup.png",
      category: "Syrup",
    },
    {
      name: "कफ सिरप",
      englishName: "Cough Syrup",
      size: "200 ml",
      mrp: 150,
      offerPrice: 129,
      image: "/productsPage/product/syrup.png",
      category: "Syrup",
    },
    {
      name: "अश्वगंधारिष्ट",
      englishName: "Ashwagandharishta",
      size: "450 ml",
      mrp: 280,
      offerPrice: 245,
      image: "/productsPage/product/syrup.png",
      category: "Syrup",
    },
    {
      name: "गिलोय सत्व सिरप",
      englishName: "Giloy Satva Syrup",
      size: "300 ml",
      mrp: 230,
      offerPrice: 199,
      image: "/productsPage/product/syrup.png",
      category: "Syrup",
    }
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
        {/* Sidebar - Always visible */}
       <div className="w-full md:w-20 lg:w-32 bg-[#344742] shadow-2xl h-screen ">
    <div className="p-4">
    <h2 className="text-xl font-bold mb-4 text-white text-center md:text-left">Categories</h2>

    {/* Category List */}
    <div className="grid grid-cols-3 md:grid-cols-1 gap-3">
      {categories.map((category) => (
        <div
          key={category.name}
          onClick={() => handleCategoryClick(category.name)}
          className={`cursor-pointer transition-all flex flex-col items-center md:items-center ${
            selectedCategory === category.name
              ? "scale-105 shadow-lg bg-blue-50 rounded-lg"
              : "hover:scale-105 hover:bg-gray-50 hover:rounded-lg"
          }`}
        >
          <div className="relative h-12 w-12 sm:h-14 sm:w-14 md:h-16 md:w-16 rounded-lg overflow-hidden">
            <Image
              src={category.image}
              alt={category.name}
              fill
              className="object-contain p-1"
            />
          </div>
          {/* Category name is commented out as per your example */}
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
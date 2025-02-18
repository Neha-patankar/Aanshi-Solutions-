"use client";
import React, { useState, useEffect } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { 
  Pill, 
  Droplets, 
  TabletSmartphone, 
  Syringe, 
  Stethoscope, 
  Leaf, 
  Activity, 
  ShieldPlus, 
  SprayCan, 
  Heart 
} from 'lucide-react';

const categories = [
  {
    name: 'Oils',
    icon: Droplets,
    description: 'Essential oils and medicinal oils for various therapeutic purposes',
    items: ['Essential Oils', 'Massage Oils', 'Aromatherapy'],
    color: 'text-blue-600'
  },
  {
    name: 'Tablets',
    icon: TabletSmartphone,
    description: 'Prescription and over-the-counter medication in tablet form',
    items: ['Pain Relief', 'Antibiotics', 'Supplements'],
    color: 'text-red-600'
  },
  {
    name: 'Syrups',
    icon: Pill,
    description: 'Liquid medication for cough, cold, and other ailments',
    items: ['Cough Syrups', 'Childrens Medicine', 'Digestive Aid'],
    color: 'text-purple-600'
  },
  {
    name: 'Vitamins',
    icon: Heart,
    description: 'Essential vitamins and minerals for daily health maintenance',
    items: ['Multivitamins', 'Vitamin D', 'Vitamin C'],
    color: 'text-orange-600'
  },
  {
    name: 'Herbals',
    icon: Leaf,
    description: 'Natural herbal remedies and traditional medicines',
    items: ['Ayurvedic', 'Chinese Medicine', 'Herbal Tea'],
    color: 'text-green-600'
  },
  {
    name: 'Injections',
    icon: Syringe,
    description: 'Injectable medications and vaccines',
    items: ['Vaccines', 'Insulin', 'Growth Hormones'],
    color: 'text-yellow-600'
  },
  {
    name: 'Medical Equipment',
    icon: Stethoscope,
    description: 'Professional and home medical devices',
    items: ['Blood Pressure Monitor', 'Thermometer', 'Glucose Meter'],
    color: 'text-gray-600'
  },
  {
    name: 'Supplements',
    icon: Activity,
    description: 'Dietary and nutritional supplements',
    items: ['Protein', 'Omega-3', 'Probiotics'],
    color: 'text-pink-600'
  },
  {
    name: 'Personal Care',
    icon: SprayCan,
    description: 'Personal hygiene and healthcare products',
    items: ['Dental Care', 'Skincare', 'Hair Care'],
    color: 'text-indigo-600'
  },
  {
    name: 'First Aid',
    icon: ShieldPlus,
    description: 'Emergency medical supplies and first aid essentials',
    items: ['Bandages', 'Antiseptics', 'Emergency Kit'],
    color: 'text-emerald-600'
  }
];

const Product = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 200,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  if (!isClient) {
    return null;
  }

  return (
    <div className="max-w-screen-xl mx-auto py-10 px-4">
      <Slider {...settings}>
        {categories.map((category, index) => (
          <div key={index} className="px-2">
            <div className="group bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
              <div className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <category.icon className={`w-8 h-8 ${category.color}`} />
                  <h4 className="text-xl font-semibold text-gray-800">
                    {category.name}
                  </h4>
                </div>
                <p className="text-sm text-gray-600 mb-4">
                  {category.description}
                </p>
                <ul className="space-y-2">
                  {category.items.map((item, idx) => (
                    <li key={idx} className="text-sm text-gray-700 flex items-center">
                      <span className="w-1.5 h-1.5 rounded-full bg-gray-400 mr-2"></span>
                      {item}
                    </li>
                  ))}
                </ul>
                <button className="mt-4 w-full py-2 px-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-300">
                  View All
                </button>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Product;
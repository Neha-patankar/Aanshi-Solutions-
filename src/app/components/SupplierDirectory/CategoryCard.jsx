// components/SupplierDirectory/CategoryCard.jsx
import React from 'react';

const CategoryCard = ({ name, image }) => {
  return (
    <div className="bg-white shadow-md rounded-xl overflow-hidden w-60 hover:scale-105 transition">
      <img src={image} alt={name} className="w-full h-40 object-cover" />
      <div className="p-4">
        <h3 className="text-lg font-semibold text-center">{name}</h3>
      </div>
    </div>
  );
};

export default CategoryCard;

// components/SupplierDirectory/SupplierDirectory.jsx
import React from 'react';
import CategoryCard from './CategoryCard';
import { supplierCategories } from './data';

const SupplierDirectory = () => {
  return (
    <div className="py-8 px-4 bg-gray-300">
      <h2 className="text-2xl font-bold mb-6 text-center text-white">Supplier Directory</h2>
      <div className="flex flex-wrap justify-center gap-6">
        {supplierCategories.map((category, index) => (
          <CategoryCard key={index} name={category.name} image={category.image} />
        ))}
      </div>
    </div>
  );
};

export default SupplierDirectory;

import React from 'react';
import {currentData } from '../Members/SearchIndustry/Data'

const CompanyTable = () => {




  return (
    <div className="container">
      <h2 className="text-xl font-bold mb-4">Company Information</h2>
      <table className="table-auto w-full border-collapse border border-gray-300">
        <thead>
          <tr>
            <th className="border px-4 py-2">ID</th>
            <th className="border px-4 py-2">Company</th>
            <th className="border px-4 py-2">Contact</th>
            <th className="border px-4 py-2">Address</th>
            <th className="border px-4 py-2">Product</th>
            <th className="border px-4 py-2">Area</th>
            <th className="border px-4 py-2">License No</th>
            <th className="border px-4 py-2">Valid Upto</th>
            <th className="border px-4 py-2">Logo</th>
          </tr>
        </thead>
        <tbody>
          {currentData.map((company) => (
            <tr key={company.id}>
              <td className="border px-4 py-2">{company.id}</td>
              <td className="border px-4 py-2">{company.company}</td>
              <td className="border px-4 py-2">{company.contact}</td>
              <td className="border px-4 py-2">{company.address}</td>
              <td className="border px-4 py-2">{company.product}</td>
              <td className="border px-4 py-2">{company.area}</td>
              <td className="border px-4 py-2">{company.licenseNo || "N/A"}</td>
              <td className="border px-4 py-2">{company.validUpto || "N/A"}</td>
              <td className="border px-4 py-2">
                <img src={company.imageLogo} alt="Company Logo" className="h-10" />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CompanyTable;

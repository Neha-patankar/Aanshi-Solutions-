"use client";

import React from "react";
import { useRouter } from "next/navigation"; // ✅ Correct hook for Next.js

const sections = [
  "Product",
  "AboutUs",
  "Certifications",
  "Clients",
  "Contact",
  "ManagementTeam",
  "ProductSlider",
  "ServicesSection",
];

const AdminPage = () => {
  const router = useRouter(); // ✅ replaces useNavigate

  const handleAdd = (section) => {
    switch (section) {
      case "AboutUs":
        router.push("/");
        break;
      case "Product":
        router.push("/");
        break;
      case "Certifications":
        router.push("/");
        break;
      case "Clients":
        router.push("/");
        break;
      case "Contact":
        router.push("/");
        break;
      case "ManagementTeam":
        router.push("/");
        break;
      case "ProductSlider":
        router.push("/");
        break;
      case "ServicesSection":
        router.push("/");
        break;
      default:
        break;
    }
  };

  const handleManage = (section) => {
    switch (section) {
      case "AboutUs":
        router.push("/");
        break;
      case "Product":
        router.push("/");
        break;
      case "Certifications":
        router.push("/");
        break;
      case "Clients":
        router.push("/");
        break;
      case "Contact":
        router.push("/admin/contact/manage");
        break;
      case "ManagementTeam":
        router.push("/");
        break;
      case "ProductSlider":
        router.push("/");
        break;
      case "ServicesSection":
        router.push("/");
        break;
      default:
        break;
    }
  };

  return (
    <div className="p-2 bg-gray-100">
      <h1 className="text-xl font-bold mb-4  text-green-900 text-center">Admin Dashboard</h1>

      <div className="max-w-4xl mx-auto space-y-2">
        {sections.map((section) => (
          <div
            key={section}
            className="flex justify-between items-center bg-white p-3 rounded-lg shadow"
          >
            <h2 className="text-xl font-semibold">{section}</h2>

            <div className="space-x-4">
              <button
                onClick={() => handleAdd(section)}
                className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition"
              >
                Add
              </button>
              <button
                onClick={() => handleManage(section)}
                className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
              >
                Manage
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdminPage;

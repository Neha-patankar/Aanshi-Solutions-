// File: /src/app/company/[id]/page.jsx
"use client";
import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import CompanyDetails from '@/app/components/Members/SearchIndustry/CompanyDetails';
import { currentData } from '@/app/components/Members/SearchIndustry/Data';

export default function CompanyPage() {
  const params = useParams();
  const [company, setCompany] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchCompanyData = () => {
      try {
        // Convert both IDs to strings for comparison
        const companyData = currentData.find(item => String(item.id) === String(params.id));
        
        if (companyData) {
          setCompany(companyData);
          setError(false);
        } else {
          setError(true);
        }
      } catch (err) {
        console.error('Error fetching company data:', err);
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    if (params.id) {
      fetchCompanyData();
    }
  }, [params.id]);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-xl font-semibold">Loading....</div>
      </div>
    );
  }

  if (error || !company) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen gap-4">
        <div className="text-2xl font-semibold text-red-600">Company not found</div>
        <a 
          href="/"
          className="px-4 py-2 bg-[#2e8220] text-white rounded-md hover:bg-[#236419] transition-colors"
        >
          Back to Home
        </a>
      </div>
    );
  }

  return <CompanyDetails company={company} />;
}
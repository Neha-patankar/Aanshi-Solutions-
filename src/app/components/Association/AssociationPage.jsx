import React from 'react';
import Link from 'next/link';

const AssociationPage = () => {
  return (
     <div className="relative h-60 bg-[#000957] flex flex-col items-center justify-center text-white ">
           <div className="relative z-10 text-center">
           <h2 className="text-5xl font-bold text-center mb-8 text-white">Our Association Members</h2>
              
              <div className="inline-flex items-center px-4 py-2 space-x-3 bg-white rounded text-lg ">
                <Link href="/" className="text-[#000957] hover:text-[#000957] font-semibold">
                  HOME
                </Link >
                <span className="text-[#000957] font-semibold">&gt;</span>
                <Link href="#" className="text-[#000957] hover:text-[#000957] font-semibold ">
                  Our Association
                </Link >
              </div>
            </div>
          </div>
  );
};

export default AssociationPage;
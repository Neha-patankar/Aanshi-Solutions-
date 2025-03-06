import React from 'react'
import SupplierDirectory from '../components/SupplierDirectory/SupplierDirectory';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';

const page = () => {
  return (
    <div>
      <Navbar/>
      <SupplierDirectory/>
      <Footer/>
    </div>
  )
}
export  default page ;
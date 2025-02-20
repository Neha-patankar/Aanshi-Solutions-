import React from 'react'
import Product from '../components/Product/Product';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';

const page = () => {
  return (
    <div>
         <Navbar/>
         <Product/>
         <Footer/>
    </div>
  )
}
export  default page;
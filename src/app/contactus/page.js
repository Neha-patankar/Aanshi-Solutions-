import React from 'react'
import ContactUs from '../components/ContactUs/ContactUs';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';

 const page = () => {
  return (
    <div>
        <Navbar/>
        <ContactUs/>
        <Footer/>
    </div>
  )
}
export default page;
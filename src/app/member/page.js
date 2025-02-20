import React from 'react'
import Member from '../components/Members/Members/Members';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';

 const page = () => {
  return (
    <div>
    <Navbar/>
    <Member/>
    <Footer/>
    </div>
  )
}
export default page;
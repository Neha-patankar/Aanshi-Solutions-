import React from 'react'

import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';
import ClassifiedSection from '../components/Classified/ClassifiedSection';

const page = () => {
  return (
    <div>
      
       <Navbar/>
       <ClassifiedSection/>
      <Footer/>
    </div>
  )
}
export  default page;
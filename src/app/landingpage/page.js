import React from 'react'
import StatsSection from '../components/Landingpage/StateSection';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';
import SliderScroller from '../components/Landingpage/Slider';


 const Landingpage = () => {
  return (
    <div>
    <Navbar/>
     <SliderScroller/>
    <StatsSection/>
    <Footer/>
    </div>
  )
}
export default Landingpage;
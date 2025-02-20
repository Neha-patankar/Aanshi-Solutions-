import React from 'react'
import StatsSection from '../components/Landingpage/StateSection';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';
import SliderScroller from '../components/Landingpage/Slider';
import VisionMission from '../components/Landingpage/VisionMission';
// import HexagonCard from '../components/Landingpage/One';
import RecentNewsSlider from '../components/Landingpage/RecentNewsSlider';
import RecentActivitiesSlider from '../components/Landingpage/RecentActivitiesSlider';


 const Landingpage = () => {
  return (
    <div>
    <Navbar/>
     <SliderScroller/>
     <VisionMission/>
     <StatsSection />
     {/* <HexagonCard/> */}
    {/* <StatsSection/>
    <RecentActivitiesSlider/>
    <RecentNewsSlider/> */}


      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left Column - Activities Slider */}
        <div className="lg:col-span-1">
          <RecentActivitiesSlider />
        </div>

        {/* Center Column - Stats Section */}
        <div className="lg:col-span-1">
          {/* <StatsSection /> */}
        </div>

        {/* Right Column - News Slider */}
        <div className="lg:col-span-1">
          <RecentNewsSlider />
        </div>
      </div>
    
    
    <Footer/>
    </div>
  )
}
export default Landingpage;
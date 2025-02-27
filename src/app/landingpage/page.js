import React from 'react';
import Navbar from '../components/Navbar/Navbar';
import SliderScroller from '../components/Landingpage/Slider';
import VisionMission from '../components/Landingpage/VisionMission';
import StatsSection from '../components/Landingpage/StateSection';
import RecentActivitiesSlider from '../components/Landingpage/RecentActivitiesSlider';
import RecentNewsSlider from '../components/Landingpage/RecentNewsSlider';
import Footer from '../components/Footer/Footer';

const Landingpage = () => {
  return (
    <div>
      <Navbar />
      <SliderScroller />
      <VisionMission />
      <StatsSection/>
      
      {/* Content Grid Section */}
      <div className='bg-[#344742]  py-10'>
      <div className="container mx-auto py-0 px-4 md:px-6 w-full ">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 ">
          {/* Recent Activities Column */}
          <div className="h-full">
            
            <div className="bg-white rounded-lg shadow-md p-0">
              <RecentActivitiesSlider/>
            </div>
          </div>

          {/* Recent News Column */}
          <div className="h-full">
           
            <div className="bg-white rounded-lg shadow-md p-0 ">
              <RecentNewsSlider />
            </div>
          </div>
        </div>
      </div>
      </div>
      <Footer/>
    </div>
  );
};

export default Landingpage;
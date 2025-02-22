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
      <div className="container  bg-[#e0e0ddc8]">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Recent Activities Column */}
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Recent Activities</h2>
            <div className="rounded-lg shadow-md p-6">
              <RecentActivitiesSlider/>
            </div>
          
          </div>

          {/* Recent News Column */}
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Recent News</h2>
            <div className=" rounded-lg shadow-md p-6">
              <RecentNewsSlider />
            </div>
           
          </div>
        </div>
      </div>

      <Footer/>
    </div>
  );
};

export default Landingpage;
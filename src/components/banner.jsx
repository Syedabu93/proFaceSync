import React from "react";
import "./navbar.css";
import slide from "../assets/face slider.gif";
import { MdOutlineFlipCameraIos } from "react-icons/md";
import { MdOutlinePrivacyTip } from "react-icons/md";
import { IoAnalyticsSharp } from "react-icons/io5";
import img42 from '../assets/image42.png';
import img43 from '../assets/image43.png';
import img44 from '../assets/image44.png';


function Banner() {
  return (
    <div className="" id="back">
      <div className="sm:grid sm:grid-row-1 lg:grid-cols-2 text-center md:text-left font-Int">
        <div className="p-5 sm:p-10 lg:p-24">
          <p className="text-2xl font-bold bg-gradient-to-t from-purple-900 to-rose-700 text-transparent bg-clip-text">
            Moments Matter
          </p>
          <p className="text-[37px] text-slate-700 mt-3 font-bold">
            Face Recognition,
          </p>
          <p className="text-[37px] text-slate-700  font-bold">
           AI Powered Photo Delivery
          </p>
          {/* <p className="text-2xl md:text-5xl font-Int font-bold py-3 bg-gradient-to-t from-purple-900 to-rose-700 text-transparent bg-clip-text ">
            FaceSync...
          </p> */}

          <p className="text-2xl text-slate-900 mt-3  font-normal">
            Click a Selfie and Find their Photos
          </p>

          <div className="grid  sm:grid-cols-3 gap-x-2 md:gap-x-5 mt-3 ">

            <p className="bg-gray-300 p-3 flex items-center rounded-lg justify-center">
              {/* <MdOutlineFlipCameraIos className="text-5xl mr-3" /> */}
              <img src={img42} alt="" className="w-9 mr-2.5"/>
              Face Recognition
            </p>
            <p className="bg-gray-300  p-3 flex items-center rounded-lg mt-2 sm:mt-0 justify-center">
              {/* <MdOutlinePrivacyTip className="text-5xl mr-3" />  */}
              <img src={img44} alt="" className="w-9 mr-2.5"/>
              Privacy &
              Security
            </p>
            <p className="bg-gray-300  p-3 flex items-center rounded-lg mt-2 sm:mt-0 justify-center">
              {/* <IoAnalyticsSharp className="text-5xl mr-3" /> */}
              <img src={img43} alt="" className="w-9 mr-2.5"/>
              Analytics & Insights
            </p>
          </div>

          <button className="text-white font-bold mt-3 text-xl   bg-gradient-to-t from-purple-900 to-rose-700  px-3 py-2 rounded-lg">
            Create Event
          </button>
        </div>
        <div className="py-4 px-14">
          <img src={slide} className="sm:h-[500px]"></img>
        </div>
      </div>
    </div>
  );
}

export default Banner;

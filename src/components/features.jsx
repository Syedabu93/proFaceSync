import React from "react";
import { FaLock } from "react-icons/fa";
import img32 from '../assets/image32.jpeg'
// import banner from "../Navbar/images/b1.jpeg";
import { BsFillPhoneFill } from "react-icons/bs";
import { MdAnalytics } from "react-icons/md";
import { BsFillAirplaneFill } from "react-icons/bs";
import { RiWhatsappFill } from "react-icons/ri";
import { MdEnhancedEncryption } from "react-icons/md";
import { MdOutlineEnhancedEncryption } from "react-icons/md";
import { MdAppRegistration } from "react-icons/md";
import { TbPhotoAi } from "react-icons/tb";
import { IoMdAnalytics } from "react-icons/io";

export const Features = () => {
  return (
    <div>
      <div className="text-center">
        <div className="gap-y-5 mt-20 ">
          <h1 className="text-3xl font-extrabold text-center bg-gradient-to-t from-purple-900 to-rose-700 text-transparent bg-clip-text">Features</h1>
          <p className="text-center mt-5 text-xl">Let's explore FaceSync's capabilities</p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-5 gap-2 mx-auto md:w-11/12">
          <div className="text-left leading-relaxed top:0 mt-20  ml-20  lg:mb-20 mb-1">
            <img src={img32} className="w-3/4 h-2/2 rounded-lg"></img>
            
          </div>

          <div className=" grid grid-cols-1 m-8 lg:grid-cols-2 lg:m-8  md:m-8  gap-10 sm:mt-28 ">
            <div className="  w-auto h-auto shadow-xl rounded-xl px-4 mt-4">
             <div className=" ">
                <p className="flex justify-center"><MdAppRegistration className="text-gray-500 text-3xl"/></p>
              </div>
              <h1 className="font-bold text-gray-600 mt-2">Seamless Guest Registration</h1>
              <p className="text-gray-500 py-3">Detailed explaination and benefits</p>
            </div>
            <div className=" w-auto h-auto   shadow-xl rounded-xl px-4 mt-4">
            <div className=" ">
                <p className="flex justify-center"><TbPhotoAi className="text-gray-500 text-3xl"/></p>
              </div>
              <h1 className="font-bold text-gray-600 mt-2">AI-Powered Photo Matching</h1>
              <p className="text-gray-500 py-3">Showcase the efficiency and accuracy of the AI algorithms.</p>
            </div>
            <div className="relative w-auto h-auto shadow-xl rounded-xl  px-4 mt-4">
              <div className="">
              
              <p className="flex justify-center"> <BsFillPhoneFill className="text-gray-500 text-2xl"/></p>
              </div>
              <h1 className="font-bold text-gray-600 mt-2">
                Automated Personalized Photo Delivery.
              </h1>
              <p className="text-gray-500 py-3">
                Describe the streamlined process and its impact on the user
                experience.
              </p>{" "}
            </div>
           


            <div className=" w-auto h-auto shadow-xl rounded-xl  px-4 mt-4 ">
              <div className=" ">
              <p className="flex justify-center"> <RiWhatsappFill className="text-gray-500 text-2xl"/></p>
              </div>
              <h1 className="font-bold text-gray-600 mt-2">WhatsApp Integration</h1>
              <p className="text-gray-500 py-3">
                Showcase the convenience of sharing moments through WhatsApp.
              </p>
            </div>

            <div className=" w-auto h-auto shadow-xl  rounded-xl px-4 mt-4">
            <div className=" ">
              <p className="flex justify-center"> <IoMdAnalytics className="text-gray-500 text-2xl"/></p>
              </div>
              <h1 className="font-bold text-gray-600 mt-2">Analytics</h1>
              <p className="text-gray-500 py-3">
                Explain how analytics enhance event insights and
                decision-making.
              </p>
            </div>
            
            <div className="relative w-auto h-auto shadow-xl rounded-xl px-4 mt-4">
            <div className=" ">
              <p className="flex justify-center"> <MdEnhancedEncryption className="text-gray-500 text-2xl"/></p>
              </div>
              <h1 className="font-bold text-gray-600 mt-2">Enhanced Privacy and Security</h1>
              <p className="text-gray-500 py-2">
                Highlight measures to ensure the privacy and security of user
                data.
              </p>{" "}
            </div>
          </div>
        </div>
        
        <div className="bg-gradient-to-r from-purple-900 to-rose-700  ">
          <div className="grid grid-cols-1 gap-5 lg:grid-cols-2 rounded-2xl py-10 text-center ">
            <div className="mt-5">
            <h1 className="text-2xl text-white font-extrabold">Moments Matter - Book a FREE Demo Now</h1>

            </div>
            <div className="">
            <button className=" bg-white text-rose-800 font-bold hover:text-white hover:bg-gradient-to-r from-purple-950 to-rose-800 rounded w-2/4  p-5">
                Get Started
              </button>
            </div>
            
           
          </div>
        </div>
      </div>
    </div>
  );
};

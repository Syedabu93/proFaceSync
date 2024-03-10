import React from "react";
import "./navbar.css";
import { PiSparkleLight } from "react-icons/pi";
import { MdOutlineSportsVolleyball } from "react-icons/md";
import { PiStudentBold } from "react-icons/pi";
import { FaSchool } from "react-icons/fa6";
import { LuActivitySquare } from "react-icons/lu";
import { MdOutlineEventSeat } from "react-icons/md";

function Demo() {
  return (
    <div className="mt-20">
       <div>
        <p className="text-4xl font-bold text-center font-pop text-gray-800">
          {" "}
          <span className="text-rose-700">Works</span> for all types of Events.{" "}
        </p>
      </div>

      <div className="grid grid-rows-1 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 lg:grid-rows-2 py-8 px-16 gap-10
       font-Int  text-center">

        <div className=" rounded-xl  py-6 border-rose-700 border-2 border-r-8 border-b-8 " id="bg1">
        <div className="flex justify-center">
          <p className=""> <PiSparkleLight className="text-5xl   bg-gradient-to-t from-purple-900 to-rose-700 text-white rounded-3xl p-2" /></p>
          </div>
          <p className="py-5 text-xl font-medium">Weddings and family events</p>
          <p className="text-md px-10">Mesmerize guests with cherished memories through sharing stunning wedding photos.</p>
        
        </div>

        <div className=" rounded-xl py-6 border-2 border-r-8 border-b-8  border-rose-700" id="bg2">
        <div className="flex justify-center">
         <p className="">  <MdOutlineSportsVolleyball className="text-5xl   bg-gradient-to-t from-purple-900 to-rose-700  text-white rounded-3xl p-2" /></p>
         </div>
          <p className="py-5 text-xl font-medium">Marathons and other sports events</p>
          <p className="text-md px-10 ">Participants get instant access to their photos by clicking a selfie through facesync.</p>
        </div>
        <div className=" rounded-xl py-6 border-2  border-rose-700 border-r-8 border-b-8" id="bg3">
        <div className="flex justify-center">
          <p className=""><PiStudentBold className="text-5xl    bg-gradient-to-t from-purple-900 to-rose-700 text-white rounded-3xl p-2" /></p>
        </div>
          <p className="py-5 text-xl font-medium">Convocations and  college events</p>
          <p className="text-md px-10">Instantly provide and offer convocation photos to students and parents.</p>
        </div>
  
        <div className="rounded-xl py-6 border-2  border-rose-700 border-r-8 border-b-8" id="bg4">
        <div className="flex justify-center">
          <p className=""><FaSchool className="text-5xl bg-gradient-to-t from-purple-900 to-rose-700 text-white rounded-3xl p-2" /></p>
        </div>
          <p className=" py-5 text-xl font-medium">Annual Days and  school events</p>
          <p className="text-md px-10">Swiftly distribute event snapshots to students, faculty, and staff members efficiently.</p>
        </div> 

        <div className=" rounded-xl py-6 border-2  border-rose-700 border-r-8 border-b-8" id="bg5">
        <div className="flex justify-center">
          <p className=""><LuActivitySquare className="text-5xl mt-2  bg-gradient-to-t from-purple-900 to-rose-700 text-white rounded-3xl p-2" /></p>
          </div>
          <p className="py-4 text-xl font-medium">Social Clubs</p>
          <p className="text-md px-10">Let participants get access to their memorable photos through the facesync.</p>
        </div>
        <div className=" rounded-xl py-6 border-r-8 border-b-8 border-2  border-rose-700" id="bg6">
        <div className="flex justify-center">
          <p className=""><MdOutlineEventSeat className="text-5xl mt-2 bg-gradient-to-t from-purple-900 to-rose-700 text-white rounded-3xl p-2" /></p>
          </div>
          <p className="py-5 text-xl font-medium">Corporate Events</p>
          <p className="text-md px-10">Offer instant access to corporate event photos for attendees and clients.</p>
        </div>
      </div>
    </div>
  );
}

export default Demo;

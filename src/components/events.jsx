import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import img5 from "../assets/image5.png";
import img6 from "../assets/image6.png";
import img9 from "../assets/image9.png";
import img10 from "../assets/image10.png";
import img11 from "../assets/image11.png";
import img12 from "../assets/image12.png";
import img13 from "../assets/image13.png";
function Events() {
  return (
    <div className="mt-8">
      <div>
        <p className="text-5xl font-bold text-center font-pop text-gray-800 p-2">
          <span className="text-rose-500">Works</span> for all types of Events.{" "}
        </p>
      </div>

      <div className="grid grid-rows-1 grid-cols-1 lg:grid-cols-2 lg:grid-rows-1 py-8 px-16 gap-10">
        <div className="flex bg-gradient-to-r  from-gray-900 to-gray-700 text-white rounded-lg gap-4 h-auto md:h-52 overflow-hidden ">
          <div className=" px-4 py-10">
            <p className="text-3xl font-semibold">Weddings</p>
            <p className="text-xl mt-2 font-light">
              Delight wedding guests by sharing wedding photos with them
            </p>
             {/* <p className="mt-2 flex"> Read More <FaArrowRightLong className="text-black m-1"/></p> */}
          </div>

          <div className="hidden sm:block">
            <img src={img6} alt="" className="" />
          </div>
        </div>

        <div className="flex bg-gradient-to-r  from-gray-900 to-gray-700 text-white rounded-lg gap-6 h-auto  md:h-52 overflow-hidden">
          <div className="px-4 py-10">
            <p className="text-3xl font-semibold">Sports Events</p>
            <p className="text-xl mt-2 font-light">
              Participants get instant access to their photos by clicking a
              selfie.
            </p>
             {/* <p className="mt-2 flex"> Read More <FaArrowRightLong className="text-black m-1"/></p> */}
          </div>

          <div className="hidden sm:block">
            <img src={img9} alt="" className="" />
          </div>
        </div>
      </div>

      <div className="grid grid-rows-1 grid-cols-1 lg:grid-cols-2 lg:grid-rows-1 py-3 px-16 gap-10">

        <div className="flex  bg-gradient-to-r  from-gray-900 to-gray-700 text-white rounded-lg gap-4 h-auto  md:h-52 overflow-hidden">
          <div className=" px-4 py-6">
            <p className="text-3xl font-semibold">Convocations</p>
            <p className="text-xl mt-2 font-light">
            Share and Sell Convocation photos to Students and Parents instantly
            </p>
             {/* <p className="mt-2 flex"> Read More <FaArrowRightLong className="text-black m-1"/></p> */}
          </div>

          <div className="hidden sm:block">
            <img src={img10} alt="" className="" />
          </div>
        </div>

        <div className="flex bg-gradient-to-r  from-gray-900 to-gray-700 text-white rounded-lg gap-6 h-auto  md:h-52 overflow-hidden">
          <div className="px-4 py-6">
            <p className="text-3xl font-semibold">Schools and Colleges</p>
            <p className="text-xl mt-2 font-light">
            Delight students and parents by sharing school-year photos
            </p>
            {/* <p className="mt-2 flex"> Read More <FaArrowRightLong className="text-black m-1"/></p> */}
          </div>

          <div className="hidden sm:block">
            <img src={img11} alt="" className="" />
          </div>
        </div>
      </div>
       

      <div className="grid grid-rows-1 grid-cols-1 lg:grid-cols-2 lg:grid-rows-1 py-3 px-16 gap-10">

<div className="flex  bg-gradient-to-r from-gray-900 to-gray-700 text-white rounded-lg gap-4 h-auto  md:h-52 overflow-hidden">
  <div className=" px-4 py-6">
    <p className="text-3xl font-semibold">Social Clubs</p>
    <p className="text-xl mt-2 font-light">
    Let participants get access to their memorable photos.
    </p>
     {/* <p className="mt-2 flex"> Read More <FaArrowRightLong className="text-black m-1"/></p> */}
  </div>

  <div className="hidden sm:block">
    <img src={img12} alt="" className="" />
  </div>
</div>

<div className="flex bg-gradient-to-r  from-gray-900 to-gray-700 text-white rounded-lg gap-6 h-auto  md:h-52 overflow-hidden">
  <div className="px-4 py-6">
    <p className="text-3xl font-semibold">Corporate Events</p>
    <p className="text-xl mt-2 font-light">
    From conferences to team retreats, delight your participants.
    </p>
    {/* <p className="mt-2 flex"> Read More <FaArrowRightLong className="text-black m-1"/></p> */}
  </div>

  <div className="hidden sm:block">
    <img src={img13} alt="" className="w-96" />
  </div>
</div>
</div>


    </div>
  );
}

export default Events;

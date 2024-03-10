import React, { useEffect } from "react";
import img14 from "../assets/image14.jpg";
import img16 from "../assets/image16.jpg";
import img27 from "../assets/image27.webp";
import img30 from "../assets/image30.webp";
import img28 from "../assets/image28.png";
import img29 from "../assets/image29.jpg";
import img31 from "../assets/image31.png";
import img33 from "../assets/image33.jpg";
import img34 from "../assets/image34.jpg";
import img36 from "../assets/image36.jpg";
import img35 from "../assets/image35.jpg";
import img37 from "../assets/image37.jpg";

import "./navbar.css";
import { useNavigate } from "react-router-dom";

function About() {
  useEffect(() => {
    window.scrollTo(0, 0);
  });

  return (
    <div>
      <div className="back ">
        <p className="text-3xl md:text-5xl text-white text-center font-Int font-extrabold py-10">
          ABOUT US
        </p>
      </div>
      <div className="text-center p-4">
        <div className=" mt-6 ">
          <p className="text-4xl font-bold text-pink-600 ">
            Welcome To Facesync
          </p>
          <p className="  font-Int font-semibold text-2xl mt-3 py-4">
            Transforming Events through AI-Enabled Photo Distribution!
          </p>
          <p className=" text-lg">
            Face Sync is the epitome of innovation in event photography,
            revolutionizing how event coordinators and photographers manage and
            distribute captivating memories. With the power of AI seamlessly
            integrated into our platform, Face Sync redefines the event
            photography experience.
          </p>
        </div>
      </div>
      {/* vision & mission */}

      <div className="grid lg:grid-cols-3 mt-4  bg-gradient-to-r from-blue-900 to-pink-600 m-8 rounded-3xl">
        <div>
          <img src={img30} className=""></img>
        </div>

        <div className="text-white text-center py-8 px-10 border-2 border-white m-10 rounded-se-[100px] rounded-es-[50px] ">
          <img src={img28} alt="" className="w-20 mx-auto rounded-full" />
          <p className="text-2xl mt-1">MISSION</p>
          <p className="text-xl mt-2">
            To transform events into timeless memories through seamless
            AI-driven photo delivery You know why? Because moments matter…!
          </p>
        </div>

        <div className="text-white text-center py-8 px-10 border-2 border-white m-10 rounded-ss-[50px] rounded-ee-[100px]">
          <img src={img29} alt="" className="w-20 p-1 mx-auto rounded-full" />
          <p className="text-2xl mt-1"> VISION</p>
          <p className="text-xl mt-2">
            Become the global leader in state-of-the-art technology,
            revolutionizing experiences by making every moment matter through
            cutting-edge face recognition.
          </p>
        </div>
      </div>

      {/* key functionalities */}

      <p className="text-center text-3xl font-bold text-pink-600">Key Functionalities</p>
      <div className="grid md:grid-cols-3 md:w-10/12 mx-auto gap-4 font-Int  text-center text-gray-700 mt-6">
        <div
          className="m-2 md:m-0 p-6 rounded-lg hover:bg-gradient-to-r from-blue-900 to-pink-600 hover:text-white"
          id="about"
        >
          <p className="text-xl font-bold">Seamless Guest Registration</p>
          <p className="py-2 ">
            Seamless Guest Registration Guests effortlessly register by scanning
            a dedicated QR Code on the FaceSync portal. Collect essential
            information – names, email addresses, mobile numbers, and
            captivating selfies for a personalized touch.
          </p>
        </div>

        <div
          className="m-2 md:m-0 p-6 rounded-lg hover:bg-gradient-to-t from-blue-900 to-pink-700 hover:text-white"
          id="about"
        >
          <p className="text-xl font-bold">AI-Powered Photo Matching</p>
          <p className="py-2 ">
            FaceSync's advanced AI algorithms intelligently match event photos
            with registered guests. Say goodbye to manual sorting – our system
            ensures precision and accuracy in connecting each photo with the
            right attendee of the event.
          </p>
        </div>

        <div
          className="m-2 md:m-0 p-6 rounded-lg hover:bg-gradient-to-t from-blue-900 to-pink-700 hover:text-white transition-all duration-800"
          id="about"
        >
          <p className="text-xl font-bold">
            Automated Personalized Photo Delivery
          </p>
          <p className="py-2">
            Photographers upload event photos onto the FaceSync portal to
            initiate the AI-powered distribution. Personalized emails are
            automatically sent to guests, delivering their treasured moments
            directly to their inbox.
          </p>
        </div>
      </div>
      <div className="grid lg:grid-cols-2 lg:w-10/12 mx-auto">
        <div className="p-12 text-justify mt-4">
          <p className="text-2xl text-pink-600 font-semibold">
            Welcome to FaceSync
          </p>
          <p className="text-xl py-3 font-semibold">About FaceSync</p>
          <p className="text-lg">
            FaceSync stands at the forefront of event photography, marrying the
            art of capturing moments with the intelligence of AI. This platform
            is more than just a service; it’s a transformative tool that
            empowers event coordinators and photographers to elevate the entire
            event experience.
          </p>
        </div>
        <div className="p-6 ">
          <img src={img31} className="px-"></img>
        </div>
      </div>

      {/* why facesync */}
    
        <p className="text-center text-3xl py-5 font-bold text-pink-600">Why Facesync?</p>

        <div className="grid gap-5 md:grid-rows-3 md:grid-cols-2  lg:grid-rows-2 lg:grid-cols-3 lg:w-10/12 mx-auto ">
          <div class=" h-fit group p-3">
            <div class="relative overflow-hidden rounded-2xl">
              <img
                class="h-60 w-full"
                src={img33}
                alt="import & export"
              />
              <h1 class=" text-center text-xl font-semibold py-3 hover:hidden">
                Efficiency Redefined
              </h1>

              <div class="absolute h-full w-full bg-black/70 flex flex-col pl-3 justify-center -bottom-20 group-hover:bottom-0 opacity-0 group-hover:opacity-100 transition-all duration-500">
                <a
                  href={"/"}
                  class=" text-white text-lg font-medium mb-5 text-center"
                >
                  FaceSync streamlines photo distribution, freeing up time for
                  event organizers and photographers to focus on capturing the
                  essence of each event.
                </a>
              </div>
            </div>
          </div>

          <div class=" h-fit group p-3">
            <div class="relative overflow-hidden rounded-2xl ">
              <img class="h-60 w-full" src={img34} alt="import & export" />
              <h1 class=" text-center text-xl font-semibold py-3 hover:hidden">
                Personalized Connection
              </h1>

              <div class="absolute h-full w-full bg-black/70 flex flex-col pl-3 justify-center -bottom-20 group-hover:bottom-0 opacity-0 group-hover:opacity-100 transition-all duration-500">
                <a
                  href={"/"}
                  class=" text-white text-lg font-medium mb-5 text-center"
                >
                  FaceSync transforms moments into memories, ensuring each
                  encounter is uniquely yours with personalized registration
                  every photo delivery.
                </a>
              </div>
            </div>
          </div>

          <div class=" h-fit group p-3">
            <div class="relative overflow-hidden rounded-2xl">
              <img class="h-60 w-full " src={img36} alt="" />
              <h1 class=" text-center text-xl font-semibold py-3 hover:hidden">
                Streamlined Workflow
              </h1>

              <div class="absolute h-full w-full bg-black/70 flex flex-col pl-3 justify-center  group-hover:bottom-0 opacity-0 group-hover:opacity-100 transition-all duration-500">
                <a
                  href={"/"}
                  class=" text-white text-lg font-medium mb-5 text-center"
                >
                  Let FaceSync handle the intricacies of photo distribution,
                  allowing you to concentrate on creating memorable events.
                </a>
              </div>
            </div>
          </div>
        

        {/* <div className="grid lg:grid-cols-3 lg:wd:10/12 mx-auto gap-8 mt-6"> */}
          {/* <div></div> */}
          <div class=" h-fit group p-3 ">
            <div class="relative overflow-hidden rounded-2xl">
              <img class="h-60 w-full " src={img35} alt="" />
              <h1 class=" text-center text-xl font-semibold py-3 ">
                Accuracy at its Core
              </h1>

              <div class="absolute h-full w-full bg-black/70 flex flex-col pl-3 justify-center -bottom-20 group-hover:bottom-0 opacity-0 group-hover:opacity-100 transition-all duration-500">
                <a
                    href={"/"}
                  class=" text-white text-lg font-medium mb-5 text-center"
                >
                  Our AI algorithms ensure that every photo finds its perfect
                  match, offering unparalleled precision in event photo
                  management.
                </a>
              </div>
            </div>
          </div>

          <div class=" h-fit group p-3">
            <div class="relative overflow-hidden rounded-2xl">
              <img class="h-60 w-full " src={img37} alt="" />
              <h1 class=" text-center text-xl font-semibold py-3 hover:hidden">
                Lasting Impressions
              </h1>

              <div class="absolute h-full w-full bg-black/70 flex flex-col pl-3 justify-center -bottom-20 group-hover:bottom-0 opacity-0 group-hover:opacity-100 transition-all duration-500">
                <a
                  href={"/"}
                  class=" text-white text-lg font-medium mb-5 text-center"
                >
                  Deliver cherished memories straight to your guests' inboxes,
                  creating a lasting impact and leaving them with positive event
                  memories.
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-purple-900 to-rose-700 mt-4 ">
          <div className="grid grid-cols-1 gap-5 lg:grid-cols-2 rounded-2xl py-8 text-center ">
            <div className="mt-3  md:ml-10">
            <h1 className="text-3xl text-white font-extrabold ">FaceSync Treasures your moments</h1>

            </div>
            <div className="">
            <button className=" bg-white text-rose-800 font-bold hover:text-white hover:bg-gradient-to-r from-purple-950 to-rose-800 rounded   p-5">
                Book Your Free Demo
              </button>
            </div>
            </div>
            </div>

      </div>
  );
}

export default About;

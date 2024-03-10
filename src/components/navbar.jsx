import React from "react";
import "./navbar.css";
import { useState } from "react";
import Modal from "react-modal";
import face from '../assets/facesync1.png';
import { Link } from "react-router-dom";
import { MdCancel } from "react-icons/md";

function Navbar() {
  const [open, setOpen] = useState(false);
  const menuClicked = () => {
    // console.log("menuClicked");
    setOpen(!open);
  };

  const [ModalOpen, setModalOpen] = useState(false);

  const handleClick = () => {
    setModalOpen(!ModalOpen);
  };
   
  const ulClick = () => {
    setOpen(false);
  };

  return (
    <div className="">
      <nav className="lg:flex justify-between md:w-11/12 mx-auto  border-b-4 font-Int " id="nav">
        <div className="flex justify-between">
          {/* <h1 className="font-cursive font- text-4xl font-bold bg-gradient-to-r from-purple-900 to-rose-700 text-transparent bg-clip-text">
            FACESYNC
          </h1> */}
          <div>
            <img src={face} className="w-36 ml-8"></img>
          </div>
          <div className=" lg:hidden mt-6 mr-4">
            <button onClick={menuClicked} className=" text-purple-900 ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-8 h-8  "
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
            </button>
          </div>
        </div>
        {/* <div className="flex gap-x-16  "> */}
        <div
          className={` flex  lg:block justify-end ${open ? "block" : "hidden"}`}
        >
          <ul  onClick={ulClick} className="lg:flex gap-x-8 text-lg font-bold py-3 bg-gradient-to-t from-purple-900 to-rose-700 text-transparent bg-clip-text">
           
            <li className=" hover:bg-pink-700 hover:text-white rounded-lg px-2 mt-2 py-1"><Link to='/'>Home</Link></li>
            <li className=" hover:bg-pink-700 hover:text-white rounded-lg px-2 mt-2 py-1" ><Link to='/Features'>Features</Link></li>
            <li className=" hover:bg-pink-700 hover:text-white rounded-lg px-2 mt-2 py-1"><Link to='Works'>How it works?</Link> </li>
            <li className=" hover:bg-pink-700 hover:text-white rounded-lg px-2 mt-2 py-1"> <Link to='blog'>Blog</Link></li>
            <li className=" hover:bg-pink-700 hover:text-white rounded-lg px-2 mt-2 py-1"> <Link to='/Contact'>Contact us</Link></li>
        
            <button
              onClick={handleClick}
              className="bg-gradient-to-r from-purple-900 to-rose-700 py-2 px-4 text-white rounded-lg text-2xl"
            >
              Demo
            </button>
            <Modal
              isOpen={ModalOpen}
              onRequestClose={handleClick}
              className="w-96 mx-auto  p-10  bg-rose-500 rounded-xl"
              overlayClassName="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center"
            >
            {/* <div className="max-w-md mx-auto rounded p-6 shadow-md"> */}

               <form action="#" method="post">
                <div className="flex justify-end mb-4">
                <p className="text-3xl text-white "  onClick={handleClick}><MdCancel /></p>
                </div>
                <div className="mb-4">
                  {/* <label
                    htmlFor="name"
                    className="block text-white text-lg font-bold mb-2 "
                  >
                    Name
                  </label> */}
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="w-full border p-2 rounded focus:outline-none focus:border-rose-500 font-bold mt-3"
                    placeholder="Enter Your Name"
                  ></input>
                </div>


                <div className="mb-4">
                  {/* <label
                    htmlFor="Phone"
                    className="block text-white text-lg font-bold mb-2"
                  >
                    Phone Number
                  </label> */}
                  <input
                    type="number"
                    id="phone"
                    name="phone"
                    className="w-full border p-2 rounded focus:outline-none focus:border-rose-500 font-bold mt-3"
                    placeholder="Enter Phone Number"
                  ></input>
                </div>

                <div className="mb-4">
                  {/* <label
                    htmlFor="email"
                    className="block text-white text-lg font-bold mb-2"
                  >
                    Email
                  </label> */}
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Enter Email Address"
                    className="w-full border p-2 rounded focus:outline-none focus:border-rose-500 font-bold mt-3"
                  ></input>
                </div>

               
                  
                <div className="mb-4">
            {/* <label
              htmlFor="country"
              className="block text-white text-lg font-bold mb-2"
            >
              Services
            </label> */}
            <select
              id="country"
              name="country"
              // value={selectedCountry}
              // onChange={handleCountryChange}
              className="w-full border p-2 text-black font-bold text-opacity-70 rounded focus:outline-none focus:border-rose-500 mt-3"
            >
              <option value="">Select a Event</option>
              <option value="">Photograpy</option>
              <option value="">Videography</option>
              <option value=""></option>
            </select>
          </div>
             <div className="flex justify-center mt-6">
                <button
                  type="submit"
                  className="justify-center text-rose-700 bg-white px-4 py-1 font-bold rounded  hover:bg-rose-500 hover:text-white "
                >
                  Submit
                </button>
                </div>
                {/* <button
          onClick={handleClick}
          className="mt-4 text-rose-700 bg-white font-bold px-6 py-1 ml-3 rounded hover:bg-rose-500 hover:text-white"
        >
          Close
        </button> */}
              </form>
             
      </Modal>
      </ul>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;

import React, { useState } from "react";
import { IoLocationSharp } from "react-icons/io5";
import { IoMdMail } from "react-icons/io";
import { BsFillPhoneFill } from "react-icons/bs";
import { IoIosPhonePortrait } from "react-icons/io";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your form submission logic here
    console.log("Form submitted:", formData);
  };

  return (
    <div>
    <section className="p-5" id="contact">
      <h2 className="text-center  mt-5 mb- font-bold text-2xl bg-gradient-to-t from-purple-900 to-rose-700 text-transparent bg-clip-text">Contact Us</h2>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5  ">
        <div className="md:w-8/12 mx-auto text-black grid grid-cols-1 rounded-xl lg:grid-cols-1  gap-10 bg-transparent bg-opacity-100  shadow-2xl mt-12 mb-8">
          <form
            onSubmit={handleSubmit}
            className=" m-8 flex flex-col lg:flex-col "
          >
            {/* Name */}
            <div className="mb-6">
              <label
                for="name"
                className="text-left block mb-2 text-md font-medium"
              >
                Name
              </label>
              <input
                type="name"
                id="name"
                className="w-full bg-gray-50 border border-pink-500 focus:border-none text-gray-900 text-sm rounded-lg   block  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white "
                placeholder="facesync"
                onChange={handleInputChange}
                value={formData.name}
                required
              />
            </div>

            {/* Mobile Number */}
            <div className="mb-6">
              <label
                for="email"
                className="text-left block mb-2 text-md font-medium"
              >
                Mobile Number
              </label>
              <input
                type="phone"
                id="phone"
                className="bg-gray-50 border border-pink-500 text-gray-900 text-sm rounded-lg focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white "
                placeholder="123-45-678"
                pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
                onChange={handleInputChange}
                value={formData.phone}
                required
              />
            </div>

            <div className="mb-6">
              <label
                for="email"
                className="text-left block mb-2 text-md font-medium"
              >
                Email address
              </label>
              <input
                type="email"
                id="email"
                className="bg-gray-50 border border-pink-500 text-gray-900 text-sm rounded-lg   block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="john.doe@company.com"
                required
                onChange={handleInputChange}
                value={formData.email}
              />
            </div>

            <button
              type="submit"
              className="mt-5 text-white bg-pink-600  focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm sm:w-auto px-5 py-2.5 text-center"
            >
              Submit
            </button>
          </form>
          {/* Google Map - You can embed it as you did in the original HTML */}
        </div>


        <div className="add  mt-16 grid grid-cols-1 gap-y-5 lg:gap-y-2 mx-5 px-6 py-3 mb-10">
          <div className="text-left font-bold text-2xl font-int">
            <h1> Join Us For Seamless Event Memories</h1>
          </div>
          <div className="text-xl text-left">
            <p>Let’s make your event one to remember!</p>
          </div>
          <div className="text-left lg:text-left grid-rows-3">
            <div className="flex">
           <span><IoLocationSharp className="text-2xl"/></span> 
              <p className="mx-2">Address </p>
              </div>
              <p className="">
                3rd Floor, New No. 75, 77 & 79, Lohmanradhri Towers, Egmore,
                Chennai, Tamil Nadu 600008
              </p>
           </div>
           <div className="">
            <div className="flex">
           <span><IoMdMail className="text-2xl"/></span> 
              <p className="text-left mx-2">Mail </p>
              </div>
              <p className="text-left">
                info@facesync.app
              </p>
           </div>
           <div className="">
            <div className="flex">
           <span><BsFillPhoneFill className="text-2xl"/></span> 
              <p className="text-left mx-2">Call Us </p>
              </div>
              <p className="text-left">
                +91 82700 99990
              </p>
           </div>
        </div>
      </div>
      </section>
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
};

export default Contact;

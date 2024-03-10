import React from 'react';
import "./navbar.css";

function Matrices() {
  return (
    <div className=''>
      <div className='back  mx-2 mt-4 grid grid-rows-2  md:grid-rows-1 md:grid-cols-4  text-white w-auto  md:w-11/12   rounded-2xl md:mx-auto'>
        {/* <div></div> */}
        <div className='p-3 border-b-2 border-b-white sm:border-b-0 md:py-6 md:px-6 md:border-r-2  border-r-white  m-1'>
            <p className='text-center  text-lg  lg:text-5xl font-bold'>99.1%</p>
            <p className='text-center text-xl lg:text-xl font-bold'>Accuracy</p>
        </div>
        <div  className='p-3 border-b-2 border-b-white sm:border-b-0 md:py-6  md:px-6 md:border-r-2 border-r-white m-1'>
            <p className='text-center  text-lg  lg:text-5xl font-bold'>50+</p>
            <p className='text-center text-xl  lg:text-xl font-bold'>Agencies</p>
        </div>
        <div  className='p-3 border-b-2 border-b-white sm:border-b-0 md:py-6 md:px-6 md:border-r-2  border-r-white m-1'>
            <p className='text-center  text-lg lg:text-5xl font-bold'>100+</p>
            <p className='text-center  text-xl lg:text-xl font-bold'>Photograpers</p>
        </div>
        <div  className='p-3 border-b-2 border-b-white sm:border-b-0 md:py-6 md:px-6'>
            <p className='text-center text-lg lg:text-5xl font-bold my-1'>20k+</p>
            <p className='text-center text-xl lg:text-xl font-bold tracking-widest'>Users</p>
        </div>
        {/* <div></div> */}

      </div>
    </div>
  )
}

export default Matrices;

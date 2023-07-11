import React from "react";
import Logo from "../assets/Logo.png";

const Navbar = () => {
  return (
    <>
      <div className='hidden xl:px-14 lg:px-10 py-6 w-full bg-[#FFFFFF] shadow-2xl font-inter md:flex items-center justify-between fixed top-0 left-0 right-0 z-10'>
        {/* Logo Div */}
        <div className='flex items-center xl:gap-20 lg:gap-5'>
          <div className='logo w-28'>
            <img src={Logo} className='w-full' />
          </div>
          {/* A items */}

          <ul className='flex items-center xl:gap-20 lg:gap-10'>
            <li className='text-xl font-semibold font-inter cursor-pointer'>
              Filter
            </li>
            <li className='text-xl font-semibold font-inter cursor-pointer'>
              About Us
            </li>
            <li className='text-xl font-semibold font-inter cursor-pointer'>
              Blog
            </li>
            <button className='py-1 px-4 bg-[bg-[#FFFFFF] rounded-xl text-xl font-semibold font-inter outline-none border-2 border-[#047E70]'>
              Earning Calculator
            </button>
          </ul>
        </div>
        {/* Buttons */}
        <div className='flex items-center gap-5'>
          <button className='px-5 py-1 rounded-full outline-none border-2 border-[#000000] bg-[#FFFFFF] text-xl'>
            Login
          </button>
          <button className='px-5 py-1 rounded-full outline-none border-none bg-[#047E70] text-[#FFFFFF] text-xl'>
            Sign Up
          </button>
        </div>
      </div>
    </>
  );
};

export default Navbar;

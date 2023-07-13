import React from "react";
import Logo from "../assets/Logo.png";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

const Navbar = () => {
  return (
    <>
      <div className='hidden px-3.5 xl:px-28 lg:px-10 py-6 w-full bg-[#FFFFFF] shadow-2xl font-inter md:flex items-center justify-between sticky top-0 left-0 right-0 z-10'>
        {/* Logo Div */}
        <div className='flex items-center xl:gap-20 lg:gap-5 md:gap-5'>
          <div className='logo w-28'>
            <img src={Logo} className='w-full' />
          </div>
          {/* A items */}
          <ul className='flex items-center md:gap-5 xl:gap-20 lg:gap-10'>
            <li className='md:text-base lg:text-xl font-semibold font-inter cursor-pointer'>
              Filter
              <ArrowDropDownIcon className='pl-1' fontSize='large' />
            </li>
            <li className='md:text-base lg:text-xl font-semibold font-inter cursor-pointer'>
              About Us
            </li>
            <li className='md:text-base lg:text-xl font-semibold font-inter cursor-pointer'>
              Blog
            </li>
            <button className='py-1 px-4 bg-[bg-[#FFFFFF] rounded-xl md:text-base lg:text-xl font-semibold font-inter outline-none border-2 border-[#047E70]'>
              Earning Calculator
            </button>
          </ul>
        </div>
        {/* Buttons */}
        <div className='flex items-center gap-5'>
          <button className='px-5 py-1 rounded-full outline-none border-2 border-[#000000] bg-[#FFFFFF] md:text-base lg:text-xl'>
            Login
          </button>
          <button className='px-5 py-1 rounded-full outline-none border-none bg-[#047E70] text-[#FFFFFF] md:text-base lg:text-xl'>
            Sign Up
          </button>
        </div>
      </div>
    </>
  );
};

export default Navbar;

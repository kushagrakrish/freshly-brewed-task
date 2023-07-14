import React from "react";
import { useNavigate } from "react-router-dom";
import BannerImg from "../assets/banner.png";
import Rocket from "../assets/rocket.png";

const Banner = () => {
  const navigate = useNavigate();
  const handleClick = (e) => {
    e.preventDefault();
    navigate("/login");
  };
  return (
    <>
      <div className='px-6  flex flex-col lg:flex-row-reverse items-center justify-center w-full overflow-hidden bg-gradient-to-t from-[#7BE2C3] to-[#C0E3FC]'>
        {/* Main image */}
        <div className='w-[300px] md:w-[400px] lg:w-[600px]'>
          <img src={BannerImg} alt='' className='w-full' />
        </div>
        {/* Content Div */}
        <div className='flex flex-col items-center justify-center w-full'>
          <img src={Rocket} alt='' className='w-24 mb-8' />
          <h1 className='text-center text-4xl lg:text-5xl  font-semibold text-[#000000] font-inter mb-7 break-words'>
            Grow Faster Together
          </h1>
          <h2 className='text-center text-2xl lg:text-3xl font-semibold text-[#000000] font-inter leading-normal'>
            Find a mentor or Lead the path for someone <br />
            It’s a win win!
          </h2>
          <div className='flex flex-wrap justify-center items-center gap-10 mt-7 lg:mt-16 mb-10'>
            <button className='xl:px-16 px-10 py-2 md:py-4  xl:py-6 rounded-2xl bg-[#358279] text-[#FFFF] font-inter font-semibold xl:text-2xl box text-lg outline-none border-none'>
              Find a Mentor
            </button>
            <button
              onClick={handleClick}
              className='xl:px-16 xl:py-6 px-10 md:py-4 py-2 rounded-2xl bg-[#358279] text-[#FFFF] font-inter font-semibold xl:text-2xl box text-lg outline-none border-none'
            >
              Become Mentor
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;

import React from "react";
import BannerImg from "../assets/banner.png";
import Rocket from "../assets/rocket.png";

const Banner = () => {
  return (
    <>
      <div className='px-6 h-screen flex flex-col lg:flex-row-reverse items-center justify-start w-full banner-bg pt-20 overflow-hidden bg-gradient-to-t from-[#7BE2C3] to-[#C0E3FC]'>
        {/* Main image */}
        <div className='max-w-lg'>
          <img src={BannerImg} alt='' className='w-full' />
        </div>
        {/* Content Div */}
        <div className='flex flex-col items-center justify-center w-full'>
          <img src={Rocket} alt='' className='w-24 mb-8' />
          <h1 className='text-center text-5xl xl:text-6xl font-semibold text-[#000000] font-inter mb-7 break-words'>
            Grow Faster Together
          </h1>
          <h2 className='text-center text-[28px] xl:text-4xl font-semibold text-[#000000] font-inter leading-normal'>
            Find a mentor or Lead the path for someone <br />
            It’s a win win!
          </h2>
          <div className='flex items-center gap-10 mt-7 lg:mt-16'>
            <button className='xl:px-16 px-10 py-4 xl:py-6 rounded-2xl bg-[#358279] text-[#FFFF] font-inter font-semibold xl:text-2xl box text-xl outline-none border-none'>
              Find a Mentor
            </button>
            <button className='xl:px-16 xl:py-6 px-10 py-4 rounded-2xl bg-[#358279] text-[#FFFF] font-inter font-semibold xl:text-2xl box text-xl outline-none border-none'>
              Become Mentor
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;

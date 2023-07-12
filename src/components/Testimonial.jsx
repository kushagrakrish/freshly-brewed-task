import React from "react";
import union from "../assets/Union (1).png";
import avatar from "../assets/avatar1.png";

const Testimonial = () => {
  return (
    <div className='px-5 py-16'>
      <h1 className='text-center font-semibold font-inter text-4xl text-black '>
        What our clients says about us?
      </h1>
      <div className='flex flex-col lg:flex-row items-center justify-between my-14 gap-10'>
        <div>
          <div className='relative'>
            <img src={union} alt='Image' className='w-full' />
            <div className='text-white absolute top-20 text-left px-2 lg:top-10  text-[10px] md:text-base min-[375px]:text-xs min-[425px]:text-sm'>
              <span className='text-left'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </span>
              <img
                src={avatar}
                className='right-0 absolute w-1/3 top-36 lg:top-20'
              />
              <p className='float-right font-semibold font-inter mr-24 text-[#FFFFFF] text-base'>
                Alisa
              </p>
            </div>
            <h1 className='text-xl font-inter text-[#3D7196] font-semibold w-full text-center pr-5 pt-5'>
              Founder,XOXO
            </h1>
          </div>
        </div>
        <div>
          <div className='relative'>
            <img src={union} alt='Image' className='w-full' />
            <div className='text-white absolute top-20 text-cletext-left px-2 lg:top-10  text-[10px] md:text-base min-[375px]:text-xs min-[425px]:text-sm'>
              <span>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </span>
              <img
                src={avatar}
                className='right-0 absolute w-1/3 top-36 lg:top-20'
              />
              <p className='float-right font-semibold font-inter mr-24 text-[#FFFFFF] text-base'>
                Alisa
              </p>
            </div>
            <h1 className='text-xl font-inter text-[#3D7196] font-semibold w-full text-center pr-5 pt-5'>
              Founder,XOXO
            </h1>
          </div>
        </div>
        <div>
          <div className='relative'>
            <img src={union} alt='Image' className='w-full' />
            <div className='text-white absolute top-20 text-cletext-left px-2 lg:top-10  text-[10px] md:text-base min-[375px]:text-xs min-[425px]:text-sm'>
              <span>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </span>
              <img
                src={avatar}
                className='right-0 absolute w-1/3 top-36 lg:top-20'
              />
              <p className='float-right font-semibold font-inter mr-24 text-[#FFFFFF] text-base'>
                Alisa
              </p>
            </div>
            <h1 className='text-xl font-inter text-[#3D7196] font-semibold w-full text-center pr-5 pt-5'>
              Founder,XOXO
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;

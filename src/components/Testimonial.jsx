import React from "react";
import union from "../assets/cloud.png";
import { testimonial } from "../constants/data";

const Testimonial = () => {
  return (
    <div className='px-5 py-16'>
      <h1 className='text-center font-semibold font-inter text-4xl text-black '>
        What our clients says about us?
      </h1>
      <div className='flex flex-col lg:flex-row items-center justify-between my-14 gap-10 2xl:justify-around'>
        {testimonial?.map((item, idx) => (
          <>
            <div key={idx}>
              <div className='relative'>
                <img src={union} alt='Image relative' />
                <span className='text-base text-left font-medium bottom-16 absolute lg:bottom-12 md:bottom-20 md:text-base lg:text-sm text-white px-8 xl:text-base xl:bottom-20'>
                  {item.desc}
                </span>
                <img
                  src={item.avatar}
                  className='right-0 absolute w-1/3 min-[425px]:top-52 md:top-52 lg:top-[185px] xl:top-56 '
                />
                <p className='float-right text-[22px] font-semibold bottom-5 right-40 font-inter absolute lg:bottom-2 xl:top-64 xl:right-36 lg:right-[105px] text-white md:right-36 md:bottom-8'>
                  {item.name}
                </p>
              </div>
              <h1 className='text-xl font-inter text-[#3D7196] font-semibold w-full text-center pr-14 pt-5'>
                {item.company}
              </h1>
            </div>
          </>
        ))}
      </div>
    </div>
  );
};

export default Testimonial;

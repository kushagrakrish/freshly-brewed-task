import React from "react";
import { images, services } from "../constants/data";

const Expertise = () => {
  return (
    <>
      <div className='px-5 py-16 bg-[#C0E3FC] overflow-x-hidden'>
        <h1 className='text-center font-semibold font-inter text-4xl text-[#000000] '>
          Find the expertises from
        </h1>
        <div className='flex flex-wrap lg:flex-nowrap items-center gap-20 w-full justify-center my-14'>
          {images?.map((image, idx) => (
            <img src={image} key={idx} className='w-[250px] xl:w-[350px]' />
          ))}
        </div>
        <h1 className='text-center font-semibold font-inter text-4xl text-[#000000] mb-14'>
          Make your career growth in
        </h1>
        <div>
          <div className='flex flex-wrap  lg:flex-nowrap items-center gap-10'>
            {services?.map((service, idx) => (
              <div className='relative mx-auto' key={idx}>
                <img src={service.img} alt='' className='w-full' />
                <h1
                  style={{ textShadow: "2px 2px 4px black" }}
                  className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-[#FFFFFF] text-2xl font-bold outline-2 outline-black '
                >
                  {service.title}
                </h1>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Expertise;

import React from "react";
import union from "../assets/cloud.png";
import { testimonial } from "../constants/data";
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
const Testimonial = () => {
  return (
    <div className='px-5 py-16 relative'>
      <h1 className='text-center font-semibold font-inter text-4xl text-[#000000] '>
        What our clients says about us?
      </h1>
      <NavigateBeforeIcon
        fontSize='large'
        className='absolute left-0 top-1/2'
      />
      <NavigateNextIcon fontSize='large' className='absolute right-0 top-1/2' />
      <div className='flex flex-col lg:flex-row items-center justify-between my-14 gap-10 2xl:justify-around xl:px-6'>
        {testimonial?.map((item, idx) => (
          <>
            <div key={idx}>
              <div className='relative'>
                <img src={union} alt='Image relative' />
                <span className='text-sm text-left font-medium bottom-6 absolute lg:bottom-12 md:bottom-20 md:text-base lg:text-sm text-[#FFFFFF] px-8 xl:text-base xl:bottom-20 min-[375px]:bottom-20  min-[425px]:text-base'>
                  {item.desc}
                </span>
                <img
                  src={item.avatar}
                  className='right-0 absolute w-1/3 top-40 min-[375px]:top-48 min-[425px]:top-52 md:top-52 lg:top-[185px] xl:top-56 '
                />
                <p className='float-right text-[22px] font-semibold bottom-0 right-24 min-[375px]:right-32 font-inter absolute lg:bottom-2 xl:top-64 xl:right-36 lg:right-[105px] text-[#FFFFFF] md:right-36 md:bottom-8'>
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

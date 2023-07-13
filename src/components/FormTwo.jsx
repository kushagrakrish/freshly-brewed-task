import LinkedInIcon from "@mui/icons-material/LinkedIn";
import React from "react";
import from2 from "../assets/formtwo.png";
import { serviceTypeOptions } from "../constants/data";
import CustomSelect from "./CustomSelectInput";
import ProfileUploader from "./ProfileUploader";

const FormTwo = ({ handleNext }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    handleNext();
  };
  return (
    <>
      <div className='flex items-center justify-between mx-auto w-full px-6'>
        <div className='flex flex-col items-center justify-center gap-3'>
          <button className='flex px-4 items-start gap-2 py-2 font-inter font-semibold outline-none  border-2 border-[#047E70] text-base '>
            Fetch it from
            <LinkedInIcon />
          </button>
          or
          <ProfileUploader />
        </div>
        <div className='flex items-start justify-start'>
          <img src={from2} alt='' className='w-[350px] ' />
        </div>
      </div>
      <div className='flex flex-col lg:flex-row w-full items-center justify-between overflow-y-hidden'>
        <form className='w-full lg:w-1/2'>
          <div class='mb-6'>
            <label
              for='name'
              class='block mb-2 text-sm font-semibold font-inter text-gray-900 dark:text-[#FFFFFF]'
            >
              Job Title
            </label>
            <CustomSelect options={serviceTypeOptions} />
          </div>
          <div class='mb-6'>
            <label
              for='name'
              class='block mb-2 text-sm font-semibold font-inter text-gray-900 dark:text-[#FFFFFF]'
            >
              Company
            </label>
            <CustomSelect options={serviceTypeOptions} />
          </div>
          <div className=' mb-6'>
            <label
              for='name'
              class='block mb-2 text-sm font-semibold font-inter text-gray-900 dark:text-[#FFFFFF]'
            >
              Experience
            </label>
            <div className='flex items-center gap-5'>
              <CustomSelect options={serviceTypeOptions} />

              <CustomSelect options={serviceTypeOptions} />
            </div>
          </div>
          <div className="mb-6'">
            <label
              for='name'
              class='block mb-2 text-sm font-semibold font-inter text-gray-900 dark:text-[#FFFFFF]'
            >
              Bio
            </label>
            <textarea
              id='description'
              placeholder='Write briefly about you '
              className='w-full px-3 py-2 border rounded-lg focus:outline-none focus:outline focus:border-1 focus:border-[#1296B0]'
            />
          </div>
          <button
            type='submit'
            className='px-8 py-1 rounded-full outline-none border-none  bg-gradient-to-b from-[#27EDD5] to-[#047E70] text-[#FFFFFF] text-xl float-right mt-5'
            onClick={handleSubmit}
          >
            Next
          </button>
        </form>
      </div>
    </>
  );
};

export default FormTwo;

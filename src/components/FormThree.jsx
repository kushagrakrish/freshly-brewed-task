import React from "react";
import from3 from "../assets/form3.png";
import { serviceTypeOptions } from "../constants/data";
import CustomSelect from "./CustomSelectInput";
import AddIcon from "@mui/icons-material/Add";

const FormThree = ({ handleNext, handleReset }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    handleNext();
    handleReset();
  };
  return (
    <>
      <div className='flex items-center justify-between w-full flex-col lg:flex-row lg:gap-10 xl:gap-0 md:items-start'>
        <div className='w-full xl:w-2/5'>
          <form className='w-full'>
            <div class='mb-6'>
              <label
                for='name'
                class='block mb-2 text-sm font-semibold font-inter text-gray-900 dark:text-[#FFFFFF]'
              >
                Primary Expertise
              </label>
              <CustomSelect options={serviceTypeOptions} />
            </div>
            <div class='mb-6'>
              <div className='flex items-center justify-center py-2 rounded-lg gap-3 border border-[#949090]'>
                <AddIcon />
                <h1 className='text-lg font-semibold font-inter'>
                  Add Secondary Expertise
                </h1>
              </div>
            </div>
            <div class='mb-6'>
              <label
                for='name'
                class='block mb-2 text-sm font-semibold font-inter text-gray-900 dark:text-[#FFFFFF]'
              >
                Relevant disciplines
              </label>
              <CustomSelect options={serviceTypeOptions} />
            </div>
            <div class='mb-6'>
              <label
                for='name'
                class='block mb-2 text-sm font-semibold font-inter text-gray-900 dark:text-[#FFFFFF]'
              >
                Tools you have experience in
              </label>
              <CustomSelect options={serviceTypeOptions} />
            </div>
            <div class='mb-6'>
              <label
                for='name'
                class='block mb-2 text-sm font-semibold font-inter text-gray-900 dark:text-[#FFFFFF]'
              >
                Skills you have experience in
              </label>
              <CustomSelect options={serviceTypeOptions} />
            </div>
            <div class='mb-6'>
              <label
                for='name'
                class='block mb-2 text-sm font-semibold font-inter text-gray-900 dark:text-[#FFFFFF]'
              >
                Your Target Mentees
              </label>
              <CustomSelect options={serviceTypeOptions} />
            </div>

            <button
              type='submit'
              className='px-8 py-1 rounded-full outline-none border-none  bg-gradient-to-b from-[#27EDD5] to-[#047E70] text-[#FFFFFF] text-xl float-right'
              onClick={handleSubmit}
            >
              Complete
            </button>
          </form>
        </div>
        <div className='flex items-start justify-start'>
          <img src={from3} alt='' className='w-full md:w-3/4 lg:w-[400px] ' />
        </div>
      </div>
    </>
  );
};

export default FormThree;

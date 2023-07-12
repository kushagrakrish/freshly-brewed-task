import React from "react";
import from2 from "../assets/formtwo.png";
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
      <div className='flex flex-col lg:flex-row w-full items-center justify-between overflow-y-hidden'>
        <form className='w-full lg:w-1/2'>
          <div class='mb-6'>
            <label
              for='name'
              class='block mb-2 text-sm font-semibold font-inter text-gray-900 dark:text-white'
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
              class='block mb-2 text-sm font-semibold font-inter text-gray-900 dark:text-white'
            >
              Relevant disciplines
            </label>
            <CustomSelect options={serviceTypeOptions} />
          </div>
          <div class='mb-6'>
            <label
              for='name'
              class='block mb-2 text-sm font-semibold font-inter text-gray-900 dark:text-white'
            >
              Tools you have experience in
            </label>
            <CustomSelect options={serviceTypeOptions} />
          </div>
          <div class='mb-6'>
            <label
              for='name'
              class='block mb-2 text-sm font-semibold font-inter text-gray-900 dark:text-white'
            >
              Skills you have experience in
            </label>
            <CustomSelect options={serviceTypeOptions} />
          </div>
          <div class='mb-6'>
            <label
              for='name'
              class='block mb-2 text-sm font-semibold font-inter text-gray-900 dark:text-white'
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
        <div className='flex items-start justify-start'>
          <img src={from2} alt='' className='w-[350px] ' />
        </div>
      </div>
    </>
  );
};

export default FormThree;

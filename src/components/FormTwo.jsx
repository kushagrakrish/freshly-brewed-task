import LinkedInIcon from "@mui/icons-material/LinkedIn";
import React, { useState } from "react";
import from2 from "../assets/formtwo.png";
import { experienceYear, serviceTypeOptions } from "../constants/data";
import CustomSelect from "./CustomSelectInput";
import ProfileUploader from "./ProfileUploader";

const FormTwo = ({ handleNext }) => {
  const [formData, setFormData] = useState({
    jobTitle: "",
    company: "",
    experience1: "",
    experience2: "",
    bio: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    handleNext();
    console.log(formData); // Print form data to the console
  };

  const handleChange = (name, value) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  return (
    <>
      <div className='flex items-center justify-between w-full flex-col lg:flex-row lg:gap-10 xl:gap-0 md:items-start'>
        <div className='w-full xl:w-2/5'>
          <div className='flex items-center justify-between mx-auto w-full px-6 my-10'>
            <div className='flex flex-col items-center justify-center gap-3'>
              <button className='flex px-4 items-start gap-2 py-2 font-inter font-semibold outline-none  border-2 border-[#047E70] text-base '>
                Fetch it from
                <LinkedInIcon />
              </button>
              or
              <ProfileUploader />
            </div>
          </div>
          <form onSubmit={handleSubmit} className='w-full'>
            <div class='mb-6'>
              <label
                htmlFor='name'
                class='block mb-2 text-sm font-semibold font-inter text-gray-900 dark:text-[#FFFFFF]'
              >
                Job Title
              </label>
              <CustomSelect
                placeholder='Eg: Product designer, Graphic designer'
                options={serviceTypeOptions}
                name='jobTitle'
                value={formData.jobTitle}
                onChange={(value) => handleChange("jobTitle", value)}
              />
            </div>
            <div class='mb-6'>
              <label
                htmlFor='name'
                class='block mb-2 text-sm font-semibold font-inter text-gray-900 dark:text-[#FFFFFF]'
              >
                Company
              </label>
              <CustomSelect
                placeholder='Eg: Amazon,Meta'
                options={serviceTypeOptions}
                name='company'
                value={formData.company}
                onChange={(value) => handleChange("company", value)}
              />
            </div>
            <div className=' mb-6'>
              <label
                htmlFor='name'
                class='block mb-2 text-sm font-semibold font-inter text-gray-900 dark:text-[#FFFFFF]'
              >
                Experience
              </label>
              <div className='flex items-center gap-5'>
                <CustomSelect
                  placeholder='Y'
                  options={experienceYear}
                  name='experience1'
                  value={formData.experience1}
                  onChange={(value) => handleChange("experience1", value)}
                />

                <CustomSelect
                  placeholder='M'
                  options={serviceTypeOptions}
                  name='experience2'
                  value={formData.experience2}
                  onChange={(value) => handleChange("experience2", value)}
                />
              </div>
            </div>
            <div className="mb-6'">
              <label
                htmlFor='name'
                class='block mb-2 text-sm font-semibold font-inter text-gray-900 dark:text-[#FFFFFF]'
              >
                Bio
              </label>

              <textarea
                id='bio'
                name='bio'
                onChange={(value) => handleChange("bio", value)}
                placeholder='Write briefly about you'
                className='bg-[#ffff] border border-[#949090] placeholder:text-[#949090]  text-[#000000] text-sm rounded-lg focus:outline-none focus:ring-[#949090] block w-full p-2.5'
              />
            </div>
            <button
              type='submit'
              className='px-8 py-1 rounded-full outline-none border-none  bg-gradient-to-b from-[#27EDD5] to-[#047E70] text-[#FFFFFF] text-xl float-right mt-5'
            >
              Next
            </button>
          </form>
        </div>
        <div className='flex items-start justify-start lg:w-1/2 xl:w-2/5'>
          <img src={from2} alt='' className='w-full md:w-3/4 lg:w-[400px]' />
        </div>
      </div>
    </>
  );
};

export default FormTwo;

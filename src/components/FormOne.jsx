import React, { useState } from "react";
import form1 from "../assets/form1.png";

import google from "../assets/Google.png";
import linkedIn from "../assets/linked.png";

const FormOne = ({ handleNext }) => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    handleNext();
    console.log(formData); // Print form data to the console
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  return (
    <>
      <div className='flex items-center justify-between w-full flex-col lg:flex-row lg:gap-10 xl:gap-0 md:items-start'>
        <div>
          <div className='flex flex-wrap lg:flex-nowrap items-center justify-center md:justify-start w-full gap-5 my-10'>
            <button className='flex px-3 items-center gap-2 py-3 font-inter font-semibold outline-none border border-[#949090] rounded-lg text-base '>
              <img src={google} className='w-5' />
              Continue with Google
            </button>
            <button className='flex px-3 items-center gap-2 py-3 font-inter font-semibold outline-none border border-[#949090] rounded-lg text-base '>
              <img src={linkedIn} className='w-5' />
              Continue with LinkedIn
            </button>
          </div>
          <form onSubmit={handleSubmit} className='w-full'>
            <div className='mb-6'>
              <label
                htmlFor='name'
                className='block mb-2 text-sm font-semibold font-inter text-[#000000] dark:text-[#FFFFFF]'
              >
                Full Name
              </label>
              <input
                type='text'
                id='fullName'
                name='fullName'
                value={formData.fullName}
                onChange={handleChange}
                className='bg-[#ffff] border border-[#949090]   text-[#000000] text-sm rounded-lg focus:outline-none focus:ring-[#949090] block w-full p-2.5'
                placeholder='Full Name'
                required
              />
            </div>
            <div className='mb-6'>
              <label
                htmlFor='email'
                className='block mb-2 text-sm font-semibold font-inter text-[#000000] dark:text-[#FFFFFF]'
              >
                Your email
              </label>
              <input
                type='email'
                id='email'
                name='email'
                value={formData.email}
                onChange={handleChange}
                className='bg-[#ffff] border border-[#949090]   text-[#000000] text-sm rounded-lg focus:outline-none focus:ring-[#949090] block w-full p-2.5'
                placeholder='name@flowbite.com'
                required
              />
            </div>
            <div className='mb-6'>
              <label
                htmlFor='password'
                className='block mb-2 text-sm font-semibold font-inter text-[#000000] dark:text-[#FFFFFF]'
              >
                Your password
              </label>
              <input
                type='password'
                id='password'
                name='password'
                value={formData.password}
                onChange={handleChange}
                className='bg-[#ffff] border border-[#949090]   text-[#000000] text-sm rounded-lg focus:outline-none focus:ring-[#949090] block w-full p-2.5'
                required
              />
            </div>

            <button
              type='submit'
              className='px-8 py-1 rounded-full outline-none border-none  bg-gradient-to-b from-[#27EDD5] to-[#047E70] text-[#FFFFFF] text-xl float-right'
            >
              Next
            </button>
          </form>
        </div>
        <div className='flex items-start justify-start  mx-auto'>
          <img src={form1} alt='' className='w-full md:w-3/4 lg:w-[400px]' />
        </div>
      </div>
    </>
  );
};

export default FormOne;

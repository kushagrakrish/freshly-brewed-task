import React from "react";
import form1 from "../assets/form1.png";
import GoogleIcon from "@mui/icons-material/Google";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

const FormOne = () => {
  return (
    <>
      <div className='flex items-center gap-5'>
        <button className='flex  px-5 items-center gap-2 py-3 font-inter font-semibold outline-none border border-[#949090] rounded-lg text-base '>
          <GoogleIcon />
          Contine with Google
        </button>
        or
        <button className='flex px-5  items-center gap-2 py-3 font-inter font-semibold outline-none border border-[#949090] rounded-lg text-base '>
          <LinkedInIcon />
          Contine with Google
        </button>
      </div>
      <div className='flex flex-col lg:flex-row w-full items-center justify-between overflow-y-hidden'>
        <form className='w-full lg:w-1/2'>
          <div class='mb-6'>
            <label
              for='name'
              class='block mb-2 text-sm font-semibold font-inter text-gray-900 dark:text-white'
            >
              Full Name
            </label>
            <input
              type='text'
              id='text'
              class='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
              placeholder='Full Name'
              required
            />
          </div>
          <div class='mb-6'>
            <label
              for='email'
              class='block mb-2 text-sm font-semibold font-inter text-gray-900 dark:text-white'
            >
              Your email
            </label>
            <input
              type='email'
              id='email'
              class='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
              placeholder='name@flowbite.com'
              required
            />
          </div>
          <div class='mb-6'>
            <label
              for='password'
              class='block mb-2 text-sm font-semibold font-inter text-gray-900 dark:text-white'
            >
              Your password
            </label>
            <input
              type='password'
              id='password'
              class='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
              required
            />
          </div>

          {/* <button
          type='submit'
          class='text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-semibold font-inter rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'
        >
          Next
        </button> */}
        </form>
        <div className='flex items-start justify-start  mx-auto'>
          <img src={form1} alt='' className='w-[350px] ' />
        </div>
      </div>
    </>
  );
};

export default FormOne;

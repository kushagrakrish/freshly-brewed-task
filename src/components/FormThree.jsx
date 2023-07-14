import React, { useState } from "react";
import from3 from "../assets/form3.png";
import {
  expertiseOptions,
  relevantDisciplinesOptions,
  serviceTypeOptions,
  skillOptions,
  toolOptions,
} from "../constants/data";
import CustomSelect from "./CustomSelectInput";
import AddIcon from "@mui/icons-material/Add";

const FormThree = ({ handleNext, handleReset }) => {
  const [formData, setFormData] = useState({
    primaryExpertise: "",
    secondaryExpertise: "",
    relevantDisciplines: "",
    toolsExperience: "",
    skillsExperience: "",
    targetMentees: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData); // Log form data to the console
    // handleNext();
    handleReset();
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
          <form onSubmit={handleSubmit} className='w-full'>
            <div className='mb-6'>
              <label
                htmlFor='primaryExpertise'
                className='block mb-2 text-sm font-semibold font-inter text-gray-900 dark:text-[#FFFFFF]'
              >
                Primary Expertise
              </label>
              <CustomSelect
                options={expertiseOptions}
                placeholder='Select primary expertise'
                value={formData.primaryExpertise}
                onChange={(value) => handleChange("primaryExpertise", value)}
              />
            </div>
            <div className='mb-6 '>
              <div className='flex items-center justify-center py-2 rounded-lg gap-3 border border-[#949090] w-full'>
                <AddIcon />
                <h1 className='text-sm md:text-lg font-semibold font-inter'>
                  Add Secondary Expertise
                </h1>
              </div>
            </div>
            <div className='mb-6'>
              <label
                htmlFor='relevantDisciplines'
                className='block mb-2 text-sm font-semibold font-inter text-gray-900 dark:text-[#FFFFFF]'
              >
                Relevant Disciplines
              </label>
              <CustomSelect
                options={relevantDisciplinesOptions}
                placeholder='Select relevant disciplines'
                value={formData.relevantDisciplines}
                onChange={(value) => handleChange("relevantDisciplines", value)}
              />
            </div>
            <div className='mb-6'>
              <label
                htmlFor='toolsExperience'
                className='block mb-2 text-sm font-semibold font-inter text-gray-900 dark:text-[#FFFFFF]'
              >
                Tools You Have Experience In
              </label>
              <CustomSelect
                options={toolOptions}
                placeholder='Select tools of experience'
                value={formData.toolsExperience}
                onChange={(value) => handleChange("toolsExperience", value)}
              />
            </div>
            <div className='mb-6'>
              <label
                htmlFor='skillsExperience'
                className='block mb-2 text-sm font-semibold font-inter text-gray-900 dark:text-[#FFFFFF]'
              >
                Skills You Have Experience In
              </label>
              <CustomSelect
                options={skillOptions}
                placeholder='Select skills of experience'
                value={formData.skillsExperience}
                onChange={(value) => handleChange("skillsExperience", value)}
              />
            </div>
            <div className='mb-6'>
              <label
                htmlFor='targetMentees'
                className='block mb-2 text-sm font-semibold font-inter text-gray-900 dark:text-[#FFFFFF]'
              >
                Your Target Mentees
              </label>
              <CustomSelect
                options={serviceTypeOptions}
                placeholder='Select target mentees'
                value={formData.targetMentees}
                onChange={(value) => handleChange("targetMentees", value)}
              />
            </div>
            <div className='flex items-center justify-center'>
              <button
                type='submit'
                className='px-8 py-1 rounded-full outline-none border-none bg-gradient-to-b from-[#27EDD5] to-[#047E70] text-[#FFFFFF] text-xl '
              >
                Complete
              </button>
            </div>
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

import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import React, { useState, useEffect } from "react";

const CustomSelect = ({ options, placeholder, value, onChange, name }) => {
  const [selectedOption, setSelectedOption] = useState("");

  useEffect(() => {
    setSelectedOption(value);
  }, [value]);

  const handleSelectChange = (e) => {
    const selectedValue = e.target.value;
    setSelectedOption(selectedValue);
    onChange(selectedValue);
  };

  return (
    <div className='relative rounded-lg'>
      <select
        required={true}
        name={name}
        id='serviceType'
        value={selectedOption}
        onChange={handleSelectChange}
        className={`bg-[#ffff] border border-[#949090] text-sm rounded-lg focus:outline-none focus:ring-[#949090] block w-full px-5 py-2 appearance-none ${
          selectedOption ? "text-[#000]" : "text-[#949090]"
        }`}
      >
        <option disabled value=''>
          {placeholder}
        </option>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      <ArrowDropDownIcon className='h-2 absolute top-1/2 right-0 transform -translate-y-1/2 pointer-events-none' />
    </div>
  );
};

export default CustomSelect;

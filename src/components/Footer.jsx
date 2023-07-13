import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import React from "react";

const Footer = () => {
  const icons = [
    <LinkedInIcon
      sx={{ fontSize: "2.5rem" }}
      className='hover:text-gray-200 transition-all ease-in delay-500 cursor-pointer'
    />,
    <InstagramIcon
      sx={{ fontSize: "2.5rem" }}
      className='hover:text-gray-200 transition-all ease-in delay-500 cursor-pointer'
    />,
    <TwitterIcon
      sx={{ fontSize: "2.5rem" }}
      className='hover:text-gray-200 transition-all ease-in delay-500 cursor-pointer'
    />,
    <FacebookIcon
      sx={{ fontSize: "2.5rem" }}
      className='hover:text-gray-200 transition-all ease-in delay-500 cursor-pointer'
    />,
  ];

  const services = [
    {
      title: "Contact us",
    },
    {
      title: "Privacy policy",
    },
    {
      title: "Terms of use",
    },
  ];
  const abouts = [
    {
      about: "Help center",
    },
    {
      about: "About us",
    },
    {
      about: "FAQs",
    },
  ];

  return (
    <div className='bg-[#3D7196] text-[#FFFFFF] px-10 py-10 md:px-20 lg:px-28 overflow-y-hidden pt-20'>
      <div className='flex flex-col md:flex-row justify-center items-center md:items-start md:justify-between '>
        <div className='flex gap-6'>{icons.map((icon, idx) => icon)}</div>

        <div className='flex list-none md:grid-cols-2 gap-10 md:gap-20 lg:gap-32  hover:cursor-pointer pt-10 md:pt-0 xl:text-lg'>
          <div className='underline'>
            {services.map((service) => (
              <li className=' pb-1 md:pb-2 md:pt-0'>{service.title}</li>
            ))}
          </div>
          <div>
            {abouts.map((ab) => (
              <li className=' pb-1 md:pb-2'>{ab.about}</li>
            ))}
          </div>
        </div>
      </div>
      <p className='text-center md:text-left'>
        © 2023 Mentorbridge. All rights reserved.
      </p>
    </div>
  );
};

export default Footer;

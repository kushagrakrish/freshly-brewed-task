import AddIcon from "@mui/icons-material/Add";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import React from "react";
import { faqsData } from "../constants/data";

const Faqs = () => {
  return (
    <>
      <div className='px-5 py-16 bg-gradient-to-r from-[#83D8CE] to-[#C0E3FC] overflow-x-hidden'>
        <h1 className='text-center font-semibold font-inter text-4xl text-[#000000] '>
          Let’s Clear your Doubts!
        </h1>
        <div className='flex flex-col gap-3.5 mt-10 w-full md:w-2/3 mx-auto'>
          {faqsData?.map((faq, idx) => (
            <Accordion key={idx} className='md:py-2'>
              <AccordionSummary
                expandIcon={<AddIcon className='text-[#000000] font-bold' />}
                aria-controls='panel1a-content'
                id='panel1a-header'
              >
                <p className='text-center w-full font-semibold text-base font-inter md:text-base lg:text-xl xl:text-2xl text-[#000000]'>
                  {faq?.title}
                </p>
              </AccordionSummary>
              <AccordionDetails>
                <p className='w-full font-medium text-center text-base font-inter xl:text-xl text-[#000000]'>
                  {faq?.desc}
                </p>
              </AccordionDetails>
            </Accordion>
          ))}
        </div>
      </div>
    </>
  );
};

export default Faqs;

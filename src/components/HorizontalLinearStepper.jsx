import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Stepper from "@mui/material/Stepper";
import Typography from "@mui/material/Typography";
import React from "react";
import FormOne from "./FormOne";
import FormThree from "./FormThree";
import FormTwo from "./FormTwo";

const steps = ["", "", ""];

const stepStyle = {
  "& .Mui-active": {
    "&.MuiStepIcon-root": {
      color: "#047E70",
      fontSize: "2rem",
    },
    "& .MuiStepConnector-line": {
      borderColor: "#000000",
      border: "1px solid",
    },
  },
  "& .Mui-completed": {
    "&.MuiStepIcon-root": {
      color: "#047E70",
      fontSize: "2rem",
    },
    "& .MuiStepConnector-line": {
      borderColor: "#000000",
      border: "1px solid",
    },
  },
};
export default function HorizontalLinearStepper() {
  const [activeStep, setActiveStep] = React.useState(0);
  const [skipped, setSkipped] = React.useState(new Set());

  const isStepOptional = (step) => {
    return step === 1;
  };

  const isStepSkipped = (step) => {
    return skipped.has(step);
  };

  const handleNext = () => {
    let newSkipped = skipped;
    if (isStepSkipped(activeStep)) {
      newSkipped = new Set(newSkipped.values());
      newSkipped.delete(activeStep);
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped(newSkipped);
  };

  // const handleBack = () => {
  //   setActiveStep((prevActiveStep) => prevActiveStep - 1);
  // };

  // const handleSkip = () => {
  //   if (!isStepOptional(activeStep)) {
  //     // You probably want to guard against something like this,
  //     // it should never occur unless someone's actively trying to break something.
  //     throw new Error("You can't skip a step that isn't optional.");
  //   }

  //   setActiveStep((prevActiveStep) => prevActiveStep + 1);
  //   setSkipped((prevSkipped) => {
  //     const newSkipped = new Set(prevSkipped.values());
  //     newSkipped.add(activeStep);
  //     return newSkipped;
  //   });
  // };

  const handleReset = () => {
    setActiveStep(0);
  };

  return (
    <>
      <div className='w-full py-12  px-10 overflow-hidden h-full xl:px-28'>
        <h1 className='text-2xl font-semibold mb-2 font-inter'>
          Great choice to help people!
        </h1>
        <h2 className='text-xl font-semibold mb-4 font-inter'>
          Tell us few details about you & your expertise...
        </h2>

        <Stepper
          sx={stepStyle}
          className='w-full xl:w-2/5 mb-5  lg:w-2/3'
          activeStep={activeStep}
        >
          {steps.map((label, index) => {
            const stepProps = {};
            const labelProps = {};
            if (isStepOptional(index)) {
              labelProps.optional = <Typography variant='caption'></Typography>;
            }
            if (isStepSkipped(index)) {
              stepProps.completed = false;
            }
            return (
              <Step key={index} {...stepProps}>
                <StepLabel {...labelProps}>{label}</StepLabel>
              </Step>
            );
          })}
        </Stepper>
        {activeStep === steps.length ? (
          <React.Fragment>
            <Typography sx={{ mt: 2, mb: 1 }}>
              All steps completed - you&apos;re finished
            </Typography>
            <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
              <Box sx={{ flex: "1 1 auto" }} />
              <Button onClick={handleReset}>Complete</Button>
            </Box>
          </React.Fragment>
        ) : (
          <React.Fragment>
            {activeStep === 0 && <FormOne handleNext={handleNext} />}
            {activeStep === 1 && <FormTwo handleNext={handleNext} />}
            {activeStep === 2 && (
              <FormThree handleReset={handleReset} handleNext={handleNext} />
            )}
          </React.Fragment>
        )}
      </div>
    </>
  );
}

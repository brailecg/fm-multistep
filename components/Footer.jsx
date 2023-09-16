import React from "react";

import { useFormContext } from "@/store/FormContext";

const Footer = () => {
  const { activeStep, steps, formValidate, setActiveStep } = useFormContext();

  console.log(steps.length);
  const nextStepForm = () => {
    // setActiveStep(activeStep + 1);
    formValidate(activeStep);
    // if (activeStep > steps.length) {
    //   console.log("submit form here");
    //   // submit form here
    // }
  };
  return (
    <div
      className={` z-50 p-4 md:pr-0 h-[72px] mt-20 fixed right-0 bottom-0 md:static  w-full md:w-[90%] bg-white flex justify-between items-center`}>
      <div>
        {activeStep > 1 && activeStep <= steps.length && (
          <button
            onClick={() => setActiveStep(activeStep - 1)}
            className={` text-fmgrey-grey hover:text-fmblue-dark`}>
            Go Back
          </button>
        )}
      </div>
      <div className={activeStep > steps.length ? "hidden" : ""}>
        {activeStep < steps.length ? (
          <button
            onClick={nextStepForm}
            className={` text-sm md:text-base w-[97px] h-[40px] md:w-[123px] md:h-12 hover:bg-fmblue-lightdark bg-fmblue-dark rounded-md text-white`}>
            Next Step
          </button>
        ) : (
          <button
            onClick={nextStepForm}
            className={` text-sm md:text-base w-[97px] h-[40px] md:w-[123px] md:h-12 hover:bg-fmblue-onelight bg-fmblue-one rounded-md text-white`}>
            Confirm
          </button>
        )}
      </div>
    </div>
  );
};

export default Footer;

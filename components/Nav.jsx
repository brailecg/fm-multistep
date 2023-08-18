import React, { useState } from "react";

import { HeaderShapePink } from "./svg/HeaderShapePink";
import { HeaderShapeBlue } from "./svg/HeaderShapeBlue";
import { HeaderShapeOrange } from "./svg/HeaderShapeOrange";
import { HeaderShapeTri } from "./svg/HeaderShapeTri";

const stepsArray = [
  { step: 1, title: "Step 1", desc: "Your Info" },
  { step: 2, title: "Step 2", desc: "Select Plan" },
  { step: 3, title: "Step 3", desc: "Add-ons" },
  { step: 4, title: "Step 4", desc: "Summary" },
];

const Nav = () => {
  const [activeStep, setActiveStep] = useState(1);
  return (
    <nav
      className={` rounded-none md:rounded-xl px-0 py-0 md:px-8 md:py-10 flex overflow-hidden border-0  bg-fmblue-one h-[172px] relative md:min-h-full md:w-[274px]`}>
      <div className={` z-20 w-full`}>
        <ul
          className={` flex flex-row md:flex-col justify-center mt-9 space-x-4 space-y-0 md:space-y-4 md:space-x-0`}>
          {stepsArray.map((step, index) => {
            return (
              <li key={index} className={` flex items-center`}>
                <p
                  className={` mr-4 flex justify-center items-center rounded-full w-8 h-8 ${
                    activeStep === step.step
                      ? " bg-fmblue-light text-fmblue-dark"
                      : "border border-white text-white"
                  }`}>
                  {step.step}
                </p>
                <p className={`hidden md:flex flex-col`}>
                  <span className={` text-fmblue-lighter uppercase text-xs`}>
                    {step.title}
                  </span>
                  <span className={` text-sm font-bold text-white uppercase`}>
                    {step.desc}
                  </span>
                </p>
              </li>
            );
          })}
        </ul>
      </div>

      <HeaderShapeOrange className={` absolute z-10 -left-20 -bottom-10`} />
      <HeaderShapeBlue className={` absolute z-0 -bottom-[4.5rem] -left-20`} />
      <HeaderShapePink className={` absolute z-10 -bottom-[4.5rem] -right-5`} />
      <HeaderShapeTri className={` absolute z-10 bottom-10 right-20 `} />
    </nav>
  );
};

export default Nav;

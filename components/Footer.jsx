import React from "react";

const Footer = ({ step = 1 }) => {
  return (
    <div
      className={` z-50 p-4 h-16 sticky bottom-0 w-full bg-white flex justify-between `}>
      <div>
        {step > 1 && <button className={` text-fmgrey-grey`}>Go Back</button>}
      </div>
      <button
        className={` w-[97px] h-[40px] hover:bg-fmblue-lightdark bg-fmblue-dark rounded-md text-white`}>
        Next Step
      </button>
    </div>
  );
};

export default Footer;

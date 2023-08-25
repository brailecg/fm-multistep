import React from "react";

const FormHeader = ({ title, subtitle }) => {
  return (
    <>
      <h2 className={` text-fmblue-dark font-bold text-2xl md:text-4xl mb-2`}>
        {title}
      </h2>
      <p className={` text-fmgrey-grey`}>{subtitle}</p>
    </>
  );
};

export default FormHeader;

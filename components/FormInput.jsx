import React from "react";

export const FormInput = ({ label, placeholder, error, labelFor }) => {
  return (
    <div className={` flex flex-col md:space-y-1`}>
      <label
        htmlFor={labelFor}
        className={` text-xs md:text-sm text-fmblue-dark flex justify-between`}>
        <span>{label}</span>
        {error && (
          <span className={` text-fmred-red font-bold`}>
            This field is required.
          </span>
        )}
      </label>
      <input
        type="text"
        id={labelFor}
        placeholder={placeholder}
        className={` hover:border-fmblue-one border ${
          error ? "border-fmred-red" : "border-fmgrey-greylight"
        }  rounded-md h-10 md:h-12 px-4  placeholder:text-[15px] md:placeholder:text-base`}
      />
    </div>
  );
};

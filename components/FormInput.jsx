import React from "react";

export const FormInput = ({ label, placeholder, error, labelFor }) => {
  return (
    <div className={` flex flex-col`}>
      <label
        htmlFor={labelFor}
        className={` text-xs text-fmblue-dark flex justify-between`}>
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
        }  rounded-md h-10 px-4  placeholder:text-[15px]`}
      />
    </div>
  );
};

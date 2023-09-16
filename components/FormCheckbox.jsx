import React from "react";

const FormCheckbox = ({ id, addon, checkHandler, checkedItems }) => {
  return (
    <div className="w-full flex gap-2">
      <input
        onChange={(e) => checkHandler(e.target.checked)}
        className="
        peer relative appearance-none shrink-0 w-5 h-5 border border-[#D6D9E6] rounded-md mt-1 bg-white
        focus:outline-none focus:ring-offset-0 focus:ring-1 focus:ring-blue-100
        checked:bg-[#483EFF] checked:border-0
        disabled:border-steel-400 disabled:bg-steel-400
      "
        type="checkbox"
        id={id}
      />
      <svg
        className="absolute w-5 h-5 pointer-events-none hidden peer-checked:block stroke-white mt-1 outline-none"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="4">
        {/* <polyline points="20 6 9 17 4 12"></polyline> */}
        <polyline points="20 6 9 17 4 12"></polyline>
      </svg>
      <label htmlFor={id} className={` flex flex-col`}>
        <span className={` text-fmblue-dark text-sm font-medium`}>
          {addon.addonName}
        </span>
        <span className={` text-xs text-fmgrey-grey`}>
          {addon.addonDescription}
        </span>
      </label>
    </div>
  );
};

export default FormCheckbox;

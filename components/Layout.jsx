import React from "react";
import Nav from "./Nav";

const Layout = ({ children }) => {
  return (
    <main
      className={` flex justify-center md:items-center bg-fmblue-lightest h-screen`}>
      <div
        className={` bg-inherit md:bg-white md:rounded-xl md:p-4 md:h-[600px] w-[365px] md:w-[940px] md:flex relative`}>
        <Nav />
        {children}
      </div>
    </main>
  );
};
export default Layout;

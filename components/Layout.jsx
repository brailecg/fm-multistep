import React from "react";
import Nav from "./Nav";

import { Inter, Ubuntu } from "next/font/google";
import Footer from "./Footer";

const ubuntu = Ubuntu({ subsets: ["latin"], weight: ["400", "700"] });

const Layout = ({ children }) => {
  return (
    <main
      className={` flex flex-col items-center md:justify-center bg-fmblue-lightest h-screen ${ubuntu.className}`}>
      <div
        className={` md:relative bg-inherit md:bg-white md:rounded-xl md:p-4 md:min-h-[600px] w-full sm:w-[365px] md:w-[760px] lg:w-[940px]`}>
        <div className={` h-full md:flex relative`}>
          <Nav />
          <div
            className={` h-screen md:h-fit mb-20 md:mb-0 relative min-h-min w-full flex flex-col justify-between items-center md:items-stretch md:ml-24`}>
            {children}
            <Footer />
          </div>
        </div>
      </div>
    </main>
  );
};
export default Layout;

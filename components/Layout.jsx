import React from "react";
import Nav from "./Nav";

import { Inter, Ubuntu } from "next/font/google";
import Footer from "./Footer";

const inter = Inter({ subsets: ["latin"] });
const ubuntu = Ubuntu({ subsets: ["latin"], weight: ["400", "700"] });

const Layout = ({ children }) => {
  return (
    <main
      className={` flex flex-col items-center md:justify-center bg-fmblue-lightest h-screen ${ubuntu.className}`}>
      <div
        className={` bg-inherit md:bg-white md:rounded-xl md:p-4 md:h-[600px] w-[365px] md:w-[940px]`}>
        <div className={` h-full md:flex relative`}>
          <Nav />
          <div className={` h-14 relative w-full flex justify-center`}>
            {children}
          </div>
        </div>
        <Footer />
      </div>
    </main>
  );
};
export default Layout;

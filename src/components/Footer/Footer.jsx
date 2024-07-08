import React, { useEffect, useState } from "react";

import { FaDribbble, FaFigma, FaLinkedin, FaTwitter } from "react-icons/fa";
import { LeftSide } from "./LeftSide";
import { Middle } from "./Middle";

export const Footer = () => {
  const [hideNav, setHideNav] = useState(false);
  useEffect(() => {
    if (
      window.location.pathname === "/Pages/Registration" ||
      window.location.pathname === "/Pages/Reset"
    ) {
      setHideNav(true);
    } else {
      setHideNav(false);
    }
  }, []);
  return (
    <div className={hideNav ? "hidden" : "block py-4 my-10"}>
      <div className="px-7 grid md:grid-cols-2 md:gap-12">
        <LeftSide />
       
        <Middle />
        
      </div>
    </div>
  );
};
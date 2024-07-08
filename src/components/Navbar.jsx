import React, { useState } from "react";
import logo from "../assets/Black_and_White_Minimalist_Wedding_Monogram_Logo__1_-removebg-preview.png";
import { CiMenuFries } from "react-icons/ci";
import { MdArrowOutward } from "react-icons/md";
export const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  const handleScroll = () => {
    const section = document.getElementById("projects-section");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="relative flex items-center justify-between pr-4">
      <a href="/">

      <img className="w-40 h-24 cursor-pointer" src={'https://businessone.vercel.app/bestlogo.png'} alt="" />
      </a>
      <ul className="hidden md:flex items-center space-x-8 opacity-80">
        <li className="cursor-pointer hover:text-gray-200" onClick={handleScroll}>
          Work
        </li>
      </ul>
      <CiMenuFries onClick={() => setShowMenu(!showMenu)} className="md:hidden text-2xl cursor-pointer" />
      <a href="/contact"
        className="hover:bg-white transition-all cursor-pointer duration-300 ease-in-out hover:text-black hidden md:flex items-center space-x-2 bg-[#2b2d2d] p-2 px-4 rounded-full"
      >
        <p>LET'S TALK</p>
        <MdArrowOutward className="gradient-background text-black p-2 text-4xl rounded-full" />
      </a>
  
      {showMenu && (
        <div className="mobile-menu transition-all duration-300 ease-in-out absolute top-20 text-center lg:hidden bg-[#090909] w-full p-4 z-[6000]">
          <ul className=" opacity-80">
            <li className="cursor-pointer hover:text-gray-200" onClick={handleScroll}>
              Work
            </li>
          </ul>
          <a href="/contact"
            className="hover:bg-white my-4 transition-all cursor-pointer duration-300 ease-in-out hover:text-black flex items-center justify-center w-fit mx-auto space-x-2 bg-[#2b2d2d] p-2 px-4 rounded-full"
          >
            <p>LET'S TALK</p>
            <MdArrowOutward className="gradient-background text-black p-2 text-4xl rounded-full" />
          </a>
        </div>
      )}
    </div>
  );
};

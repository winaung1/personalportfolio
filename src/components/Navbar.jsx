import React, { useState } from "react";
import logo from "../assets/Black_and_White_Minimalist_Wedding_Monogram_Logo__1_-removebg-preview.png";
import { CiMenuFries } from "react-icons/ci";
import { MdArrowOutward } from "react-icons/md";
export const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  const handleScroll = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="relative flex items-center justify-between pr-4 z-[6000]">
      <a href="/">

      <img className="w-40 h-24 cursor-pointer" src={'https://businessone.vercel.app/bestlogo.png'} alt="" />
      </a>
      <ul className="hidden md:flex items-center space-x-8 opacity-80">
        <li className="cursor-pointer hover:text-gray-200" onClick={() => handleScroll('work')}>
          Work
        </li>
        <li className="cursor-pointer hover:text-gray-200" onClick={() => handleScroll('about')}>
          About
        </li>
        <li className="cursor-pointer hover:text-gray-200" onClick={() => handleScroll('experience')}>
          Experience
        </li>
        <li className="cursor-pointer hover:text-gray-200" onClick={() => handleScroll('skills')}>
          Skills
        </li>

      </ul>
      <CiMenuFries onClick={() => setShowMenu(!showMenu)} className="md:hidden text-2xl cursor-pointer" />
      <a href="/contact"
        className="hover:bg-white transition-all cursor-pointer duration-300 ease-in-out hover:text-black hidden md:flex items-center space-x-2 bg-[#2b2d2d] p-2 px-4 rounded-full"
      >
        <p>LET'S TALK</p>
        <MdArrowOutward className="gradient-background text-black p-2 text-4xl rounded-full" />
      </a>
  
        <div className={showMenu ? "mobile-menu drop-shadow-md transition-all duration-300 ease-in-out absolute left-0 top-20 text-center lg:hidden bg-[#090909] w-full p-4 z-[6000]" : "mobile-menu border-b drop-shadow-md transition-all duration-300 ease-in-out absolute top-20 -left-[1200px] text-center lg:hidden bg-[#090909] w-full p-4 z-[6000]"}>
        <ul className="md:hidden flex flex-col gap-4 text-3xl opacity-80">
        <li className="cursor-pointer hover:text-gray-200" onClick={() => handleScroll('work')}>
          Work
        </li>
        <li className="cursor-pointer hover:text-gray-200" onClick={() => handleScroll('about')}>
          About
        </li>
        <li className="cursor-pointer hover:text-gray-200" onClick={() => handleScroll('experience')}>
          Experience
        </li>
        <li className="cursor-pointer hover:text-gray-200" onClick={() => handleScroll('skills')}>
          Skills
        </li>

      </ul>
          <a href="/contact"
            className="hover:bg-white my-4 transition-all cursor-pointer duration-300 ease-in-out hover:text-black flex items-center justify-center w-fit mx-auto space-x-2 bg-[#2b2d2d] p-2 px-4 rounded-full"
          >
            <p>LET'S TALK</p>
            <MdArrowOutward className="gradient-background text-black p-2 text-4xl rounded-full" />
          </a>
        </div>
    </div>
  );
};

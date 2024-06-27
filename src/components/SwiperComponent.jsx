import React from 'react';
import { IoLogoHtml5, IoLogoReact } from "react-icons/io5";
import { SiExpress, SiMongodb, SiMui, SiNextdotjs, SiTailwindcss } from "react-icons/si";
import { FaCss3 } from "react-icons/fa6";
import { DiNodejsSmall } from "react-icons/di";

const slides = [
  { icon: <IoLogoReact /> },
  { icon: <SiTailwindcss /> },
  { icon: <FaCss3/> },
  { icon: <IoLogoHtml5/> },
  { icon: <SiNextdotjs /> },
  { icon: <SiMongodb  /> },
  { icon: <SiMui /> },
  { icon: <DiNodejsSmall /> },
  { icon: <SiExpress /> }
];

const SwiperComponent = () => {
  return (
    <div className="w-full h-64 slider">
      <div className="slide-track">
        {slides.concat(slides).map((slide, index) => (
          <div key={index} className="slide text-4xl md:text-6xl text-gray-500 w-40 md:w-44">
            {slide.icon}
          </div>
        ))}
      </div>
    </div>
  );
};

export default SwiperComponent;

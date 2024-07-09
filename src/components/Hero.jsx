import React from "react";
import { Greendot } from "./Greendot";

export const Hero = () => {
  return (
    <div className="px-4 py-10">
      <div className="flex items-center space-x-2">
       
        <div>
          <h1 className="font-semibold">Win Aung</h1>
          <div className="flex items-center space-x-2">
            <Greendot />
            <p className="opacity-60">Available for Hire</p>
          </div>
        </div>
      </div>

      <div data-aos="fade-right"
     data-aos-offset="300"
     data-aos-delay="300"
         data-aos-duration="300"
     data-aos-easing="ease-in-sine" className="py-4 lg:py-8 ">
        <p className="text-4xl pb-4 lg:pb-8 lg:text-7xl">
          Get a Developer who understands the synergy between
          <span className="gradient-text"> design</span> and
          <span className="gradient-text"> development</span>.
        </p>
        <p className="opacity-60 text-xl lg:text-2xl md:w-3/4">
          Stop searching for the ideal web developer—I am here. Let's collaborate and
          create something extraordinary together.
        </p>
      </div>

      <div className="py-4">
        <a href="/contact" className="bg-white hover:bg-gray-200 text-black px-5 py-3 rounded-full">
          Hire Me
        </a>
      </div>
    </div>
  );
};

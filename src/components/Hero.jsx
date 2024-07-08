import React from "react";
import { Greendot } from "./Greendot";

export const Hero = () => {
  return (
    <div className="px-4 py-10">
      <div className="flex items-center space-x-2">
       
        <div>
          <h1 className="font-semibold">Winagencydesigns</h1>
          <div className="flex items-center space-x-2">
            <Greendot />
            <p className="opacity-60">Available for Hire</p>
          </div>
        </div>
      </div>

      <div className="py-4 lg:py-8">
        <p className="text-4xl pb-4 lg:pb-8 lg:text-7xl">
          Get a Web Agency who understands the synergy between
          <span className="gradient-text"> design</span> and
          <span className="gradient-text"> development</span>.
        </p>
        <p className="opacity-60 text-xl lg:text-2xl md:w-3/4">
          Stop searching for the ideal web agency—We are here. Let's collaborate and
          create something extraordinary together.
        </p>
      </div>

      <div className="py-4">
        <a href="/contact" className="bg-white hover:bg-gray-200 text-black px-5 py-3 rounded-full">
          Hire Us
        </a>
      </div>
    </div>
  );
};

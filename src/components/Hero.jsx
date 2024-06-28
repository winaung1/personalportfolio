import React from "react";
import { Greendot } from "./Greendot";

export const Hero = () => {
  return (
    <div className="px-4 py-10">
      <div className="flex items-center space-x-2">
        <img
          className="w-10 h-10 rounded-full object-cover"
          src="https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=400"
          alt=""
        />
        <div>
          <h1 className="font-semibold">Win Aung</h1>
          <div className="flex items-center space-x-2">
            <Greendot />
            <p className="opacity-60">Available for Hire</p>
          </div>
        </div>
      </div>

      <div className="py-4 lg:py-8">
        <p className="text-4xl pb-4 lg:pb-8 lg:text-7xl">
          Get a developer who understands the synergy between
          <span className="gradient-text"> design</span> and
          <span className="gradient-text"> development</span>.
        </p>
        <p className="opacity-60 text-xl lg:text-2xl md:w-3/4">
          Stop searching for the ideal developer—I'm here. Let's collaborate and
          create something extraordinary together.
        </p>
      </div>

      <div className="py-4">
        <button className="bg-white text-black px-5 py-3 rounded-full">
          Hire ME
        </button>
      </div>
    </div>
  );
};

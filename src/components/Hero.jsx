import React from "react";
import { Greendot } from "./Greendot";

export const Hero = () => {
  return (
    <div className="px-8 py-10 max-w-7xl mx-auto">
      <div className="flex items-center space-x-2">
        <img className="w-10 h-10 rounded-full object-cover" src="https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=400" alt="" />
        <div>
          <h1 className="font-semibold">Win Aung</h1>
          <div className="flex items-center space-x-2">
            <Greendot/>
            <p className="opacity-60">Available for Hire</p>
          </div>
        </div>
      </div>

      <div className="py-4 lg:py-8">
        <p className="text-4xl pb-4 lg:pb-8 lg:text-7xl">Elave your online presence with our customizable portfolio template tailored for freelancers.</p>
        <p className="opacity-60 text-xl lg:text-2xl md:w-3/4">Present your skills, experience, and projects in a visually compelling way to captivate potential clients and stand out in your field.</p>
      </div>

      <div className="py-4">
        <button className="bg-white text-black px-5 py-3 rounded-full">CONTACT ME</button>
      </div>

    </div>
  );
};

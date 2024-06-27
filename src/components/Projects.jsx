import React from "react";
import { Greendot } from "./Greendot";
import { ProjectCard } from "./ProjectCard";

export const Projects = () => {
  return (
    <div className="py-10 px-8 max-w-7xl mx-auto">
      <div className="flex items-center space-x-2 ">
        <Greendot att={'w-3 h-3'}/>
        <h1 className="text-4xl">Recent Projects</h1>
      </div>

     <ProjectCard/>
     <ProjectCard/>
    </div>
  );
};

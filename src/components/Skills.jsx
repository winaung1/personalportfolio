import React from "react";
import { Title } from "./Title";
import { skills } from "./data";
export const Skills = () => {
  return (
    <div className="py-20 px-4">
      <Title title={"Skills"} />
      <div className="lg:flex justify-between lg:space-x-4">
        <p className="opacity-60 py-4 lg:w-1/2">
          Here, I showcase the programs I work with and the programming
          languages I master. From Photoshop to JavaScript, each skill
          contributes to the mosaic of my professional expertise.
        </p>
        <div className="grid grid-cols-3 gap-2 shrink-0">
            {skills.map(skill => (
                <div className="w-full text-center shrink-0 bg-[#2b2d2d] px-5 py-3 rounded-full">{skill.item}</div>
            ))}
        </div>
      </div>
    </div>
  );
};

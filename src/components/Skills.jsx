import React from "react";
import { Title } from "./Title";
import { skills } from "./data";
export const Skills = () => {
  return (
    <div className="py-20 px-4">
      <Title title={"Skills"} />
      <div className="lg:flex justify-between lg:space-x-4">
        <p className="opacity-60 py-4 lg:w-1/2">
          In my portfolio, We highlight the programs we work with and the
          programming languages we master. From frontend technologies like HTML,
          CSS, and JavaScript to full-stack development with frameworks such as
          React and Node.js. 
        </p>
        <div className="flex flex-wrap gap-4">
          {skills.map((skill) => (
            <div className="w-fit text-center  shrink-0 bg-[#2b2d2d] px-5 py-3 rounded-full flex items-center justify-center">
              {skill.item}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

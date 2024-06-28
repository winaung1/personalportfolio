import React from "react";
import { Title } from "./Title";
import { experiences } from "./data";
export const Experience = () => {
  return (
    <div className="px-4">
      <Title title={"Work Experience"} />
      <div>
        {experiences.map((experience) => (
          <div className="md:flex items-center md:space-x-4 justify-between py-6 border-b border-[#2b2d2d]">
            <h1 className="text-2xl pb-4">{experience.title}</h1>
            <div className="text-sm flex space-x-2">
              <p className="flex items-center space-x-2 bg-[#2b2d2d] p-2 px-4 rounded-full">
                {experience.company}
              </p>
              <p className="flex items-center space-x-2 bg-[#2b2d2d] p-2 px-4 rounded-full">
                {experience.date}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

import React from "react";
import { Greendot } from "./Greendot";
import { ProjectCard } from "./ProjectCard";
import { Title } from "./Title";

export const Projects = () => {
  return (
    <div className="py-10 px-4">
      <Title title={"Recent Projects"} />
      <ProjectCard />
      <ProjectCard />
    </div>
  );
};

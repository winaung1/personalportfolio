import React from "react";
import { Title } from "./Title";

export const Process = () => {
  const steps = [
    {
      id: 1,
      title: "Discovery and Research",
      list: [
        "Understand the client's values and audience.",
        "Conduct market research.",
        "Identify key design elements.",
      ],
    },
    {
      id: 2,
      title: "Concept Development",
      list: [
        "Generate creative ideas and concepts.",
        "Refine initial drafts based on feedback.",
        "Align with client's brand identity.",
      ],
    },
    {
      id: 3,
      title: "Design and Refinement",
      list: [
        "Create detailed designs and mockups.",
        "Iterate based on client feedback.",
        "Ensure consistency and usability.",
      ],
    },
    {
      id: 4,
      title: "Finalization and Delivery",
      list: [
        "Prepare final deliverables.",
        "Perform quality assurance checks.",
        "Deliver completed project to client.",
      ],
    },
  ];

  return (
    <div className="my-20 px-4" id="process">
      <Title title="Our Process" />
      <p className="opacity-60 py-2 pb-4">Our process to achieve your goals</p>

      <div className="grid md:grid-cols-2 gap-4">
        {steps.map((step) => (
          <div data-aos="zoom-in"
          data-aos-offset="300"
          data-aos-delay="300"
          data-aos-duration="300"
          data-aos-easing="ease-in-sine" key={step.id} className="border border-[#3d3d3d] rounded-xl px-4 py-4">
            <div className="text-orange-400 font-semibold text-xl mb-2">0{step.id}</div>
            <h2 className="text-xl font-bold mb-2">{step.title}</h2>
            <ul className="list-disc pl-4">
              {step.list.map((item, index) => (
                <li key={index} className="opacity-60 py-1">{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

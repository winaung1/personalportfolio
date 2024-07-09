import React from "react";
import { Title } from "./Title";

export const About = () => {
  return (
    <div className="my-20 px-4" id="about">
      <Title title={"About"} />
      <div className="lg:flex lg:space-x-4 ">
        <div className="lg:flex lg:space-x-4 py-10 h-fit lg:sticky top-0 ">
         
          <div>
            <h1 className="font-semibold text-3xl w-full pt-4 lg:pt-0">
              Hi, I am Win - I am a <span className="gradient-text">Frontend Developer.</span> Get to know me.
            </h1>
            <div className="py-4">
              <a href="/contact" className="my-3 bg-white text-black px-5 py-3 rounded-full">
                Hire ME
              </a>
            </div>
          </div>
        </div>
        <div className="opacity-60 lg:w-3/4 lg:pt-8">
          <p>
            Hello! I'm Win Aung, an owner of Winagencydesigns and freelance professional
            based in the United States. With years of experience in
            the field, I specialize in creating dynamic and engaging websites
            that leave a lasting impression. My technical expertise spans across
            HTML, CSS, JavaScript, and beyond, enabling me to transform your
            digital vision into reality with precision and creativity. Whether
            it's crafting sleek landing pages or developing robust e-commerce
            platforms, I've got you covered.
          </p>
          <p className="py-4">
            Inspired by the diverse culture and innovative spirit of the United
            States, I bring a fresh perspective to every project. Let's
            collaborate and turn your ideas into captivating online experiences
            that stand out!
          </p>
        
        </div>
      </div>
    </div>
  );
};

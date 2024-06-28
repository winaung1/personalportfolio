import React from "react";
import { Title } from "./Title";

export const About = () => {
  return (
    <div className="my-20 px-4">
      <Title title={"About"} />
      <div className="lg:flex lg:space-x-4 ">
        <div className="lg:flex lg:space-x-4 py-10 h-fit lg:sticky top-0 ">
          <img
            className="w-12 h-12 shrink-0 rounded-full object-cover"
            src="https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=400"
            alt=""
          />
          <div>
            <h1 className="font-semibold text-3xl w-full pt-4 lg:pt-0">
              Hi, I am Win - I am experienced frontend developer on road to
              full-stack developement.
            </h1>
            <div className="py-4">
              <button className="bg-white text-black px-5 py-3 rounded-full">
                Hire ME
              </button>
            </div>
          </div>
        </div>
        <div className="opacity-60 lg:w-3/4 lg:pt-8">
          <p>
            Hey there! I'm Win Aung, a frontend developer / freelance developer
            based in the United States. With over 3 years of experience I
            specialize in crafting dynamic websites that leave a lasting
            impression. My skills span HTML, CSS, JavaScript, and more, allowing
            me to bring your digital vision to life with precision and
            creativity.
          </p>
          <p className="py-4">
            From sleek landing pages to robust e-commerce platforms, I've got
            you covered. I thrive on exceeding client expectations, whether it's
            building responsive designs or optimizing for SEO. I take the time
            to understand your goals, ensuring the end product meets your needs.
          </p>
          <p>Located in United States, I draw inspiration from the city's diverse culture and innovative spirit. Let's collaborate and turn your ideas into captivating online experiences!</p>
        </div>
      </div>
    </div>
  );
};

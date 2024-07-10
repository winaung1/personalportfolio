
import React from "react";
import { Greendot } from "./Greendot";
import ScrollAnimation from "./ScrollAnimation";

export const Hero = () => {
  return (
    <div className="px-4 py-10 relative lg:text-center lg:mb-20 lg:h-screen flex flex-col justify-center items-center">
      <div className="absolute inset-0 z-0 hidden lg:block">
        <div className="space-y-10 absolute top-10 left-10 flex justify-between w-full">
          <div>
            <ScrollAnimation direction="left" threshold={100} speed={0.2}>
              <div className="relative rotate-12">
                <img
                  src="https://www.premiumuikits.com/wp-content/uploads/2021/03/5.jpg"
                  className="rounded-xl w-[500px]"
                  alt=""
                />
                <div className="absolute inset-0 bg-black/70 rounded-xl"></div>
              </div>
            </ScrollAnimation>
            <ScrollAnimation direction="left" threshold={100} speed={0.3}>
              <div className="relative">
                <img
                  src="https://www.premiumuikits.com/wp-content/uploads/2021/03/prod-savory-preview.jpg"
                  className="rounded-xl w-[500px]"
                  alt=""
                />
                <div className="absolute inset-0 bg-black/70 rounded-xl"></div>
              </div>
            </ScrollAnimation>
          </div>
          <div>
            <ScrollAnimation direction="right" threshold={100} speed={0.3}>
              <div className="relative -rotate-45">
                <img
                  src="https://dreamy-eight.vercel.app/static/media/Thumbnail.7c0d2fef8aa6a1336ccc.png"
                  className="rounded-xl w-[500px]"
                  alt=""
                />
                <div className="absolute inset-0 bg-black/70 rounded-xl"></div>
              </div>
            </ScrollAnimation>
            <ScrollAnimation direction="right" threshold={100} speed={0.3}>
              <div className="relative">
                <img
                  src="https://cdn.dribbble.com/userupload/2940070/file/original-72e4bc4ea337cf2406a639da58e0766c.png?resize=1504x1128"
                  className="rounded-xl w-[500px]"
                  alt=""
                />
                <div className="absolute inset-0 bg-black/70 rounded-xl"></div>
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </div>
      <div className="relative z-10 max-w-7xl">
       

        <div
          data-aos="fade-right"
          data-aos-offset="300"
          // data-aos-delay="300"
          // data-aos-duration="300"
          data-aos-easing="ease-in-sine"
          className="py-4 lg:py-8 lg:text-center"
        >
          <p className="text-4xl pb-4 lg:pb-8 lg:text-7xl">
            Get a Developer who understands the synergy between
            <span className="gradient-text"> design</span> and
            <span className="gradient-text"> development</span>.
          </p>
          <p className="opacity-60 text-xl lg:text-2xl md:w-3/4 lg:mx-auto">
          Stop searching for the ideal web developer—I am here. Let's collaborate and
          create something extraordinary together.
          </p>
        </div>

        <div className="py-4">
          <a
            href="/contact"
            className="bg-white hover:bg-gray-200 text-black px-5 py-3 rounded-full"
          >
            Hire Me
          </a>
        </div>
      </div>
    </div>
  );
};

import React, { useState, useEffect } from 'react';
import { Hero } from '../components/Hero';
import SwiperComponent from '../components/SwiperComponent';
import { Projects } from '../components/Projects';
import { About } from '../components/About';
import { Experience } from '../components/Experience';
import { Skills } from '../components/Skills';
import { projects, slides } from '../components/data';
import { Process } from '../components/Process';
import { Plans } from '../components/Plans';
import { Faq } from '../components/Faq';
import { FaChevronCircleUp } from 'react-icons/fa';

export const Home = ({ setDisplayText }) => {
  const [showScrollButton, setShowScrollButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setShowScrollButton(true);
      } else {
        setShowScrollButton(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <div>
      <Hero />
      <SwiperComponent items={slides} />
      {/* <Process /> */}
      <Projects setDisplayText={setDisplayText} />
      <SwiperComponent items={projects} />
      {/* <Plans /> */}
      <About />
      {/* <Faq /> */}
      {showScrollButton && (
        <div className='transition-all duration-300 ease-linear fixed bottom-10 right-10'>
          <FaChevronCircleUp
            className='text-4xl text-orange-500 hover:text-orange-400 cursor-pointer'
            onClick={scrollToTop}
          />
        </div>
      )}
      <Experience /> 
      <Skills />
    </div>
  );
};

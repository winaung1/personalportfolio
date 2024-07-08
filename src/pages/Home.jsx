import React from 'react'
import { Hero } from '../components/Hero'
import SwiperComponent from '../components/SwiperComponent'
import { Projects } from '../components/Projects'
import { About } from '../components/About'
import { Experience } from '../components/Experience'
import { Skills } from '../components/Skills'
import { projects, slides } from '../components/data'
import { Process } from '../components/Process'
import { Plans } from '../components/Plans'
import { Faq } from '../components/Faq'

export const Home = ({setDisplayText}) => {
  return (
    <div>
        <Hero />
        <SwiperComponent items={slides} />
        <Process/>
        <Projects setDisplayText={setDisplayText} />
        <SwiperComponent items={projects} />
        <Plans/>
        <About />
        <Faq/>
        {/* <Experience /> */}
        {/* <Skills /> */}
    </div>
  )
}

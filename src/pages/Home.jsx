import React from 'react'
import { Hero } from '../components/Hero'
import SwiperComponent from '../components/SwiperComponent'
import { Projects } from '../components/Projects'
import { About } from '../components/About'
import { Experience } from '../components/Experience'
import { Skills } from '../components/Skills'
import { projects, slides } from '../components/data'

export const Home = () => {
  return (
    <div>
          <Hero />
        <SwiperComponent items={slides} />
        <Projects />
        <SwiperComponent items={projects} />
        <About />
        <Experience />
        <Skills />
    </div>
  )
}

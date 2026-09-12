import React from 'react'
import Hero from '../components/Hero'
import About from '../components/About'
import Skills from '../components/Skills'
import FeaturedWork from '../components/FeaturedWork'
import Testimonials from '../components/Testimonials'
import WhyWorkWithMe from '../components/WhyWorkWithMe'
import Experience from '../components/Experience'

const Home = () => {
  return (
    <div>
        <Hero/>
        <About/>
        <Skills/>
        <Experience/>
        <WhyWorkWithMe/>
        <FeaturedWork/>
        <Testimonials/>
    </div>
  )
}

export default Home
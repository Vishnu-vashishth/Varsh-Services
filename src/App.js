import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/HeroSection/Hero'
import Testimonials from './components/Testimonials/Testimonial'
import Features from './components/Features/Feature'
import Contact from './components/Contactus/Contact'
import Footer from './components/Footer/Footer'
import {Heads} from './components/OurHeads/Heads'
const App = () => {
  return (
    <>

    <Navbar/>
    <Hero/>
    <Features/>
    <Testimonials/>
    <Heads/>
    <Contact/>
    <Footer/>
    </>
  )
}

export default App
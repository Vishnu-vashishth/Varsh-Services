import React from 'react';
import Navbar from './Navbar/Navbar'
import Hero from './HeroSection/Hero'
import Testimonials from './Testimonials/Testimonial'
import Features from './Features/Feature'
import Contact from './Contactus/Contact'
import Footer from './Footer/Footer'
import {Heads} from './OurHeads/Heads';
function Main() {
  return (<>
<Navbar/>
    <Hero/>
    <Features/>
    <Testimonials/>
    <Heads/>
    <Contact/>
    <Footer/>
  </>);
}

export default Main;

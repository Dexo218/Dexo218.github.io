import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Pricing from './components/Pricing';
import ProjectList from './components/Projects/ProjectList';
import CallToAction from './components/CallToAction';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';

const App = () => (
  <>
    <Header />
    <main>
      <Hero />
      <About />
      <Services />
      <Pricing />
      <ProjectList />
      <CallToAction />
      <Testimonials />
      <Contact />
    </main>
    <Footer />
  </>
);

export default App;
import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => (
  <section
    id="hero"
    className="relative flex items-center justify-center min-h-screen text-center px-4 py-20 overflow-hidden
               bg-cover bg-center bg-no-repeat"
    style={{ backgroundImage: 'url(/assets/images/Full-Hero-Shot.jpg)' }}
  >
    <div className="absolute inset-0 bg-black bg-opacity-70"></div> {/* Overlay for readability */}
    {/* Floating elements for visual interest */}
    <div className="absolute top-1/4 left-1/4 w-24 h-24 bg-primary-light rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-float"></div>
    <div className="absolute bottom-1/4 right-1/4 w-32 h-32 bg-secondary-light rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-float animation-delay-2000"></div>
    <div className="absolute top-1/2 left-1/2 w-20 h-20 bg-accent-light rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-float animation-delay-4000"></div>
    <div className="relative z-10 container mx-auto p-8 rounded-2xl glassmorphism shadow-glass-light dark:shadow-glass-dark">
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className="text-5xl md:text-6xl lg:text-7xl font-bold text-white tracking-tight leading-tight"
      >
        Master Your Data Skills.
        <br />
        <span className="text-primary-light dark:text-primary-light">Excel, Power BI, AI & More.</span>
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
        className="mt-6 text-lg md:text-xl mx-auto text-gray-200 leading-relaxed max-w-full"
      >
        Unlock your potential with expert-led, hands-on tutorials in today's most in-demand data and automation tools. Personalized for you or your team.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4, ease: 'easeOut' }}
        className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
      >
        <a
          href="#services"
          className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3 text-base font-medium text-white bg-primary rounded-lg hover:bg-primary-dark transition-colors duration-300 shadow-md"
        >
          Explore Services
        </a>
        <a
          href="#contact"
          className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3 text-base font-medium text-primary border border-primary rounded-lg hover:bg-primary hover:text-white transition-colors duration-300 shadow-md"
        >
          Book a Free Intro
        </a>
      </motion.div>
    </div>
  </section>
);

export default Hero;
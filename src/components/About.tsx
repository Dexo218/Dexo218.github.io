import React from 'react';
import { motion } from 'framer-motion';

const skills = [
  'Advanced Excel & Power BI',
  'SQL & Database Management',
  'AI-Powered Automation',
  'Data Visualization & Storytelling',
  'Custom Dashboard Development',
  'Personalized 1-on-1 Training',
];

const About = () => (
  <section
    id="about"
    className="relative py-20 overflow-hidden bg-cover bg-center bg-no-repeat"
    style={{ backgroundImage: 'url(/assets/images/alina-grubnyak-ZiQkhI7417A-unsplash.jpg)' }}
  >
    <div className="absolute inset-0 bg-background-light dark:bg-background-dark bg-opacity-90"></div>
    <div className="relative z-10 container mx-auto px-4">
      <div className="grid md:grid-cols-12 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, ease: 'easeOut' }}
          viewport={{ once: true }}
          className="md:col-span-4"
        >
          <div className="relative">
            <div className="absolute -inset-2 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full transform rotate-6 opacity-20"></div>
            <img 
              src="/assets/images/profile.jpg" 
              alt="Dexo" 
              className="relative w-full h-auto rounded-full shadow-2xl border-4 border-white dark:border-gray-800" 
              loading="lazy" 
            />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: 'easeOut' }}
          viewport={{ once: true }}
          className="md:col-span-8 text-center md:text-left"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white leading-tight">
            Hi, I'm Dexo.
            <br />
            <span className="text-gray-600 dark:text-gray-300">Your Personal Data Mentor.</span>
          </h2>
          <p className="mt-6 text-lg text-gray-700 dark:text-gray-300 leading-relaxed mx-auto md:mx-0">
            Beyond the data, I'm a 26-year-old natural bodybuilder with a passion for transforming raw data into sculpted insights, much like I transform my physique. When I'm not crunching numbers or lifting weights, you'll find me diving deep into the world of food reviews – always on the hunt for the next great culinary experience. My journey in data analytics, spanning over a decade, is all about empowering you to master data, from Excel and SQL to cutting-edge AI automation. I believe in a hands-on, personalized approach that delivers real-world results, just like a perfectly executed workout.
          </p>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, delay: 0.2, ease: 'easeOut' }}
        viewport={{ once: true }}
        className="mt-20"
      >
        <div className="glassmorphism p-10 rounded-2xl shadow-glass-light dark:shadow-glass-dark border border-white border-opacity-20 dark:border-gray-700 dark:border-opacity-50">
          <h3 className="text-3xl font-bold text-center mb-8 text-gray-900 dark:text-white">What I Bring to the Table</h3>
          <ul className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skills.map((skill) => (
              <li key={skill} className="flex items-center glassmorphism p-4 rounded-lg shadow-glass-light dark:shadow-glass-dark hover:shadow-lg transition-shadow border border-white border-opacity-20 dark:border-gray-700 dark:border-opacity-50">
                <svg className="w-6 h-6 mr-4 text-primary flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                <span className="text-gray-800 dark:text-gray-100 text-base">{skill}</span>
              </li>
            ))}
          </ul>
        </div>
      </motion.div>
    </div>
  </section>
);

export default About;
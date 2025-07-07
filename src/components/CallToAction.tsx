import React from 'react';
import { motion } from 'framer-motion';

const CallToAction = () => {
  return (
    <section
      id="call-to-action"
      className="relative py-20 overflow-hidden bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: 'url(/assets/images/Full-shot-background.jpg)' }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-70"></div>
      <div className="relative z-10 container mx-auto px-4 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6"
        >
          Ready to Transform Your Data Skills?
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
          viewport={{ once: true }}
          className="text-lg md:text-xl text-gray-200 max-w-3xl mx-auto mb-10"
        >
          Join countless professionals who have elevated their careers with personalized, expert-led training in Excel, Power BI, SQL, and AI automation.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: 'easeOut' }}
          viewport={{ once: true }}
        >
          <a
            href="#contact"
            className="inline-block px-8 py-4 text-lg font-semibold text-white bg-primary rounded-full hover:bg-primary-dark transition-colors duration-300 shadow-lg"
          >
            Book Your Free Consultation Today!
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default CallToAction;

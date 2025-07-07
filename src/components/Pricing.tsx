import React from 'react';
import { motion } from 'framer-motion';

const Pricing: React.FC = () => {
  return (
    <section
      id="pricing"
      className="relative py-20 overflow-hidden bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: 'url(/assets/images/learning-bg.jpg)' }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-70"></div>
      <div className="relative z-10 container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            Flexible Pricing for Every Need
          </h2>
          <p className="text-lg mt-4 max-w-2xl mx-auto text-gray-200">
            Choose the plan that best fits your learning journey, whether individual or team-based.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-12">
          {/* Individual Sessions */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
            viewport={{ once: true }}
            className="glassmorphism p-8 rounded-2xl shadow-glass-light dark:shadow-glass-dark border border-white border-opacity-20 dark:border-gray-700 dark:border-opacity-50 text-center"
          >
            <h3 className="text-3xl font-bold text-primary mb-6">Individual Sessions</h3>
            <p className="text-lg text-gray-700 dark:text-gray-200 mb-8">Personalized 1-on-1 training tailored to your specific goals.</p>
            <ul className="space-y-4 text-lg text-gray-700 dark:text-gray-200">
              <li className="flex justify-between items-center">
                <span>Beginner (2 hours)</span>
                <span className="font-semibold text-gray-900 dark:text-white">$150</span>
              </li>
              <li className="flex justify-between items-center">
                <span>Intermediate (2 hours)</span>
                <span className="font-semibold text-gray-900 dark:text-white">$200</span>
              </li>
              <li className="flex justify-between items-center">
                <span>Advanced (2 hours)</span>
                <span className="font-semibold text-gray-900 dark:text-white">$250</span>
              </li>
              <li className="flex justify-between items-center">
                <span>AI Prompting (2 hours)</span>
                <span className="font-semibold text-gray-900 dark:text-white">$75</span>
              </li>
            </ul>
            <p className="mt-8 text-md text-gray-600 dark:text-gray-300">Focus on Excel, Power BI, SQL, or a mix of topics.</p>
          </motion.div>

          {/* Team Workshops */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: 'easeOut' }}
            viewport={{ once: true }}
            className="glassmorphism p-8 rounded-2xl shadow-glass-light dark:shadow-glass-dark border border-white border-opacity-20 dark:border-gray-700 dark:border-opacity-50 text-center"
          >
            <h3 className="text-3xl font-bold text-primary mb-6">Team Workshops</h3>
            <p className="text-lg text-gray-700 dark:text-gray-200 mb-8">Customized training for your team, on-site or remote.</p>
            <ul className="space-y-4 text-lg text-gray-700 dark:text-gray-200">
              <li className="flex justify-between items-center">
                <span>Half-Day (4 hours)</span>
                <span className="font-semibold text-gray-900 dark:text-white">$800</span>
              </li>
              <li className="flex justify-between items-center">
                <span>Full-Day (8 hours)</span>
                <span className="font-semibold text-gray-900 dark:text-white">$300</span>
              </li>
              <li className="flex justify-between items-center">
                <span>Custom Package</span>
                <span className="font-semibold text-gray-900 dark:text-white">Contact for Quote</span>
              </li>
            </ul>
            <p className="mt-8 text-md text-gray-600 dark:text-gray-300">Tailored content for your team's specific needs and size.</p>
          </motion.div>

          {/* AI Prompt Training */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: 'easeOut' }}
            viewport={{ once: true }}
            className="glassmorphism p-8 rounded-2xl shadow-glass-light dark:shadow-glass-dark border border-white border-opacity-20 dark:border-gray-700 dark:border-opacity-50 text-center"
          >
            <h3 className="text-3xl font-bold text-primary mb-6">AI Prompt Training</h3>
            <p className="text-lg text-gray-700 dark:text-gray-200 mb-8">Master the art of prompting for various AI tools and applications.</p>
            <ul className="space-y-4 text-lg text-gray-700 dark:text-gray-200">
              <li className="flex justify-between items-center">
                <span>Foundations (2 hours)</span>
                <span className="font-semibold text-gray-900 dark:text-white">$75</span>
              </li>
              <li className="flex justify-between items-center">
                <span>Advanced Techniques (2 hours)</span>
                <span className="font-semibold text-gray-900 dark:text-white">$125</span>
              </li>
              <li className="flex justify-between items-center">
                <span>Custom AI Integration</span>
                <span className="font-semibold text-gray-900 dark:text-white">Contact for Quote</span>
              </li>
            </ul>
            <p className="mt-8 text-md text-gray-600 dark:text-gray-300">Learn to leverage AI effectively without breaking alignment.</p>
          </motion.div>
        </div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6, ease: 'easeOut' }}
          viewport={{ once: true }}
          className="mt-16 text-xl text-center text-gray-200 max-w-3xl mx-auto"
        >
          Looking for something specific? <a href="#contact" className="text-primary hover:underline">Contact us</a> for custom packages and long-term training programs.
        </motion.p>
      </div>
    </section>
  );
};

export default Pricing;
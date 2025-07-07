import React from 'react';
import { motion } from 'framer-motion';

const services = [
  {
    title: 'Microsoft Excel',
    description: 'Master Excel from basics to advanced levels. Learn to analyze data, create charts, and use formulas for powerful data manipulation.',
    icon: '/assets/images/Microsoft_Office_Excel_(2019–present).svg',
  },
  {
    title: 'Power BI',
    description: 'Develop interactive dashboards and reports. Connect to various data sources and visualize your data for insightful decision-making.',
    icon: '/assets/images/New_Power_BI_Logo.svg',
  },
  {
    title: 'SQL',
    description: 'Gain proficiency in SQL for database management. Learn to query, update, and manage data efficiently across various database systems.',
    icon: '/assets/images/sql-database-generic-svgrepo-com.svg',
  },
  {
    title: 'AI-Powered Automation',
    description: 'Automate repetitive tasks using AI. Implement intelligent workflows that save time and reduce errors, boosting productivity.',
    icon: '/assets/images/ChatGPT-Logo.svg',
  },
  {
    title: 'Data Visualization',
    description: 'Learn to present data in a compelling way. Use tools like Tableau and Looker Studio to create visuals that tell a clear story.',
    icon: '/assets/images/free-duo-tone-icons.svg',
  },
  {
    title: 'Custom Team Workshops',
    description: 'Get training customized for your team’s needs. We offer flexible workshops that focus on your specific goals and challenges.',
    icon: '/assets/images/Google_Gemini_logo.svg',
  },
];

const Services = () => (
  <section
    id="services"
    className="relative py-20 overflow-hidden bg-cover bg-center bg-no-repeat"
    style={{ backgroundImage: 'url(/assets/images/Full-shot-background.jpg)' }}
  >
    <div className="absolute inset-0 bg-black bg-opacity-70"></div>
    <div className="relative z-10 container mx-auto px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        viewport={{ once: true }}
      >
        <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-900 dark:text-white">
          Services Offered
        </h2>
        <p className="text-lg text-center mt-6 max-w-3xl mx-auto text-gray-600 dark:text-gray-300">
          We provide personalized training and workshops in leading data tools to enhance your skills.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
        {services.map((service, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1, ease: 'easeOut' }}
            viewport={{ once: true }}
            className="glassmorphism p-8 rounded-2xl shadow-glass-light dark:shadow-glass-dark flex flex-col items-center text-center border border-white border-opacity-20 dark:border-gray-700 dark:border-opacity-50"
          >
            <img src={service.icon} alt={`${service.title} icon`} className="w-16 h-16 mb-6" />
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white">{service.title}</h3>
            <p className="mt-4 text-gray-700 dark:text-gray-200">{service.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default Services;

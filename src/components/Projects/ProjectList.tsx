import React from 'react';
import { motion } from 'framer-motion';
import ProjectCard from './ProjectCard';

const projects = [
  {
    title: 'Sales Dashboard for Retail Co.',
    description: 'An interactive Power BI dashboard that helped a retail client increase sales by 15% through actionable insights.',
    url: '#',
    img: '/assets/images/Sales Dashboard.png',
    tags: ['Power BI', 'Data Modeling', 'DAX'],
  },
  {
    title: 'Financial Forecasting with Excel',
    description: 'Developed a dynamic financial model in Excel for a startup to secure funding and plan for future growth.',
    url: '#',
    img: '/assets/images/Forecast-dashboard-example.png',
    tags: ['Excel', 'Financial Modeling', 'Automation'],
  },
  {
    title: 'Marketing Analytics with Looker',
    description: 'Built a comprehensive Looker Studio report to track marketing ROI and optimize campaign spend.',
    url: '#',
    img: '/assets/images/Website-KPI-dashboard.png',
    tags: ['Looker Studio', 'Google Analytics', 'BigQuery'],
  },
];

const ProjectList = () => (
  <section
    id="projects"
    className="relative py-20 overflow-hidden bg-cover bg-center bg-no-repeat"
    style={{ backgroundImage: 'url(/assets/images/StockCake-Café Workstation Setup_1751879041.jpg)' }}
  >
    <div className="absolute inset-0 bg-black bg-opacity-70"></div>
    <div className="relative z-10 container mx-auto px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        viewport={{ once: true }}
        className="text-center mb-12"
      >
        <h2 className="text-4xl md:text-5xl font-bold text-center text-white">
          My Portfolio
        </h2>
        <p className="text-lg text-center mt-4 max-w-2xl mx-auto text-gray-200">
          Explore a selection of my work, showcasing real-world data solutions.
        </p>
      </motion.div>

      <div className="flex overflow-x-auto space-x-8 pb-4">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1, ease: 'easeOut' }}
            viewport={{ once: true }}
          >
            <ProjectCard {...project} />
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default ProjectList;
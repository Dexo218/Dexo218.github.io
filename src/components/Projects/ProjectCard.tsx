import React from 'react';
import { motion } from 'framer-motion';

interface Props {
  title: string;
  description: string;
  url: string;
  img: string;
  tags: string[];
}

const ProjectCard = ({ title, description, url, img, tags }: Props) => (
  <motion.div
    whileHover={{ y: -8 }}
    className="glassmorphism rounded-2xl shadow-glass-light dark:shadow-glass-dark overflow-hidden h-full flex flex-col border border-white border-opacity-20 dark:border-gray-700 dark:border-opacity-50 min-w-[300px] md:min-w-[350px] lg:min-w-[400px]"
  >
    <a href={url} target="_blank" rel="noopener noreferrer">
      <img src={img} alt={title} className="w-full h-64 object-contain" loading="lazy" />
    </a>
    <div className="p-6 flex flex-col flex-grow">
      <h3 className="text-xl font-bold text-text-light dark:text-text-dark">{title}</h3>
      <p className="mt-2 text-text-light dark:text-text-dark flex-grow">{description}</p>
      <div className="mt-4 flex flex-wrap gap-2">
        {tags.map((tag) => (
          <span
            key={tag}
            className="px-3 py-1 text-sm font-semibold text-primary-dark dark:text-primary-light bg-primary-dark bg-opacity-10 dark:bg-opacity-20 rounded-full"
          >
            {tag}
          </span>
        ))}
      </div>
      <a href={url} target="_blank" rel="noopener noreferrer" className="mt-6 text-sm font-semibold text-accent-dark dark:text-accent-light hover:underline">
        View Case Study &rarr;
      </a>
    </div>
  </motion.div>
);

export default ProjectCard;
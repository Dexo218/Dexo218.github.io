import React from 'react';
import { motion } from 'framer-motion';

const testimonials = [
  {
    quote: "Dexo's expertise in Power BI transformed our data analysis. Highly recommended!",
    name: "Sarah Chen",
    title: "Marketing Director",
    avatar: "/assets/images/profile.jpg", // Placeholder image
  },
  {
    quote: "The personalized Excel training was incredibly helpful. I now feel confident handling complex spreadsheets.",
    name: "John Smith",
    title: "Financial Analyst",
    avatar: "/assets/images/profile.jpg", // Placeholder image
  },
  {
    quote: "Dexo made SQL easy to understand. Our team's data querying skills have significantly improved.",
    name: "Emily White",
    title: "Operations Manager",
    avatar: "/assets/images/profile.jpg", // Placeholder image
  },
  {
    quote: "The insights provided by Dexo were invaluable for our computer studies curriculum. Highly recommend their training.",
    name: "Heubert M. Ferolino",
    title: "Faculty",
    avatar: "/assets/images/Heubert Ferolino 1.jfif",
  },
  {
    quote: "Dexo's approach to data education is truly impactful. Our students greatly benefited from their practical sessions.",
    name: "Andrew Mores",
    title: "Faculty",
    avatar: "/assets/images/Andrew Mores.webp",
  },
];

const Testimonials = () => (
  <section
    id="testimonials"
    className="relative py-20 overflow-hidden bg-cover bg-center bg-no-repeat"
    style={{ backgroundImage: 'url(/assets/images/pexels-goumbik-669619.jpg)' }}
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
        <h2 className="text-4xl md:text-5xl font-bold text-center text-white">
          What Clients Say
        </h2>
        <p className="text-lg mt-4 max-w-2xl mx-auto text-gray-200">
          Hear from those who have transformed their data skills with Dexo.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {testimonials.map((testimonial, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1, ease: 'easeOut' }}
            viewport={{ once: true }}
            className="glassmorphism p-8 rounded-2xl shadow-glass-light dark:shadow-glass-dark border border-white border-opacity-20 dark:border-gray-700 dark:border-opacity-50 flex flex-col justify-between"
          >
            <p className="text-lg italic text-text-light dark:text-text-dark mb-6">"{testimonial.quote}"</p>
            <div className="flex items-center mt-4">
              <img src={testimonial.avatar} alt={testimonial.name} className="w-12 h-12 rounded-full mr-4 object-cover" />
              <div>
                <p className="font-bold text-primary-dark dark:text-primary-light">{testimonial.name}</p>
                <p className="text-sm text-text-light dark:text-text-dark">{testimonial.title}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default Testimonials;

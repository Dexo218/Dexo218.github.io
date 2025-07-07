import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here (e.g., send to an API endpoint)
    // For this example, we'll just simulate a successful submission.
    setSubmitted(true);
  };

  return (
    <section
    id="contact"
    className="relative py-20 overflow-hidden bg-cover bg-center bg-no-repeat"
    style={{ backgroundImage: 'url(/assets/images/istockphoto-1362181407-1024x1024.jpg)' }}
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
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white">Ready to Level Up?</h2>
          <p className="text-xl mt-6 max-w-3xl mx-auto text-gray-200 leading-relaxed">
            Book a complimentary 30-minute consultation to discuss your goals and how I can help you achieve them.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center space-y-4 text-lg text-gray-200">
            <p><strong>Phone:</strong> <a href="tel:+639206994866" className="text-primary hover:underline">+63 920 699 4866</a></p>
            <p><strong>Email:</strong> <a href="mailto:siglosdexterlloyd85@gmail.com" className="text-primary hover:underline">siglosdexterlloyd85@gmail.com</a></p>
            <div className="flex space-x-6 mt-4">
              <a href="https://www.linkedin.com/in/dexter-lloyd-siglos-85a0b9218/" target="_blank" rel="noopener noreferrer" className="text-gray-200 hover:text-primary transition-colors duration-300">
                <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 fill-current"><title>LinkedIn</title><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9.495h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.062 2.062 2.062 0 0 1 2.063-2.062c1.132 0 2.064.93 2.064 2.062A2.062 2.062 0 0 1 5.337 7.433zm-.044 13.019H1.737V9.495h3.556v10.957zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z"/></svg>
              </a>
              <a href="https://twitter.com/YOUR-TWITTER" target="_blank" rel="noopener noreferrer" className="text-gray-200 hover:text-primary transition-colors duration-300">
                <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 fill-current"><title>X</title><path d="M18.901 1.153h3.68l-8.042 9.167 9.649 12.107h-8.688L8.092 10.76 1.41 1.153H5.02L10.337 8.26l-5.44 6.465-1.045 1.312 1.045-1.312 5.44-6.465 6.465-8.26zM1.41 1.153h3.68l-8.042 9.167 9.649 12.107h-8.688L8.092 10.76 1.41 1.153z"/></svg>
              </a>
              <a href="https://www.instagram.com/dexterlloydsiglos/" target="_blank" rel="noopener noreferrer" className="text-gray-200 hover:text-primary transition-colors duration-300">
                <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 fill-current"><title>Instagram</title><path d="M12 0C8.74 0 8.333.014 7.053.072 5.775.132 4.92.333 4.065.757c-.843.42-1.49.951-2.128 1.589-.638.638-1.169 1.285-1.589 2.128-.424.845-.625 1.69-.685 2.968C.014 8.333 0 8.74 0 12s.014 3.668.072 4.947c.06 1.277.261 2.122.685 2.967.42.843.951 1.49 1.589 2.128.638.638 1.284 1.169 2.128 1.589.845.424 1.69.625 2.967.685C8.333 23.986 8.74 24 12 24s3.668-.014 4.947-.072c1.277-.06 2.122-.261 2.967-.685.843-.42 1.49-.951 2.128-1.589.638-.638 1.169-1.284 1.589-2.128.424-.845.625-1.69.685-2.967.058-1.278.072-1.687.072-4.947s-.014-3.667-.072-4.947c-.06-1.277-.261-2.122-.685-2.967-.42-.843-.951-1.49-1.589-2.128C21.362 1.49 20.716.951 19.872.53c-.845-.424-1.69-.625-2.967-.685C15.667.014 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.465.602.304 1.096.738 1.518 1.16.422.422.856.916 1.16 1.518.216.422.409 1.057.465 2.228.055 1.265.071 1.647.071 4.85s-.016 3.585-.071 4.85c-.055 1.17-.249 1.805-.465 2.227-.304.602-.738 1.096-1.16 1.518-.422.422-.856.916-1.518 1.16-.422.216-1.057.409-2.228-.465C2.16 15.585 2.147 15.203 2.147 12s.016-3.585.071-4.85c.055-1.17.249-1.805.465-2.227.304-.602.738-1.096 1.16-1.518.422-.422.916-.856 1.518-1.16.422-.216 1.057-.409 2.228-.465C8.415 2.16 8.797 2.147 12 2.147zm0 3.615c-3.289 0-5.933 2.645-5.933 5.933s2.644 5.933 5.933 5.933 5.933-2.645 5.933-5.933-2.644-5.933-5.933-5.933zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 1 0 2.88 1.44 1.44 0 0 1 0-2.88z"/></svg>
              </a>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto glassmorphism p-10 rounded-2xl shadow-glass-light dark:shadow-glass-dark border border-white border-opacity-20 dark:border-gray-700 dark:border-opacity-50"
        >
          {submitted ? (
            <div className="text-center py-12">
              <h3 className="text-2xl font-bold text-primary">Thank You!</h3>
              <p className="mt-4 text-gray-200 text-lg">Your request has been sent. I'll be in touch within 24 hours to schedule our session.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-8">
              <div>
                <label htmlFor="name" className="block text-base font-semibold text-gray-900 dark:text-white mb-3">Full Name</label>
                <input type="text" id="name" name="name" required className="w-full px-5 py-3 bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-700 rounded-xl focus:ring-2 focus:ring-primary outline-none transition-all text-lg text-gray-900 dark:text-white" placeholder="John Doe" />
              </div>
              <div>
                <label htmlFor="email" className="block text-base font-semibold text-gray-900 dark:text-white mb-3">Email Address</label>
                <input type="email" id="email" name="email" required className="w-full px-5 py-3 bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-700 rounded-xl focus:ring-2 focus:ring-primary outline-none transition-all text-lg text-gray-900 dark:text-white" placeholder="you@example.com" />
              </div>
              <div>
                <label htmlFor="interest" className="block text-base font-semibold text-gray-900 dark:text-white mb-3">I'm interested in...</label>
                <select id="interest" name="interest" required className="w-full px-5 py-3 bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-700 rounded-xl focus:ring-2 focus:ring-primary outline-none transition-all text-lg text-gray-900 dark:text-white">
                  <option>Excel Training</option>
                  <option>Power BI Training</option>
                  <option>Looker Studio Training</option>
                  <option>AI Automation</option>
                  <option>Team Workshop</option>
                  <option>Other</option>
                </select>
              </div>
              <div>
                <label htmlFor="message" className="block text-base font-semibold text-gray-900 dark:text-white mb-3">Your Goals</label>
                <textarea id="message" name="message" rows={5} required className="w-full px-5 py-3 bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-700 rounded-xl focus:ring-2 focus:ring-primary outline-none transition-all text-lg text-gray-900 dark:text-white" placeholder="Tell me a bit about what you want to achieve."></textarea>
              </div>
              <div className="text-center">
                <button type="submit" className="w-full sm:w-auto inline-block px-10 py-4 text-lg font-semibold text-white bg-primary rounded-full hover:opacity-80 transition-opacity duration-300">
                  Book My Free Session
                </button>
              </div>
            </form>
          )}
        </motion.div>
      </div>
  </section>
);
};

export default Contact;
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import ThemeToggle from './ThemeToggle';

const navLinks = [
  { href: '#about', label: 'About', icon: '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5"><path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" /></svg>' },
  { href: '#services', label: 'Services', icon: '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5"><path strokeLinecap="round" strokeLinejoin="round" d="M9.594 3.94c.09-.542.333-1.014.693-1.374s.832-.603 1.374-.693c.557-.093 1.135.018 1.66.265 1.087.51 1.845 1.377 2.32 2.508.28.665.264 1.37.08 2.04a6.37 6.37 0 01-.94 2.523 6.37 6.37 0 01-2.523.94c-.67.184-1.375.2-2.04.08-.53-.088-1.002-.33-1.362-.69s-.603-.832-.693-1.374c-.093-.557.018-1.135.265-1.66.51-1.087 1.377-1.845 2.508-2.32.665-.28 1.37-.264 2.04-.08z" /><path strokeLinecap="round" strokeLinejoin="round" d="M4.5 10.5h15" /><path strokeLinecap="round" strokeLinejoin="round" d="M12 12.75v9" /><path strokeLinecap="round" strokeLinejoin="round" d="M12 12.75a2.25 2.25 0 002.25 2.25M12 12.75a2.25 2.25 0 01-2.25 2.25m-1.5 1.5a2.25 2.25 0 002.25 2.25m-1.5-1.5a2.25 2.25 0 01-2.25 2.25m7.5-1.5a2.25 2.25 0 002.25 2.25m-1.5-1.5a2.25 2.25 0 01-2.25 2.25" /></svg>' },
  { href: '#projects', label: 'Projects', icon: '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5"><path strokeLinecap="round" strokeLinejoin="round" d="M3.75 9.776c.112-.012.224-.024.336-.037l.36-.073a11.104 11.104 0 01.801-.153 6.504 6.504 0 001.677-.442 2.675 2.675 0 012.612 3.103 3.374 3.374 0 00.679 2.935 3.374 3.374 0 01.679 2.935 2.675 2.675 0 002.612 3.103 6.504 6.504 0 011.677-.442 11.104 11.104 0 01.801-.153l.36-.073c.112-.013.224-.025.336-.037M3.75 9.776a6.5 6.5 0 017.5-6.472m-7.5 6.472c0 5.466 3.667 9.914 8.333 9.914m-15-6.472h16.5M3.75 9.776L18.25 4.224M18.25 4.224a6.5 6.5 0 01-7.5 6.472m7.5-6.472c0 5.466-3.667 9.914-8.333 9.914m-15 0h16.5" /></svg>' },
  { href: '#contact', label: 'Contact', icon: '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5"><path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" /></svg>' },
];

const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'glassmorphism shadow-lg dark:shadow-xl' : 'bg-transparent'}`}
    >
      <div className="container mx-auto flex items-center justify-between p-5">
        <a href="#hero" className="text-2xl font-bold text-text-light dark:text-text-dark tracking-wide">
          Dexo
        </a>
        <div className="flex items-center space-x-8">
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-text-light dark:text-text-dark hover:text-primary dark:hover:text-primary transition-colors duration-300 flex items-center space-x-2 group"
              >
                <span className="group-hover:scale-110 transition-transform duration-300" dangerouslySetInnerHTML={{ __html: link.icon }}></span>
                <span>{link.label}</span>
              </a>
            ))}
          </nav>
          <ThemeToggle />
          <a href="#contact" className="hidden md:inline-block px-5 py-2 text-sm font-medium text-white bg-primary rounded-lg hover:bg-primary-dark transition-colors duration-300">
            Book a Session
          </a>
        </div>
      </div>
    </motion.header>
  );
};

export default Header;
const { fontFamily } = require("tailwindcss/defaultTheme");
const plugin = require('tailwindcss/plugin');

module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: 'class',
  theme: {
    extend: {
      container: {
        center: true,
        padding: '1rem',
        screens: {
          sm: '640px',
          md: '768px',
          lg: '1024px',
          xl: '1280px',
          '2xl': '1440px',
        },
      },
      colors: {
        primary: {
          DEFAULT: '#6366F1', // Indigo 500
          light: '#818CF8', // Indigo 400
          dark: '#4F46E5', // Indigo 600
        },
        secondary: {
          DEFAULT: '#EC4899', // Pink 500
          light: '#F472B6', // Pink 400
          dark: '#DB2777', // Pink 600
        },
        accent: {
          DEFAULT: '#06B6D4', // Cyan 500
          light: '#22D3EE', // Cyan 400
          dark: '#0891B2', // Cyan 600
        },
        background: {
          light: '#F0F2F5', // Light gray for backgrounds
          dark: '#121212', // Dark gray for backgrounds
        },
        surface: {
          light: '#FFFFFF', // White for cards/surfaces
          dark: '#1E1E1E', // Darker gray for cards/surfaces
        },
        text: {
          light: '#333333',
          dark: '#E0E0E0',
        },
        border: {
          light: '#EAEAEA',
          dark: '#3A3A3A',
        },
      },
      fontFamily: {
        sans: ["Inter", ...fontFamily.sans],
        display: ["Inter", ...fontFamily.sans],
      },
      boxShadow: {
        'glass-light': '0 4px 6px rgba(0, 0, 0, 0.1), 0 1px 3px rgba(0, 0, 0, 0.08)',
        'glass-dark': '0 4px 6px rgba(0, 0, 0, 0.2), 0 1px 3px rgba(0, 0, 0, 0.15)',
        '3d-light': '5px 5px 15px rgba(0, 0, 0, 0.1), -5px -5px 15px rgba(255, 255, 255, 0.7)',
        '3d-dark': '5px 5px 15px rgba(0, 0, 0, 0.3), -5px -5px 15px rgba(50, 50, 50, 0.5)',
      },
      transitionProperty: {
        'height': 'height',
        'spacing': 'margin, padding',
        'colors': 'background-color, border-color, color, fill, stroke, opacity, box-shadow, transform',
      },
      transitionDuration: {
        'DEFAULT': '300ms',
      },
      backdropBlur: {
        'xs': '2px',
        'sm': '4px',
        'md': '8px',
        'lg': '12px',
        'xl': '16px',
        '2xl': '24px',
        '3xl': '40px',
      },
      keyframes: {
        'fade-in-up': {
          'from': { opacity: 0, transform: 'translateY(20px)' },
          'to': { opacity: 1, transform: 'translateY(0)' },
        },
        'float': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
      animation: {
        'fade-in-up': 'fade-in-up 0.6s ease-out forwards',
        'float': 'float 3s ease-in-out infinite',
      },
    },
  },
  plugins: [
    plugin(function({ addUtilities }) {
      addUtilities({
        '.glassmorphism': {
          'background-color': 'rgba(255, 255, 255, 0.9)',
          'border': '1px solid rgba(255, 255, 255, 0.3)',
          'box-shadow': '0 4px 30px rgba(0, 0, 0, 0.1)',
        },
        '.dark .glassmorphism': {
          'background-color': 'rgba(0, 0, 0, 0.9)',
          'border': '1px solid rgba(255, 255, 255, 0.15)',
          'box-shadow': '0 4px 30px rgba(0, 0, 0, 0.2)',
        },
      });
    }),
  ],
};

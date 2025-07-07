const fs = require('fs');
const path = require('path');

// Base project directory
const baseDir = 'C:/Users/siglo/Documents/GitHub/Dexo218.github.io';

// Folder structure
const folders = [
  'public/assets/images',
  'src/assets/images',
  'src/components/Projects',
  'src/hooks',
  'src/styles'
];

// Files to create [relative path, contents]
const files = [
  ['src/main.tsx', `import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./styles/global.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
`],
  ['src/App.tsx', `import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects/ProjectList";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ThemeToggle from "./components/ThemeToggle";

const App = () => (
  <div className="bg-white dark:bg-gray-900 text-gray-900 dark:text-white transition-colors duration-300 min-h-screen flex flex-col">
    <Header />
    <main className="flex-1">
      <Hero />
      <About />
      <Projects />
      <Contact />
    </main>
    <ThemeToggle />
    <Footer />
  </div>
);

export default App;
`],
  ['src/vite-env.d.ts', `/// <reference types="vite/client" />
`],
  ['src/styles/global.css', `@tailwind base;
@tailwind components;
@tailwind utilities;

html {
  scroll-behavior: smooth;
}
body {
  font-family: 'Inter', system-ui, sans-serif;
}
`],
  ['.gitignore', `node_modules
dist
.env
.DS_Store
`],
  ['.env.example', `VITE_API_URL=
`],
  ['tailwind.config.js', `/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    "./public/index.html"
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"]
      }
    },
  },
  plugins: [],
};
`],
  ['postcss.config.js', `module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
};
`],
  ['tsconfig.json', `{
  "compilerOptions": {
    "target": "ESNext",
    "lib": ["DOM", "DOM.Iterable", "ESNext"],
    "allowJs": false,
    "skipLibCheck": true,
    "esModuleInterop": true,
    "allowSyntheticDefaultImports": true,
    "strict": true,
    "forceConsistentCasingInFileNames": true,
    "module": "ESNext",
    "moduleResolution": "Node",
    "resolveJsonModule": true,
    "isolatedModules": true,
    "jsx": "react-jsx",
    "incremental": true,
    "noEmit": true
  },
  "include": ["src"]
}
`],
  ['vite.config.ts', `import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
});
`],
  ['public/index.html', `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta name="description" content="Modern web developer portfolio of Dexo218" />
    <meta property="og:title" content="Dexo218 | Portfolio" />
    <meta property="og:description" content="Market-ready, modern portfolio" />
    <meta property="og:type" content="website" />
    <meta property="og:image" content="/assets/images/og-image.png" />
    <link rel="icon" href="/favicon.ico" />
    <title>Dexo218 | Portfolio</title>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;700;900&display=swap" rel="stylesheet">
  </head>
  <body class="bg-white dark:bg-gray-900 text-gray-900 dark:text-white">
    <div id="root"></div>
    <script type="module" src="/src/main.tsx"></script>
  </body>
</html>
`]
];

// Create folders
folders.forEach(folder => {
  const folderPath = path.join(baseDir, folder);
  if (!fs.existsSync(folderPath)) {
    fs.mkdirSync(folderPath, { recursive: true });
    console.log(`Created folder: ${folderPath}`);
  }
});

// Create files
files.forEach(([filePath, content]) => {
  const fullPath = path.join(baseDir, filePath);
  fs.writeFileSync(fullPath, content, 'utf8');
  console.log(`Created file: ${fullPath}`);
});

console.log("\nFolder structure and starter files created successfully!");
import React from 'react';

const socialLinks = [
  { name: 'LinkedIn', url: 'https://www.linkedin.com/in/dexter-lloyd-siglos-85a0b9218/', icon: '<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>LinkedIn</title><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9.495h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.062 2.062 2.062 0 0 1 2.063-2.062c1.132 0 2.064.93 2.064 2.062A2.062 2.062 0 0 1 5.337 7.433zm-.044 13.019H1.737V9.495h3.556v10.957zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z"/></svg>' },
  { name: 'Twitter', url: 'https://twitter.com/YOUR-TWITTER', icon: '<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>X</title><path d="M18.901 1.153h3.68l-8.042 9.167 9.649 12.107h-8.688L8.092 10.76 1.41 1.153H5.02L10.337 8.26l-5.44 6.465-1.045 1.312 1.045-1.312 5.44-6.465 6.465-8.26zM1.41 1.153h3.68l-8.042 9.167 9.649 12.107h-8.688L8.092 10.76 1.41 1.153z"/></svg>' },
  { name: 'Instagram', url: 'https://www.instagram.com/dexterlloydsiglos/', icon: '<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Instagram</title><path d="M12 0C8.74 0 8.333.014 7.053.072 5.775.132 4.92.333 4.065.757c-.843.42-1.49.951-2.128 1.589-.638.638-1.169 1.285-1.589 2.128-.424.845-.625 1.69-.685 2.968C.014 8.333 0 8.74 0 12s.014 3.668.072 4.947c.06 1.277.261 2.122.685 2.967.42.843.951 1.49 1.589 2.128.638.638 1.284 1.169 2.128 1.589.845.424 1.69.625 2.967.685C8.333 23.986 8.74 24 12 24s3.668-.014 4.947-.072c1.277-.06 2.122-.261 2.967-.685.843-.42 1.49-.951 2.128-1.589.638-.638 1.169-1.284 1.589-2.128.424-.845.625-1.69.685-2.967.058-1.278.072-1.687.072-4.947s-.014-3.667-.072-4.947c-.06-1.277-.261-2.122-.685-2.967-.42-.843-.951-1.49-1.589-2.128C21.362 1.49 20.716.951 19.872.53c-.845-.424-1.69-.625-2.967-.685C15.667.014 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.465.602.304 1.096.738 1.518 1.16.422.422.856.916 1.16 1.518.216.422.409 1.057.465 2.228.055 1.265.071 1.647.071 4.85s-.016 3.585-.071 4.85c-.055 1.17-.249 1.805-.465 2.227-.304.602-.738 1.096-1.16 1.518-.422.422-.856.916-1.518 1.16-.422.216-1.057.409-2.228-.465C2.16 15.585 2.147 15.203 2.147 12s.016-3.585.071-4.85c.055-1.17.249-1.805.465-2.227.304-.602.738-1.096 1.16-1.518.422-.422.916-.856 1.518-1.16.422-.216 1.057-.409 2.228-.465C8.415 2.16 8.797 2.147 12 2.147zm0 3.615c-3.289 0-5.933 2.645-5.933 5.933s2.644 5.933 5.933 5.933 5.933-2.645 5.933-5.933-2.644-5.933-5.933-5.933zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 1 0 2.88 1.44 1.44 0 0 1 0-2.88z"/></svg>' },
  { name: 'GitHub', url: 'https://github.com/Dexo218', icon: '<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>GitHub</title><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.835 2.809 1.305 3.493.998.108-.776.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.046.138 3.003.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.807 24 17.306 24 12c0-6.627-5.373-12-12-12z"/></svg>' },
];

const Footer = () => (
  <footer className="bg-surface-light dark:bg-surface-dark py-10 border-t border-border-light dark:border-border-dark">
    <div className="container mx-auto px-4 text-center text-text-light dark:text-text-dark">
      <div className="flex justify-center space-x-8 mb-6">
        {socialLinks.map((link) => (
          <a
            key={link.name}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-primary dark:hover:text-primary transition-colors duration-300 text-gray-600 dark:text-gray-300 flex items-center space-x-2 text-lg"
          >
            <span dangerouslySetInnerHTML={{ __html: link.icon }}></span>
            <span>{link.name}</span>
          </a>
        ))}
      </div>
      <div className="flex flex-col items-center space-y-2 mb-4">
        <p className="text-md flex items-center space-x-2">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M20 22.05H4c-1.104 0-2-.896-2-2V4c0-1.104.896-2 2-2h16c1.104 0 2 .896 2 2v16c0 1.104-.896 2-2 2zm-10-14.05h-2v2h2v-2zm0 4h-2v2h2v-2zm0 4h-2v2h2v-2zm4-8h-2v2h2v-2zm0 4h-2v2h2v-2zm0 4h-2v2h2v-2zm4-8h-2v2h2v-2zm0 4h-2v2h2v-2zm0 4h-2v2h2v-2z"/></svg>
          <span>+63 920 699 4866</span>
        </p>
        <p className="text-md flex items-center space-x-2">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M20 4H4c-1.104 0-2 .896-2 2v12c0 1.104.896 2 2 2h16c1.104 0 2-.896 2-2V6c0-1.104-.896-2-2-2zm0 2v.511l-8 6.4-8-6.4V6h16zm0 12H4V8.387l8 6.4 8-6.4V18z"/></svg>
          <span>siglosdexterlloyd85@gmail.com</span>
        </p>
      </div>
      <p className="text-md">&copy; {new Date().getFullYear()} Dexo. All Rights Reserved.</p>
      <p className="text-sm mt-2 text-gray-500 dark:text-gray-400">Expert Tutorials in Excel, Power BI, AI & More.</p>
    </div>
  </footer>
);

export default Footer;

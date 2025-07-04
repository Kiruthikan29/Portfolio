import React from 'react';

const Footer = () => (
  <footer className="bg-blue-600 text-white text-center p-4 mt-8">
    <p>© {new Date().getFullYear()} Kiruthikan. All rights reserved.</p>
    <div className="mt-2">
      <a href="https://github.com/kiruthikan29" className="mr-4">GitHub </a>
      
      <a href="https://linkedin.com/in/kiruthikan-kunasekaram-809429344"> LinkedIn</a>
    </div>
  </footer>
);

export default Footer;

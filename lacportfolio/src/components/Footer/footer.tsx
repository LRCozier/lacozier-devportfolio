import React from 'react';
import './Footer.css';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer" role="contentinfo">
      <div className="footer-content container">
        <div className="footer-info">
            <span className="footer-name">Luke Rudderham-Cozier</span>
            <p>&copy; {currentYear} Luke Rudderham-Cozier. All rights reserved.</p>
        </div>
        <address className="footer-socials" aria-label="Footer Social Links">
            <a href="https://github.com/lrcozier" target="_blank" rel="noopener noreferrer" aria-label="GitHub Profile">
              <FaGithub aria-hidden="true" />
            </a>
            <a href="https://www.linkedin.com/in/luke-rudderham-cozier-30205343/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn Profile">
              <FaLinkedin aria-hidden="true" />
            </a>
        </address>
      </div>
    </footer>
  );
};

export default Footer;
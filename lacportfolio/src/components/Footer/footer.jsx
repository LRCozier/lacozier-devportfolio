import './Footer.css';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content container">
        <div className="footer-info">
            <span className="footer-name">Luke Cozier</span>
            <p>&copy; 2025 Luke Cozier. All rights reserved.</p>
        </div>
        <div className='footer-socials'>
            <a href='https://github.com/lrcozier' target='_blank' rel="noopener noreferrer" aria-label="GitHub"><FaGithub /></a>
            <a href='https://www.linkedin.com/in/laurencozier' target='_blank' rel="noopener noreferrer" aria-label="LinkedIn"><FaLinkedin /></a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
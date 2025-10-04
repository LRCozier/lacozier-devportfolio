import './Footer.css';
import { FaGithub, FaLinkedin} from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content container">
        <div className="footer-info">
            <span className="footer-name">Luke Rudderham-Cozier</span>
            <p>&copy; {new Date().getFullYear()} Luke Rudderham-Cozier. All rights reserved.</p>
        </div>
        <div className='footer-socials'>
            <a href='https://github.com/lrcozier' target='_blank' rel="noopener noreferrer" aria-label="GitHub"><FaGithub /></a>
            <a href='https://www.linkedin.com/in/luke-rudderham-cozier-30205343/' target='_blank' rel="noopener noreferrer" aria-label="LinkedIn"><FaLinkedin /></a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
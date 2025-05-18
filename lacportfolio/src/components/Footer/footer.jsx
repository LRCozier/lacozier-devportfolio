import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faGithub,faLinkedin} from '@fortawesome/free-brands-svg-icons'


const Footer = () => {
  return (
    <footer>
      <p>&copy; 2025 Luke Rudderham-Cozier. All rights reserved.</p>
      <div className='footer-socials'>
        <ul>
        <a href='https://github.com/LRCozier' target='_blank'><li><FontAwesomeIcon icon={faGithub} /></li></a>
        <a href='https://www.linkedin.com/in/luke-rudderham-cozier-30205343/' target='_blank'><li><FontAwesomeIcon icon={faLinkedin} /></li></a>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
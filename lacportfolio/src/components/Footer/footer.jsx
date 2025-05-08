import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


const Footer = () => {
  return (
    <footer>
      <p>&copy; 2025 Luke Rudderham-Cozier. All rights reserved.</p>
      <div className='footer-socials'>
        <FontAwesomeIcon icon={faGithub} />
        <FontAwesomeIcon icon={Linkedin} />
      </div>
    </footer>
  );
};

export default Footer;
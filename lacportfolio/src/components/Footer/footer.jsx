import './Footer.css';
import {SocialIcon} from 'react-social-icons';


const Footer = () => {
  return (
    <footer>
      <p>&copy; 2025 Luke Rudderham-Cozier. All rights reserved.</p>
      <div id="yogiclaire-footer-socials">
        <SocialIcon url="https://github.com/LRCozier"/>
        <SocialIcon url="https://www.linkedin.com/in/luke-rudderham-cozier-30205343/"/>
      </div>
    </footer>
  );
};

export default Footer;
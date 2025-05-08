import './Footer.css';
import {SocialIcon} from 'react-social-icons';


const Footer = () => {
  return (
    <footer>
      <p>&copy; 2025 Luke Rudderham-Cozier. All rights reserved.</p>
      <div id="yogiclaire-footer-socials">
        <SocialIcon url=""/>
        <SocialIcon url=""/>
      </div>
    </footer>
  );
};

export default Footer;
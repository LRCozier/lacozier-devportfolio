import React from "react";
import "./pages.css";
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import ContactForm from "../components/ContactForm/contactform";

const Contact: React.FC = () => {
  return (
    <section id="contact" className="contact-section page-section">
      <div className="container">
        <header>
          <h1 className="section-heading">Ready for a Diagnostic? Let’s Talk.</h1>
          <p className="section-subheading">
            Whether you’re struggling with a buggy legacy site, poor loading speeds, or need a high-performance build 
            from scratch, I can help. Reach out below to discuss your project or request a free, no-obligation site 
            health check. Let's find out how we can optimize your digital presence.
          </p>
        </header>
        
        <address className="contact-links" aria-label="Contact Links">
          <a href="mailto:lrcozier@gmail.com" className="contact-link-card">
            <FaEnvelope aria-hidden="true" />
            <span>Email</span>
          </a>
          <a href="https://www.linkedin.com/in/luke-rudderham-cozier-30205343/" target="_blank" rel="noopener noreferrer" className="contact-link-card">
            <FaLinkedin aria-hidden="true" />
            <span>LinkedIn</span>
          </a>
          <a href="https://github.com/lrcozier" target="_blank" rel="noopener noreferrer" className="contact-link-card">
            <FaGithub aria-hidden="true" />
            <span>GitHub</span>
          </a>
        </address>
        
        <div className="contact-form-wrapper">
          <h2 className="form-title">Or Send Me a Message Directly</h2>
          <ContactForm />
        </div>
      </div>
    </section>
  );
};

export default Contact;
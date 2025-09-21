import React from "react";
import "./pages.css";
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import ContactForm from "../components/ContactForm/contactform";

const Contact = () => {
  return (
    <section id="contact" className="contact-section page-section">
      <div className="container">
        <h1 className="section-heading">Let's Work Together</h1>
        <p className="section-subheading">
          I'm always interested in new opportunities and collaborations. Feel free
          to reach out through your preferred channel.
        </p>
        <div className="contact-links">
          <a href="mailto:lauren@example.com" className="contact-link-card">
            <FaEnvelope />
            <span>Email</span>
          </a>
          <a href="https://linkedin.com/in/laurencozier" target="_blank" rel="noopener noreferrer" className="contact-link-card">
            <FaLinkedin />
            <span>LinkedIn</span>
          </a>
          <a href="https://github.com/lrcozier" target="_blank" rel="noopener noreferrer" className="contact-link-card">
            <FaGithub />
            <span>GitHub</span>
          </a>
        </div>
        
        <div className="contact-form-wrapper">
          <h2 className="form-title">Or Send Me a Message Directly</h2>
          <ContactForm />
        </div>
      </div>
    </section>
  );
};

export default Contact;
// pages/About.jsx
import React from "react";
import "./pages.css";
import { FaCode, FaServer, FaMobileAlt } from 'react-icons/fa';

const About = () => {
  return (
    <section id="about" className="about-section page-section">
      <div className="container">
        <h1 className="section-heading">About Me</h1>
        <p className="section-subheading">
          I'm a passionate full-stack developer with expertise in modern web
          technologies. I love creating seamless user experiences and robust
          backend solutions.
        </p>
        <div className="services-grid">
          <div className="service-card">
            <FaCode className="service-icon" />
            <h3>Frontend Development</h3>
            <p>React, Vue.js, Next.js, TypeScript, and CSS to build responsive interfaces.</p>
          </div>
          <div className="service-card">
            <FaServer className="service-icon" />
            <h3>Backend Development</h3>
            <p>Node.js, PHP, and database design to create scalable server-side solutions.</p>
          </div>
          <div className="service-card">
            <FaMobileAlt className="service-icon" />
            <h3>Mobile Development</h3>
            <p>React Native and progressive web apps for cross-platform mobile experiences.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
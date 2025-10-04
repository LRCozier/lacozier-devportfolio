import React from "react";
import "./pages.css";
import { FaCode, FaServer, FaMobileAlt } from 'react-icons/fa';

const About = () => {
  return (
    <section id="about" className="about-section page-section">
      <div className="container">
        <h1 className="section-heading">About Me</h1>
        <p className="section-subheading">
        As a detail-oriented Front-End Software Engineer, my passion lies in crafting seamless and 
        engaging user experiences.
        </p>
        <div className="services-grid">
          <div className="service-card">
            <FaCode className="service-icon" />
            <h3>Frontend Development</h3>
            <p>I specialize in turning complex problems into beautiful, responsive interfaces using
               modern JavaScript frameworks like React, Vue.js, and Next.js. I thrive on bringing 
               thoughtful design to life with pixel-perfect, accessible, and highly maintainable code.</p>
          </div>
          <div className="service-card">
            <FaServer className="service-icon" />
            <h3>Backend Development</h3>
            <p>While my focus is on the front-end, my skills extend to the server-side. I am proficient in 
              creating scalable APIs and solutions using Node.js and PHP, with practical experience in database 
              design. This knowledge is complemented by hands-on experience deploying and managing applications 
              on AWS, allowing me to build comprehensive, full-circle solutions that are both user-friendly and 
              robust.</p>
          </div>
          <div className="service-card">
            <FaMobileAlt className="service-icon" />
            <h3>Mobile Development</h3>
            <p>To complete my skill set, I build cross-platform mobile experiences using React Native. 
              This allows me to extend the reach of web applications to a wider audience by creating performant, 
              native-like experiences from a single codebase, ensuring a consistent and high-quality user journey 
              across all devices.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
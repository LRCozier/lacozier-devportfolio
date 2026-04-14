import React from "react";
import "./pages.css";
import { FaCode, FaServer, FaMobileAlt } from 'react-icons/fa';

const About: React.FC = () => {
  return (
    <section id="about" className="about-section page-section">
      <div className="container">
        <header>
          <h1 className="section-heading">About Me: Engineering Better Business Outcomes</h1>
          <p className="section-subheading">
          I am a Software Engineer who believes your digital presence should be your most reliable asset. 
          I don't just write code; I diagnose problems, optimise performance, and engineer solutions that 
          drive business growth. From smooth user interfaces to rock-solid servers, I bring a detail-oriented, 
          full-stack perspective to every project, ensuring your technology works as hard as you do.
          </p>
        </header>
        
        <div className="services-grid">
          <article className="service-card">
            <FaCode className="service-icon" aria-hidden="true" />
            <h3>The Interface: Front-End Development</h3>
            <p>First impressions dictate whether a customer stays or leaves. I specialise in turning complex, 
              frustrating bottlenecks into beautiful, intuitive user experiences. Using modern JavaScript frameworks 
              like React, Vue.js, and Next.js, I build fast, responsive, and highly accessible front-ends. My goal 
              is simple: keep your users engaged, keep your bounce rates low, and deliver pixel-perfect performance 
              across every screen size.</p>
          </article>
          
          <article className="service-card">
            <FaServer className="service-icon" aria-hidden="true" />
            <h3>The Engine: Back-End & Cloud Solutions</h3>
            <p>A beautiful website is a liability if the engine behind it is failing. While my passion lies in the 
              user experience, my technical expertise runs deep into the server-side architecture. I engineer secure, 
              scalable APIs and manage database design using Node.js and PHP. Combined with hands-on experience 
              deploying and managing infrastructure, I ensure your platform isn't just user-friendly, 
              but structurally robust and ready to scale.</p>
          </article>
          
          <article className="service-card">
            <FaMobileAlt className="service-icon" aria-hidden="true" />
            <h3>The Ecosystem: Mobile Development</h3>
            <p>Your customers are on the move, and your business needs to be right there with them. To complete the 
              digital loop, I build high-performance, cross-platform mobile applications using React Native. This 
              approach allows us to translate your web platform into a premium iOS and Android experience efficiently 
              from a single codebase—maximizing your market reach without doubling your development timeline.</p>
          </article>
        </div>
      </div>
    </section>
  );
};

export default About;
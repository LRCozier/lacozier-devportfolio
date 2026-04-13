import React from "react";
import "./pages.css";
import profileImage from "../assets/2025profilepic.jpeg";
import { Link } from "react-router-dom";

const Homepage: React.FC = () => {
  return (
    <main className="homepage">
      <section id="home" className="hero-section container">
        <div className="hero-content">
          <h1 className="hero-heading">
            Is Your Website Underperforming? Meet the Web Doctor.
          </h1>
          <h2 className="hero-subheading">
            High-Performance Digital Solutions from Richmond Upon Thames to the rest of the UK.
          </h2>
          <p className="hero-description">
            Hello, I’m <strong>Luke</strong>. I’m a Software Engineer specializing in resuscitating sluggish websites and building robust digital experiences from the ground up.
          </p>
          <p className="hero-description">
            Whether your current site has "broken code" that needs surgery or you're looking to launch a high-speed platform that converts visitors into customers, I provide the technical diagnosis and treatment your business needs to thrive online.
          </p>
          <div className="hero-buttons">
            <Link to="/projects" className="btn btn-primary">View My Work</Link>
            <Link to="/contact" className="btn btn-secondary">Book a Free Site Audit</Link>
          </div>
        </div>
        <div className="hero-image-wrapper">
          <img src={profileImage} alt="A portrait of Luke Cozier" className="hero-image" fetchPriority="high" />
        </div>
      </section>

      <section id="services" className="services-section container">
        <header className="section-header-centered">
            <h3 className="section-title">What I Do</h3>
        </header>
        <div className="services-grid">
          <article className="service-card">
            <h4>🩺 Code Surgery & Optimization</h4>
            <p>I dive into existing sites to fix bugs, patch security holes, and boost loading speeds. Because a slow site is a dying site.</p>
          </article>
          <article className="service-card">
            <h4>💻 Full-Stack Development</h4>
            <p>I build clean, scalable, and intuitive digital products tailored to your business goals from the ground up.</p>
          </article>
          <article className="service-card">
            <h4>🌍 Remote-First Excellence</h4>
            <p>Proudly supporting local businesses in Richmond and Kingston, while delivering world-class engineering to clients across the UK.</p>
          </article>
        </div>
      </section>
    </main>
  );
};

export default Homepage;
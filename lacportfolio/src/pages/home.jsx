import React from "react";
import "./pages.css";
import profileImage from "../assets/2025profilepic.jpeg"
import { Link } from "react-router-dom";

const Homepage = () => {
  return (
    <section id="home" className="hero-section container">
      <div className="hero-content">
        <h1 className="hero-heading">Hello, I'm Luke</h1>
        <p className="hero-subheading">
        Front-End Software Engineer, crafting intuitive and beautiful digital experiences, 
        backed by clean code and a passion for the entire technology stack.
        </p>
        <div className="hero-buttons">
          <Link to="/projects" className="btn btn-primary">View My Work</Link>
          <Link to="/contact" className="btn btn-secondary">Get In Touch</Link>
        </div>
      </div>
      <div className="hero-image-wrapper">
        <img src={profileImage} alt="A portrait of Luke Cozier" className="hero-image" />
      </div>
    </section>
  );
};

export default Homepage;
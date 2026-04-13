import React from "react";
import "./pages.css";
import ProjectList from "../components/Project Card/projectslist";

const Projects = () => {
  return (
    <section id="work" className="work-section page-section container">
      <h1 className="section-heading">My Work: Engineered for Excellence</h1>
      <p className="section-subheading">
        Explore a selection of recent builds, code rescues, and digital transformations. 
        Each project highlights my commitment to crafting robust, intuitive web applications 
        that look beautiful and perform flawlessly under pressure.
      </p>
      <ProjectList />
    </section>
  );
};

export default Projects;
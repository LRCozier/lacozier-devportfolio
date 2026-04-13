import React from "react";
import "./pages.css";
import ProjectList from "../components/Project Card/projectslist";

const Projects: React.FC = () => {
  return (
    <section id="work" className="work-section page-section">
      <div className="container">
        <header>
          <h1 className="section-heading">My Work: Engineered for Excellence</h1>
          <p className="section-subheading">
            Explore a selection of recent builds, code rescues, and digital transformations. 
            Each project highlights my commitment to crafting robust, intuitive web applications 
            that look beautiful and perform flawlessly under pressure.
          </p>
        </header>
        <ProjectList />
      </div>
    </section>
  );
};

export default Projects;
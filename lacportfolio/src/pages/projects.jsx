import React from "react";
import "./pages.css";
import ProjectList from "../components/Project Card/projectslist";

const Projects = () => {
  return (
    <section id="work" className="work-section page-section container">
      <h1 className="section-heading">My Work</h1>
      <p className="section-subheading">
        A selection of projects that showcase my skills and passion for
        creating meaningful digital experiences. Data is fetched live from a GraphQL API.
      </p>
      <ProjectList />
    </section>
  );
};

export default Projects;
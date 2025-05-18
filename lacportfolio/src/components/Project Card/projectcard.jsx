import React from "react";
import './projectcard.css';

const ProjectCard = () => {

  //NOTES TO SELF: UPDATE PLACEHOLDER LINKS FOR DEMO AND GITHUB REPO

  return(
    <div className="project-card">
      <img src="" alt="Project Thumbnail" className="project-image" />

      <div className="project-content">
        <h3 className="project-title">Project Title</h3>
        <p className="project-description">
          Description goes here
        </p>

        <ul className="tech-stack">
          <li></li>
          <li></li>
          <li></li>
        </ul>

        <div className="project-links">
          <a href="GITHUB_REPO" target="_blank" rel="noopener noreferrer">Code</a>
          <a href="DEMO-URL" target="_blank" rel="noopener noreferrer">Live Demo</a>
        </div>
      </div>
    </div>
  )
}

export default ProjectCard;
import React from "react";
import './projectcard.css';

const ProjectCard = ({ title, description, githubUrl, livedemoUrl, techstack}) => {

  return(
    <div className="project-card">
      <div className="project-content">
        <h3 className="project-title">{title}</h3>
        <p className="project-description">
          {description}
        </p>

        <ul className="tech-stack">
          {techstack.split(',').map((tech, i) => (
            <li key={i}>{tech.trim()}</li>
          ))}
        </ul>

        <div className="project-links">
          <a href={githubUrl} target="_blank" rel="noopener noreferrer">Code</a>
          <a href={livedemoUrl} target="_blank" rel="noopener noreferrer">Live Demo</a>
        </div>
      </div>
    </div>
  )
}

export default ProjectCard;
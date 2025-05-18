import React from "react";
import './projectcard.css';

const ProjectCard = ({ title, description, githubUrl, liveUrl, techStack, thumbnail}) => {

  return(
    <div className="project-card">
      <img src={thumbnail.url} alt={title} className="project-image" />

      <div className="project-content">
        <h3 className="project-title">{title}</h3>
        <p className="project-description">
          {description}
        </p>

        <ul className="tech-stack">
          {techStack.split(',').map((tech, i) => (
            <li key={i}>{tech.trim()}</li>
          ))}
        </ul>

        <div className="project-links">
          <a href={githubUrl} target="_blank" rel="noopener noreferrer">Code</a>
          <a href={liveUrl} target="_blank" rel="noopener noreferrer">Live Demo</a>
        </div>
      </div>
    </div>
  )
}

export default ProjectCard;
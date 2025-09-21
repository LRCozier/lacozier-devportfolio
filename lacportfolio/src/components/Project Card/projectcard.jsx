import React from 'react';
import './projectcard.css';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const ProjectCard = ({ title, description, liveUrl, githubUrl, techstack }) => {
  return (
    <div className="project-card">
      <div className="project-image-container">
        <div className="project-placeholder">{title}</div>
      </div>
      <div className="project-card-content">
        <div className="project-card-header">
            <h3>{title}</h3>
            <div className="project-links">
                {githubUrl && (
                    <a href={githubUrl} target="_blank" rel="noopener noreferrer" aria-label="GitHub Repository">
                        <FaGithub />
                    </a>
                )}
                {liveUrl && (
                    <a href={liveUrl} target="_blank" rel="noopener noreferrer" aria-label="Live Demo">
                        <FaExternalLinkAlt />
                    </a>
                )}
            </div>
        </div>
        <p>{description}</p>
        <div className="project-techstack">
          {techstack?.map((tech, i) => (
            <span key={i} className="techstack">{tech}</span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
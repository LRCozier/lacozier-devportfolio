import React from 'react';
import './projectcard.css';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

interface ProjectCardProps {
  title: string;
  description: string;
  liveUrl?: string | null;
  githubUrl?: string | null;
  techstack: string[];
}

const ProjectCard: React.FC<ProjectCardProps> = ({ title, description, liveUrl, githubUrl, techstack }) => {
  return (
    <article className="project-card" aria-labelledby={`project-title-${title.replace(/\s+/g, '-')}`}>
      <div className="project-card-content">
        <header className="project-card-header">
            <h3 id={`project-title-${title.replace(/\s+/g, '-')}`}>{title}</h3>
            <div className="project-links">
                {githubUrl && (
                    <a href={githubUrl} target="_blank" rel="noopener noreferrer" aria-label={`View ${title} source code on GitHub`}>
                        <FaGithub aria-hidden="true" />
                    </a>
                )}
                {liveUrl && (
                    <a href={liveUrl} target="_blank" rel="noopener noreferrer" aria-label={`View live demo of ${title}`}>
                        <FaExternalLinkAlt aria-hidden="true" />
                    </a>
                )}
            </div>
        </header>
        <p className="project-description">{description}</p>
        <footer className="project-techstack" aria-label="Technologies used">
          {techstack.map((tech, i) => (
            <span key={i} className="techstack-badge">{tech}</span>
          ))}
        </footer>
      </div>
    </article>
  );
};

export default ProjectCard;
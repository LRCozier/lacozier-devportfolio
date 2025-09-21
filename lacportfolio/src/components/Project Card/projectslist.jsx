import React from 'react';
import { useQuery, gql } from '@apollo/client';
import ProjectCard from './projectcard';

const GET_PROJECTS = gql`
  query GetProjects {
    project {
      id
      title
      description
      techstack
      livedemoUrl
      githubUrl
    }
  }
`;

const ProjectList = () => {
  const { loading, error, data } = useQuery(GET_PROJECTS);

  if (loading) return <p className="loading-message">Loading projects...</p>;
  if (error) return <p className="error-message">Error: Could not load projects.</p>;

  return (
    <div className="projects-grid">
      {data.projects.map((project) => (
        <ProjectCard
          key={project.id}
          title={project.title}
          description={project.description}
          techstack={project.techstack}
          liveUrl={project.livedemoUrl}
          githubUrl={project.githubUrl}
        />
      ))}
    </div>
  );
};

export default ProjectList;
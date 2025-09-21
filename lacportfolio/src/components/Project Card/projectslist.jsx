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
  if (error) return <p className="error-message">Error: {error.message}</p>;
  if (!data || !data.project) return <p>Could not find any projects.</p>;

  return (
    <div className="projects-grid">
      {data.project.map((proj) => (
        <ProjectCard
          key={proj.id}
          title={proj.title}
          description={proj.description}
          techstack={(proj.techstack || '').split(',').map(tech => tech.trim())}
          liveUrl={proj.livedemoUrl}
          githubUrl={proj.githubUrl}
        />
      ))}
    </div>
  );
};

export default ProjectList;
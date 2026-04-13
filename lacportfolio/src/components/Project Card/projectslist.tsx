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

interface Project {
  id: string;
  title: string;
  description: string;
  techstack: string | null;
  livedemoUrl?: string;
  githubUrl?: string;
}

interface GetProjectsData {
  project: Project[];
}

const ProjectList: React.FC = () => {
  const { loading, error, data } = useQuery<GetProjectsData>(GET_PROJECTS);

  if (loading) return <p className="status-text" role="status">Loading projects...</p>;
  if (error) return <p className="status-text error" role="alert">Error loading projects: {error.message}</p>;
  if (!data || !data.project || data.project.length === 0) return <p className="status-text">Check back soon for new projects.</p>;

  return (
    <div className="projects-grid">
      {data.project.map((proj) => (
        <ProjectCard
          key={proj.id}
          title={proj.title}
          description={proj.description}
          techstack={(proj.techstack || '').split(',').map(tech => tech.trim()).filter(Boolean)}
          liveUrl={proj.livedemoUrl}
          githubUrl={proj.githubUrl}
        />
      ))}
    </div>
  );
};

export default ProjectList;
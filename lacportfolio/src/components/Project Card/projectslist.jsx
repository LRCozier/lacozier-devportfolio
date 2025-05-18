import { useEffect, useState } from "react";
import { GraphQLClient, gql } from "graphql-request";
import ProjectCard from './projectcard';

const endpoint = 'https://api-eu-west-2.hygraph.com/v2/your-project-id/master';
const graphQLClient = new GraphQLClient(endpoint);

const query = gql`
  {
    projects {
      title
      description
      githubUrl
      liveUrl
      techStack
      thumbnail {
        url
      }
    }
  }
`;

const ProjectList = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const fetchProjects = async () => {
      const data = await graphQLClient.request(query);
      setProjects(data.projects);
    };
    fetchProjects();
  }, []);

  return (
    <div className="project-list">
      {projects.map((proj, index) => (
        <ProjectCard key={index} {...proj} />
      ))}
    </div>
  );
};

export default ProjectList;
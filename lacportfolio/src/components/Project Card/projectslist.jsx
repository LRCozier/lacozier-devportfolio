import { useEffect, useState } from "react";
import { GraphQLClient, gql } from "graphql-request";
import ProjectCard from './projectcard';

const endpoint = 'https://eu-west-2.cdn.hygraph.com/content/cmao5enez00et07wfwhggtd0z/master';
const graphQLClient = new GraphQLClient(endpoint);

const query = gql`
  {
    project {
      title
      description
      githubUrl
      livedemoUrl
      techstack
    }
  }
`;

const ProjectList = () => {
  const [project, setProject] = useState([]);

  useEffect(() => {
    const fetchProjects = async () => {
      const data = await graphQLClient.request(query);
      setProject(data.project);
    };
    fetchProjects();
  }, []);

  return (
    <div className="project-list">
      {project.map((proj, index) => (
        <ProjectCard key={index} {...proj} />
      ))}
    </div>
  );
};

export default ProjectList;
import React from "react";
import './pages.css'
import Layout from "../components/Layouts/layout";
import Section from "../components/Layouts/section";
import ProjectList from "../components/Project Card/projectslist";

const Projects = () => {

  return (
    <Layout>
      <Section title="Projects">
        <ProjectList/>
      </Section>
    </Layout>
  )

}

export default Projects;
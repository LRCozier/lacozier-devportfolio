import React from "react";
import Layout from "../components/Layouts/layout";
import Section from "../components/Layouts/section";
import profilepic from "../assets/2025profilepic.jpeg";
import "../pages/pages.css";

const Homepage = () => {
  return (
    <Layout>
      <Section
        title="Luke Rudderham-Cozier"
        subtitle="Junior Software Engineer"
      >
        <img
          src={profilepic}
          className="profile-picture"
          alt="profile picture"
        />
      </Section>
    </Layout>
  );
};

export default Homepage;
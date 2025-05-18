import React from "react";
import Layout from "../components/Layout";
import Section from "../components/Section";
import profilepic from "../assets/cartoonprofilepic.jpg";
import "../pages/pages.css";

const Homepage = () => {
  return (
    <Layout>
      <Section
        title="Luke Rudderham-Cozier"
        subtitle="Front End Engineer"
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
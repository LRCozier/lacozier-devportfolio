import React from "react";
import Layout from "../components/Layout";
import Section from "../components/Section";
import profilepic from "../assets/cartoonprofilepic.jpg";
import "../pages/pages.css";
import {
  FaHtml5,
  FaCss3Alt,
  FaGitAlt,
  FaNodeJs,
  FaReact,
  FaVuejs,
  FaPhp,
} from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { SiTypescript } from "react-icons/si";
import { RiNextjsFill } from "react-icons/ri";
import { TbFileTypeSql } from "react-icons/tb";

const About = () => {
  return (
    <Layout>
      <Section title="About Me">
        <img
          src={profilepic}
          className="profile-picture"
          alt="profile picture"
        />
        <p className="portfolio-text">
          My professional odyssey commenced amidst the constraints of a pandemic-induced lockdown,
          during which I enrolled in Harvard's esteemed "CS50: Introduction to Computer Science"
          course. This experience ignited my passion for coding, illuminating a clear path for my
          career aspirations. I firmly advocate for a user-centric approach in software development,
          emphasizing the imperative of seamless user experiences in every application interaction.
        </p>

        <h2 className="portfolio-subheading">Languages I speak</h2>
        <div className="tech-stack">
          <FaHtml5 className="tech-icon" alt="HTML5 Icon" />
          <FaCss3Alt className="tech-icon" alt="CSS3 Icon" />
          <IoLogoJavascript className="tech-icon" alt="JavaScript Icon" />
          <SiTypescript className="tech-icon" alt="TypeScript Icon" />
          <FaGitAlt className="tech-icon" alt="Git Icon" />
          <FaNodeJs className="tech-icon" alt="Node.js Icon" />
          <FaReact className="tech-icon" alt="React Icon" />
          <FaVuejs className="tech-icon" alt="Vue.js Icon" />
          <RiNextjsFill className="tech-icon" alt="Next.js Icon" />
          <FaPhp className="tech-icon" alt="PHP Icon" />
          <TbFileTypeSql className="tech-icon" alt="SQL Icon" />
        </div>
      </Section>
    </Layout>
  );
};

export default About;
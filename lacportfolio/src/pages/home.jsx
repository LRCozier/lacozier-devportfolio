import React from "react";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { SiTypescript } from "react-icons/si";
import { FaGitAlt } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { FaVuejs } from "react-icons/fa";
import { RiNextjsFill } from "react-icons/ri";
import { FaPhp } from "react-icons/fa";
import { TbFileTypeSql } from "react-icons/tb";
import '../pages/pages.css';

const Homepage = () => {
  return (
    <>
      <section className="portfolio-page" id="portfolio-page-home">
        <h1 className="portfolio-heading">Luke Rudderham-Cozier</h1>
        <h2 className="portfolio-subheading">Front End Engineer</h2>
        <h3 className="portfolio-subheading">Portfolio Under Construction</h3>
        <div className="tech-stack">
          <FaHtml5 className="tech-icon html" alt="HTML5 Icon" />
          <FaCss3Alt className="tech-icon css" alt="CSS3 Icon" />
          <IoLogoJavascript className="tech-icon javascript" alt="JavaScript Icon" />
          <SiTypescript className="tech-icon typescript" alt="TypeScript Icon" />
          <FaGitAlt className="tech-icon git" alt="Git Icon" />
          <FaNodeJs className="tech-icon nodejs" alt="Node.js Icon" />
          <FaReact className="tech-icon react" alt="React Icon" />
          <FaVuejs className="tech-icon vuejs" alt="Vue.js Icon" />
          <RiNextjsFill className="tech-icon nextjs" alt="Next.js Icon" />
          <FaPhp className="tech-icon php" alt="PHP Icon" />
          <TbFileTypeSql className="tech-icon database" alt="SQL Database Icon" />
        </div>
      </section>
    </>
  );
};

export default Homepage;
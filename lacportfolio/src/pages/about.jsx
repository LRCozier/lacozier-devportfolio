import React from "react";
import '../pages/pages.css';

const About = () => {

  return(
    <>
    <section className="portfolio-page" id="portfolio-page-about">
      <h1 className="portfolio-heading">About Me</h1>
      <img src={profilepic} className="portfolio-profile-picture" alt="profile picutre" />
      <p>My professional odyssey commenced amidst the constraints of a pandemic-induced lockdown, 
        during which I enrolled in Harvard's esteemed "CS50: Introduction to Computer Science Course." 
        This experience ignited my passion for coding, illuminating a clear path for my career aspirations. 
        I firmly advocate for a user-centric approach in software development, emphasizing the imperative 
        of seamless user experiences in every application interaction.</p>
      <h2 className="portfolio-subheading">Languages I speak</h2>
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
  )
}

export default About;
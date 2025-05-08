import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHtml5, faCss3Alt, faJs, faGitAlt, faNodeJs, faReact, faVuejs, faPhp } from '@fortawesome/free-brands-svg-icons';
import { faDatabase } from '@fortawesome/free-solid-svg-icons';

const Homepage = () => {

  return(
    <>
    <section className="portfolio-page" id="portfolio-page-home">
      <h1 className="portfolio-heading">Luke Rudderham-Cozier</h1>
      <h2 className="portfolio-subheading">Front End Engineer</h2>
      <h3 className="portfolio-subheading">Portfolio Under Construction</h3>
      <div className="tech-stack">
        <FontAwesomeIcon icon={faHtml5} />
        <FontAwesomeIcon icon={faCss3Alt} />
        <FontAwesomeIcon icon={faJs} />
        <FontAwesomeIcon icon={faGitAlt} />
        <FontAwesomeIcon icon={faNodeJs} />
        <FontAwesomeIcon icon={faReact} />
        <FontAwesomeIcon icon={faVuejs} />
        <FontAwesomeIcon icon={faPhp} />
        <FontAwesomeIcon icon={faDatabase} />
      </div>
    </section>
    </>
  )
}

export default Homepage;
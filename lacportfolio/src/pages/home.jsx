import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Homepage = () => {

  return(
    <>
    <section className="portfolio-page" id="portfolio-page-home">
      <h1 className="portfolio-heading">Luke Rudderham-Cozier</h1>
      <h2 className="portfolio-subheading">Front End Engineer</h2>
      <h3 className="portfolio-subheading">Portfolio Under Construction</h3>
      <div className="tech-stack">
        <FontAwesomeIcon icon="fa-brands fa-html5" />
        <FontAwesomeIcon icon="fa-brands fa-css" />
        <FontAwesomeIcon icon="fa-brands fa-js" />
        <FontAwesomeIcon icon="fa-brands fa-git" />
        <FontAwesomeIcon icon="fa-brands fa-node-js" />
        <FontAwesomeIcon icon="fa-brands fa-react" />
        <FontAwesomeIcon icon="fa-brands fa-vuejs" />
        <FontAwesomeIcon icon="fa-brands fa-php" />
        <FontAwesomeIcon icon="fa-solid fa-database" />
      </div>
    </section>
    </>
  )
}

export default Homepage;
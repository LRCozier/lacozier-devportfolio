import React from "react";
import '../pages/pages.css';
import profilepic from '../assets/cartoonprofilepic.jpg';

const Homepage = () => {
  return (
    <>
      <section className="portfolio-page" id="portfolio-page-home">
        <h1 className="portfolio-heading">Luke Rudderham-Cozier</h1>
        <img src={profilepic} className="portfolio-profile-picture" alt="profile picutre" />
        <h2 className="portfolio-subheading">Front End Engineer</h2>
      </section>
    </>
  );
};

export default Homepage;
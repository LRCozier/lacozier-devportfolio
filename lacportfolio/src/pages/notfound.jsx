import React from "react";
import { Link } from "react-router";
import './pages.css';

const NotFound = () => {

  return(
    <Layout>
      <Section title="404 - Page Not Found">
      <p className="portfolio-text">Sorry, Page not found.</p>
      <Link to="/" className="button">Go Home</Link>
      </Section>
    </Layout>
  )
}

export default NotFound;
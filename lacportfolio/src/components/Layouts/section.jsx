import React from "react";

const Section = ({title, subtitle, children}) => {

  return(
    <>
    <section className="portfolio-section">
      {title && <h1 className="portfolio-heading">{title}</h1>}
      {subtitle && <h2 className="portfolio-subheading">{subtitle}</h2>}
      {children}
    </section>
    </>
  )
}

export default Section;
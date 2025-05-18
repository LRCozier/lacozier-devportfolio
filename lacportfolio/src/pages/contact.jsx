import React from "react";
import '../pages/pages.css';
import ContactForm from "../components/ContactForm/contactform";
import Layout from "../components/Layouts/layout";
import Section from "../components/Layouts/section";

const Contact = () => {

  return(
    <Layout>
      <Section title="Send Me A Message">
      <p className="portfolio-text">Do you have a question or wish to collaborate? Send me a message
        and I'll reply as soon as I can.</p>
      <ContactForm/>
      </Section>
    </Layout>
  )
}

export default Contact;
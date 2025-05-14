import React from "react";
import '../pages/pages.css';
import ContactForm from "../components/ContactForm/contactform";

const Contact = () => {

  return(
    <>
    <section>
      <h1>Send Me A Message</h1>
      <p>Do you have a question or wish to collaborate? Send me a message
        and I'll reply as soon as I can.
      </p>
      <ContactForm/>
    </section>
    </>
  )
}

export default Contact;
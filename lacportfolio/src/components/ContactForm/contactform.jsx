import { useState } from "react";
import './Contactform.css'

const ContactForm = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // NOTE TO SELF TO ADD SUBMISSION LOGIC HERE WITH EMAIL.JS
  };

  return (
    <form className="query-form" onSubmit={handleSubmit}>
      <label htmlFor="name">Name:</label>
      <input type="text" id="name" name="name" placeholder="Your Name" required value={formData.name} onChange={handleChange} />
      <label htmlFor="email">Email:</label>
      <input type="email" id="email" name="email" placeholder="Your Email" required value={formData.email} onChange={handleChange} />
      <label htmlFor="message">Message:</label>
      <textarea id="message" name="message" rows="4" placeholder="Your Message" required value={formData.message} onChange={handleChange}></textarea>
      <button type="submit">Send Message</button>
    </form>
  );
};

export default ContactForm;
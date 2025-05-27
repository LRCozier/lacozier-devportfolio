import { useState, useRef } from "react";
import emailjs from '@emailjs/browser';
import './Contactform.css'

const ContactForm = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const form = useRef();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    
    emailjs
      .sendForm('service_iswqmqe', 'template_sgfyded', form.current, {
        publicKey: 'YNexT8O1rsZO9dyTq',
      })
      .then(
        () => {
          console.log('FORM SUBMITTED!');
          setFormData({ name: "", email: "", message: "" });
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };

  return (
    <form className="query-form" onSubmit={handleSubmit} ref={form}>
      <label htmlFor="name">Name:</label>
      <input type="text" id="name" name="name" placeholder="Your Name" required value={formData.name} onChange={handleChange} />
      <label htmlFor="email">Email:</label>
      <input type="email" id="email" name="email" placeholder="Your Email" required value={formData.email} onChange={handleChange} />
      <label htmlFor="message">Message:</label>
      <textarea id="message" name="message" rows="4" placeholder="Your Message" required value={formData.message} onChange={handleChange}></textarea>
      <button type="submit" value="Send">Send Message</button>
    </form>
  );
};

export default ContactForm;
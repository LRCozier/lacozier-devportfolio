import { useState, useRef } from "react";
import emailjs from '@emailjs/browser';
import './Contactform.css';

const ContactForm = () => {
  const form = useRef();
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState('');

  const validate = () => {
    let tempErrors = {};
    if (!formData.name) tempErrors.name = "Name is required.";
    if (!formData.email) {
      tempErrors.email = "Email is required.";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      tempErrors.email = "Email is not valid.";
    }
    if (!formData.message) tempErrors.message = "Message is required.";
    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      setStatus('sending');
      emailjs
        .sendForm(
          import.meta.env.VITE_EMAILJS_SERVICE_ID, 
          import.meta.env.VITE_EMAILJS_TEMPLATE_ID, 
          form.current, 
          import.meta.env.VITE_EMAILJS_PUBLIC_KEY
        )
        .then(
          () => {
            setStatus('success');
            setFormData({ name: "", email: "", message: "" });
          },
          (error) => {
            setStatus('error');
            console.log('FAILED...', error.text);
          },
        );
    }
  };

  return (
    <form className="query-form" onSubmit={handleSubmit} ref={form} noValidate>
      <div className="form-group">
        <label htmlFor="name">Name</label>
        <input type="text" id="name" name="name" placeholder="Your Name" required value={formData.name} onChange={handleChange} />
        {errors.name && <p className="error-text">{errors.name}</p>}
      </div>
      <div className="form-group">
        <label htmlFor="email">Email</label>
        <input type="email" id="email" name="email" placeholder="Your Email" required value={formData.email} onChange={handleChange} />
        {errors.email && <p className="error-text">{errors.email}</p>}
      </div>
      <div className="form-group">
        <label htmlFor="message">Message</label>
        <textarea id="message" name="message" rows="4" placeholder="Your Message" required value={formData.message} onChange={handleChange}></textarea>
        {errors.message && <p className="error-text">{errors.message}</p>}
      </div>
      <button type="submit" disabled={status === 'sending'}>
        {status === 'sending' ? 'Sending...' : 'Send Message'}
      </button>
      {status === 'success' && <p className="status-text success">Message sent successfully!</p>}
      {status === 'error' && <p className="status-text error">Failed to send message. Please try again.</p>}
    </form>
  );
};

export default ContactForm;
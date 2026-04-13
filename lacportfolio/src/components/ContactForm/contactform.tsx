import React, { useState, useRef, ChangeEvent } from "react";
import emailjs from '@emailjs/browser';
import './Contactform.css';

interface FormData {
  name: string;
  email: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  message?: string;
}

type Status = '' | 'sending' | 'success' | 'error';

const ContactForm: React.FC = () => {
  const form = useRef<HTMLFormElement>(null);
  const [formData, setFormData] = useState<FormData>({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState<Status>('');

  const validate = (): boolean => {
    let tempErrors: FormErrors = {};
    if (!formData.name) tempErrors.name = "Name is required.";
    if (!formData.email) {
      tempErrors.email = "Email is required.";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      tempErrors.email = "Please enter a valid email address.";
    }
    if (!formData.message) tempErrors.message = "Message is required.";
    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormErrors]) {
      setErrors(prev => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = (e: React.SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    if (validate() && form.current) {
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
            console.error('FAILED...', error.text);
          }
        );
    }
  };

  return (
    <form className="query-form" onSubmit={handleSubmit} ref={form} noValidate>
      <div className="form-group">
        <label htmlFor="name">Name</label>
        <input 
          type="text" 
          id="name" 
          name="name" 
          placeholder="John Doe" 
          required 
          value={formData.name} 
          onChange={handleChange} 
          aria-invalid={!!errors.name} 
        />
        {errors.name && <p className="error-text" role="alert">{errors.name}</p>}
      </div>
      <div className="form-group">
        <label htmlFor="email">Email</label>
        <input 
          type="email" 
          id="email" 
          name="email" 
          placeholder="john@example.com" 
          required 
          value={formData.email} 
          onChange={handleChange} 
          aria-invalid={!!errors.email} 
        />
        {errors.email && <p className="error-text" role="alert">{errors.email}</p>}
      </div>
      <div className="form-group">
        <label htmlFor="message">Message</label>
        <textarea 
          id="message" 
          name="message" 
          rows={5} 
          placeholder="How can I help you?" 
          required 
          value={formData.message} 
          onChange={handleChange} 
          aria-invalid={!!errors.message}
        ></textarea>
        {errors.message && <p className="error-text" role="alert">{errors.message}</p>}
      </div>
      <button className="btn btn-primary form-submit" type="submit" disabled={status === 'sending'}>
        {status === 'sending' ? 'Sending...' : 'Send Message'}
      </button>
      {status === 'success' && <p className="status-text success" role="status">Message sent successfully! I will be in touch soon.</p>}
      {status === 'error' && <p className="status-text error" role="status">Failed to send message. Please try again or use the email link above.</p>}
    </form>
  );
};

export default ContactForm;
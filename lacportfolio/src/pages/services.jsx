import React from "react";
import "./pages.css";
import { Link } from "react-router-dom";

const Services = () => {
  return (
    <main className="services-page">
      <section className="services-hero container">
        <h1 className="page-heading">Digital Services & Solutions</h1>
        <h2 className="page-subheading">Precision Engineering for High-Performance Businesses.</h2>
        <div className="hero-text-block">
          <p className="page-description">
            Technology should never be the bottleneck in your business. Whether you need to rescue a failing legacy system or build a high-speed platform from scratch, I provide focused, comprehensive web solutions designed for stability and growth.
          </p>
          <p className="page-description highlight">
            <strong>I specialize in two core areas:</strong>
          </p>
        </div>
      </section>

      <section className="core-services container">
        <div className="service-detail-card">
          <div className="service-header">
            <h3> 1. The "Web Doctor": Diagnostics & Code Surgery</h3>
            <span className="service-target">For websites that are slow, buggy, or underperforming.</span>
          </div>
          <div className="service-body">
            <p>
              Don't throw away your current website just because it's struggling. Often, a site simply needs the right technical triage. I audit your existing codebase to identify performance bottlenecks, patch security vulnerabilities, and untangle the "spaghetti code" left by previous developers.
            </p>
            <ul className="service-features">
              <li>
                <strong>Performance Audits:</strong> Pinpointing exactly what is slowing down your load times and driving customers away.
              </li>
              <li>
                <strong>Core Web Vitals Optimization:</strong> Tweaking your code to improve user experience and boost your Google search rankings.
              </li>
              <li>
                <strong>Bug Triage & Refactoring:</strong> Surgically removing errors, fixing broken checkouts, and cleaning up the backend without breaking the rest of your site.
              </li>
            </ul>
          </div>
        </div>

        <div className="service-detail-card">
          <div className="service-header">
            <h3> 2. Custom Full-Stack Development</h3>
            <span className="service-target">For businesses that need a robust, ground-up build.</span>
          </div>
          <div className="service-body">
            <p>
              Off-the-shelf templates only get you so far before they break under pressure. I build custom, responsive, and SEO-friendly web applications tailored entirely to your business logic. From a lightning-fast front-end to a secure, scalable back-end engine, I handle the entire technology stack.
            </p>
            <ul className="service-features">
              <li>
                <strong>Bespoke Web Apps:</strong> Built precisely to your operational needs using modern frameworks like React, Vue.js, and Next.js.
              </li>
              <li>
                <strong>Robust Architecture:</strong> Secure databases and custom APIs engineered with Node.js or PHP to ensure your system scales as your business grows.
              </li>
              <li>
                <strong>High-Conversion Experiences:</strong> Fast, accessible, and intuitive interfaces designed to turn visitors into loyal customers.
              </li>
            </ul>
          </div>
        </div>

      </section>

      <section className="services-cta container">
        <div className="cta-content">
          <h3>Not sure which path you need?</h3>
          <p>
            The best way to start is with a thorough check-up. Let's diagnose the best technical path forward for your business.
          </p>
          <Link to="/contact" className="btn btn-primary">Book a Free 15-Minute Site Audit</Link>
        </div>
      </section>
    </main>
  );
};

export default Services;
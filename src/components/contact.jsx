// src/components/Contact.jsx
import React from 'react';

export default function Contact() {
  return (
    <section className="about-section contact-page-container">
      <h2>Get In Touch</h2>
      <div className="about-content">
        <p>
          I am always open to discussing new data analysis opportunities, project collaborations, 
          or freelance business intelligence contracts. 
        </p>
        
        {/* Clean, Scannable Info Layout Blocks */}
        <div className="contact-details-grid">
          <div className="skill-item">
            <strong>Email:</strong> mmakotoappiah@gmail.com
          </div>
          <div className="skill-item">
            <strong>Location:</strong> Accra, Ghana
          </div>
        </div>

        <p style={{ marginTop: '1.5rem' }}>
          Feel free to shoot me an email directly or connect with me via social profiles!
        </p>

        <div className="contact-links" style={{ marginTop: '1.5rem' }}>
          <a href="mailto:mmakotoappiah@gmail.com" className="contact-link">Email Me</a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="contact-link">LinkedIn</a>
          <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="contact-link">GitHub</a>
        </div>
      </div>
    </section>
  );
}

// src/components/Home.jsx
import React from 'react';
import Hero from "./Hero";

export default function Home() {
  return (
    <div className="profile-grid-layout">
      <header className="portfolio-header">
        <h1>Hi, I'm Mark Martin Akoto Appiah</h1>
        <p className="subtitle">Data Analyst</p>
        <p>
          I transform raw data into actionable insights through rigorous analysis, 
          statistical modeling, and compelling visualizations. Passionate about 
          data-driven decision-making, I help organizations identify trends, 
          optimize processes, and solve complex business problems.
        </p>
        <div className="contact-links">
          <a href="mailto:mmakotoappiah@gmail.com" className="contact-link">Email</a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="contact-link">LinkedIn</a>
          <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="contact-link">GitHub</a>
        </div>
      </header>
      <Hero />
    </div>
  );
}

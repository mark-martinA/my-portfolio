import React from 'react';
import './App.css';
import Hero from "./components/Hero";

function App() {
  const currentYear = new Date().getFullYear();

  return (
    <div className="portfolio-container">
      
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
            <a 
              href="https://linkedin.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="contact-link"
            >
              LinkedIn
            </a>
            <a 
              href="https://github.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="contact-link"
            >
              GitHub
            </a>
          </div>
        </header>

        <Hero />

      </div>

      {/* New About Me Section */}
      <section className="about-section">
        <h2>About Me</h2>
        <div className="about-content">
          <p>
            I am a detail-oriented Data Analyst with a strong background in turning complex datasets 
            into clear, strategic business narratives. My expertise lies in cleaning messy data, 
            building automated dashboards, and applying statistical analysis to discover optimization opportunities.
          </p>
          <p>
            When I'm not writing SQL queries or building predictive models in Python, I focus on 
            staying up to date with modern business intelligence tools and data engineering best practices 
            to help teams make faster, evidence-based decisions.
          </p>
        </div>
      </section>

      <footer className="portfolio-footer">
        <p>&copy; {currentYear} Mark Martin Akoto Appiah. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;

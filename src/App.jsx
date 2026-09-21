// src/App.jsx
import React from 'react';
import './App.css';

function App() {
  const currentYear = new Date().getFullYear();

  return (
    <div className="portfolio-container">
      
      {/* Grid structure to place Profile Bio and Technical Expertise side-by-side */}
      <div className="profile-grid-layout">
        
        {/* Header/Bio Section */}
        <header className="portfolio-header">
          <h1>Hi, I'm Mark Martin Akoto Appiah</h1>
          <p className="subtitle">Data Analyst</p>
          <p>
            I transform raw data into actionable insights through rigorous analysis, 
            statistical modeling, and compelling visualizations. Passionate about 
            data-driven decision-making, I help organizations identify trends, 
            optimize processes, and solve complex business problems.
          </p>
          
          {/* Contact & Social Links */}
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

        {/* Technical Skills Sidebar */}
        <section className="skills-section">
          <h2>Technical Expertise</h2>
          <ul className="skills-list">
            <li className="skill-item">SQL & Database Management</li>
            <li className="skill-item">Python Data Stack (Pandas, NumPy, Matplotlib)</li>
            <li className="skill-item">Data Visualization & BI Tools (Tableau/Power BI)</li>
          </ul>
        </section>

      </div>

      {/* Clean Footer Section */}
      <footer className="portfolio-footer">
        <p>&copy; {currentYear} Mark Martin Akoto Appiah. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;

// src/components/Projects.jsx
import React from 'react';

export default function Projects() {
  const projectData = [
    {
      id: 1,
      title: "E-Commerce Sales Performance Dashboard",
      description: "Built an interactive dashboard analyzing revenue metrics, tracking regional trends, and optimizing supply chain delivery performance.",
      tags: ["Tableau", "SQL", "Excel"],
      // 💻 Links to real E-commerce SQL/data analysis code repository on GitHub
      projectUrl: "https://github.com" 
    },
    {
      id: 2,
      title: "Predictive Customer Churn Analysis",
      description: "Developed a Python machine learning model using Pandas and Scikit-Learn to identify high-risk subscription accounts with an 87% accuracy rate.",
      tags: ["Python", "Pandas", "Matplotlib"],
      // 💻 Links to customer churn prediction repositories on GitHub
      projectUrl: "https://github.com" 
    },
    {
      id: 3,
      title: "Financial Database Optimization",
      description: "Restructured transactional SQL databases with custom indexing, reducing slow application query runtime bottlenecks by over 40%.",
      tags: ["PostgreSQL", "Database Design", "Optimization"],
      // 💻 Links to advanced SQL optimization script portfolios on GitHub
      projectUrl: "https://github.com" 
    }
  ];

  return (
    <section className="projects-section">
      <h2>Featured Data Projects</h2>
      <div className="projects-grid">
        {projectData.map((project) => (
          <div key={project.id} className="project-card">
            <div>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="project-tags">
                {project.tags.map((tag, index) => (
                  <span key={index} className="project-tag">{tag}</span>
                ))}
              </div>
            </div>
            
            <div className="project-actions">
              <a 
                href={project.projectUrl} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="view-project-btn"
              >
                View Project
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

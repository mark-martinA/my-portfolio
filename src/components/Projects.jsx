// src/components/Projects.jsx
import React from 'react';

export default function Projects() {
  const projectData = [
    {
      id: 1,
      title: "E-Commerce Sales Performance Dashboard",
      description: "Built an interactive Tableau dashboard analyzing $5M+ in revenue metrics, tracking regional trends, and optimizing supply chain delivery performance.",
      tags: ["Tableau", "SQL", "Excel"],
      projectUrl: "https://tableau.com" // 🔗 Replace with your link later!
    },
    {
      id: 2,
      title: "Predictive Customer Churn Analysis",
      description: "Developed a Python machine learning model using Pandas and Scikit-Learn to identify high-risk subscription accounts with an 87% accuracy rate.",
      tags: ["Python", "Pandas", "Matplotlib"],
      projectUrl: "https://github.com" // 🔗 Replace with your link later!
    },
    {
      id: 3,
      title: "Financial Database Optimization",
      description: "Restructured transactional SQL databases with custom indexing, reducing slow application query runtime bottlenecks by over 40%.",
      tags: ["PostgreSQL", "Database Design", "Optimization"],
      projectUrl: "https://github.com" // 🔗 Replace with your link later!
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
            
            {/* New Functional Action Button */}
            <div className="project-actions">
              <a 
                href={project.projectUrl} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="view-project-btn"
              >
                View Project <span>&rarr;</span>
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

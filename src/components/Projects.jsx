// src/components/Projects.jsx
import React from 'react';

export default function Projects() {
  // Sample analyst projects (You can update the text/links later!)
  const projectData = [
    {
      id: 1,
      title: "E-Commerce Sales Performance Dashboard",
      description: "Built an interactive Tableau dashboard analyzing $5M+ in revenue metrics, tracking regional trends, and optimizing supply chain delivery performance.",
      tags: ["Tableau", "SQL", "Excel"]
    },
    {
      id: 2,
      title: "Predictive Customer Churn Analysis",
      description: "Developed a Python machine learning model using Pandas and Scikit-Learn to identify high-risk subscription accounts with an 87% accuracy rate.",
      tags: ["Python", "Pandas", "Matplotlib"]
    },
    {
      id: 3,
      title: "Financial Database Optimization",
      description: "Restructured transactional SQL databases with custom indexing, reducing slow application query runtime bottlenecks by over 40%.",
      tags: ["PostgreSQL", "Database Design", "Optimization"]
    }
  ];

  return (
    <section className="projects-section">
      <h2>Featured Data Projects</h2>
      <div className="projects-grid">
        {projectData.map((project) => (
          <div key={project.id} className="project-card">
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <div className="project-tags">
              {project.tags.map((tag, index) => (
                <span key={index} className="project-tag">{tag}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

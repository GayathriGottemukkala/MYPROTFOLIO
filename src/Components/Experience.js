import React from 'react';
import { FaBriefcase } from 'react-icons/fa';
import "./styles.css"; // Link your styles here

const experiences = [
  { year: '2024', description: 'Started working at Neuzen AI as a Full-Stack Developer.' },
  { year: '2023', description: 'Joined CodeGene Software Solutions as a Frontend Developer.' },
];

const Experience = () => {
  return (
    <section id="experience" className="experience-section">
      <h2 className="section-title">Experience</h2>
      <ul className="experience-list">
        {experiences.map((exp, index) => (
          <li key={index} className="experience-item">
            <div className="experience-icon">
              <FaBriefcase />
            </div>
            <div className="experience-content">
              <span className="year">{exp.year}</span>
              <p className="description">{exp.description}</p>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Experience;

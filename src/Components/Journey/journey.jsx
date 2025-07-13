// src/Components/CareerJourney/CareerJourney.jsx
import React from "react";
import "./journey.css";
import { FaGraduationCap } from "react-icons/fa";

const educationData = [
  {
    year: "2020 – 2023",
    title: "Bachelor of Technology in Engineering",
    subtitle: "Kakinada Institute of Technology and Science, JNTU-K",
    cgpa: "CGPA: 7.74",
  },
  {
    year: "2017 – 2020",
    title: "Diploma in Engineering",
    subtitle: "Nova Group of Colleges, Acharya N.G Ranga University",
    cgpa: "CGPA: 8.51",
  },
  {
    year: "2016 – 2017",
    title: "SSC",
    subtitle: "All Saints English Medium High School",
    cgpa: "CGPA: 8.7",
  },
];

const CareerJourney = () => {
  return (
   <section className="education-section" id="education">
      <h2 className="section-title">🎓 My Education</h2>
      <div className="education-cards">
        {educationData.map((item, index) => (
          <div className="education-card" key={index}>
            <div className="icon-wrap">
              <FaGraduationCap size={24} className="icon" />
            </div>
            <div className="edu-info">
              <h3>{item.title}</h3>
              <p className="institution">{item.subtitle}</p>
              <p className="year">{item.year}</p>
              <p className="cgpa">{item.cgpa}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CareerJourney;

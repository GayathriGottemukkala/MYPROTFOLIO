import React from 'react';
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNode, FaDatabase } from 'react-icons/fa'; // Importing relevant icons
import { SiMysql, SiExpress } from "react-icons/si";
import "./styles.css"

const Skills = () => {
  const skills = [
    { name: 'HTML', icon: <FaHtml5 size={40} color="#E34F26" /> },
    { name: 'CSS', icon: <FaCss3Alt size={40} color="#1572B6" /> },
    { name: 'JavaScript', icon: <FaJs size={40} color="#F7DF1E" /> },
    { name: 'React', icon: <FaReact size={40} color="#61dafb" /> },
    { name: 'Node.js', icon: <FaNode size={40} color="#68a063" /> },
    { name: 'Express', icon:<SiExpress size={40} color="#68a063" /> }, // Add Express custom icon
    { name: 'MongoDB', icon: <FaDatabase size={40} color="#4DB33D" /> },
    { name: 'MySQL', icon: <SiMysql  size={40} color="#4479A1" /> }
  ];

  return (
    <div className="skills-container">
      {skills.map((skill, index) => (
        <div key={index} className="skill-card">
          <div className="icon-container">
            {skill.icon}
          </div>
          <h3>{skill.name}</h3>
        </div>
      ))}
    </div>
  );
};

export default Skills;

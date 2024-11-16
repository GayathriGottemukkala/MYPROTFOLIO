import React from 'react';
import { FaDownload } from 'react-icons/fa';
import './styles.css';
import Resume from "../assests/gayathriResume2.pdf";

const AboutMe = () => {
  return (
    <section id="about-me" className="about-me-section">
      <h2 className="section-title">About Me</h2>
      <div className="about-me-content">
        <img
          src={require("../assests/myimg.jpg")}
          alt="Profile"
          className="profile-pic"
        />
        <div className="about-me-text">
          <p>
            Hi, I'm <strong>Gayathri Gottemukkala</strong>, a passionate full-stack developer specializing in <strong>React.js, Node.js, MongoDB and Python</strong>. I focus on building efficient, user-friendly applications that deliver great performance.
          </p>
          <div className="resume-button">
            <a
              href={Resume} download
              className="download-btn"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaDownload /> Download Resume
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;

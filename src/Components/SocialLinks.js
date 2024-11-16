import React from 'react';
import { FaGithub, FaLinkedin, FaTwitter, FaInstagram, FaWhatsapp } from 'react-icons/fa';
import './styles.css';

const SocialLinks = () => {
  return (
    <section className="social-links">
      <h2 className="section-title">Connect with Me</h2>
      <div className="social-icons">
        <a 
          href="https://github.com/GayathriGottemukkala" 
          target="_blank" 
          rel="noreferrer" 
          className="social-icon" 
          aria-label="GitHub"
        >
          <FaGithub size={40} />
        </a>
        <a 
          href="https://www.linkedin.com/in/gayathri-gottemukkala-385658252" 
          target="_blank" 
          rel="noreferrer" 
          className="social-icon" 
          aria-label="LinkedIn"
        >
          <FaLinkedin size={40} />
        </a>
        <a 
          href="https://x.com/GGottemukk42260" 
          target="_blank" 
          rel="noreferrer" 
          className="social-icon" 
          aria-label="Twitter"
        >
          <FaTwitter size={40} />
        </a>
        <a 
          href="https://www.instagram.com/g.gayathri2/" 
          target="_blank" 
          rel="noreferrer" 
          className="social-icon" 
          aria-label="Instagram"
        >
          <FaInstagram size={40} />
        </a>
        <a 
          href="https://wa.me/+918309601886?text=Hello, I would like to get more information about your services."
          target="_blank" 
          rel="noreferrer" 
          className="social-icon" 
          aria-label="WhatsApp"
        >
          <FaWhatsapp size={40} />
        </a>
      </div>
    </section>
  );
};

export default SocialLinks;

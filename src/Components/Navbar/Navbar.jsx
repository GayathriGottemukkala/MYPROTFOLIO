import React, { useState, useContext } from "react";
import Toggle from "../Toggle/Toggle";
import "./Navbar.css";
import { Link } from "react-scroll";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import { themeContext } from "../../Context";
import Resume from '../Services/gayathriresume.pdf';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`n-wrapper ${darkMode ? 'dark' : 'light'}`} id="Navbar">
      <div className="n-left">
        <div className="n-name">Gayathri</div>
        <Toggle />
      </div>
      <div className="n-right">
        <div
          className="hamburger"
          onClick={toggleMenu}
          style={{ color: darkMode ? 'white' : 'black' }}
        >
          <FontAwesomeIcon icon={isOpen ? faTimes : faBars} size="2x" />
        </div>
        <div className={`n-list ${isOpen ? "open" : ""} ${darkMode ? 'dark' : 'light'}`}>
          <ul style={{ listStyleType: "none" }}>
            <li>
              <Link activeClass="active" to="Navbar" spy={true} smooth={true} onClick={toggleMenu}>
                Home
              </Link>
            </li>
           
            <li>
              <Link to="experience" spy={true} smooth={true} onClick={toggleMenu}>
                Experience
              </Link>
            </li>
            <li>
              <Link to="portfolio" spy={true} smooth={true} onClick={toggleMenu}>
                Projects
              </Link>
            </li>
              <li>
              <Link to="certifications" spy={true} smooth={true} onClick={toggleMenu}>
                Certifications
              </Link>
            </li>
              <li>
              <Link to="education" spy={true} smooth={true} onClick={toggleMenu}>
                Education
              </Link>
            </li>
            {/* <li>
              <Link to="testimonial" spy={true} smooth={true} onClick={toggleMenu}>
                Testimonial
              </Link>
            </li> */}
          </ul>
        </div>
       <a href={Resume} download>
                          <button className="button n-button">Download CV</button>
                      </a>
        <Link to="contact" spy={true} smooth={true}>
          <button className="button n-button">Contact</button>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;

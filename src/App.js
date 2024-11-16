import React, { useState } from 'react';
import './App.css';
import Skills from './Components/Skills';
import Contact from './Components/Contact';
import ProjectCard from './Components/ProjectCard';
import Slider from 'react-slick';

import gamming from "./assests/gamming.png";
import Weather from "./assests/weather.png";
import Elearning from "./assests/elearning.png";
import Bookstore from "./assests/bookfind.png";
import jiomatrimony from "./assests/jiomatrimony.png";
import unstop from "./assests/blogs.png";
import ipl from "./assests/ipl.png";
import AboutMe from './Components/About';
import Experience from './Components/Experience';
import Testimonials from './Components/Testimonials';

import SocialLinks from './Components/SocialLinks';

const App = () => {
  const [theme, setTheme] = useState('light');

  const projects = [
    { title: "Project6", text: 'Click to see my project', img: unstop, link: "https://unstop-blog-app.vercel.app/" },
    { title: "Project5", text: 'Click to see my project', img: jiomatrimony, link: "https://jiomatrimony.com/dashboard" },
    { title: "Project4", text: 'Click to see my project', img: Bookstore, link: "https://book-finder-beta-seven.vercel.app/" },
    { title: "Project1", text: 'Click to see my project', img: gamming, link: "https://gammingcart.vercel.app/" },
    { title: "Project2", text: 'Click to see my project', img: Weather, link: "https://firefly-s1gh-gayathris-projects-d17c1cfd.vercel.app/" },
    { title: "Project3", text: 'Click to see my project', img: Elearning, link: "https://gammingcart.vercel.app/gaming" },
    { title: "Project7", text: 'Click to see my project', img: ipl, link: "https://ipldashboard-pink.vercel.app/" },
  ];

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    nextArrow: <div className="next-btn">&#62;</div>,
    prevArrow: <div className="prev-btn">&#60;</div>,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className={`App ${theme}`}>
      {/* Navbar Section */}
      <nav className="navbar">
        <div className="logo">My Portfolio</div>
        <ul className="nav-items">
          <li><a href="#projects">Projects</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
        <button onClick={toggleTheme} className="theme-toggle">
          Toggle {theme === 'light' ? 'Dark' : 'Light'} Mode
        </button>
      </nav>
      <AboutMe/>
      {/* Projects Section */}
      <section id="projects" className="projects">
        <h2>Projects</h2>
        <Slider {...settings}>
          {projects.map((project, index) => (
            <div key={index}>
              <ProjectCard
                title={project.title}
                text={project.text}
                img={project.img}
                link={project.link}
              />
            </div>
          ))}
        </Slider>
      </section>


      <Experience />
      <Testimonials />

      <SocialLinks />
      {/* Skills Section */}
      <section id="skills" className="skills">
        <h2>Skills</h2>
        <Skills />
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact">
        <h2>Contact Me</h2>
        <Contact />
      </section>
    </div>
  );
};

export default App;

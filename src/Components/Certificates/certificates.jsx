// import React, { useContext } from "react";
// import { themeContext } from "../../Context";
// import "./certificates.css";

// const Certifications = () => {
//   const theme = useContext(themeContext);
//   const darkMode = theme.state.darkMode;

//   const certifications = [
//     {
//       title: "IBM Data Science Badge",
//       organization: "IBM",
//       year: "2023",
//     },
//     {
//       title: "IBM Data Science Certificate",
//       organization: "IBM",
//       year: "2023",
//     },
//     {
//       title: "HTML, CSS, JavaScript Certification",
//       organization: "Online Course Platform",
//       year: "2024",
//     },
//     {
//       title: "React.js Certification",
//       organization: "Online Course Platform",
//       year: "2024",
//     },
//     {
//       title: "Node.js & Express.js Certification",
//       organization: "Online Course Platform",
//       year: "2024",
//     },
//     {
//       title: "SQL & MongoDB Certification",
//       organization: "Online Course Platform",
//       year: "2024",
//     },
//   ];

//   return (
//     <div className="certifications" id="certifications" data-aos="fade-up">
//       <h2 style={{ color: darkMode ? "white" : "#333" }}>Certifications</h2>
//       <div className="certification-list">
//         {certifications.map((cert, index) => (
//           <div className="cert-card" key={index}>
//             <h3>{cert.title}</h3>
//             <p>{cert.organization}</p>
//             <span>{cert.year}</span>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Certifications;


import React, { useContext } from "react";
import { themeContext } from "../../Context";
import "./certificates.css";

import badge from "../../assests/images/badge.png";
import ibmCert from "../../assests/images/ibm.png";
import htmlcssjs from "../../assests/images/javascript.jpg";
import react from "../../assests/images/react.jpg";
import node from "../../assests/images/node.jpg";
import database from "../../assests/images/db.jpg";

import flexbox from "../../assests/images/flexbox.jpg";
import os from "../../assests/images/os.jpg";
import python from "../../assests/images/python.jpg";
import responsive from "../../assests/images/responsive.jpg";
import staticimg from "../../assests/images/static.jpg";


const Certifications = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  const certifications = [
    {
      title: "IBM Data Science Badge",
      image: badge,
    },
    {
      title: "IBM Data Science Certificate",
      image: ibmCert,
    },
    {
      title: "HTML, CSS, JavaScript Certification",
      image: htmlcssjs,
    },
    {
      title: "React.js Certification",
      image: react,
    },
    {
      title: "Node.js & Express.js Certification",
      image: node,
    },
    {
      title: "SQL & MongoDB Certification",
      image: database,
    },

     {
      title: "Flexbox",
      image: flexbox,
    },
    {
      title: "Operating system Certificate",
      image: os,
    },
    {
      title: "Python Certification",
      image: python,
    },
    {
      title: "Responsive website Certification",
      image: responsive,
    },
    {
      title: "Static Website Certification",
      image: staticimg,
    },
  ];

  return (
    <div className="certifications" id="certifications" data-aos="fade-up">
      <h2 style={{ color: darkMode ? "white" : "#333" }}>Certifications</h2>
      <div className="certification-gallery">
        {certifications.map((cert, index) => (
          <div className="cert-item" key={index}>
            <img src={cert.image} alt={cert.title} />
            <p>{cert.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Certifications;
